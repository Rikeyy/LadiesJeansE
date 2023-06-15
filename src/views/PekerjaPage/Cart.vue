<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
      <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
        <h1 class="text-xl font-semibold">Troli</h1>
        <h2 class="text-md text-gray-500">Halaman Utama - Rekod Jualan - <span class="text-sky-500">Troli</span></h2>
  <div class="bg-white shadow-sm  w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%] h-[90%]">
    <div class="flex justify-between w-[90%] mx-auto">
      <div>
        Jumlah barang di dalam troli : <span class="text-blue-600 font-bold text-xl">{{ totalCartQuantity }}</span>
      </div>
      <div>
        <p @click="clearCart" class="text-red-500 text-right cursor-pointer">Kosongkan Troli <i class="fa-solid fa-eraser text-xl"></i></p>
      </div>
    </div>
    <div class="h-[500px] shadow-xl text-[13px] w-[95%] m-auto my-[2%] ">
      <table class=" m-auto">
        <thead  class=" uppercase bg-sky-400 text-white text-center w-[500px]">
          <tr>
            <th scope="col" class="px-6 py-3  w-[5%]">No.</th>
            <th scope="col" class="px-6 py-3 w-[15%]">ID Produk</th>
            <th scope="col" class="px-6 py-3 w-[15%]">Nama Produk</th>
            <th scope="col" class="px-6 py-3 w-[15%]">Harga Produk</th>
            <th scope="col" class="px-6 py-3 w-[15%] ">Quantity</th>
            <th scope="col" class="px-6 py-3 w-[15%]">Total Price</th>
            <th scope="col" class="px-6 py-3 w-[15%]">Action</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody v-if="cartItems.length > 0">
          <tr v-for="(item, index) in cartItems" :key="item.productData?.Produk_ID"  class="bg-white border-b border-gray-500 text-center">
            <td class="px-6 py-4 w-[5%]">{{ index + 1 }}</td>
            <td class="px-6 py-4 w-[15%]">{{ item.productData?.Produk_ID }}</td>
            <td class="px-6 py-4 w-[15%]">{{ item.productData?.Nama_Produk }}</td>
            <td class="px-6 py-4 w-[15%]">{{ item.productData?.Harga_Produk }}</td>
            <td class="px-6 py-4 w-[15%]">{{ item.kuantiti }}</td>
            <td class="px-6 py-4 w-[15%]">{{ item.totalPrice }}</td>
            <td class="px-6 py-4 w-[15%]">
              <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="removeCartItem(index)"></i>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr >
            <td colspan="7" class="text-center text-gray-600"> Tiada produk di dalam troli.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-center">
      <button @click="openSummaryDialog" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-md hover:scale-105 duration-200  ml-[2%] mt-[2%]" :class="{ 'disabled': cartItems.length === 0 }">Teruskan Ke Pembayaran</button>
    </div>

    <RouterLink to="/pekerja/jualan" class="text-gray-500 cursor-pointer pl-[3%]"><span><i class="fa-solid fa-plus pr-2"></i></span> Tambah lagi produk di dalam troli</RouterLink>

    <div v-if="showSummaryDialog" class="overlay"></div>

    <!-- Summary dialog -->
    <dialog v-if="showSummaryDialog" open @close="closeSummaryDialog" class="dialog-container text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-[5%] py-[5%]">
  <h2 class="text-2xl font-semibold pb-[5%]">Rekod Jualan</h2>
  <h2 class="text-lg  pb-[5%]">Senarai produk yang dibeli:</h2>
  <table class="w-full ">
    <thead class="border-b-blue-500 border-2 border-t-white border-l-white border-r-white">
      <tr >
        <th class="px-6">Bil.</th>
        <th class="px-6">Nama Produk</th>
        <th class="px-6">Kuantiti</th>
        <th class="px-6">Harga</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in cartItems" :key="item.productData?.Produk_ID">
        <td>{{ index + 1 }}</td>
        <td>{{ item.productData?.Nama_Produk }}</td>
        <td>{{ item.kuantiti }}</td>
        <td>{{ item.totalPrice }}</td>
      </tr>
    </tbody>
  </table>
  <p class="py-[5%]">Jumlah Harga: RM {{ totalCart }}.00</p>
  <div class="flex flex-col items-center">
    <label for="moneyReceived" class="mr-2">Duit Diterima:</label>
    <input type="number" id="moneyReceived" v-model.number="moneyReceived" class="text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
  </div>
  
  <p class="pb-[10%] pt-[5%]">Wang Baki: <span class="text-lg">RM{{ calculateBalance }}.00</span></p>
  
  <button @click="navigateToPayment" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-md hover:scale-105 duration-200  ml-[2%] mt-[2%]">Selesai</button>
  <button @click="closeSummaryDialog" class="text-white bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-md hover:scale-105 duration-200  ml-[2%] mt-[2%]">Batal</button>
</dialog>

  </div>
  </div>
  </div>

  <ToastMessage ref="toast" class="z-50"/>

</template>

<script>
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';

export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      totalPrice: 0,
      showSummaryDialog: false,
      moneyReceived: 0, 
      isTableEmpty: false, 
    };
  },
  beforeUnmounted() {
  localStorage.removeItem('cartItems');
},
  mounted() {
  const storedProductData = JSON.parse(localStorage.getItem('productData'));
  const storedTotalPrice = localStorage.getItem('totalPrice');
  const storedQuantity = parseInt(localStorage.getItem('kuantiti'));
  const storedNamaProduk = localStorage.getItem('namaProduk');
  const storedHargaProduk = localStorage.getItem('hargaProduk');

  const storedCartItems = localStorage.getItem('cartItems');
  
  if (storedCartItems) {
    this.cartItems = JSON.parse(storedCartItems);
  }

  if (storedProductData && storedTotalPrice && !isNaN(storedQuantity)) {
    this.cartItems.push({
      productData: storedProductData,
      quantity: storedQuantity,
      totalPrice: storedTotalPrice,
      namaProduk: storedNamaProduk,
      hargaProduk: storedHargaProduk,
    });

    localStorage.removeItem('productData');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('quantity');
    localStorage.removeItem('namaProduk');
    localStorage.removeItem('hargaProduk');


    this.$watch('moneyReceived', () => {
      this.calculateBalance();
    });
  }
},
computed: {
  totalCartQuantity() {
    return this.cartItems.reduce((total, item) => total + item.kuantiti, 0);
  },
    totalCart() {
      this.isTableEmpty = this.cartItems.length === 0; 
      return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    calculateBalance() {
      return this.moneyReceived - this.totalCart;
  },
  totalCart() {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  },
  },
  methods: {
    removeCartItem(index) {
    this.cartItems.splice(index, 1);    
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    const message = "Berjaya Buang Produk Dari Troli";
    const status = "Berjaya";

    this.$refs.toast.toast(message, status, "success");
},
async navigateToPayment() {
  if (this.moneyReceived < this.totalCart) {
    const message = "Duit Diterima tidak mencukupi!";
    const status = "Gagal";

    this.$refs.toast.toast(message, status, "error");
    return; // Stop the execution of the method
  }
  
      try {
        const response = await axios.post("http://localhost:3001/record-sales", {
          cartItems: this.cartItems,
          totalCart: this.totalCart,
          moneyReceived: this.moneyReceived,

        });

        console.log("Sales recorded:", response.data);

        await this.updateProductQuantities();

        this.cartItems = [];
        this.totalPrice = 0;
        this.moneyReceived = 0;

        this.closeSummaryDialog();
        const message = "Berjaya Rekod Jualan Produk";
        const status = "Berjaya";

        this.$refs.toast.toast(message, status, "success");

        setTimeout(() => {
          this.$router.push('/pekerja/jualan');
        }, 1000);
      } catch (error) {
        console.error("Failed to record sales:", error);
      }

      localStorage.removeItem('cartItems');

    },

    async updateProductQuantities() {
  for (const item of this.cartItems) {
    const productId = item.productData?.Produk_ID;
    const purchasedQuantity = item.kuantiti;
    try {
      const response = await axios.post("http://localhost:3001/update-product-quantity", {
        productId,
        purchasedQuantity,
      });

      const remainingQuantity = response.data.remainingQuantity;

      console.log("Remaining quantity for product:", productId, "is", remainingQuantity);
    } catch (error) {
      console.error("Failed to update quantity for product:", productId);
    }
  }
},
openSummaryDialog() {
  if (this.cartItems.length === 0) {
    const message ='Troli Kosong. Sila Tambah Produk Ke Dalam Troli'
            const status = 'Gagal'
            
            this.$refs.toast.toast(message,status,'error');
  } else {
    this.showSummaryDialog = true;
  }
},
    clearCart() {
      this.cartItems = [];
      this.totalPrice = 0;
      localStorage.removeItem('cartItems');
      const message = "Buang Item Dalam Troli Berjaya";
    const status = "Berjaya";

    this.$refs.toast.toast(message, status, "success");
    },
    closeSummaryDialog() {
      this.showSummaryDialog = false;
    },
  },
};
</script>

<style>
.dialog-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white; 
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* Adjust the z-index as needed */
}
</style>