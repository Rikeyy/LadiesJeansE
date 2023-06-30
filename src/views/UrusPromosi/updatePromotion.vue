<template>
    <h1 class="text-2xl font-semibold text-center pt-[2%] pb-[1%]">Tambah Kategori</h1>
    <p class="text-center text-lg pb-[2%]">Sila masukkan maklumat kategori di dalam ruangan yang disediakan</p>

    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

    <form v-else class="w-[80%] m-auto" @submit.prevent="submitForm">
        <div class="flex justify-around">
            <div class="relative z-0 w-[45%] mb-6 group m-auto">
                <input type="text" name="floating_IDPromosi" v-model="promosi.ID_Promosi" id="floating_IDPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_IDPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Promosi</label>
            </div>
    
            <div class="relative z-0 w-[45%] mb-6 group m-auto">
                <input type="text" name="floating_NamaPromosi" id="floating_NamaPromosi" v-model="promosi.Nama_Promosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_NamaPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Promosi</label>
            </div>
        </div>

        <div class="flex justify-around">
            <div class="relative z-0 w-[75%] mb-6 group m-auto">
                <input type="text" name="floating_DeskripsiPromosi" v-model="promosi.Deskripsi_Promosi" id="floating_DeskripsiPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_DeskripsiPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Promosi</label>
            </div>
    
            <div class="relative z-0 w-[15%] mb-6 group m-auto">
                <input type="text" name="floating_HargaPromosi" id="floating_HargaPromosi" v-model="promosi.Harga_Promosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_HargaPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Harga Promosi (RM)</label>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="relative z-0 w-[45%] group m-auto flex">
                <label for="items" class="pt-3 pr-3">Pilih Kategori:</label>
                    <select id="items" v-model="promosi.kategoriTerlibat" placeholder="Select Item" class="block mt-2 appearance-none w-[50%] bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                        <option disabled>-Select Item-</option>
                        <option  v-for="kategori in kategoriList" :key="kategori.Nama_Kategori" :value="kategori.id" >{{ kategori.Nama_Kategori }}</option>
                    </select>
            </div>

            <div class="relative z-0 w-[45%] group m-auto flex">
                <label for="items" class="pt-3 pr-3">Pilih Status Promosi:</label>
                    <select id="items" v-model="promosi.Status_Promosi" class="block mt-2 appearance-none w-[50%] bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                        <option disabled>-Select Item-</option>
                        <option  value="Aktif">Aktif</option>
                        <option  value="Tidak Aktif">Tidak Aktif</option>
                    </select>
            </div>
        </div>

        <div class="flex justify-between">
            <RouterLink to="/urus-promosi" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full  shadow-xl hover:scale-105 duration-200">Batal</button></RouterLink>
            <button class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full  shadow-xl hover:scale-105 duration-200 mt-[2.8%]">Ubahsuai</button>
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
        promosiID: router.currentRoute.value.params.id,
        loading: false,
        promosi: {
          ID_Promosi: '',
          Nama_Promosi: '',
          Deskripsi_Promosi: '',
          Harga_Promosi: null, // Initialize as null
          Status_Promosi: '',
          kategoriTerlibat: null, // Initialize as null
        },
        kategoriList: [],
        selectedItem: null,
      };
    },
    mounted() {
      this.fetchKategoriData();
      axios
        .get('https://lje-ms-backend.onrender.com/promosi/' + this.promosiID)
        .then(response => {
          this.promosi = response.data;
        })
        .catch(error => console.log(error));
    },
    methods: {
  submitForm() {
    this.loading = true; 
    // Convert Harga_Promosi to an integer using parseInt
    this.promosi.Harga_Promosi = parseInt(this.promosi.Harga_Promosi);
    this.promosi.kategoriTerlibat = this.promosi.kategoriTerlibat; // Assign the selected kategori value
    
    axios
      .put('https://lje-ms-backend.onrender.com/promosi/' + this.promosiID, this.promosi)
      .then(response => {
        const message ='Ubahsuai Maklumat Promosi Berjaya'
                        const status = 'Berjaya'
                        
                        this.$refs.toast.toast(message,status,'success')
      })
      .catch(error => {
        console.log(error);
        const message ='Gagal Ubahsuai Maklumat Promosi'
                    const status = 'Gagal'
                    
                    this.$refs.toast.toast(message,status,'error')
      })
      .finally(() => {
              this.loading = false; 
            });
  },
      fetchKategoriData() {
        axios
          .get('https://lje-ms-backend.onrender.com/kategori')
          .then(response => {
            this.kategoriList = response.data;
          })
          .catch(error => {
            console.error('Error fetching kategori data:', error);
          });
      },
    },
  };
  </script>
  