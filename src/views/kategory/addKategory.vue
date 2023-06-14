<template>
  <h1 class="text-2xl font-semibold text-center pt-[4%] pb-[3%]">Tambah Kategori</h1>
  <p class="text-center text-lg pb-[3%]">Sila masukkan maklumat kategori di dalam ruangan yang disediakan</p>

  <form class="w-[80%] m-auto" @submit.prevent="submitForm">
    <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
      <input type="text" name="floating_NamaKategori" v-model="NamaKategori" id="floating_NamaKategori" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_NamaKategori" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Kategori</label>
      <label class="text-red-600 font-medium text-xs" for="errorNama" id="errorNama">{{ errors.NamaKategori }}</label>
      <label class="text-red-600 font-medium text-xs" for="errorNama2" id="errorNama2">{{ errors.errorNama }}</label>
    </div>

    <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
      <input type="text" name="floating_Deskripsi" id="floating_Deskripsi" v-model="Deskripsi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_Deskripsi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Kategori</label>
      <label class="text-red-600 font-medium text-xs" for="errorDeskripsi" id="errorDeskripsi">{{ errors.Deskripsi }}</label>
    </div>

    <div class="flex justify-between">
      <RouterLink to="/urus-produk" class="w-[47%] mt-[2.8%]">
        <button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200">Batal</button>
      </RouterLink>
      <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-xl mt-[3%] hover:scale-105 duration-200">Daftar</button>
    </div>
  </form>
  <ToastMessage ref="toast"/>

</template>

<script>
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';

export default {
  data() {
    return {
      NamaKategori: '',
      Deskripsi: '',
      errors: {
        NamaKategori: '',
        Deskripsi: '',
        errorNama: '',
      },
    };
  },
  components:{
    ToastMessage,
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.get('http://localhost:3001/cekKategori');
        const existingKategori = response.data.find((kategori) => kategori.Nama_Kategori === this.NamaKategori);

        if (existingKategori) {
          this.errors.errorNama = '*Kategori Sudah Ada Di Dalam Pangkalan Data';
          return;
        } else {
          this.errors.errorNama = '';
        }
      
      } catch (error) {
        console.log(error);
      }

      if (!this.NamaKategori) {
        this.errors.NamaKategori = '*Sila Masukkan Nama Kategori';
      } else {
        this.errors.NamaKategori = '';
      }

      if (!this.Deskripsi) {
        this.errors.Deskripsi = '*Sila Masukkan Deskripsi Kategori';
      } else {
        this.errors.Deskripsi = '';
      }

      if (!this.errors.NamaKategori && !this.errors.Deskripsi) {
        const formData = {
          Nama_Kategori: this.NamaKategori,
          Deskripsi_Kategori: this.Deskripsi,
        };

        axios
          .post('http://localhost:3001/kategori', formData)
          .then((response) => {
            console.log(response.data);
            this.NamaKategori = '';
            this.Deskripsi = '';
          })
          .catch((error) => {
            console.error(error);
          });

          const message ='Pendaftaran Promosi Berjaya'
            const status = 'Berjaya'
            
            this.$refs.toast.toast(message,status,'success')
      }
    },
  },
};
</script>
