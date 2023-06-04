<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
      <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
        <h1 class="text-2xl font-semibold">Troli</h1>
        <h2 class="text-lg text-gray-500">Halaman Utama - Rekod Jualan - <span class="text-sky-500">Troli</span></h2>
  <div class="bg-white w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%] h-[90%]">
    <table class="jadual w-[90%] m-auto">
      <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center">
        <tr>
          <th scope="col" class="px-6 py-3">No.</th>
          <th scope="col" class="px-6 py-3">ID Produk</th>
          <th scope="col" class="px-6 py-3">Nama Produk</th>
          <th scope="col" class="px-6 py-3">Harga Produk</th>
          <th scope="col" class="px-6 py-3">Quantity</th>
          <th scope="col" class="px-6 py-3">Total Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="item.productData?.Produk_ID"  class="bg-white border-b border-gray-500 text-center">
          <td class="px-6 py-4 w-[5%]">{{ index + 1 }}</td>
          <td class="px-6 py-4 w-[15%]">{{ item.productData?.Produk_ID }}</td>
          <td class="px-6 py-4 w-[15%]">{{ item.productData?.Nama_Produk }}</td>
          <td class="px-6 py-4 w-[15%]">{{ item.productData?.Harga_Produk }}</td>
          <td class="px-6 py-4 w-[15%]">{{ item.quantity }}</td>
          <td class="px-6 py-4 w-[15%]">{{ item.totalPrice }}</td>
          <td class="px-6 py-4 w-[15%]">
            <button @click="removeCartItem(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-center">
      <button @click="clearCart" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]">Kosongkan Troli</button>
      <button @click="openSummaryDialog" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]">Pembayaran</button>
    </div>

    <!-- Summary dialog -->
    <dialog v-if="showSummaryDialog" open @close="closeSummaryDialog" class="top-[30%] m-auto text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-[5%] py-[5%]">
  <h2 class="text-2xl font-semibold pb-[5%]">Rekod Jualan</h2>
  <h2 class="text-lg  pb-[5%]">Senarai produk yang dibeli</h2>
  <ul>
    <li v-for="(item, index) in cartItems" :key="item.productData?.Produk_ID">
      {{ index + 1 }}. {{ item.productData?.Nama_Produk }} - {{ item.quantity }} - {{ item.totalPrice }}
    </li>
  </ul>
  <p class="py-[5%]">Jumlah Harga: RM {{ totalCart }}.00</p>
  <div class="flex flex-col items-center">
    <label for="moneyReceived" class="mr-2">Duit Diterima:</label>
    <input type="number" id="moneyReceived" v-model.number="moneyReceived" class="text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
  </div>
  
  <p class="pb-[10%]">Wang Baki: {{ calculateBalance }}</p>
  
  <button @click="navigateToPayment" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]">Selesai</button>
</dialog>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      totalPrice: 0,
      showSummaryDialog: false,
      moneyReceived: 0, // Add a new data property for moneyReceived
    };
  },
  beforeUnmount() {
  // Clear the cartItems from localStorage
  localStorage.removeItem('cartItems');
},
  mounted() {
  // Retrieve the product information, price, and quantity from storage
  const storedProductData = JSON.parse(localStorage.getItem('productData'));
  const storedTotalPrice = localStorage.getItem('totalPrice');
  const storedQuantity = parseInt(localStorage.getItem('quantity'));

  const storedCartItems = localStorage.getItem('cartItems');
  
  if (storedCartItems) {
    // If cartItems exist in localStorage, assign them to the data property
    this.cartItems = JSON.parse(storedCartItems);
  }

  if (storedProductData && storedTotalPrice && !isNaN(storedQuantity)) {
    // Add the retrieved data to the cartItems array
    this.cartItems.push({
      productData: storedProductData,
      quantity: storedQuantity,
      totalPrice: storedTotalPrice,
    });

    // Clear the stored data from storage (optional)
    localStorage.removeItem('productData');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('quantity');

    // Calculate the total price
    this.calculateTotalPrice();

    this.$watch('moneyReceived', () => {
      this.calculateBalance();
    });
  }
},
computed: {
    totalCart() {
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
  this.calculateTotalPrice();
  
  // Update the localStorage to reflect the changes
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

  
},
async navigateToPayment() {
      // Send the data to the backend API
      try {
        const response = await axios.post("http://localhost:3001/record-sales", {
          cartItems: this.cartItems,
          totalCart: this.totalCart,
          moneyReceived: this.moneyReceived,
        });

        // Handle the response if needed
        console.log("Sales recorded:", response.data);

        // Update the quantity in the database for each purchased product
        await this.updateProductQuantities();

        // Reset the cart and other necessary data
        this.cartItems = [];
        this.totalPrice = 0;
        this.moneyReceived = 0;

        // Close the summary dialog
        this.closeSummaryDialog();
        window.alert("Sales recorded successfully!");

        // Redirect to another page
        this.$router.push("/pekerja/jualan");

        // Optional: Show a success message or redirect to another page
      } catch (error) {
        // Handle errors if any
        console.error("Failed to record sales:", error);
        // Show an error message or handle the error as needed
      }
    },

    async updateProductQuantities() {
  for (const item of this.cartItems) {
    const productId = item.productData?.Produk_ID;
    const purchasedQuantity = item.quantity;

    try {
      const response = await axios.post("http://localhost:3001/update-product-quantity", {
        productId,
        purchasedQuantity,
      });

      const remainingQuantity = response.data.remainingQuantity;

      // Handle the remaining quantity as needed
      console.log("Remaining quantity for product:", productId, "is", remainingQuantity);
    } catch (error) {
      // Handle errors if any
      console.error("Failed to update quantity for product:", productId);
      // Show an error message or handle the error as needed
    }
  }
},
openSummaryDialog() {
    this.calculateTotalPrice(); // Calculate the total price
    this.showSummaryDialog = true;
  },
    clearCart() {
      this.cartItems = [];
      this.totalPrice = 0;
      localStorage.removeItem('cartItems');
    },
    openSummaryDialog() {
      this.showSummaryDialog = true;
    },
    closeSummaryDialog() {
      this.showSummaryDialog = false;
    },
  },
};
</script>

<style>
.white{
    border-radius: 20px;
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff;
}

.putih{
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff; 
}

.hijau{
    border-radius: 20px;
    background: #d3f9d6;
    box-shadow:  8px 8px 23px #1e3b25,
                -8px -8px 23px #ffffff;
}

.jadual{
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff;
}
</style>