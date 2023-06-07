<template>
    <div class="fixed h-[90vh] bg-gray-100 w-[17%] left-[2%] top-[5%] tepi">
        <img src="../assets/lJE__3_-removebg-preview.png" class="mx-auto w-[60%]" alt="">
        
        <div class="font-normal text-md ml-[18%] mt-[50%]">
            <div class="flex mb-6">
                <RouterLink to="/main" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Halaman Utama</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/urus-pekerja" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Pengurusan Pekerja</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/urus-produk" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Pengurusan Inventori</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/urus-promosi" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Pengurusan Promosi</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/paparan-stok"><div class="hover:text-blue-300  cursor-pointer">Paparan Stok</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/laporan"><div class="hover:text-blue-300  cursor-pointer">Laporan Jualan</div></RouterLink>
            </div>
        </div>

        <div class="flex mt-[60%] justify-around">
            <i  class="fa-solid fa-right-from-bracket scale-[2] text-center mt-[5.6%] bg-gradient-to-r from-sky-400 to-indigo-300 w-[45%] py-[1%] rounded-lg shadow-md hover:scale-[2.1] duration-200" style="color: #fff;" @click="logout"></i>
            
        </div>
    </div>
    <ToastMessage ref="toast"/>

</template>

<script>
import ToastMessage from '../components/ToastMessage.vue';

export default {
    components:{
        ToastMessage,
    },
  methods: {
    logout() {
        const message ='Log Keluar Berjaya'
        const status = 'Berjaya'
                        
        this.$refs.toast.toast(message,status,'success')

        setTimeout(() => {
          this.$router.push('/');
        }, 1500);
    }
  }
}
</script>


<style>
.tepi{
    border-radius: 30px;
background:  rgb(243 244 246);
box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
}

.active-link {
    color: #0022ce;
}
</style>