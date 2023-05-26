<template>
    <h1 class="text-2xl font-semibold text-center pt-[4%] pb-[3%]">Tambah Kategori</h1>
    <p class="text-center text-lg pb-[3%]">Sila masukkan maklumat kategori di dalam ruangan yang disediakan</p>

    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
        <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
            <input type="text" name="floating_NamaKategori" v-model="NamaKategori" id="floating_NamaKategori" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_NamaKategori" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Kategori</label>
        </div>

        <div class="relative z-0 w-[90%] mb-6 group m-auto pb-[1%]">
            <input type="text" name="floating_Deskripsi" id="floating_Deskripsi" v-model="Deskripsi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_Deskripsi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Kategori</label>
        </div>

        <div class="flex justify-between">
            <RouterLink to="/urus-produk" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(184,_8,_8,_0.67)]">Batal</button></RouterLink>
            <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] mt-[3%]">Daftar</button>
            <!-- <button class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(255,_255,_0,_0.7)] mt-[3%]">Ubahsuai</button> -->
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      NamaKategori: '',
      Deskripsi: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        Nama_Kategori: this.NamaKategori,
        Deskripsi_Kategori: this.Deskripsi,
      };

      // Make an HTTP POST request to your server endpoint
      axios.post('http://localhost:3001/kategori', formData)
        .then(response => {
          // Handle the response if needed
          console.log(response.data);
          // Reset the form fields
          this.NamaKategori = '';
          this.Deskripsi = '';
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    },
  },
};
</script>