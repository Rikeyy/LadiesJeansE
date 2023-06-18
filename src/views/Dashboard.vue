<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-[75%] h-[90%]">
            <div >
                <h1 class="text-xl font-semibold">Halaman Utama</h1>
                <h2 class="text-md text-gray-500">Halaman Utama - <span class="text-sky-400">Papan Pemuka</span></h2>
            </div>
            
            <div class="flex justify-around mt-[2%] ">
                <div  class="w-[30%] h-[250px] bg-[#f7d9e3] rounded-lg shadow-lg">
                    <h2 class="text-center text-lg font-semibold mt-[3%]">Bilangan Pekerja Terdaftar :</h2>
                    <div class="flex">
                        <div class="h-[160px]  w-[60%] mt-[5%]">
                            <canvas class="h-[30%]" id="workerChart"></canvas>
                        </div>
                        <div class="text-9xl h-fit font-semibold my-auto ml-[10%] pt-[3%]">
                            {{workerList.length}}
                        </div>
                    </div>
                </div>

                <div  class="w-[30%] bg-[#cbf0f4] rounded-lg shadow-lg">
                    <h2 class="text-center text-lg font-semibold mt-[3%]">Bilangan Produk Terdaftar :</h2>
                    <div class="flex">
                        <div class="h-[160px]  w-[60%] mt-[5%]">
                            <canvas class="h-[30%]" id="produkChart"></canvas>
                        </div>
                        <div class="text-9xl h-fit font-semibold my-auto ml-[10%] pt-[3%]">
                            {{produkList.length}}
                        </div>
                    </div>
                </div>

                <div  class="w-[30%] bg-[#cbd4f4] rounded-lg shadow-lg">
                    <h2 class="text-center text-lg font-semibold mt-[3%]">Bilangan Promosi Terdaftar :</h2>
                    <div class="flex">
                        <div class="h-[160px]  w-[60%] mt-[5%]">
                            <canvas class="h-[30%]" id="promosiChart"></canvas>
                        </div>
                        <div class="text-9xl h-fit font-semibold my-auto ml-[10%] pt-[3%]">
                            {{ promosiList.length }}
                        </div>
                    </div>
                </div>           
            </div>

            <div  class="mt-[3%] bg-white w-full h-[55%] px-[2%] pb-[3%] ">
                <div class="p-5 text-[17px] font-semibold text-left text-red-500 bg-white ">
                    Amaran Stok Produk
                    <p class="mt-1 font-normal text-sm text-gray-400">Senarai produk yang mempunyai kuantiti yang sedikit di dalam inventori.</p>
                </div>
                <div class=" h-[350px] relative overflow-y-auto shadow-xl mx-auto">
                        <table class=" w-full text-[13px] text-left">
                           <thead class=" uppercase bg-sky-400 text-white text-center sticky top-0 z-10 ">
                               <tr>
                                   <th scope="col" class="px-6 py-3 ">
                                       Bilangan
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       ID Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Nama Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Deskripsi Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Kategori Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Saiz
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Kuantiti
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Amaran
                                   </th>
                               </tr>
                           </thead>
                           <tbody v-if="saleList.length>0">
                               <tr class="bg-red-100 border-b border-gray-500 text-center" v-for="(sale,index) in saleList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[3%]">
                                       {{ index + 1 }}
                                   </th>
                                   <td class="px-6 py-4 w-[5%]">
                                       {{ sale.Produk_ID }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ sale.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[20%]">
                                       {{ sale.Deskripsi_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[20%]">
                                       {{ sale.Kategori.Nama_Kategori }}
                                   </td>
                                   <td class="px-6 py-4  w-[5%]">
                                       {{ sale.Saiz_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[5%]">
                                       {{ sale.Kuantiti_Produk }}
                                   </td>
                                   <td class="px-6 py-3 w-[11%]">
                                    <div class="tooltip z-10" data-tooltip="Kuantiti Produk Rendah !">
                                      <i class="fa-solid fa-triangle-exclamation text-xl text-red-500"></i>
                                    </div>
                                   </td>
                               </tr>          
                           </tbody>
                           <tbody v-else>
                            <tr>
                              <td colspan="8" class="text-center">Tiada notifikasi atau amaran stok untuk masa ini.</td>
                            </tr>
                           </tbody>
                       </table>
                    </div>
            </div>
        </div>
    </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

.tooltip:hover::before {
  visibility: visible;
  opacity: 1;
}
</style>

<script>
import axios from 'axios';
import { Chart } from 'chart.js/auto';


export default {
  data() {
    return {
        workerList: [],
        produkList: [],
        promosiList: [],
        chart: null,
        saleList: [],
        days: Array.from({ length: 31 }, (_, i) => i + 1), 
        months: Array.from({ length: 12 }, (_, i) => i + 1), 
    };
  },
  mounted() {
    this.fetchrole();
    this.fetchKategori();
    this.fetchStatuses();
    this.fetchWorkerData();
    this.fetchProductData();
    this.fetchPromotionData();
  },
  created() {
    this.fetchSalesData();
  },
  methods: {
    fetchSalesData() {
      axios
        .get('https://lje-ms-backend.onrender.com/amaran')
        .then(response => {
            this.saleList = response.data;
            console.log(this.saleList);

        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    fetchPromotionData() {
      axios
        .get('https://lje-ms-backend.onrender.com/promosi')
        .then(response => {
          this.promosiList = response.data;
          console.log(this.promosiList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    fetchWorkerData() {
      axios.get('https://lje-ms-backend.onrender.com/')
        .then(response => {
          this.workerList = response.data;
        })
        .catch(error => {
          console.error('Error fetching worker data:', error);
        });
    },
    fetchProductData() {
      axios.get('https://lje-ms-backend.onrender.com/produk')
        .then(response => {
          this.produkList = response.data;
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    },
    fetchrole() {
      axios
        .get('https://lje-ms-backend.onrender.com/role')
        .then(response => {
          const workerData = this.calculateWorkerRolePercentage(response.data);
          this.createWorkerChart(workerData);
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
    createWorkerChart(workerData) {
      new Chart('workerChart', {
        type: 'pie',
        data: {
          labels: workerData.labels,
          datasets: [
            {
              data: workerData.percentages,
              backgroundColor: [
                '#fb7185', 
                '#fecdd3', 
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
          legend: {
            display: false, 
          },
        },
        },
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
      this.createProdukChart(kategoriData);
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
createProdukChart(kategoriData) {
  const percentages = this.calculateKategoriRolePercentage(kategoriData).percentages;
  const numKategori = kategoriData.length;

  const labels = kategoriData.map(kategori => kategori.kategori); // Extract the 'kategori' property

  const colorPalette = [
    '#0284c7',
    '#38bdf8',
    '#7dd3fc',
    '#bae6fd',
    '#bfdbfe',
    '#c7d2fe',
    '#67e8f9',
  ];

  if (this.chart) {
    this.chart.destroy();
  }

  this.chart = new Chart('produkChart', {
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
      plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
    },
  });
},
fetchStatuses() {
    axios
      .get('https://lje-ms-backend.onrender.com/status')
      .then(response => {
        const statusData = this.calculateStatusPercentage(response.data);
        this.createPromosiChart(statusData);
      })
      .catch(error => {
        console.error('Error fetching status data:', error);
      });
  },

  calculateStatusPercentage(statusData) {
    const statuses = ['Aktif', 'Tidak Aktif']; // Update with your actual statuses
    const totalStatuses = statusData.length;

    const statusCounts = statuses.map(status =>
      statusData.filter(item => item.Status_Promosi === status).length
    );

    const percentages = statusCounts.map(count =>
      ((count / totalStatuses) * 100).toFixed(2)
    );

    return {
      labels: statuses,
      percentages: percentages,
    };
  },

  createPromosiChart(statusData) {
    new Chart('promosiChart', {
      type: 'pie',
      data: {
        labels: statusData.labels,
        datasets: [
          {
            data: statusData.percentages,
            backgroundColor: [
              '#7c3aed', // Color for status 1
              '#c4b5fd', // Color for status 2
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });
  },


    
  },
};

</script>
