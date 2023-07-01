<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screenh-screen w-full flex pb-[3%]">
        <SidebarWorker/>

        <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>

        <div v-else class="ml-[22%] mt-[2.7%] w-full h-[90%]  max-lg:ml-[10%] max-lg:px-[5%] max-lg:mt-[5%] max-md:mt-[18%] max-md:ml-0">
            <h1 class="text-xl font-semibold">Tambah Stok Produk</h1>
            <h2 class="text-md text-gray-500">Halaman Utama - Paparan Stok</h2>
            <div class="bg-white w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%] max-lg:w-full max-md:h-auto">
                <h3 class="text-4xl max-md:text-xl font-semibold pb-[2%]">Tambah Kuantiti Produk</h3>
                <div class="flex justify-around max-md:flex-col">
    <table class="w-[40%]">
      <tr>
        <img :src="product.Gambar" class="w-[200px] mx-auto mt-[8%] scale-125 shadow-2xl max-lg:scale-[1]"/>
      </tr>
    </table>

    <table class="w-[60%] h-fit">
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          Nama Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2">
          {{ product.Nama_Produk }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          ID Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2">
          {{ product.Produk_ID }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          Deskripsi Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2">
          {{ product.Deskripsi_Produk }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          Harga Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2">
          {{ product.Harga_Produk }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          Kategori Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2" v-if="product.Kategori">
          {{ product.Kategori.Nama_Kategori }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6">
          Saiz Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2">
          {{ product.Saiz_Produk }}
        </td>
      </tr>
      <tr>
        <td class="text-md font-semibold py-3 px-6 ">
          Kuantiti Produk
        </td>
        <td class="text-md font-bold px-3 max-md:px-0">
          :
        </td>
        <td class="text-md pl-2"> 
          <input type="number" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 max-md:px-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="kuantiti" />
        </td>
      </tr>
    </table>
  </div>
                <div class="flex justify-center mt-6">
                <button class="text-white bg-gradient-to-r w-[20%] from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%] max-lg:px-10 max-lg:w-auto max-lg:mb-6" @click="submitForm">Tambah</button>
            </div>
            </div>
        </div>
    </div>
    <!-- <button @click="bukakcamera()">Open Qrcode</button>
        <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" v-bind:class="{'hidden': !phoneScanner}"></div>
        <dialog class="w-2/4 mx-auto shadow-product rounded-2xl  fixed top-44 z-50" v-bind:open="phoneScanner">
            <div class="">
                <div class="justify-center text-center">
                    <div>
                        <p class="font-semibold">Sila Imbas Kodbar</p>
                    </div>
                    <div class="flex flex-col items-center my-4">
                        <div class="section mx-auto w-9/12 text-xs">
                            <BarcodeScanner
                                v-bind:qrbox="300"
                                v-bind:fps="10"
                                @scan-success="scanBarcode"
                                class="mx-auto"
                            />
                        </div>
                    </div>
                    <div>
                        <input type="text" class="outline-gray-300 outline outline-2 w-full p-2 rounded-md mt-2 mb-2 focus:outline focus:outline-blue-500" v-model="barkodProduk">
                    </div>
                    <div>
                        <button class="w-max bg-red-600 text-white p-2 px-10 rounded-xl hover:bg-white hover:text-black hover:outline hover:outline-black " @click="camScanner">Batal</button>
                    </div>
                </div>
            </div>
        </dialog> -->
    <ToastMessage ref="toast"/>
</template>

<script>
        import axios from 'axios';
        import router from '../../router';
        import ToastMessage from '../../components/ToastMessage.vue';
        // import BarcodeScanner from '../../components/BarcodeScanner.vue';


        export default {
            components:{
                ToastMessage,
            },
            data() {
                return {
                    produkID: router.currentRoute.value.params.id,
                    product: "",
                    kategoriList: [],
                    selectedItem: null,
                    loading: false,
                    barcodeURL: '',
                    kuantiti: null,
                    // phoneScanner: false
                };
            },
            mounted() {
            this.fetchKategoriData();
            axios
                .get('https://lje-ms-backend.onrender.com/barang/' + this.produkID)
                .then(response => {
                this.product = response.data;
                console.log(this.product);

                })
                .catch(error => console.log(error));
            },
            methods: {
                submitForm() {
                  this.loading = true; 
                    this.product.Kuantiti_Produk += parseInt(this.kuantiti);
                    axios
                    .put('https://lje-ms-backend.onrender.com/tambahKuantiti/' + this.produkID, { kuantiti: this.kuantiti })
                    .then(response => {
                        const message = "tambah Produk Berjaya";
                        const status = "Berjaya";

                        this.$refs.toast.toast(message, status, "success");
                        
                        setTimeout(() => {
                        this.$router.push('/pekerja/tambah-produk');
                        }, 2000);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => {
                      this.loading = false; 
                    });
                    },
                    // bukakcamera()
                    // {
                    //     this.phoneScanner = !this.phoneScanner; // Toggle the isOpen property
                    // },
                    // scanBarcode(decodedText)
                    //     {
                    //         if(decodedText.trim() !== '')
                    //         {
                    //             this.searchId = decodedText;
                    //             console.log(this.searchId)
                    //             setTimeout(()=>{
                    //                 this.phoneScanner=false
                    //             },500)
                    //         }
                    //     },
                
                fetchKategoriData() {
                axios.get('https://lje-ms-backend.onrender.com/kategori')
                    .then(response => {
                    this.kategoriList = response.data;
                    })
                    .catch(error => {
                    console.error('Error fetching kategori data:', error);
                    });
                }                
            }
        };
    </script>

<style>
/* Override the default styles */
.swal2-confirm:focus {
  box-shadow: 0 0 0 3px red !important;
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
