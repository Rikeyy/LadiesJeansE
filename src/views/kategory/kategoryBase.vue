<template>
  <div class="py-5 text-md font-semibold text-left bg-white w-[90%] shadow-sm mx-auto">
    <div class="flex text-md justify-between mt-[1%]">
      <div>
        Kategori Produk
        <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai kategori yang terdaftar di dalam sistem.</p>
      </div>
      <div>
        <router-link to="/urus-produk/add">
          <div class="bg-[#d3f9d6] rounded-3xl shadow-lg hover:scale-105 duration-200">
            <div class="text-center py-3 flex pt-[6%] w-[250px]">
              <i class="fa-solid fa-plus bg-green-300 rounded-full px-[5px] py-[3px] text-green-600 ml-[17%]"></i>
              <p class="text-sm font-normal ml-3 mt-[2px]">Tambah Kategori</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="h-[67%] relative overflow-y-auto shadow-xl w-[90%] mx-auto  ">
    <table class=" w-full text-[13px] text-left mx-auto">
      <thead class="text-gray-700 uppercase bg-sky-400 dark:text-white text-center sticky top-0 z-10">
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
            <router-link :to="'/urus-produk/update/'+ kategori.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteKategori(kategori.id)"></i>
          </td>
        </tr>
        <tr>
          <td colspan="3" ><p class="text-center py-5 text-gray-500">Daftar lagi kategori untuk melihat data yang lain.</p></td>
        </tr>
      </tbody>
      <tbody v-else-if="kategoriList.length > 0">
        <tr class="bg-white border-b border-gray-500 text-center" v-for="kategori in kategoriList" :key="kategori.id">
          <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ kategori.Nama_Kategori }}
          </th>
          <td class="px-4 py-4">
            {{ kategori.Deskripsi_Kategori }}
          </td>
          <td class="py-4 flex justify-evenly">
            <router-link :to="'/urus-produk/update/'+ kategori.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteKategori(kategori.id)"></i>
          </td>
        </tr>
      </tbody>
      <tbody v-else="kategoriList.length > 0 && kategoriList.length < 4">
        <tr>
          <td colspan="3" ><p class="text-center py-5 text-gray-500">Tiada kategori terdaftar.</p></td>
        </tr>
      </tbody>
    </table>
    <ToastMessage ref="toast"/>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ToastMessage from '../../components/ToastMessage.vue';
  import Swal from 'sweetalert2';

  export default {
    components:{
    ToastMessage,
  },
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
          .get('https://lje-ms-backend.onrender.com/kategori')
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

      Swal.fire({
        title: 'Pasti?',
        text: 'Adakah anda pasti untuk memadam maklumat kategori ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, padam',
        cancelButtonText: 'Batal',
        customClass: {
          icon: 'text-blue-500', // Customize the icon color
        },
        confirmButtonColor: '#e53e3e', // Set the confirm button color to red
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://lje-ms-backend.onrender.com/kategori/` + kategoriID)
            .then((response) => {
              // Remove the deleted product from the kategoriList
              const index = this.kategoriList.findIndex((k) => k.id === kategoriID);
              if (index !== -1) {
                this.kategoriList.splice(index, 1);
              }
              const message = 'Maklumat Kategori Berjaya Di Padam';
              const status = 'Berjaya';

              this.$refs.toast.toast(message, status, 'success');
            })
            .catch((error) => {
              console.error('Error deleting kategori:', error);
              const message = 'Kategori Terlibat Dalam Produk Yang Masih Aktif';
              const status = 'Gagal';

              this.$refs.toast.toast(message, status, 'error');
            });
        }
      });
    },

    },
  };
  </script>

  <style>
  /* Override the default styles */
  .swal2-confirm:focus {
    box-shadow: 0 0 0 3px red !important;
  }
</style>
  