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

    <div class="ml-[22%] pt-[2.7%] w-[75%] h-[90%]">
      <div>
        <h1 class="text-xl font-semibold">Pengurusan Promosi</h1>
        <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Pengurusan Promosi</span></h2>
      </div>

      <div class="flex justify-between mt-[2%]">
        <div class="flex justify-center w-full h-full text-center">
          <div class="flex-col pr-[4%] w-[25%]">
            <div class="rounded-lg shadow-sm h-[43%] bg-white mb-[13.5%] pt-[]">
              <h1 class="font-semibold text-md pb-3 pt-4">Bilangan Promosi Terdaftar:</h1>
              <h2 class="font-semibold text-6xl">{{ promosiList.length }}</h2>
            </div>
            <div class="rounded-lg shadow-sm h-[43%] bg-white mb-[12%] pt-[]">
              <h1 class="font-semibold text-md pb-3 pt-4">Bilangan Promosi Aktif:</h1>
              <h2 class="font-semibold text-6xl">{{ activepromoList.length }}</h2>
            </div>
          </div>

          <div class="w-[30%] bg-white shadow-sm rounded-lg h-[320px] pt-[1%] pb-[5%]">
            <h1 class="font-semibold text-md pb-[3%]">Komposisi Status Promosi</h1>
            <canvas id="promotionStatusChart" class="mx-auto"></canvas>
          </div>
        </div>
      </div>
      

      <div class="mt-[3%] bg-white w-[full] pt-[0.7%] pb-[4%] ">
        <RouterView :key="$route.fullPath"></RouterView>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { Chart } from 'chart.js';
import 'chart.js/auto';


export default {
  data() {
    return {
      promosiList: [],
      activepromoList: [],
      data2: [],
      selectedPromosi: null,
      updateID: '',
      chart: null,
    };
  },
  mounted() {
    this.fetchPromotionData();
    this.fetchActivePromo();
    this.fetchPromotionStatus();
  },
  methods: {
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
    fetchActivePromo() {
      axios
        .get('https://lje-ms-backend.onrender.com/aktif')
        .then(response => {
          this.activepromoList = response.data;
          console.log(this.activepromoList);
        })
        .catch(error => {
          console.error('Error fetching active promotion data:', error);
        });
    },
    fetchPromotionStatus() {
      axios
        .get('https://lje-ms-backend.onrender.com/status')
        .then(response => {
          const promotionStatuses = response.data;
          const activePromotionCount = promotionStatuses.filter(status => status.Status_Promosi === 'Aktif').length;
          const totalPromotionCount = promotionStatuses.length;
          const activePromotionPercentage = ((activePromotionCount / totalPromotionCount) * 100).toFixed(2);

          this.data2 = [
            {
              status: 'Aktif',
              count: activePromotionCount,
            },
            {
              status: 'Tidak Aktif',
              count: totalPromotionCount - activePromotionCount,
            },
          ];

          this.createStatusChart(activePromotionPercentage);
        })
        .catch(error => {
          console.error('Error fetching promotion status:', error);
        });
    },
    createStatusChart(activePromotionPercentage) {
      const percentages = [activePromotionPercentage, 100 - activePromotionPercentage];
      const labels = ['Aktif', 'Tidak Aktif'];

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart('promotionStatusChart', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: percentages,
              backgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        },
      });
    },
    deletePromosi(promosi_id) {
      this.updateID = promosi_id;
      console.log(this.updateID);
      axios
        .delete(`https://lje-ms-backend.onrender.com/promosi/${promosi_id}`)
        .then(response => {
          // Remove the deleted promotion from promosiList
          const index = this.promosiList.findIndex(p => p.id === promosi_id);
          if (index !== -1) {
            this.promosiList.splice(index, 1);
          }
          console.log('Promotion deleted successfully.');
        })
        .catch(error => {
          console.error('Error deleting promotion:', error);
        });
    },
  },
};
</script>

<style>
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
}</style>