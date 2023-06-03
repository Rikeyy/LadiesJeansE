<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] pt-[2.7%] w-[75%] h-[90%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold">Pengurusan Pekerja</h1>
                <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Pengurusan Pekerja</span></h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex flex-col justify-between w-[30%] h-full">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[25%] white mb-8 pb-2">
                        <h1 class="font-semibold pl-[4%] mt-[2%] mb-[2%]">Bilangan Pekerja Terdaftar :</h1>
                        <h2 class="text-6xl font-bold text-center">{{ workerList.length }}</h2>
                    </div>

                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[70%] bg-white pb-9">
                        <h1 class="p-5 text-lg font-semibold text-left bg-white ">Komposisi Pekerja</h1>
                        <img src="../../assets/Screenshot 2023-05-12 025806.png" class="m-auto w-3/5 white">
                    </div>
                </div>

                <div class="w-[65%]">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-full w-full bg-white overflow-y-auto">
                        <h2 class="py-5 pl-[5%] text-lg font-semibold text-left bg-white ">Senarai Gaji Pekerja</h2>
                        <div class="h-[75%] ml-[5%] overflow-y-auto relative w-[90%] jadual">
                        <table class="w-full text-sm text-left mx-auto">
                            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center sticky top-0 z-10">
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

             <div data-aos-duration="2000" data-aos="fade-up" class="mt-[3%] bg-white w-full h-[40%] px-[2%] pb-[4%]  ">
                <div class="p-7 text-lg font-semibold text-left bg-white ">
                        <div class="flex justify-between">
                            <div>
                            Senarai Pekerja
                            <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai maklumat pekerja.</p>
                        </div>
                        <RouterLink to="/daftar-pekerja" class="w-[20%]">
                        <div class="hijau">
                            <div class="text-center py-3 flex pt-[6%]">
                                <i class="fa-solid fa-plus bg-green-300 rounded-full px-[6px] py-[6px] text-green-600 ml-[17%]"></i>
                                <p class="text-sm font-normal ml-3 mt-[2px]">Daftar Pekerja Baru</p>
                            </div>
                        </div>
                        </RouterLink>
                        </div>
                        
                    </div> 
                    <div class=" h-[415px] relative jadual overflow-y-auto">
                <table class="w-full text-sm text-left ">
                    
                    <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center sticky top-0 z-10">
                        <tr>
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
                        <tr class="bg-white border-b border-gray-500 text-center" v-for="worker in workerList">
                            <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {{ worker.Nama_Pekerja }}
                            </th>
                            <td class="px-4 py-4">
                                {{ worker.Staf_ID }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.NoKP_Pekerja }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.Emel_Pekerja }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.Telefon_Pekerja }}
                            </td>
                            <td class="px-4 py-4 flex justify-around">
                                <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteWorker(worker.id)"></i>
                                <RouterLink :to="'/update-pekerja/' + worker.id">
                                    <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                </RouterLink>
                            </td>
                        </tr>    
                        <tr>
                                <td colspan="7">
                                <p class="text-center py-5 text-gray-500">Daftar lagi pekerja untuk melihat yang lain.</p>
                                </td>
                            </tr>                 
                    </tbody>
                    <tbody v-else-if="workerList.length > 0">
                        <tr class="bg-white border-b border-gray-500 text-center" v-for="worker in workerList">
                            <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {{ worker.Nama_Pekerja }}
                            </th>
                            <td class="px-4 py-4">
                                {{ worker.Staf_ID }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.NoKP_Pekerja }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.Emel_Pekerja }}
                            </td>
                            <td class="px-4 py-4">
                                {{ worker.Telefon_Pekerja }}
                            </td>
                            <td class="px-4 py-4 flex justify-around">
                                <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteWorker(worker.id)"></i>
                                <RouterLink :to="'/update-pekerja/' + worker.id">
                                    <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                </RouterLink>
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

            

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      workerList: [],
      pekerja: [],
      selectedWorker: null,
      updateID: ""
    };
  },
  mounted() {
    this.fetchWorkerData();
  },
  methods: {
    fetchWorkerData() {
      axios.get('http://localhost:3001/')
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

      axios.delete(`http://localhost:3001/` + worker)
        .then(response => {
          const index = this.workerList.findIndex(w => w.id === worker);
          if (index !== -1) {
            this.workerList.splice(index, 1);
          }
          console.log('Worker deleted successfully.');
        })
        .catch(error => {
          console.error('Error deleting worker:', error);
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