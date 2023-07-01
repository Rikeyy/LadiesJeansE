<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
      <div class="ml-[22%] mt-[2.7%] w-full h-[90%]  max-lg:ml-[10%] max-lg:px-[5%] max-lg:mt-[5%] max-md:ml-0 max-md:mt-[18%]">
        <h1 class="text-xl font-semibold">Rekod Jualan</h1>
        <h2 class="text-md text-gray-500"><span><RouterLink to="/pekerja/utama">Halaman Utama</RouterLink></span> - <span class="text-sky-500">Rekod Jualan</span></h2>
        <div class="bg-white  w-[90%] mt-[2%] pb-[5%] pt-[3%] max-lg:w-full">
          <h3 class="text-center text-lg max-md:text-sm pb-[2%]">Masukkan ID Produk untuk mencari produk.</h3>
          <div class="flex justify-center pb-[2%]">
            <div>
              <label class="text-[15px]  max-md:text-sm">ID Produk : </label>
              <input
                v-model="searchId"
                type="search"
                class="mt-2 appearance-none text-[15px] max-md:text-sm bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 max-md:px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="ID Produk"
              >
          <button class="ml-2 bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none" @click="camScanner()">
            <i class="fa-solid fa-barcode"></i>
          </button>
            </div>
          </div>

          <div class=" ml-[10%] w-[80%] max-md:w-[95%] max-md:ml-[2.5%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] py-5 px-5 mt-[2%]">

          <table class="mx-auto max-lg:mb-3">
            <div>
              
            </div>
            <tr>
              <td rowspan="6" class="max-md:hidden">
                <img v-if="!isSearchEmpty && productData" :src="productData.Gambar" class="w-[160px] h-[200px]"/>
                <p v-else class="w-[160px] h-[200px] border-black border-2 text-center">Gambar</p>
              </td>
              <td class="max-md:show xl:hidden ">
                <img v-if="!isSearchEmpty && productData" :src="productData.Gambar" class="w-[160px] h-[200px] "/>
                <p v-else class="w-[160px] h-[200px] max-md:w-[120px] max-md:h-[150px] border-black border-2  text-center">Gambar</p>
              </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 w-[40%] max-md:px-0">
                    ID Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md " >
                  <p v-if="!isSearchEmpty && productData" :src="productData.Gambar" >{{ productData?.Produk_ID }}</p>
                  <p v-else>-----</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 w-[40%] max-md:px-0">
                    Nama Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md ">
                  <p v-if="!isSearchEmpty && productData" :src="productData.Gambar">{{ productData?.Nama_Produk }}</p>
                  <p v-else>-----</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">
                    Harga Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md pl-2">
                  <p v-if="!isSearchEmpty && productData" :src="productData.Gambar">RM {{ productData?.Harga_Produk }}.00</p>
                  <p v-else>RM 0.00</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">
                    Saiz Produk
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md pl-2">
                  <p v-if="!isSearchEmpty && productData" :src="productData.Gambar">{{ productData?.Saiz_Produk }}</p>
                  <p v-else>-----</p>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">
                    Kategori
                </td>
                <td class="text-md font-bold ">
                    :
                </td>
                <td class="text-md pl-2">
                  <p v-if="!isSearchEmpty && productData" :src="productData.Gambar">{{ productData?.Kategori.Nama_Kategori }}</p>
                  <p v-else>-----</p>
                </td>
            </tr>
          </table>
          <table class="m-auto">
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">Pilih Promosi</td>
                <td class="text-md font-bold px-3">:</td>
                <td >
                    <select v-model="selectedPromo" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 max-md:px-0 max-md:pr-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-[100%] ">
                        <option value="">-- Select Promotion --</option>
                        <option v-for="promo in filteredPromoList" :key="promo.id" :value="promo.id">{{ promo.Nama_Promosi }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">Quantiti</td>
                <td class="text-md font-bold px-3">:</td>
                <td>
                    <input
                        v-model="quantity"
                        type="number"
                        class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 max-md:px-0 max-md:pr-0 max-md:w-44 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Quantity"
                        required
                    >
                </td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">Jumlah Harga</td>
                <td class="text-md font-bold px-3">:</td>
                <td class="text-md pl-2">RM {{ totalPrice }}.00</td>
            </tr>
            <tr>
                <td class="text-md font-semibold py-3 px-6 max-md:px-0">Jumlah Harga Selepas Promosi</td>
                <td class="text-md font-bold px-3">:</td>
                <td class="text-md pl-2">RM {{ totalPricePromo }}.00</td>
            </tr>
          </table>

        </div>
        
        <div class="flex justify-center pt-[2%]">
            <button class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-md hover:scale-105 duration-200 ml-[2%] mt-[2%] max-lg:mt-[4%] max-lg:mb-[4%]" @click="addToCartAndContinue(quantity)">Tambah Ke Troli</button>
          </div>
          <p class="text-gray-500 text-right w-[88%] cursor-pointer" @click="navigateToCart">Lihat Troli <span><i class="fa-solid fa-arrow-right pl-3"></i></span></p>

        </div>

    </div>

    <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" v-bind:class="{'hidden': !phoneScanner}"></div>
    <dialog class="w-[45%] mx-auto shadow-product rounded-2xl fixed mt-[5%] py-[1%] z-50 max-lg:w-[70%] max-lg:mt-[30%]" v-bind:open="phoneScanner">
        <div >
            <div class="justify-center text-center">
                <div class="flex flex-col items-center my-4">
                    <div class="section mx-auto w-[90%] text-xs">
                        <BarcodeScanner
                            v-bind:qrbox="200"
                            v-bind:fps="60"
                            @scan-success="scanBarcode"
                            class="mx-auto"
                        />
                    </div>
                </div>
                <div>
                    <button class="text-white w-fit text-md bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200" @click="camScanner()">Batal</button>
                </div>
            </div>
        </div>
    </dialog>

      </div>
    <ToastMessage ref="toast"/>

    
  </template>

<script>

import { ref, computed, watch } from 'vue';
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';
import BarcodeScanner from '../../components/BarcodeScanner.vue';

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {
      searchId: '',
      phoneScanner:false,
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
    camScanner()
        {
            this.phoneScanner = !this.phoneScanner; // Toggle the isOpen property
        },
        scanBarcode(decodedText)
        {
            if(decodedText.trim() !== '')
            {
                this.searchId = decodedText;
                console.log(this.searchId)
                setTimeout(()=>{
                    this.phoneScanner=false
                },500)
            }
        },
    async searchProducts() {
      try {
        const response = await axios.get('https://lje-ms-backend.onrender.com/cari', {
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
        .get('https://lje-ms-backend.onrender.com/aktif')
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
        const response = await axios.get('https://lje-ms-backend.onrender.com/bilangan');
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
