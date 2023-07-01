<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

        <div v-else class="ml-[22%] mt-[2.7%] w-[75%] h-[90%]">
            <div>
                <h1 class="text-xl font-semibold">Pengurusan Inventori</h1>
                <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Pengurusan Inventori</span></h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex flex-col justify-between w-[30%] h-full">
                    <div class="h-[25%] bg-white rounded-lg shadow-sm mb-8 pb-2">
                        <h1 class="font-semibold text-md pl-[4%] mt-[2%] mb-[2%]">Bilangan Produk Terdaftar :</h1>
                        <h2 class="text-6xl font-bold text-center">{{ produkList ? produkList.length : 0 }}</h2>
                    </div>

                    <div class="h-[70%] bg-white pb-9 shadow-sm rounded-xl">
                        <h1 class="p-5 text-md font-semibold text-left bg-white ">Komposisi Produk Mengikut Kategori</h1>
                        <div class="h-[230px]">
                            <canvas id="workerChart"></canvas>
                        </div>                    
                    </div>
                </div>

                <div class="w-[65%]">
                    <div class="h-full w-full bg-white">
                        <RouterView></RouterView>
                    </div>
                </div>
            </div>

             <div class="mt-[3%] bg-white w-full shadow-sm h-[51%] pt-[0.7%] pb-[4%] ">
                 <div class="p-5 w-[95%] text-md font-semibold text-left bg-white mx-auto "> 
                     <div class="flex justify-between">
                             <div class="text-md">
                                 Senarai Produk
                             <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai produk yang ada di dalam Inventori.</p>
                         </div>
                         <RouterLink to="/daftar-produk" class="w-[20%]">
                         <div class="bg-[#d3f9d6] rounded-3xl shadow-lg hover:scale-105 duration-200">
                             <div class="text-center py-3 flex pt-[6%]">
                                 <i class="fa-solid fa-plus bg-green-300 rounded-full px-[6px] py-[6px] text-green-600 ml-[17%]"></i>
                                 <p class="text-sm font-normal ml-3 mt-[2px]">Daftar Produk Baru</p>
                             </div>
                         </div>
                         </RouterLink>
                         </div>
                    </div>
                    <div class=" h-[415px] w-[93%] relative overflow-y-auto shadow-xl mx-auto mt-[1%]">
                        <table class=" w-full text-[13px] text-left">
                           <thead class=" text-gray-700 uppercase bg-sky-400 dark:text-white text-center sticky top-0 z-10 ">
                               <tr>
                                   <th scope="col" class="px-6 py-3">
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
                                    <th scope="col" class="px-6 py-3 w-[10%]">
                                        Harga (RM)
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Saiz
                                    </th>
                                    <th scope="col" class="px-6 py-3 w-[10%]">
                                      Aksi
                                    </th>
                               </tr>
                           </thead>
                           <tbody v-if="produkList.length > 0 && produkList.length < 6">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="produk in produkList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                       {{ produk.Produk_ID }}
                                   </th>
                                   <td class="px-6 py-4 w-[15%]">
                                       {{ produk.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4 w-[25%]">
                                     {{ produk.Deskripsi_Produk }}
                                    </td>
                                    <td class="px-6 py-3">
                                      {{ produk.Kategori.Nama_Kategori}}
                                    </td>
                                    <td class="px-6 py-4  w-[5%]">
                                        {{ produk.Harga_Produk }}
                                    </td>
                                    <td class="px-6 py-4  w-[5%]">
                                        {{ produk.Saiz_Produk }}
                                    </td>
                                   <td class="px-6 py-4 flex justify-around">
                                      <RouterLink :to="'/update-product/' + produk.id">
                                         <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                     </RouterLink>
                                       <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteProduct(produk.Produk_ID)"></i>
                                   </td>
                               </tr>   
                               <tr>
                                <td colspan="7"><p class="text-center py-5 text-gray-500">Daftar lagi produk untuk melihat maklumat produk yang lain.</p></td>
                               </tr>                 
                           </tbody>
                           <tbody v-else-if="produkList.length > 0">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="produk in produkList">
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
                                      {{ produk.Kategori.Nama_Kategori}}
                                    </td>
                                    <td class="px-6 py-4  w-[15%]">
                                        {{ produk.Harga_Produk }}
                                    </td>
                                    <td class="px-6 py-4  w-[15%]">
                                        {{ produk.Saiz_Produk }}
                                    </td>
                                   <td class="px-6 py-4 flex justify-around">
                                     <RouterLink :to="'/update-product/' + produk.id">
                                         <i class="fa-solid fa-pen-to-square text-lg text-black cursor-pointer"></i>
                                     </RouterLink>
                                       <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteProduct(produk.Produk_ID)"></i>
                                   </td>
                               </tr>                   
                           </tbody>
                           <tbody v-else>
                                <tr>
                                    <td colspan="7"><p class="text-center py-5 text-gray-500">Tiada produk terdaftar</p></td>
                                </tr> 
                           </tbody>
                       </table>
                    </div>
            </div>

            
            <ToastMessage ref="toast"/>

        </div>
    </div>
</template>

<style>
  /* Override the default styles */
  .swal2-confirm:focus {
    box-shadow: 0 0 0 3px red !important;
  }
</style>

<script>
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import ToastMessage from '../../components/ToastMessage.vue';
import Swal from 'sweetalert2';

export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      produkList: [],
      data2: [],
      selectedProduct: null,
      updateID: "",
      loading: false,
      chart: null,
    };
  },
  mounted() {
    this.fetchProductData();
    this.fetchKategori();
  },
  methods: {
    fetchProductData() {
      axios.get('https://lje-ms-backend.onrender.com/produk')
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

  Swal.fire({
    title: 'Pasti?',
    text: 'Adakah anda pasti untuk memadam maklumat produk ini?',
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
      this.loading = true; 
      axios
        .delete(`https://lje-ms-backend.onrender.com/produk/${productId}`)
        .then((response) => {
          const index = this.produkList.findIndex((p) => p.Produk_ID === productId);
          if (index !== -1) {
            this.produkList.splice(index, 1);
          }
          const message = 'Maklumat Produk Berjaya Di Padam';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
        })
        .catch((error) => {
          const message = 'Error deleting product: ' + error.message;
          const status = 'Gagal';
          this.$refs.toast.toast(message, status, 'error');
        })
        .finally(() => {
          this.loading = false; 
          this.fetchProdukList(); // Refresh the data after deletion
        });
    }
  });
},
    fetchKategori() {

  axios
    .get('https://lje-ms-backend.onrender.com/chart')
    .then(response => {
      const kategoriData = response.data.map(item => ({
        kategori: item.Kategori.Nama_Kategori,
        totalKuantiti: item.Total_Kuantiti,
      }));
      this.createPieChart(kategoriData);
    })
    .catch(error => {
      console.error('Error fetching Kategori data:', error);
    });
},
calculateKategoriRolePercentage(kategoriData) {
  const totalKuantiti = kategoriData.reduce((total, kategori) => total + kategori.totalKuantiti, 0);

  const percentages = kategoriData.map(kategori =>
    ((kategori.totalKuantiti / totalKuantiti) * 100).toFixed(2)
  );

  return {
    labels: kategoriData.map(kategori => kategori.kategori),
    percentages: percentages,
  };
},
createPieChart(kategoriData) {
  const percentages = this.calculateKategoriRolePercentage(kategoriData).percentages;
  const numKategori = kategoriData.length;

  const labels = kategoriData.map(kategori => kategori.kategori); // Extract the 'kategori' property

  const colorPalette = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    // Add more colors as needed
  ];

  if (this.chart) {
    this.chart.destroy();
  }

  this.chart = new Chart('workerChart', {
    type: 'pie',
    data: {
      labels: labels, // Use the extracted labels
      datasets: [
        {
          data: percentages,
          backgroundColor: colorPalette.slice(0, numKategori),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
},
  },
};

</script>
