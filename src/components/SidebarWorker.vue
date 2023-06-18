<template>
    <div class="xl:hidden max-lg:show">
        <div class="fixed mt-[10%]" :class="{ 'w-[10%]': sidebarVisible, 'w-[1.5%]': !sidebarVisible }" :style="{ left: sidebarVisible ? '2%' : '0' }">
        <div class="tepiKecik shadow-sm h-full">
          <img src="../../public/images/lJE__3_-removebg-preview.png" class="mx-auto px-2 py-7" :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }" alt="">

          <div class="h-[2px] w-[80%] mx-auto bg-blue-600 mb-12"></div>
  
          <div class="font-normal text-md "  :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }">
            <div class="flex mb-6 justify-center ">
              <RouterLink to="/pekerja/utama" exact-active-class="active-kecik">
                <i class="fa-solid fa-house hover:bg-sky-500 hover:text-white hover:duration-150 px-5 py-[18px] rounded-xl text-xl text-sky-500  "></i></RouterLink>
            </div>
            <div class="flex mb-6 justify-center">
              <RouterLink to="/pekerja/jualan" exact-active-class="active-kecik">
                <i class="fa-solid fa-cash-register hover:bg-sky-500 hover:text-white hover:duration-150 px-5 py-[18px] rounded-xl text-xl text-sky-500"></i></RouterLink>
            </div>
            <div class="flex mb-6 justify-center">
              <RouterLink to="/pekerja/tambah-produk" exact-active-class="active-kecik">
                <i class="fa-sharp fa-solid fa-box hover:bg-sky-500 hover:text-white hover:duration-150 px-5 py-[18px] rounded-xl text-xl text-sky-500"></i></RouterLink>
            </div>
          </div>

          <div class="h-[2px] w-[80%] mx-auto bg-blue-600 mb-12"></div>
  
          <div class="flex justify-center" :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }">
            <i class="fa-sharp fa-solid fa-right-from-bracket text-red-500 pb-10 text-2xl"  @click="logout"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="max-lg:hidden min-xl:show">
        <div class="fixed h-[90vh] mt-[2.5%]" :class="{ 'w-[17%]': sidebarVisible, 'w-[1.5%]': !sidebarVisible }" :style="{ left: sidebarVisible ? '2%' : '0' }">
        <div class="tepi h-full">
          <img src="../../public/images/lJE__3_-removebg-preview.png" class="mx-auto w-[60%]" :class="{ 'show': sidebarVisible, 'hidden': !sidebarVisible }" alt="">
  
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