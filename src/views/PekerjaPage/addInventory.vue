<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%] max-lg:ml-[10%] max-lg:px-[5%] max-lg:mt-[5%] max-lg:overflow-hidden">
            <h1 class="text-xl font-semibold">Tambah Stok Produk</h1>
            <h2 class="text-md text-gray-500">Halaman Utama - Paparan Stok</h2>
            <div class="bg-white mt-[2%] shadow-sm w-[90%] pt-[3%] pb-[5%] max-lg:w-full">
                <h3 class="text-center text-lg pb-[2%]">Masukkan ID Produk untuk mencari produk.</h3>
                <div class="flex justify-center text-[15px] pb-[2%]">
                    <div class="pr-[2%]">
                        <label class="">ID Produk : </label>
                        <input
                            v-model="searchId"
                            type="search"
                            class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="ID Produk"
                        >                   
                        <button class="ml-2 bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none" @click="camScanner()">
                            <i class="fa-solid fa-barcode"></i>
                        </button>
                    </div>

                </div>
                <div class="h-[500px] shadow-xl relative overflow-y-auto w-[95%] m-auto max-lg:h-[75vh]">
                    <table class="m-auto text-[13px]  ">
                        <thead class=" text-gray-700 uppercase bg-sky-400 dark:text-white text-center sticky top-0 z-10">
                            <tr>
                                <th scope="col" class="px-6 py-3 w-[7%]">
                                    ID Produk
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nama Produk
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Deskripsi
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" class="px-6 py-3 w-[12%]">
                                    Harga (RM)
                                </th>
                                <th scope="col" class="px-6 py-3 w-[1%]">
                                    Saiz
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kuantiti
                                </th>
                                <th scope="col" class="px-6 py-3 w-[7%]">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody  v-if="displayProdukList.length > 0">
                            <tr
                                class="bg-white border-b border-gray-500 text-center"
                                v-for="produk in displayProdukList"
                                :key="produk.Produk_ID"
                            >
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                    {{ produk.Produk_ID }}
                                </th>
                                <td class="px-6 py-4 w-[15%]">
                                    {{ produk.Nama_Produk }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ produk.Deskripsi_Produk }}
                                </td>
                                <td class="px-6 py-3">
                                    {{ produk.Kategori.Nama_Kategori }}
                                </td>
                                <td class="px-6 py-4  ">
                                    {{ produk.Harga_Produk }}
                                </td>
                                <td class="px-6 py-4 ">
                                    {{ produk.Saiz_Produk }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ produk.Kuantiti_Produk }}
                                </td>
                                <td class="px-6 py-4">
                                    <router-link :to="'/pekerja/tambah-produk/'+ produk.id"><i class="fa-solid fa-plus text-green-500 cursor-pointer font-bold text-lg"></i></router-link>
                                </td>
                            </tr> 
                                               
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center ">
                                <td colspan="8" class="py-4">
                                    <div class="text-red-500">
                                        Tiada produk ditemui untuk kriteria carian yang diberikan.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                </div>
                
            </div>
        </div>

        <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" v-bind:class="{'hidden': !phoneScanner}"></div>
    <dialog class="w-[45%] mx-auto shadow-product rounded-2xl fixed mt-[5%] py-[1%] z-50 max-lg:w-[70%] max-lg:mt-[30%]" v-bind:open="phoneScanner">
        <div >
            <div class="justify-center text-center">
                <div class="flex flex-col items-center my-4">
                    <div class="section mx-auto w-[90%] text-xs">
                        <BarcodeScanner
                            v-bind:qrbox="500"
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
</template>

<script>
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import BarcodeScanner from '../../components/BarcodeScanner.vue';

export default {
  data() {
    return {
      kategoriList: [],
      selectedItem: null,
      viewID: "",
      phoneScanner:false,
      searchId: ref(''),
      produkList: ref([]),
      filteredProdukList: ref([])
    };
  },
  mounted() {
    this.fetchProdukData();
    this.fetchKategoriData();
  },
  computed: {
    displayProdukList() {
      return this.searchId ? this.filteredProdukList : this.produkList;
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
    async fetchProdukData() {
      try {
        const response = await axios.get('http://localhost:3001/produk');
        this.produkList = response.data;
        this.filteredProdukList = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
    async searchProducts() {
      try {
        const response = await axios.get('http://localhost:3001/cari', {
          params: {
            Produk_ID: this.searchId,
          },
        });
        this.filteredProdukList = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    },
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
  },
  watch: {
    searchId() {
      this.searchProducts();
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