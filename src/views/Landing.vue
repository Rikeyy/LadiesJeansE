<script setup>
import { RouterLink } from 'vue-router';
const scrollToLogMasuk = () => {
  const logMasukSection = document.getElementById('logmasuk');
  logMasukSection.scrollIntoView({ behavior: 'smooth' });
};

const scrollToFeatures = () => {
  const logMasukSection = document.getElementById('features');
  logMasukSection.scrollIntoView({ behavior: 'smooth' });
};
</script>
  
<template>
    <div class="w-screen h-full backkk ">
        <div class="flex justify-between px-20">
            <img src="../assets/lJE__3_-removebg-preview.png" class="w-36 float-left" alt="">
            <button class="text-white bg-gradient-to-r from-sky-500 to-indigo-500 h-12 px-12 rounded-full my-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" @click="scrollToLogMasuk">Log Masuk</button>
        </div>
        <div class="flex w-10/12 mx-auto h-[80vh] ">
            <div class="w-4/5 m-auto ">
                <h1 class="text-white text-6xl font-bold w-3/5 mb-10 ">Cara yang lebih baik untuk mengurus <span class="text-sky-500 text-8xl font-bold ">Bisnes</span> anda.</h1>
                <h2 class="text-white text-2xl w-3/5 mb-12">Urus. Jejak. Susun. <span class="text-sky-500 text-3xl">Sistem Pengurusan Ladies Jeans Enterprise</span> ialah penyelesaian semua-dalam-satu baharu anda. </h2>
                <button class="text-white bg-gradient-to-r from-sky-500 to-indigo-500 h-12 px-12 rounded-full my-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"  @click="scrollToFeatures">Lihat Modul Fungsi</button>
            </div>
            <div class="w-1/5 m-auto max-md:hidden">
                <img data-aos="fade-left" src="../assets/undraw_predictive_analytics_re_wxt8.svg" alt="">
            </div>
        </div>
        <div id="features" class="text-white w-4/5 m-auto h-screen">
            <h2 class="text-center text-6xl font-bold pt-40">Ciri-Ciri</h2>
            <div class="flex justify-between pt-24 w-full h-3/5">
                <div data-aos="zoom-in" class="glass h-4/5 w-1/6"></div>
                <div data-aos="zoom-in" class="h-4/5 w-1/6 glass"></div>
                <div data-aos="zoom-in" class="h-4/5 w-1/6 glass"></div>
                <div data-aos="zoom-in" class="h-4/5 w-1/6 glass"></div>
                <div data-aos="zoom-in" class="h-4/5 w-1/6 glass"></div>
            </div>
        </div>
        <div id="logmasuk" class="h-screen frontt text-white w-4/5 m-auto">
            <h2 class="text-center text-6xl font-bold pt-40">Log Masuk Sebagai</h2>
            <div class="flex justify-center pt-24 w-full h-3/5">
                <div data-aos="zoom-in-right" class="h-full w-[23%] bg-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mr-10">
                    <img class="w-3/5 h-[73%] m-auto py-12" src="../assets/undraw_ideas_flow_re_bmea.svg">
                    <RouterLink to="/logmasuk-pekerja"><button  class="text-white bg-gradient-to-r from-sky-500 to-indigo-500 h-12 px-12 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ml-[30%]">Pekerja</button></RouterLink>
                    </div>
                <div data-aos="zoom-in-left" class="h-full w-[23%] bg-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mr-10">
                    <img class="w-4/5 h-[73%] m-auto py-12" src="../assets/undraw_co-working_re_w93t.svg">
                    <RouterLink to="/logmasuk-pengurus"><button class="text-white bg-gradient-to-r from-sky-500 to-indigo-500 h-12 px-12 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ml-[30%]">Pengurus</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style>
.backkk{
    background-image: url("../assets/layered-waves-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.glass{
    background: rgba( 2, 2, 2, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11.5px );
-webkit-backdrop-filter: blur( 11.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>