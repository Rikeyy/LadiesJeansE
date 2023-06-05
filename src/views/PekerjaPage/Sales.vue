<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
      <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
        <h1 class="text-2xl font-semibold">Rekod Jualan</h1>
        <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Rekod Jualan</span></h2>
        <div class="bg-white  w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%]">
          <h3 class="text-center text-xl py-[2%]">Masukkan ID Produk untuk mencari produk.</h3>
          <div class="flex justify-center pb-[2%]">
            <div>
              <label class="">ID Produk : </label>
              <input
                v-model="searchId"
                type="search"
                class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="ID Produk"
              >
            </div>
            
            
            
          </div>

          <div class="flex ml-[10%] w-[80%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] py-5 px-5 mt-[2%]">

          <table class="w-[45%]">
            <tr>
                <td class="text-lg font-semibold py-3 px-6 w-[40%]">
                    Nama Produk
                </td>
                <td class="text-lg font-bold ">
                    :
                </td>
                <td class="text-lg ">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Nama_Produk }}</p>
                </td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">
                    Harga Produk
                </td>
                <td class="text-lg font-bold ">
                    :
                </td>
                <td class="text-lg pl-2">
                    <p v-if="isSearchEmpty">RM 0.00</p>
                    <p v-else>RM {{ productData?.Harga_Produk }}.00</p>
                </td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">
                    Deskripsi
                </td>
                <td class="text-lg font-bold">
                    :
                </td>
                <td class="text-lg pl-2">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Deskripsi_Produk }}</p>
                </td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">
                    Kategori
                </td>
                <td class="text-lg font-bold ">
                    :
                </td>
                <td class="text-lg pl-2">
                    <p v-if="isSearchEmpty">-----</p>
                    <p v-else>{{ productData?.Kategori.Nama_Kategori }}</p>
                </td>
            </tr>
          </table>
          <table class="w-[45%]">
            <tr>
                <td class="text-lg font-semibold py-3 px-6">Pilih Promosi</td>
                <td class="text-lg font-bold px-3">:</td>
                <td >
                    <select v-model="selectedPromo" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-[100%]">
                        <option disabled>-- Select Promotion --</option>
                        <option v-for="promo in filteredPromoList" :key="promo.id" :value="promo.id">{{ promo.Nama_Promosi }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">Quantiti</td>
                <td class="text-lg font-bold px-3">:</td>
                <td>
                    <input
                        v-model="quantity"
                        type="number"
                        class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Quantity"
                    >
                </td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">Jumlah Harga</td>
                <td class="text-lg font-bold px-3">:</td>
                <td class="text-lg pl-2">RM {{ totalPrice }}.00</td>
            </tr>
            <tr>
                <td class="text-lg font-semibold py-3 px-6">Jumlah Harga Selepas Promosi</td>
                <td class="text-lg font-bold px-3">:</td>
                <td class="text-lg pl-2">RM {{ totalPricePromo }}.00</td>
            </tr>
          </table>

        </div>
        
        <div class="flex justify-center pt-[2%]">
            <button class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]" @click="addToCartAndContinue(quantity)">Continue</button>
            <button class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]" @click="navigateToCart">View Cart</button>
        </div>

        </div>


      </div>
    </div>
  </template>
  


<script>
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const searchId = ref('');
  const productData = ref(null);
  const isSearchEmpty = computed(() => {
    return searchId.value === '';
  });
  const quantity = ref(0);
  const selectedPromo = ref('');

  const filteredPromoList = computed(() => {
    if (!productData.value || !productData.value.Kategori) {
      return [];
    }
    const productCategoryId = productData.value.Kategori.id;
    return activePromoList.value.filter((promo) => promo.kategoriTerlibat === productCategoryId);
  });

  async function searchProducts() {
    try {
      const response = await axios.get('http://localhost:3001/cari', {
        params: {
          Produk_ID: searchId.value,
        },
      });
      productData.value = response.data[0]; // Assuming only one product is returned
      console.log(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  }

  watch(searchId, () => {
    searchProducts();
  });

  watch([quantity, selectedPromo], () => {
    calculateTotalPrice();
  });

  const totalPrice = ref(0);
  const totalPricePromo = ref(0);

  function calculateTotalPrice() {
    const productPrice = parseInt(productData.value?.Harga_Produk);
    if (!isNaN(productPrice)) {
      totalPrice.value = productPrice * quantity.value;
      const selectedPromoData = activePromoList.value.find((promo) => promo.id === selectedPromo.value);
      if (selectedPromoData) {
        const promoPrice = parseInt(selectedPromoData.Harga_Promosi);
        if (!isNaN(promoPrice)) {
          totalPricePromo.value = totalPrice.value - promoPrice;
        } else {
          totalPricePromo.value = totalPrice.value;
        }
      } else {
        totalPricePromo.value = totalPrice.value;
      }
    } else {
      totalPrice.value = 0;
      totalPricePromo.value = 0;
    }
  }

  const activePromoList = ref([]);

  function fetchActivePromo() {
    axios
      .get('http://localhost:3001/aktif')
      .then((response) => {
        activePromoList.value = response.data;
        console.log(activePromoList.value);
      })
      .catch((error) => {
        console.error('Error fetching promotion data:', error);
      });
  }

  fetchActivePromo();

  function addToCart(quantity) {
    // Retrieve existing cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the current product details, quantity, and total price to the cartItems array
    storedCartItems.push({
      productData: productData.value,
      quantity,
      totalPrice: totalPricePromo.value,
    });

    // Save the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(storedCartItems));

    // Redirect to the "cart" page
    // Replace '/pekerja/bakul' with the actual route to your cart page
    // this.$router.push('/pekerja/bakul');
  }
  function addToCartAndContinue(quantity) {
    if (!productData.value) {
    // No product data available, return early
    return;
  }

  // Retrieve existing cart items from localStorage
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the current product details, quantity, and total price to the cartItems array
  storedCartItems.push({
    productData: productData.value,
    quantity,
    totalPrice: totalPricePromo.value,
  });

  // Save the updated cartItems array to localStorage
  localStorage.setItem('cartItems', JSON.stringify(storedCartItems));

  // Redirect to the "cart" page
  // Replace '/pekerja/bakul' with the actual route to your cart page
  // this.$router.push('/pekerja/bakul');
}
  export default {
  // ...
  methods: {
    navigateToCart() {
      this.$router.push('/pekerja/bakul'); // Use this.$router instead of importing useRouter()
    },
    // ...
  },
  // ...
}
</script>