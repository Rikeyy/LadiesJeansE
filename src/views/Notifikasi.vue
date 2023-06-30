<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
  <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
    <SidebarManager/>

    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

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
   .loader {
    position: relative;
    width: 120px;
    height: 140px;
    background-image: radial-gradient(circle 30px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    linear-gradient(#FFF 20px, transparent 0);
    background-position: center 127px , 94px 102px , 16px 18px, center 114px;
    background-size: 60px 60px, 10px 10px , 10px 10px , 4px 14px;
    background-repeat: no-repeat;
    z-index: 10;
    perspective: 500px;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius:50%;
    border: 3px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%) rotate(-45deg);
    border-right-color: transparent;
    box-sizing: border-box;
}
  .loader::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg) ;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    border: 7px solid #0ea5e9;
    border-radius:50%;
    animation: rotate 0.5s linear infinite;
  }

@keyframes rotate {
  to{transform: translate(-50%, -55%) rotate(-45deg) rotateY(360deg)   }
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
      loading: false,
    };
  },
  async mounted() {
    await this.fetchProdukData();
  },
  methods: {
    async fetchProdukData() {
      this.loading = true; 
      try {
        const response = await axios.get('https://lje-ms-backend.onrender.com/kuantiti');
        this.filteredProdukList = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
      finally {
          this.loading = false; 
        };
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
      this.loading = true; 
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
  finally {
          this.loading = false; 
        };
},

    async onCheckButtonClick(id) {
      try {
              this.loading = true; 

        const response = await axios.put(`https://lje-ms-backend.onrender.com/kuantiti/${id}`);
        console.log(response.data);
        await this.fetchProdukData();
         const message = 'Tambah Kuantiti Produk Berjaya';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
      } catch (error) {
        console.error('Error updating produk:', error);
      }
      finally {
          this.loading = false; 
        };
    },
  },
};
</script>
