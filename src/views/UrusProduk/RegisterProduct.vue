<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-[75%]">
            <div>
                <h1 class="text-xl font-semibold">Daftar Produk</h1>
                                <!-- <h1 class="text-2xl font-semibold">Ubahsuai Maklumat Pekerja</h1>  -->
                <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span><RouterLink to="/urus-produk">Pengurusan Inventori</RouterLink></span> - <span class="text-sky-500">Pendaftaran Produk</span></h2>
            </div>
            
            <div class="flex justify-between mt-[2%]">
                <div class="bg-white w-[95%] h-[78%] shadow-2xl rounded-xl pt-[3%] pb-[5%]">
                    <h3 class="text-center text-lg mb-[3%]">Sila masukkan maklumat produk di ruang yang disediakan.</h3>

                    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[47%] mb-6 group ">
                                <input type="text" name="floating_idProduk" v-model="idProduk" id="floating_idProduk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label for="floating_idProduk" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Produk</label>
                                <span class="text-red-500 text-sm">{{ errors.idProduk }}</span>
                                <span class="text-red-500 text-sm">{{ errors.errorProduk }}</span>
                              </div>

                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_namaProduk" id="floating_namaProduk" v-model="namaProduk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label for="floating_namaProduk" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Produk</label>
                                <span class="text-red-500 text-sm">{{ errors.namaProduk }}</span>
                              </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_harga" id="floating_harga"  v-model="harga" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label for="floating_harga" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Harga Produk (RM)</label>
                                <span class="text-red-500 text-sm">{{ errors.harga }}</span>
                              </div>
                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_saiz" id="floating_saiz"  v-model="saiz" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label for="floating_saiz" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Saiz Produk</label>
                                <span class="text-red-500 text-sm">{{ errors.saiz }}</span>
                              </div>
                        </div>
                        
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_deskripsi" id="floating_deskripsi"  v-model="deskripsi" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                            <label for="floating_deskripsi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Produk</label>
                            <span class="text-red-500 text-sm">{{ errors.deskripsi }}</span>

                          </div>
                        <div class="flex justify-between">
                          <div class="relative z-0 w-[45%] group  flex">
                            <label for="items" class="pt-3 pr-3">Pilih Kategori:</label>
                            <div>
                              <select id="items" v-model="selectedItem" placeholder="Select Item" class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option disabled>-Select Item-</option>
                                <option v-for="kategori in kategoriList" :key="kategori.Nama_Kategori" :value="kategori.id">{{ kategori.Nama_Kategori }}</option>
                              </select>
                              <span class="text-red-500 text-sm">{{ errors.selectedItem }}</span>
                            </div>
                          </div>
                          <div class="w-[45%] mt-[0.6%]">
                            <label for="items" class="pt-3 pr-3">Muatnaik Gambar Produk:</label>
                            <lr-file-uploader-regular
                              css-src="https://esm.sh/@uploadcare/blocks@0.22.9/web/file-uploader-regular.min.css"
                              ctx-name="my-uploader"
                              class="my-config "
                            >
                            </lr-file-uploader-regular>
                          </div>
                        </div>
                        <div class="flex justify-between">
                            <RouterLink to="/urus-produk" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200">Batal</button></RouterLink>
                            <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-xl mt-[3%] hover:scale-105 duration-200">Daftar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ToastMessage ref="toast"/>
    </div>
</template>

<style>
.my-config {
  --cfg-pubkey: "3b7e00a614646d15bf1a";
  --cfg-img-only: 1;
  --cfg-multiple: 1;
  --cfg-max-local-file-size-bytes: 10485760;
  --cfg-use-cloud-image-editor: 1;
  --cfg-source-list: "local, camera, gdrive";
  --darkmode: 0;
  --h-accent: 223;
  --s-accent: 100%;
  --l-accent: 61%;
}
</style>

<script>
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      kategoriList: [],
      selectedItem: null,
      idProduk: '',
      namaProduk: '',
      harga: '',
      saiz: '',
      deskripsi: '',
      kategori: '',
      link: '',
      errors: {
        idProduk: '',
        namaProduk: '',
        harga: '',
        saiz: '',
        deskripsi: '',
        existProduk: '',
        errorProduk: '',
      },
    };
  },
  mounted() {
    this.fetchKategoriData();
    window.addEventListener("LR_UPLOAD_FINISH", async (e) => {
    const dataUpload = e.detail.data[0];
    this.link=dataUpload.cdnUrl + dataUpload.name;
    console.log(this.link);
});
  },
  methods: {
    fetchKategoriData() {
      axios
        .get('http://localhost:3001/kategori')
        .then((response) => {
          this.kategoriList = response.data;
        })
        .catch((error) => {
          console.error('Error fetching kategori data:', error);
        });
    },
    async submitForm() {
      await axios
        .get('http://localhost:3001/cekProduk')
        .then((response) => {
          this.errors.existProduk = response.data;
        })
        .catch((error) => console.log(error));

      const formData = {
        Produk_ID: this.idProduk,
        Nama_Produk: this.namaProduk,
        Harga_Produk: this.harga,
        Deskripsi_Produk: this.deskripsi,
        kategoriProduk: this.selectedItem,
        Saiz_Produk: this.saiz,
        Gambar: this.link,
      };

      const existingProduk = this.errors.existProduk.find(
        (produk) => produk.Produk_ID === this.idProduk
      );

      if (
        this.idProduk &&
        this.namaProduk &&
        this.harga &&
        this.saiz &&
        this.deskripsi &&
        !existingProduk
      ) {
        this.errors.errorProduk = '';

        axios
          .post('http://localhost:3001/produk', formData)
          .then((response) => {
            console.log(response.data);
            this.idProduk = '';
            this.namaProduk = '';
            this.harga = '';
            this.deskripsi = '';
            this.kategori = '';
            this.saiz = '';
            this.link = '';
          })
          .catch((error) => {
            console.error(error);
          });

          const message ='Pendaftaran Produk Berjaya'
            const status = 'Berjaya'
            
            this.$refs.toast.toast(message,status,'success')

      } else {
        if (existingProduk) {
          this.errors.errorProduk = '*ID Produk Sudah Terdaftar';
        } else {
          this.errors.errorProduk = '';
        }

        this.errors.idProduk = this.idProduk ? '' : '*Sila Masukkan ID Produk';
        this.errors.namaProduk = this.namaProduk
          ? ''
          : '*Sila Masukkan Nama Produk';
        this.errors.harga = this.harga ? '' : '*Sila Masukkan Harga Produk';
        this.errors.deskripsi = this.deskripsi
          ? ''
          : '*Sila Masukkan Deskripsi Produk';
        this.errors.saiz = this.saiz ? '' : '*Sila Masukkan Saiz Produk';
      }
    },
  },
};
</script>
