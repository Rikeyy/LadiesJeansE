<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-[75%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold mt-[2%]">Daftar Pekerja</h1>
                                <!-- <h1 class="text-2xl font-semibold">Ubahsuai Maklumat Pekerja</h1>  -->
                <h2 class="text-lg text-gray-500">Halaman Utama - Pengurusan Pekerja - Pendaftaran Pekerja</h2>
            </div>
            
            <div class="flex justify-between mt-[2%]">
                <div data-aos="flip-up" data-aos-duration="1500" class="bg-white w-[90%] h-[78%] white pt-[5%] pb-[7%]">
                    <h3 class="text-center text-xl mb-[3%]">Sila masukkan maklumat pekerja di ruang yang disediakan.</h3>

                    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_nama" v-model="namapenuh" id="floating_nama" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_nama" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Penuh</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_kp" id="floating_kp" v-model="nokp" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_kp" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombor Kad Pengenalan</label>
                        </div>
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="text" name="floating_phone" id="floating_phone"  v-model="telefon" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombor Telefon</label>
                        </div>
                        <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="email" name="floating_email" id="floating_email"  v-model="emel" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-Mel</label>
                        </div>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_address" id="floating_address"  v-model="alamat" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_address" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat</label>
                        </div>
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="text" name="floating_id" id="floating_id"  v-model="idpekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_id" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Pekerja</label>
                        </div>
                        <div class="relative z-0 w-[45%] mb-6 group">
                            <select name="floating_role" id="floating_role" v-model="peranan" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                                <option value="Pekerja">Pekerja</option>
                                <option value="Pengurus">Pengurus</option>
                            </select>
                            <label for="floating_role" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peranan</label>
                        </div>
                        </div>
                        <div class="flex justify-between">
                        <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="password" name="floating_password"  v-model="password" id="floating_password" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kata Laluan</label>
                        </div>
                        <!-- <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="password" name="floating_cpassword" id="floating_cpassword" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_cpassword" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sahkan Kata Laluan</label>
                        </div> -->
                        <div class="relative z-0 w-[45%] mb-6 group">
                            <input type="gaji" name="floating_gaji" id="floating_gaji"  v-model="gaji" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_gaji" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gaji Pekerja</label>
                        </div>
                        </div>

                        <!-- <label class="block mb-2 text-base font-medium" for="user_avatar">Muat Naik Gambar</label>
                        <input class="block w-[30%] text-md border border-gray-300 rounded-lg cursor-pointer focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"> -->

                        <div class="flex justify-between">
                            <RouterLink to="/urus-pekerja" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(184,_8,_8,_0.67)]">Batal</button></RouterLink>
                            <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] mt-[3%]">Daftar</button>
                            <!-- <button class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(255,_255,_0,_0.7)] mt-[3%]">Ubahsuai</button> -->

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      namapenuh: '',
      nokp: '',
      telefon: '',
      emel: '',
      alamat: '',
      idpekerja: '',
      peranan: 'Pekerja',
      password: '',
      gaji: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        Nama_Pekerja: this.namapenuh,
        NoKP_Pekerja: this.nokp,
        Telefon_Pekerja: this.telefon,
        Emel_Pekerja: this.emel,
        Alamat_Pekerja: this.alamat,
        Staf_ID: this.idpekerja,
        Peranan_Pekerja: this.peranan,
        KataLaluan_Pekerja: this.password,
        Gaji_Pekerja: this.gaji,
      };

      // Make an HTTP POST request to your server endpoint
      axios.post('http://localhost:3001/', formData)
        .then(response => {
          // Handle the response if needed
          console.log(response.data);
          // Reset the form fields
          this.namapenuh = '';
          this.nokp = '';
          this.telefon = '';
          this.emel = '';
          this.alamat = '';
          this.idpekerja = '';
          this.peranan = '';
          this.password = '';
          this.gaji = '';
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    },
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
</style>