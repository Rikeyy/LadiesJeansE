<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>

        <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

        <div v-else class="ml-[22%] mt-[2.7%] w-[75%]">
            <div >
                <h1 class="text-xl font-semibold ">Ubahsuai Maklumat Produk</h1>
                                <!-- <h1 class="text-2xl font-semibold">Ubahsuai Maklumat Pekerja</h1>  -->
                <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span><RouterLink to="/urus-produk">Pengurusan Inventori</RouterLink></span> - <span class="text-sky-500">Ubahsuai Maklumat Produk</span></h2>
            </div>
            
            <div class="flex justify-between mt-[2%]">
                <div class="bg-white w-[95%] h-[78%] shadow-2xl rounded-xl pt-[3%] pb-[5%]">
                    <h3 class="text-center text-lg mb-[3%]">Sila masukkan maklumat produk yang baru di ruang yang disediakan.</h3>

                    <form class="w-[80%] m-auto" @submit.prevent="submitForm">
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[47%] mb-6 group ">
                                <input type="text" name="floating_idProduk" v-model="product.Produk_ID" id="floating_idProduk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_idProduk" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Produk</label>
                            </div>

                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_namaProduk" id="floating_namaProduk" v-model="product.Nama_Produk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_namaProduk" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Produk</label>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_harga" id="floating_harga"  v-model="product.Harga_Produk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_harga" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Harga Produk (RM)</label>
                            </div>
                            <div class="relative z-0 w-[47%] mb-6 group">
                                <input type="text" name="floating_saiz" id="floating_saiz"  v-model="product.Saiz_Produk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_saiz" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Saiz Produk</label>
                            </div>
                        </div>
                        
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_deskripsi" id="floating_deskripsi"  v-model="product.Deskripsi_Produk" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_deskripsi" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi Produk</label>
                        </div>
                        <div class="flex justify-between">
                            <div class="relative z-0 w-[45%] group  flex">
                                <label for="items" class="pt-3 pr-3">Pilih Kategori:</label>
                                <div>
                                    <select id="items" v-model="product.kategoriProduk" class="block mt-2 appearance-none w-10% bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                                        <option disabled>-Select Item-</option>
                                        <option v-for="kategori in kategoriList" :key="kategori.id" :value="kategori.id">{{ kategori.Nama_Kategori }}</option>
                                    </select>
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
                            <!-- <button type="submit" class="text-white w-[47%] bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] mt-[3%]">Daftar</button> -->
                            <button class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full  shadow-xl hover:scale-105 duration-200 mt-[3%]">Ubahsuai</button>
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

.loader {
    position: relative;
    width: 120px;
    height: 140px;
    background-image: radial-gradient(circle 30px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    linear-gradient(#FFF 20px, transparent 0);
    background-position: center 127px , 94px 102px , 16px 18px, center 114px;
    background-size: 60px 60px, 10px 10px , 10px 10px , 4px 14px;
    background-repeat: no-repeat;
    z-index: 10;
    perspective: 500px;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius:50%;
    border: 3px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%) rotate(-45deg);
    border-right-color: transparent;
    box-sizing: border-box;
}
  .loader::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg) ;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    border: 7px solid #0ea5e9;
    border-radius:50%;
    animation: rotate 0.5s linear infinite;
  }

@keyframes rotate {
  to{transform: translate(-50%, -55%) rotate(-45deg) rotateY(360deg)   }
}
</style>

<script>
        import axios from 'axios';
        import router from '../../router';
        import ToastMessage from '../../components/ToastMessage.vue';
        import * as LR from "@uploadcare/blocks";

        LR.registerBlocks(LR);

        export default {
            components:{
                ToastMessage,
            },
            data() {
                return {
                    produkID: router.currentRoute.value.params.id,
                    product: "",
                    loading: false,
                    kategoriList: [],
                    selectedItem: null,
                };
            },
            mounted() {
                this.fetchKategoriData();
                axios.get('https://lje-ms-backend.onrender.com/produk/' + this.produkID)
                    .then(response => {
                        this.product = response.data;
                        console.log(this.product)
                    })
                    .catch(error => console.log(error));
                    window.addEventListener("LR_UPLOAD_FINISH", async (e) => {
                        const dataUpload = e.detail.data[0];
                        this.link=dataUpload.cdnUrl + dataUpload.name;
                        console.log(this.link);
                    });
            },
            methods: {
                submitForm() {
                this.loading = true; 
                this.product.Gambar = this.link;
                this.product.kategoriProduk = this.product.kategoriProduk;
                axios
                    .put('https://lje-ms-backend.onrender.com/produk/' + this.produkID, this.product)
                    .then(response => {
                        console.log(this.product);

                        const message ='Ubahsuai Maklumat Produk Berjaya'
                        const status = 'Berjaya'
                        
                        this.$refs.toast.toast(message,status,'success')
                    })
                    .catch(error => {
                    console.log(error);

                    const message ='Gagal Ubahsuai Maklumat Produk'
                    const status = 'Gagal'
                    
                    this.$refs.toast.toast(message,status,'error')
                    })
                    .finally(() => {
                        this.loading = false; 
                        });
                    

                    
                },
                fetchKategoriData() {
                axios.get('https://lje-ms-backend.onrender.com/kategori')
                    .then(response => {
                    this.kategoriList = response.data;
                    })
                    .catch(error => {
                    console.error('Error fetching kategori data:', error);
                    });
                },

            }
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