<template>
  <div class="py-5 text-lg font-semibold text-left bg-white w-[90%] mx-auto">
    <div class="flex justify-between mt-[1%]">
      <div>
        Kategori Produk
        <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai kategori yang terdaftar di dalam sistem.</p>
      </div>
      <div>
        <router-link to="/urus-produk/add">
          <div class="hijau">
            <div class="text-center py-3 flex pt-[6%] w-[250px]">
              <i class="fa-solid fa-plus bg-green-300 rounded-full px-[5px] py-[3px] text-green-600 ml-[17%]"></i>
              <p class="text-sm font-normal ml-3 mt-[2px]">Tambah Kategori</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="h-[67%] relative overflow-y-auto jadual w-[90%] mx-auto  ">
    <table class=" w-full text-sm text-left mx-auto">
      <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center sticky top-0 z-10">
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
      <tbody v-if="kategoriList.length > 0 && kategoriList.length < 4">
        <tr class="bg-white border-b border-gray-500 text-center" v-for="kategori in kategoriList" :key="kategori.id">
          <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ kategori.Nama_Kategori }}
          </th>
          <td class="px-4 py-4">
            {{ kategori.Deskripsi_Kategori }}
          </td>
          <td class="py-4 flex justify-evenly">
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteKategori(kategori.id)"></i>
            <router-link :to="'/urus-produk/update/'+ kategori.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
          </td>
        </tr>
        <tr>
          <td colspan="3" ><p class="text-center py-5 text-gray-500">Daftar lagi kategori untuk melihat data yang lain.</p></td>
        </tr>
      </tbody>
      <tbody v-else-if="kategoriList.length > 0 && kategoriList.length < 4">
        <tr class="bg-white border-b border-gray-500 text-center" v-for="kategori in kategoriList" :key="kategori.id">
          <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ kategori.Nama_Kategori }}
          </th>
          <td class="px-4 py-4">
            {{ kategori.Deskripsi_Kategori }}
          </td>
          <td class="py-4 flex justify-evenly">
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteKategori(kategori.id)"></i>
            <router-link :to="'/urus-produk/update/'+ kategori.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else="kategoriList.length > 0 && kategoriList.length < 4">
        <tr>
          <td colspan="3" ><p class="text-center py-5 text-gray-500">Daftar kategori untuk melihat data.</p></td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        kategoriList: [],
        selectedKategori: null,
        updateID: ""
      };
    },
    mounted() {
      this.fetchKategoriData();
    },
    methods: {
      fetchKategoriData() {
        axios
          .get('http://localhost:3001/kategori')
          .then(response => {
            this.kategoriList = response.data;
            // console.log(this.kategoriList);
          })
          .catch(error => {
            console.error('Error fetching kategori data:', error);
          });
      },
      deleteKategori(kategoriID) {
        this.updateID = kategoriID;

        axios
          .delete(`http://localhost:3001/kategori/` +kategoriID)
          .then(response => {
            // Remove the deleted product from the kategoriList
            const index = this.kategoriList.findIndex(k => k.id === kategoriID);
            if (index !== -1) {
              this.kategoriList.splice(index, 1);
            }
            console.log('Kategori deleted successfully.');
          })
          .catch(error => {
            console.error('Error deleting kategori:', error);
          });
      },
    },
  };
  </script>
  