<template>
    <h1 class="text-2xl font-semibold text-center pt-[4%] pb-[3%]">Ubah Kategori</h1>
    <p class="text-center text-lg pb-[3%]">Sila masukkan maklumat kategori di dalam ruangan yang disediakan</p>
  
    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
      <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
        <input type="text" name="floating_NamaKategori" v-model="kategori.Nama_Kategori" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_NamaKategori" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Kategori</label>
      </div>
  
      <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
        <input type="text" name="floating_Deskripsi" id="floating_Deskripsi" v-model="kategori.Deskripsi_Kategori" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_Deskripsi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Kategori</label>
      </div>
  
      <div class="flex justify-between">
        <router-link to="/urus-produk" class="w-[47%] mt-[2.8%]">
          <button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200">Batal</button>
        </router-link>
        
        <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200 mt-[3%]">Ubahsuai</button>
      </div>
    </form>
    <ToastMessage ref="toast"/>

  </template>
  
  <script>
  import axios from 'axios';
  import router from '../../router';
  import ToastMessage from '../../components/ToastMessage.vue';


  export default {
    components:{
    ToastMessage,
  },
      data() {
          return {
              kategoriID: router.currentRoute.value.params.id,
              kategori: ""
          };
      },
      mounted() {
          axios.get('http://localhost:3001/kategori/' + this.kategoriID)
              .then(response => {
                  this.kategori = response.data;
              })
              .catch(error => console.log(error));
      },
      methods: {
          submitForm() {
              axios.put('http://localhost:3001/kategori/' + this.kategoriID, this.kategori)
                  .then(response => {
                    const message ='Ubahsuai Maklumat Kategori Berjaya'
                    const status = 'Berjaya'
                    
                    this.$refs.toast.toast(message,status,'success')
                  })
                  .catch(error => {
                      console.log(error);

                      const message ='Gagal Ubahsuai Maklumat Kategori'
                    const status = 'Gagal'
                    
                    this.$refs.toast.toast(message,status,'error')
                  });

                  
          }
      }
  };
</script>
  