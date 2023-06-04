<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] pt-[2.7%] w-[75%] h-[90%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold">Pengurusan Promosi</h1>
                <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Pengurusan Promosi</span></h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex justify-center w-full h-full text-center">

                    <div class="flex-col pr-[4%] w-[25%]">
                        <div data-aos-duration="2000" data-aos="zoom-in" class="white h-[43%]  mb-[13.5%] pt-[]">
                            <h1 class="font-semibold text-xl pb-3 pt-4">Bilangan Promosi Terdaftar :</h1>
                            <h2 class="font-semibold text-6xl">{{ promosiList.length }}</h2>
                        </div>
                        <div data-aos-duration="2000" data-aos="zoom-in" class="white h-[43%]  mb-[12%] pt-[]">
                            <h1 class="font-semibold text-xl pb-3 pt-4">Bilangan Promosi Aktif :</h1>
                            <h2 class="font-semibold text-6xl">{{ activepromoList.length }}</h2>
                        </div>
                    </div>
                    
                    <div data-aos-duration="2000" data-aos="zoom-in" class="w-[30%] white pt-[1%] pb-[2%]">
                        <h1  class="font-semibold text-xl pb-[3%]">Komposisi Status Promosi:</h1>
                        <img src="../../assets/Screenshot 2023-05-12 025806.png" class="m-auto w-3/5 white">
                    </div>
                </div>
            </div>

             <div  class="mt-[3%] bg-white w-full px-[2%] pb-[3%]">
                 <RouterView></RouterView>
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
      activepromoList: [],
      data2 : [],
      selectedPromosi: null,
      updateID: "",
    };
  },
  mounted() {
    this.fetchPromotionData();
    this.fetchActivePromo();
  },
  methods: {
    fetchPromotionData() {
      axios
        .get('http://localhost:3001/promosi')
        .then(response => {
          this.promosiList = response.data;
          console.log(this.promosiList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    fetchActivePromo(){
        axios
        .get('http://localhost:3001/aktif')
        .then(response => {
          this.activepromoList = response.data;
          console.log(this.activepromoList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    deletePromosi(promosi_id) {
      this.updateID = promosi_id
      console.log(this.updateID);
      axios
        .delete(`http://localhost:3001/promosi/${promosi_id}`)
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
    }
  },
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