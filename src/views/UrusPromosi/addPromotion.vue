<template>
    <h1 class="text-2xl font-semibold text-center pt-[2%] pb-[1%]">Tambah Kategori</h1>
    <p class="text-center text-lg pb-[2%]">Sila masukkan maklumat kategori di dalam ruangan yang disediakan</p>

    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
        <div class="flex justify-around">
            <div class="relative z-0 w-[45%] mb-6 group m-auto">
                <input type="text" name="floating_IDPromosi" v-model="IDPromosi" id="floating_IDPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="floating_IDPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Promosi</label>
                <span class="text-red-500 text-sm">{{ errors.IDPromosi }}</span>
                <span class="text-red-500 text-sm">{{ errors.errorIDPromosi }}</span>
              </div>
    
            <div class="relative z-0 w-[45%] mb-6 group m-auto">
                <input type="text" name="floating_NamaPromosi" id="floating_NamaPromosi" v-model="NamaPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="floating_NamaPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Promosi</label>
                <span class="text-red-500 text-sm">{{ errors.NamaPromosi }}</span>
                <span class="text-red-500 text-sm">{{ errors.errorNamaPromosi }}</span>
              </div>
        </div>

        <div class="flex justify-around">
            <div class="relative z-0 w-[65%] mb-6 group m-auto">
                <input type="text" name="floating_DeskripsiPromosi" v-model="DeskripsiPromosi" id="floating_DeskripsiPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="floating_DeskripsiPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Promosi</label>
                <span class="text-red-500 text-sm">{{ errors.DeskripsiPromosi }}</span>
              </div>
    
            <div class="relative z-0 w-[25%] mb-6 group m-auto">
                <input type="text" name="floating_HargaPromosi" id="floating_HargaPromosi" v-model="HargaPromosi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="floating_HargaPromosi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Harga Promosi (RM)</label>
                <span class="text-red-500 text-sm">{{ errors.HargaPromosi }}</span>
            </div>
        </div>

        <div class="flex justify-center">
          <div class="relative z-0 w-[45%] group m-auto flex">
            <label for="items" class="pt-3 pr-3">Pilih Kategori:</label>
            <div>
              <select id="items" v-model="selectedItem" placeholder="Select Item" class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled>-Select Item-</option>
                <option v-for="kategori in kategoriList" :key="kategori.Nama_Kategori" :value="kategori.id">{{ kategori.Nama_Kategori }}</option>
              </select>
              <span class="text-red-500 text-sm">{{ errors.selectedItem }}</span>
            </div>
          </div>

          <div class="relative z-0 w-[45%] group m-auto flex">
            <label for="status" class="pt-3 pr-3">Pilih Status Promosi:</label>
            <div>
              <select id="status" v-model="selectedStatus" class="block mt-2 appearance-none w-[175%] bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled>-Select Item-</option>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
              <span class="text-red-500 text-sm">{{ errors.selectedStatus }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
            <RouterLink to="/urus-promosi" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(184,_8,_8,_0.67)]">Batal</button></RouterLink>
            <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] mt-[3%]">Daftar</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kategoriList: [],
      selectedItem: null,
      selectedStatus: null,
      IDPromosi: '',
      NamaPromosi: '',
      DeskripsiPromosi: '',
      HargaPromosi: '',
      errors: {
        IDPromosi: '',
        NamaPromosi: '',
        DeskripsiPromosi: '',
        HargaPromosi: '',
        selectedItem: null,
        selectedStatus: null,

        existID: '',
        existNama: '',
        errorIDPromosi: '',
        errorNamaPromosi:'',
      }
    };
  },
  mounted() {
    this.fetchKategoriData();
  },
  methods: {
    fetchKategoriData() {
      axios.get('http://localhost:3001/kategori')
        .then(response => {
          this.kategoriList = response.data;
        })
        .catch(error => {
          console.error('Error fetching kategori data:', error);
        });
    },
    async submitForm() {

      await axios.get("http://localhost:3001/cekIDPromosi")
        .then(response=>{
            this.errors.existID = response.data
            console.log(this.errors.existID);
        })
        .catch(error=>console.log(error))

      await axios.get("http://localhost:3001/cekNamaPromosi")
        .then(response=>{
            this.errors.existNama = response.data
            console.log(this.errors.existNama);
        })
        .catch(error=>console.log(error))

      const formData = {
        ID_Promosi : this.IDPromosi,
        Nama_Promosi : this.NamaPromosi,
        Deskripsi_Promosi : this.DeskripsiPromosi,
        Harga_Promosi: parseInt(this.HargaPromosi),
        kategoriTerlibat : this.selectedItem,
        Status_Promosi : this.selectedStatus
      };

      const existingIDPromosi = this.errors.existID.filter(promosi => promosi.ID_Promosi === this.IDPromosi)
      const existingNamaPromosi = this.errors.existNama.filter(promosi => promosi.Nama_Promosi === this.NamaPromosi)

      if(this.IDPromosi && this.NamaPromosi && this.DeskripsiPromosi && this.HargaPromosi && this.selectedItem && this.selectedStatus && !existingIDPromosi && !existingNamaPromosi)
      {
        this.errors.errorIDPromosi = ''
        this.errors.errorNamaPromosi = ''

        axios.post('http://localhost:3001/promosi', formData)
        .then(response => {
          console.log(response.data);
          alert("Data updated successfully!");
          this.IDPromosi = '';
          this.NamaPromosi = '';
          this.DeskripsiPromosi = '';
          this.HargaPromosi = '';
          this.selectedItem = '';
          this.selectedStatus = '';
        })
        .catch(error => {
          console.error(error);
        });
      }

      else
      {
        if(this.errors.existID && this.IDPromosi !== '')
        {
          this.errors.errorIDPromosi = '*ID Promosi Sudah Terdaftar'
        }
        else{
          this.errors.errorIDPromosi = ''
        }

        if(this.errors.existNama && this.NamaPromosi !== '')
        {
          this.errors.errorNamaPromosi = '*Promosi Sudah Terdaftar'
        }
        else
        {
          this.errors.errorNamaPromosi = ''
        }

        if(this.IDPromosi === ''){
          this.errors.IDPromosi = "*Sila Masukkan ID Promosi"
        }
        else{
          this.errors.IDPromosi = ''
        }

        if(this.NamaPromosi === ''){
          this.errors.NamaPromosi = "*Sila Masukkan Nama Promosi"
        }
        else{
          this.errors.NamaPromosi = ''
        }

        if(this.DeskripsiPromosi === ''){
          this.errors.DeskripsiPromosi = "*Sila Masukkan Deskripsi Promosi"
        }
        else{
          this.errors.DeskripsiPromosi = ''
        }

        if(this.HargaPromosi === ''){
          this.errors.HargaPromosi = "*Sila Masukkan Harga Promosi"
        }
        else{
          this.errors.HargaPromosi = ''
        }

        if(this.selectedItem === null){
          this.errors.selectedItem = "*Sila Pilih Kategori Promosi"
        }
        else{
          this.errors.selectedItem = ''
        }

        if(this.selectedStatus === null){
          this.errors.selectedStatus = "*Sila Pilih Status Promosi"
        }
        else{
          this.errors.selectedStatus = ''
        }
      }

     
    },
  },
};
</script>