<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
            <h1 class="text-xl font-semibold">Paparan Stok</h1>
            <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Paparan Stok Produk</span></h2>
            <div class="bg-white shadow-sm w-[90%] mt-[2%] pb-[3%]">
                <!-- <h3 class="text-center text-lg py-[2%]">Masukkan <span class="text-sky-400">ID Produk</span> untuk mencari produk.</h3>
                <div class="flex text-[15px] justify-center pb-[2%]">
                    <div class="pr-[2%]">
                        <label class="">ID Produk : </label>
                        <input
                            v-model="searchId"
                            type="search"
                            class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="ID Produk"
                        >                    </div>
                    <div class="pl-[2%]">
                        <label class="">Kategori : </label>
                        <select id="items" v-model="selectedItem" placeholder="Select Item" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                            <option disabled>-- Select Item --</option>
                            <option value="">Semua</option>
                            <option v-for="kategori in kategoriList" :key="kategori.Nama_Kategori" :value="kategori.id">{{ kategori.Nama_Kategori }}</option>
                        </select>
                    </div> -->
                <!-- </div > -->
                <div class="w-[92%] relative overflow-y-auto shadow-xl min-h-[550px] mx-auto">
                    <table class=" m-auto text-[13px] w-full">
                        <thead class=" text-gray-700 uppercase bg-sky-400 dark:text-white text-center">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID Produk
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nama Produk
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Saiz
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kuantiti
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kuantiti Tambahan
                                </th>
                                <th scope="col" class="px-6 py-3 w-[13%]">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="bg-white border-b border-gray-500 text-center w-full"
                                v-for="produk in produkList"
                                :key="produk.id"
                            >
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                    {{ produk.Produk_ID }}
                                </th>
                                <td class="px-6 py-4 ">
                                    {{ produk.Nama_Produk }}
                                </td>
                                <td class="px-6 py-3 ">
                                    {{ produk.Kategori.Nama_Kategori }}
                                </td>
                                <td class="px-6 py-4 ">
                                    {{ produk.Saiz_Produk }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ produk.Kuantiti_Produk }}
                                </td>
                                <td class="px-6 py-4 ">
                                    {{ produk.Kuantiti_Tambahan }}
                                </td>
                                <td class="px-6 py-4 flex justify-around">
                                    <i class="fa-solid fa-x text-lg text-green-500 cursor-pointer" ></i>

                                    <i class="fa-solid fa-check text-lg text-green-500 cursor-pointer" @click="onCheckButtonClick(produk.id)"></i>
                                </td>
                            </tr> 
                                               
                        </tbody>
                        </table>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import axios from 'axios';

const searchId = ref('');
const produkList = ref([]);
const filteredProdukList = ref([]);
const selectedItem = ref('');

async function fetchProdukData() {
  try {
    const response = await axios.get('http://localhost:3001/kuantiti');
    produkList.value = response.data;
    filteredProdukList.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

async function searchProducts() {
  try {
    const response = await axios.get('http://localhost:3001/cari', {
      params: {
        Produk_ID: searchId.value,
      },
    });
    filteredProdukList.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error searching products:', error);
  }
}

watch(searchId, () => {
  searchProducts();
});

const displayProdukList = computed(() => {
  return searchId.value ? filteredProdukList.value : produkList.value;
});

async function filterProductsByCategory() {
    try {
      const response = await axios.get('http://localhost:3001/cariKategori', {
        params: {
          kategoriId: selectedItem.value,
        },
      });
      filteredProdukList.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error filtering products by category:', error);
    }
  }

  const filteredByCategoryProdukList = computed(() => {
    if (!selectedItem.value) {
      return displayProdukList.value;
    } else {
      return displayProdukList.value.filter(
        (produk) => produk.Kategori.id === selectedItem.value
      );
    }
  });

  async function updateProduk(id) {
  try {
    const produk = filteredProdukList.value.find((p) => p.id === id);

    if (!produk) {
      console.log('Produk not found:', id);
      return;
    }

    const response = await axios.put(`http://localhost:3001/kuantiti/${id}`);
    console.log(response.data);
    fetchProdukData();
  } catch (error) {
    console.error('Error updating produk:', error);
  }
}

fetchProdukData();

export default {
    data() {
    return {
      kategoriList: [],
      selectedItem,
      viewID : "",
    };
  },
  mounted() {
    this.fetchKategoriData();
  },
  computed: {
    displayProdukList,
    filteredByCategoryProdukList,
  },
  watch: {
    selectedItem: filterProductsByCategory,
  },
  methods: {
    fetchKategoriData() {
      axios.get('http://localhost:3001/kategori')
        .then(response => {
          this.kategoriList = response.data;
          console.log(this.kategoriList);
        })
        .catch(error => {
          console.error('Error fetching kategori data:', error);
        });
    },
    async onCheckButtonClick(id) {
      await updateProduk(id);
    },
    
}

};
</script>
