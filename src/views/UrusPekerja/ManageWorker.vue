<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
    import ToastMessage from '../../components/ToastMessage.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] pt-[2.7%] w-[75%] h-[90%]">
            <div >
                <h1 class="text-xl font-semibold">Pengurusan Pekerja</h1>
                <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Pengurusan Pekerja</span></h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex flex-col justify-between w-[30%] h-full">
                    <div  class="h-[25%] bg-white rounded-lg shadow-sm mb-8 pb-2">
                        <h1 class="font-semibold text-md pl-[4%] mt-[2%] mb-[2%]">Bilangan Pekerja Terdaftar :</h1>
                        <h2 class="text-6xl font-bold text-center">{{ workerList.length }}</h2>
                    </div>

                    <div  class="h-[70%] bg-white pb-9 shadow-sm rounded-xl">
                        <h1 class="p-5 text-md font-semibold text-left bg-white ">Komposisi Pekerja</h1>
                        <div class="h-[230px]">
                            <canvas id="workerChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="w-[65%]">
                    <div class="h-full w-full bg-white shadow-sm overflow-y-auto">
                        <h2 class="py-5 pl-[5%] text-md font-semibold text-left bg-white ">Senarai Gaji Pekerja</h2>
                        <div class="h-[75%] ml-[5%] overflow-y-auto relative w-[90%] shadow-xl">
                        <table class="w-full text-[13px] text-left mx-auto">
                            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-sky-400 dark:text-white text-center sticky top-0 z-10">
                            <tr>
                                <th scope="col" class="px-4 py-3">
                                Nama Pekerja
                                </th>
                                <th scope="col" class="px-4 py-3">
                                ID Pekerja
                                </th>
                                <th scope="col" class="px-4 py-3">
                                Peranan
                                </th>
                                <th scope="col" class="px-4 py-3">
                                Gaji (Per Hari)
                                </th>
                            </tr>
                            </thead>
                            
                            <tbody v-if="workerList.length > 0 && workerList.length < 6">
                                <tr class="bg-white border-b border-gray-500 text-center" v-for="worker in workerList" :key="worker.Staf_ID">
                                <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ worker.Nama_Pekerja }}
                                </th>
                                <td class="px-4 py-4">
                                {{ worker.Staf_ID }}
                                </td>
                                <td class="py-4">
                                {{ worker.Peranan_Pekerja }}
                                </td>
                                <td class="py-4">
                                RM {{ worker.Gaji_Pekerja }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                <p class="text-center py-5 text-gray-500">Daftar lagi pekerja untuk melihat yang lain.</p>
                                </td>
                            </tr>
                            </tbody>

                            <tbody v-else-if="workerList.length > 0 " class="h-3 overflow-y-auto">
                            <tr class="bg-white border-b border-gray-500 text-center" v-for="worker in workerList" :key="worker.Staf_ID">
                                <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ worker.Nama_Pekerja }}
                                </th>
                                <td class="px-4 py-4">
                                {{ worker.Staf_ID }}
                                </td>
                                <td class="py-4">
                                {{ worker.Peranan_Pekerja }}
                                </td>
                                <td class="py-4">
                                RM {{ worker.Gaji_Pekerja }}
                                </td>
                            </tr>
                            </tbody>

                            <tbody v-else>
                            <tr>
                                <td colspan="4">
                                <p class="text-center py-5 text-gray-500">Tiada pekerja terdaftar.</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>

             <div  class="mt-[3%] bg-white w-full h-[40%] px-[2%] pb-[4%]  ">
                <div class="p-7 text-md font-semibold text-left bg-white shadow-sm">
                        <div class="flex justify-between">
                            <div>
                            Senarai Pekerja
                            <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai maklumat pekerja.</p>
                        </div>
                        <RouterLink to="/daftar-pekerja" class="w-[20%]">
                        <div class="bg-[#d3f9d6] rounded-3xl shadow-lg hover:scale-105 duration-200">
                            <div class="text-center py-3 flex pt-[6%]">
                                <i class="fa-solid fa-plus bg-green-300 rounded-full px-[6px] py-[6px] text-green-600 ml-[17%]"></i>
                                <p class="text-sm font-normal ml-3 mt-[2px]">Daftar Pekerja Baru</p>
                            </div>
                        </div>
                        </RouterLink>
                        </div>
                        
                    </div> 
                    <div class=" h-[415px] relative shadow-xl overflow-y-auto">
                <table class="w-full text-[13px] text-left ">
                    
                    <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-400 dark:text-white text-center sticky top-0 z-10">
                        <tr>
                          <th scope="col" class="px-4 py-3">
                                Bilangan
                            </th>
                            <th scope="col" class="px-4 py-3">
                                Gambar Pekerja
                            </th>
                            <th scope="col" class="px-4 py-3">
                                Nama Pekerja
                            </th>
                            <th scope="col" class="px-4 py-3">
                                ID Pekerja
                            </th>
                            <th scope="col" class="py-3">
                                Nombor Kad Pengenalan
                            </th>
                            <th scope="col" class="px-4 py-3">
                                Emel
                            </th>
                            <th scope="col" class="px-4 py-3">
                                Nombor Telefon
                            </th>
                            <th scope="col" class="px-4 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="workerList.length > 0 && workerList.length < 6">
                        <tr class="bg-white border-b border-gray-500 text-center" v-for="(worker,index) in workerList">
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap w-[5%]">
                                {{ index + 1}}
                            </td>
                            <td class="px-4 py-4 w-[10%]">
                            <img class="w-[80px] mx-auto" :src="worker.GambarPekerja"/>
                            </td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%] ">
                                {{ worker.Nama_Pekerja }}
                            </td>
                            <td class="px-4 py-4 w-[10%]">
                                {{ worker.Staf_ID }}
                            </td>
                            <td class="px-4 py-4 w-[15%]">
                                {{ worker.NoKP_Pekerja }}
                            </td>
                            <td class="px-4 py-4 w-[15%]">
                                {{ worker.Emel_Pekerja }}
                            </td>
                            <td class="px-4 py-4 w-[15%]">
                                {{ worker.Telefon_Pekerja }}
                            </td>
                            <td class="px-4 py-4 flex justify-around mt-[20%] ">
                              <div>
                                <RouterLink :to="'/update-pekerja/' + worker.id">
                                    <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                </RouterLink>
                              </div>
                                <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteWorker(worker.id)"></i>
                            </td>
                        </tr>                  
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">
                                <p class="text-center py-5 text-gray-500">Tiada pekerja terdaftar.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>       
          <ToastMessage ref="toast"/>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import Swal from 'sweetalert2';

export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      workerList: [],
      pekerja: [],
      selectedWorker: null,
      updateID: "",
      chart: null
    };
  },
  mounted() {
    this.fetchWorkerData();
    this.fetchrole();

  },
  methods: {
    fetchWorkerData() {
      axios.get('https://lje-ms-backend.onrender.com/')
        .then(response => {
          this.workerList = response.data;
          this.sortWorkerList();
        })
        .catch(error => {
          console.error('Error fetching worker data:', error);
        });
    },
    sortWorkerList() {
      this.workerList.sort((a, b) => a.Nama_Pekerja.localeCompare(b.Nama_Pekerja));
    },
    deleteWorker(worker) {
  this.updateID = worker;

  Swal.fire({
  title: 'Pasti?',
  text: 'Adakah anda pasti untuk memadam maklumat pekerja ini?',
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
        .delete(`https://lje-ms-backend.onrender.com/` + worker)
        .then(response => {
          const index = this.workerList.findIndex(w => w.id === worker);
          if (index !== -1) {
            this.workerList.splice(index, 1);
          }
          console.log('Worker deleted successfully.');

          const message = 'Maklumat Pekerja Berjaya Di Padam';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
        })
        .catch(error => {
          console.error('Error deleting worker:', error);
        });
    }
  });
},
    fetchrole() {
      axios
        .get('https://lje-ms-backend.onrender.com/role')
        .then(response => {
          const workerData = this.calculateWorkerRolePercentage(response.data);
          this.createPieChart(workerData);
        })
        .catch(error => {
          console.error('Error fetching worker data:', error);
        });
    },
    calculateWorkerRolePercentage(workerData) {
      const roles = ['Pengurus', 'Pekerja'];
      const totalWorkers = workerData.length;

      const roleCounts = roles.map(role =>
        workerData.filter(worker => worker.Peranan_Pekerja === role).length
      );

      const percentages = roleCounts.map(count =>
        ((count / totalWorkers) * 100).toFixed(2)
      );

      return {
        labels: roles,
        percentages: percentages,
      };
    },
    createPieChart(workerData) {
      new Chart('workerChart', {
        type: 'pie',
        data: {
          labels: workerData.labels,
          datasets: [
            {
              data: workerData.percentages,
              backgroundColor: [
                '#FF6384', // Color for role 1
                '#36A2EB', // Color for role 2
                '#FFCE56', // Color for role 3
              ],
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


<style>
  /* Override the default styles */
  .swal2-confirm:focus {
    box-shadow: 0 0 0 3px red !important;
  }
</style>