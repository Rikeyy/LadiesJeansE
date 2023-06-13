<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
      <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
        <h1 class="text-xl font-semibold">Rekod Jualan</h1>
        <h2 class="text-md text-gray-500"><span><RouterLink to="/pekerja/utama">Halaman Utama</RouterLink></span> - <span class="text-sky-500">Rekod Jualan</span></h2>
        <div class="bg-white  w-[90%] mt-[2%] pb-[5%] pt-[3%] ">
          <h3 class="text-center text-lg pb-[2%]">Masukkan ID Produk untuk mencari produk.</h3>
          <div class="flex justify-center pb-[2%]">
            <div>
              <label class="text-[15px]">ID Produk : </label>
              <input
                v-model="searchId"
                type="search"
                class="mt-2 appearance-none text-[15px] bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="ID Produk"
              >
            </div>
          </div>

          <div class="flex ml-[10%] w-[80%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] py-5 px-5 mt-[2%]">

          <table class="w-[45%]">
            <tr>
                <td class="text-md font-semibold py-3 px-6 w-[40%]">
                    ID Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md " >
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else >{{ productData?.Produk_ID }}</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 w-[40%]">
                    Nama Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md ">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Nama_Produk }}</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6">
                    Harga Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md pl-2">
                    <p v-if="isSearchEmpty">RM 0.00</p>
                    <p v-else>RM {{ productData?.Harga_Produk }}.00</p>
                </td>
            </tr>
            <!-- <tr>
                <td class="text-md font-semibold py-3 px-6">
                    Deskripsi
                </td>
                <td class="text-md font-bold">
                    :
                </td>
                <td class="text-md pl-2">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Deskripsi_Produk }}</p>
                </td>
            </tr> -->
            <tr>
                <td class="text-md font-semibold py-3 px-6">
                    Kategori
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md pl-2">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Kategori.Nama_Kategori }}</p>
                </td>
            </tr>
          </table>
          <table class="w-[45%]">
            <tr>
                <td class="text-md font-semibold py-3 px-6">Pilih Promosi</td>
                <td class="text-md font-bold px-3">:</td>
                <td >
                    <select v-model="selectedPromo" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-[100%]">
                        <option disabled>-- Select Promotion --</option>
                        <option v-for="promo in filteredPromoList" :key="promo.id" :value="promo.id">{{ promo.Nama_Promosi }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6">Quantiti</td>
                <td class="text-md font-bold px-3">:</td>
                <td>
                    <input
                        v-model="quantity"
                        type="number"
                        class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Quantity"
                        required
                    >
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6">Jumlah Harga</td>
                <td class="text-md font-bold px-3">:</td>
                <td class="text-md pl-2">RM {{ totalPrice }}.00</td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6">Jumlah Harga Selepas Promosi</td>
                <td class="text-md font-bold px-3">:</td>
                <td class="text-md pl-2">RM {{ totalPricePromo }}.00</td>
            </tr>
          </table>

        </div>
        
        <div class="flex justify-center pt-[2%]">
            <button class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-md hover:scale-105 duration-200 ml-[2%] mt-[2%]" @click="addToCartAndContinue(quantity)">Tambah Ke Troli</button>
          </div>
          <p class="text-gray-500 text-right w-[88%] cursor-pointer" @click="navigateToCart">Lihat Troli</p>

        </div>

    </div>


      </div>
    <ToastMessage ref="toast"/>

    
  </template>

<script>
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {
      searchId: '',
      // phoneScanner: false,
      productData: null,
      quantity: 0,
      selectedPromo: '',
      totalPrice: 0,
      totalPricePromo: 0,
      activePromoList: [],
    };
  },
  computed: {
    isSearchEmpty() {
      return this.searchId === '';
    },
    filteredPromoList() {
      if (!this.productData || !this.productData.Kategori) {
        return [];
      }
      const productCategoryId = this.productData.Kategori.id;
      return this.activePromoList.filter((promo) => promo.kategoriTerlibat === productCategoryId);
    },
  },
  watch: {
    searchId() {
      this.searchProducts();
    },
    quantity() {
      this.calculateTotalPrice();
    },
    selectedPromo() {
      this.calculateTotalPrice();
    },
  },
  methods: {
    async searchProducts() {
      try {
        const response = await axios.get('http://localhost:3001/cari', {
          params: {
            Produk_ID: this.searchId,
          },
        });
        this.productData = response.data[0];
        console.log(response.data);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    },
    calculateTotalPrice() {
      const productPrice = parseInt(this.productData?.Harga_Produk);
      console.log(this.quantity);
      if (!isNaN(productPrice)) {
        this.totalPrice = productPrice * this.quantity;
        const selectedPromoData = this.activePromoList.find((promo) => promo.id === this.selectedPromo);
        if (selectedPromoData) {
          const promoPrice = parseInt(selectedPromoData.Harga_Promosi);
          if (!isNaN(promoPrice)) {
            this.totalPricePromo = this.totalPrice - promoPrice * this.quantity;
          } else {
            this.totalPricePromo = this.totalPrice;
          }
        } else {
          this.totalPricePromo = this.totalPrice;
        }
      } else {
        this.totalPrice = 0;
        this.totalPricePromo = 0;
      }
    },
    fetchActivePromo() {
      axios
        .get('http://localhost:3001/aktif')
        .then((response) => {
          this.activePromoList = response.data;
          console.log(this.activePromoList);
        })
        .catch((error) => {
          console.error('Error fetching promotion data:', error);
        });
    },
    addToCart(quantity) {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      storedCartItems.push({
        productData: this.productData,
        quantity,
        totalPrice: this.totalPricePromo,
      });

      localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
    },
    navigateToCart() {
      this.$router.push('/pekerja/bakul');
    },
    async addToCartAndContinue(quantity) {
      if (!this.productData) {
        return;
      }

      const productQuantity = await this.fetchProductQuantity(this.productData.Produk_ID);
      if (isNaN(productQuantity)) {
        return;
      }

      if (quantity > productQuantity) {
        const message = 'Bilangan Produk Melebihi Bilangan Stok';
        const status = 'Gagal';
        this.$refs.toast.toast(message, status, 'error');
        return;
      }

      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      storedCartItems.push({
        productData: this.productData,
        kuantiti: this.quantity,
        totalPrice: this.totalPricePromo,
        namaProduk: this.productData?.Nama_Produk,
        hargaProduk:this.productData?.Harga_Produk,
      });

      localStorage.setItem('cartItems', JSON.stringify(storedCartItems));

      const message = 'Tambah Produk Ke Troli Berjaya';
      const status = 'Berjaya';
      this.$refs.toast.toast(message, status, 'success');
    },
    async fetchProductQuantity(productID) {
      try {
        const response = await axios.get('http://localhost:3001/bilangan');
        const productQuantities = response.data;

        const product = productQuantities.find((produk) => produk.Produk_ID === productID);
        if (!product) {
          console.error(`Product with ID ${productID} not found.`);
          return NaN;
        }

        return product.Kuantiti_Produk;
      } catch (error) {
        console.error('Error fetching product quantity:', error);
        return NaN;
      }
    },
  },
  mounted() {
    this.fetchActivePromo();
  },
};
</script>
