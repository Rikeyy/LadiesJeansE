<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-full w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-[75%] h-[90%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold">Pengurusan Inventori</h1>
                <h2 class="text-lg text-gray-500">Halaman Utama - Pengurusan Inventori</h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex flex-col justify-between w-[30%] h-full">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[25%] white mb-8 pb-2">
                        <h1 class="font-semibold pl-[4%] mt-[2%] mb-[2%]">Bilangan Produk Terdaftar :</h1>
                        <h2 class="text-6xl font-bold text-center">5</h2>
                    </div>

                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[70%] bg-white pb-9">
                        <h1 class="p-5 text-lg font-semibold text-left bg-white ">Komposisi Produk Mengikut Kategori :</h1>
                        <img src="../../assets/Screenshot 2023-05-12 025806.png" class="m-auto w-3/5 white">
                    </div>
                </div>

                <div class="w-[55%] mr-[8%]">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-full w-full bg-white">
                        <table class="w-[90%]  text-sm text-left jadual mx-auto">
                            <caption class="py-5 text-lg font-semibold text-left bg-white ">
                                Kategori Produk
                            </caption>
                                <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nama Kategori
                                        </th>
                                        <th scope="col" class="px-4 py-3 w-[50%]">
                                            Deskripsi
                                        </th>
                                        <th scope="col" class="px-4 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b border-gray-500 text-center" v-for="kategori in kategoriList">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {{ kategori.Nama_Kategori }}
                                        </th>
                                        <td class="px-4 py-4">
                                            {{ kategori.Deskripsi_Kategori }}
                                        </td>
                                        <td class="py-4 flex justify-evenly">
                                            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer"></i>
                                            <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>

             <div data-aos-duration="2000" data-aos="fade-up" class="mt-[3%] bg-white w-full h-[51%] px-[2%] pb-7 ">
                 <table class="w-full text-sm text-left jadual">
                <caption class="p-5 text-lg font-semibold text-left bg-white "> 
                    <div class="flex justify-between">
                            <div>
                                Senarai Produk
                            <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai produk yang ada di dalam Inventori.</p>
                        </div>
                        <RouterLink to="/daftar-produk" class="w-[20%]">
                        <div class="hijau">
                            <div class="text-center py-3 flex pt-[6%]">
                                <i class="fa-solid fa-plus bg-green-300 rounded-full px-[6px] py-[6px] text-green-600 ml-[17%]"></i>
                                <p class="text-sm font-normal ml-3 mt-[2px]">Daftar Produk Baru</p>
                            </div>
                        </div>
                        </RouterLink>
                        </div>
                </caption>
                    <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID Produk
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nama Produk
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Harga (RM)
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Saiz
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Deskripsi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" class="px-6 py-3 w-[10%]">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-gray-500 text-center" v-for="produk in produkList">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                {{ produk.Produk_ID }}
                            </th>
                            <td class="px-6 py-4 w-[15%]">
                                {{ produk.Nama_Produk }}
                            </td>
                            <td class="px-6 py-4  w-[15%]">
                                {{ produk.Harga_Produk }}
                            </td>
                            <td class="px-6 py-4  w-[15%]">
                                {{ produk.Saiz_Produk }}
                            </td>
                            <td class="px-6 py-4">
                                {{ produk.Deskripsi_Produk }}
                            </td>
                            <td class="px-6 py-3">
                                {{ produk.Kategori.Nama_Kategori}}
                            </td>
                            <td class="px-6 py-4 flex justify-around">
                                <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteProduct(produk.Produk_ID)"></i>
                                <RouterLink :to="'/update-product/' + produk.id">
                                    <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                </RouterLink>
                            </td>
                        </tr>                    
                    </tbody>
                </table>
            </div>

            

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kategoriList: [],
      produkList: [],
      data2 : [],
      selectedProduct: null,
      updateID: ""
    };
  },
  mounted() {
    this.fetchKategoriData();
    this.fetchProductData();
  },
  methods: {
    fetchKategoriData() {
      axios.get('http://localhost:3001/kategori')
        .then(response => {
          this.kategoriList = response.data;
          // console.log(this.kategoriList);
        })
        .catch(error => {
          console.error('Error fetching kategori data:', error);
        });
    },
    fetchProductData() {
      axios.get('http://localhost:3001/produk')
        .then(response => {
          this.produkList = response.data;
          console.log(this.produkList);
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    },
    deleteProduct(productId) {
        this.updateID = productId;

    axios.delete(`http://localhost:3001/produk/${productId}`)
        .then(response => {
        // Remove the deleted product from the produkList
        const index = this.produkList.findIndex(p => p.Produk_ID === productId);
        if (index !== -1) {
            this.produkList.splice(index, 1);
        }
        console.log('Product deleted successfully.');
        })
        .catch(error => {
        console.error('Error deleting product:', error);
        });
    }
  }
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