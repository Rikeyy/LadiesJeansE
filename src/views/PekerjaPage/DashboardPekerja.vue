<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex">
        <SidebarWorker/>

        <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

        <div v-else class="ml-[22%] mt-[2.7%] w-[75%] h-[90%] max-lg:w-full max-lg:ml-[10%] max-lg:px-[5%] max-lg:mt-[5%]">
            <div >
                <h1 class="text-xl font-semibold">Halaman Utama</h1>
                <h2 class="text-md text-gray-500">Halaman Utama - <span class="text-sky-400">Papan Pemuka</span></h2>
            </div>
            
            <div class="flex justify-around mt-[2%] ">

                <div  class="w-full h-60 bg-[#cbf0f4] rounded-lg shadow-lg flex justify-center">
                    <img :src="workerData.GambarPekerja" class="h-[80%] rounded-xl shadow-md shadow-sky-500 ml-[3%] mt-[1.5%] mr-[4%] max-lg:mt-[3%]"/>
                    <div>
                        <table class="mt-[16%] max-lg:mt-[20%]">
                            <tr class="font-bold text-xl ">
                                <td>
                                    {{ workerData.Nama_Pekerja }}
                                </td>
                            </tr>
                            <tr class="font-semibold text-lg">
                                <td>
                                    {{ workerData.Staf_ID }}
                                </td>
                            </tr>
                            <tr class="font-semibold text-md text-gray-500">
                                <td class="pt-[3%]">
                                    {{ workerData.Peranan_Pekerja }}
                                </td>
                            </tr>
                            <tr class="font-semibold text-md text-gray-500">
                                <td>
                                    {{ workerData.Telefon_Pekerja }}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="h-52 w-1 bg-sky-300 my-auto ml-[2%] max-lg:ml-[0%]"></div>
                    <div>
                        <table class="ml-[5%] mt-[8%] max-lg:mt-[15%]">
                            <tr>
                                <td class="font-semibold text-md">
                                    Alamat:
                                </td>
                            </tr>
                            <tr>
                                <td class="pb-[2%]">
                                    {{ workerData.Alamat_Pekerja }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-md">
                                    Emel:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ workerData.Emel_Pekerja }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
       
            </div>

            <div  class="mt-[3%] bg-white w-full h-[51%] px-[2%] pb-[3%] max-lg:h-[65vh]">
                <div class="p-5 text-[17px] font-semibold text-left bg-white ">
                    Promosi Produk
                    <p class="mt-1 font-normal text-sm text-gray-400">Sila fahamkan dan hafal promosi-promosi yang ada bagi tujuan jualan.</p>
                </div>
                <div class="relative overflow-y-auto shadow-xl h-[320px] m-auto max-lg:h-[650px] max-lg:px-[1%] ">
            <table class="w-full text-[13px] text-left">
        
            <thead class="uppercase bg-sky-400 text-white text-center sticky top-0 z-10">
                <tr>
                <th scope="col" class="py-3 w-[10%]">
                    ID Promosi
                </th>
                <th scope="col" class="py-3">
                    Nama Promosi
                </th>
                <th scope="col" class="py-3">
                    Deskripsi promosi
                </th>
                <th scope="col" class="py-3">
                    Harga Promosi (RM)
                </th>
                <th scope="col" class="py-3">
                    Status Promosi
                </th>
                <th scope="col" class="py-3">
                    Kategori Terlibat
                </th>
                </tr>
            </thead>
            <tbody v-if="promosiList.length > 0 && promosiList.length <6">
                <tr class="bg-white border-b border-gray-500 text-center" v-for="promosi in promosiList">
                <td scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ promosi.ID_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Nama_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Deskripsi_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Harga_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Status_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Kategori.Nama_Kategori }}
                </td>
                </tr>
                <tr>
                <td colspan="6"><p class="text-center py-5 text-gray-500">Tiada lagi promosi yang terdaftar.</p></td>
                </tr>
            </tbody>
            <tbody v-else-if="promosiList.length > 0">
                <tr class="bg-white border-b border-gray-500 text-center" v-for="promosi in promosiList">
                <td scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ promosi.Nama_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Deskripsi_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Harga_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Status_Promosi }}
                </td>
                <td class="py-4">
                    {{ promosi.Kategori.Nama_Kategori }}
                </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                <td colspan="6"><p class="text-center py-5 text-gray-500">Tiada promosi terdaftar.</p></td>
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
      promosiList: [],
      data2 : [],
      selectedPromosi: null,
      updateID: "",
      loading: false,
      workerData: "",
    };
  },
  mounted() {
    this.fetchPromotionData();
    this.fetchWorkerData();
  },
  methods: {
    fetchPromotionData() {
        this.loading = true; 
      axios
        .get('https://lje-ms-backend.onrender.com/promosi')
        .then(response => {
          this.promosiList = response.data;
          console.log(this.promosiList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        })
        .finally(() => {
          this.loading = false; 
        });
    },
    fetchWorkerData() {
        this.loading = true; 

      // Fetch worker data based on stafID from session storage
      const stafID = sessionStorage.getItem('stafID');

      axios
        .get(`https://lje-ms-backend.onrender.com/dash/${stafID}`)
        .then(response => {
          this.workerData = response.data;
          console.log(this.workerData);
        })
        .catch(error => {
          console.error('Error fetching worker data:', error);
        })
        .finally(() => {
          this.loading = false; 
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

