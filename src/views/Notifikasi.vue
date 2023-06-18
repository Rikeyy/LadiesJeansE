<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
  <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
    <SidebarManager/>
    <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
      <h1 class="text-xl font-semibold">Notifikasi Stok</h1>
      <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Notifikasi Tambahan Stok</span></h2>
      <div class="bg-white shadow-sm w-[90%] mt-[2%] pb-[3%]">
        <div class="w-[92%] relative overflow-y-auto shadow-xl min-h-[550px] pt-[3%] mx-auto">
          <table class="m-auto text-[13px] w-full">
            <thead class="text-gray-700 uppercase bg-sky-400 dark:text-white text-center">
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
            <tbody v-if="filteredProdukList.length > 0">
              <tr v-for="produk in filteredProdukList" :key="produk.id" class="bg-white border-b border-gray-500 text-center w-full">
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
                  <i class="fa-solid fa-x text-lg text-green-500 cursor-pointer" @click="onCrossButtonClick(produk.id)"></i>
                  <i class="fa-solid fa-check text-lg text-green-500 cursor-pointer" @click="onCheckButtonClick(produk.id)"></i>
                </td>
              </tr> 
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="7" class="text-gray-500 font-xl text-center">Tiada notifikasi tambahan stok.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        <ToastMessage ref="toast"/>
  </div>
</template>

<style>
  /* Override the default styles */
  .swal2-confirm:focus {
    box-shadow: 0 0 0 3px red !important;
  }
</style>

<script>
import { ref, watch } from 'vue';
import axios from 'axios';
import ToastMessage from '../components/ToastMessage.vue';
import Swal from 'sweetalert2';


export default {
  data() {
    return {
      filteredProdukList: [],
    };
  },
  async mounted() {
    await this.fetchProdukData();
  },
  methods: {
    async fetchProdukData() {
      try {
        const response = await axios.get('https://lje-ms-backend.onrender.com/kuantiti');
        this.filteredProdukList = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
    async onCrossButtonClick(id) {
  try {
    const confirmed = await Swal.fire({
      title: 'Pasti?',
      text: 'Adakah anda pasti untuk membatalkan penambahan kuantiti produk ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Pasti',
      cancelButtonText: 'Batal',
      customClass: {
      icon: 'text-blue-500', // Customize the icon color
    },
    confirmButtonColor: '#e53e3e', // Set the confirm button color to red
    });

    if (confirmed.isConfirmed) {
      const response = await axios.put(`https://lje-ms-backend.onrender.com/pangkah/${id}`, { Kuantiti_Tambahan: 0 });
      console.log(response.data);
      await this.fetchProdukData();
      const message = 'Batal Tambah Kuantiti Produk Berjaya';
      const status = 'Berjaya';
      this.$refs.toast.toast(message, status, 'success');
    }
  } catch (error) {
    console.error('Error updating produk:', error);
  }
},

    async onCheckButtonClick(id) {
      try {
        const response = await axios.put(`https://lje-ms-backend.onrender.com/kuantiti/${id}`);
        console.log(response.data);
        await this.fetchProdukData();
         const message = 'Tambah Kuantiti Produk Berjaya';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
      } catch (error) {
        console.error('Error updating produk:', error);
      }
    },
  },
};
</script>
