<template>
    <div class="xl:hidden max-lg:show">
      <div class="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
    <div class="flex justify-between items-center px-4 py-2">
      <div>
        <img src="/lJE__3_-removebg-preview.png" class="h-10 scale-150 pl-3" alt="">
      </div>
      
      <div class="flex space-x-4">
        <RouterLink to="/pekerja/utama" exact-active-class="active">
          <i class="fa-solid fa-house text-xl text-sky-500 hover:text-sky-600 transition duration-150 pr-2"></i>
        </RouterLink>
        
        <RouterLink to="/pekerja/jualan" exact-active-class="active">
          <i class="fa-solid fa-cash-register text-xl text-sky-500 hover:text-sky-600 transition duration-150 pr-2"></i>
        </RouterLink>
        
        <RouterLink to="/pekerja/tambah-produk" exact-active-class="active">
          <i class="fa-sharp fa-solid fa-box text-xl text-sky-500 hover:text-sky-600 transition duration-150 pr-2"></i>
        </RouterLink>
        
        <i class="fa-sharp fa-solid fa-right-from-bracket text-red-500 text-2xl cursor-pointer" @click="logout"></i>
      </div>
    </div>
  </div>
    </div>

    <div class="max-lg:hidden min-xl:show ">
        <div class="fixed h-[90vh] mt-[2.5%]" :class="{ 'w-[17%]': sidebarVisible, 'w-[1.5%]': !sidebarVisible }" :style="{ left: sidebarVisible ? '2%' : '0' }">
        <div class="tepi h-full">
          <img src="/lJE__3_-removebg-preview.png" class="mx-auto w-[60%]" :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }" alt="">
  
          <div class="font-normal text-md ml-[18%] mt-[80%] "  :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }">
            <div class="flex mb-6">
              <RouterLink to="/pekerja/utama" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Halaman Utama</div>
              </RouterLink>
            </div>
            <div class="flex mb-6">
              <RouterLink to="/pekerja/jualan" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Rekod Jualan</div>
              </RouterLink>
            </div>
            <div class="flex mb-6">
              <RouterLink to="/pekerja/tambah-produk" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Tambah Stok</div>
              </RouterLink>
            </div>
          </div>
  
          <div class="flex justify-around mt-[90%]" :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }">
            <i class="fa-solid fa-right-from-bracket scale-[2] text-center bg-gradient-to-r from-sky-400 to-indigo-300 w-[45%] py-[1%] rounded-lg shadow-md hover:scale-[2.1] duration-200" style="color: #fff;" @click="logout"></i>
          </div>
        </div>
        <div class="sidebar-toggle" @click="toggleSidebar">
          <i class="fa-solid fa-chevron-left" v-if="sidebarVisible"></i>
          <i class="fa-solid fa-chevron-right" v-else></i>
        </div>
      </div>
    </div>
    <ToastMessage ref="toast" />
  </template>
  
  <script>
  import ToastMessage from '../components/ToastMessage.vue';
  
  export default {
    components: {
      ToastMessage,
    },
    data() {
      return {
        sidebarVisible: true,
      };
    },
    methods: {
      logout() {
        sessionStorage.clear();
  
        const message = 'Log Keluar Berjaya';
        const status = 'Berjaya';
  
        this.$refs.toast.toast(message, status, 'success');
  
        setTimeout(() => {
          this.$router.push('/');
        }, 1500);
      },
      toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
      },
    },
  };
  </script>
  
  <style>
  .tepi {
    border-radius: 30px;
    background: rgb(243 244 246);
    box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
  }

  .tepiKecik {
    border-radius: 10px;
    background: rgb(243 244 246);
    box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 6px 20px -9px rgba(0, 0, 0, 0.75);
  }

  .active-link {
    color: #0022ce;
  }

  .active-kecik{
    background: rgb(14 165 233);
    border-radius: 12px;
  }

  .active-kecik i{
    color: white;
  }

  .sidebar-toggle {
    position: absolute;
    top: 50%;
    right: -25px; /* Adjust this value as needed */
    transform: translateY(-50%);
    cursor: pointer;
    padding: 5px;
    background-color: #e2e8f0;
    border-radius: 0 30px 30px 0;
  }

  .fa-chevron-left,
  .fa-chevron-right {
    color: #4a5568;
  }

</style>