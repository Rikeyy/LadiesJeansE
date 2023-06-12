<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
            <h1 class="text-xl font-semibold">Tambah Stok Produk</h1>
            <h2 class="text-md text-gray-500">Halaman Utama - Paparan Stok</h2>
            <div class="bg-white w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%]">
                <h3 class="text-4xl font-semibold pb-[2%]">Maklumat Produk</h3>
                <div class="flex justify-between ">
                    <table>
                        <tr>
                            <td class="text-md font-semibold py-3 px-6">
                                Nama Produk
                            </td>
                            <td class="text-md font-bold px-3">
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
                            <td class="text-md font-bold px-3">
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
                            <td class="text-md font-bold px-3">
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
                            <td class="text-md font-bold px-3">
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
                            <td class="text-md font-bold px-3">
                                :
                            </td>
                            <td class="text-md pl-2" v-if="product.Kategori">
                            {{ product.Kategori.Nama_Kategori}}
                        </td>
                        </tr>
                        <tr>
                            <td class="text-md font-semibold py-3 px-6">
                                Saiz Produk
                            </td>
                            <td class="text-md font-bold px-3">
                                :
                            </td>
                            <td class="text-md pl-2">
                                {{ product.Saiz_Produk }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-md font-semibold py-3 px-6">
                                Kuantiti Produk
                            </td>
                            <td class="text-md font-bold px-3">
                                :
                            </td>
                            <td class="text-md pl-2"> 
                                <input type="number" class="mt-2 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="kuantiti" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="flex justify-center mt-6">
                <button class="text-white bg-gradient-to-r w-[20%] from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)] ml-[2%] mt-[2%]" @click="submitForm">Tambah</button>
            </div>
            </div>
        </div>
    </div>
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
                    produkID: router.currentRoute.value.params.id,
                    product: "",
                    kategoriList: [],
                    selectedItem: null,
                    barcodeURL: '',
                    kuantiti: null
                };
            },
            mounted() {
            this.fetchKategoriData();
            axios
                .get('http://localhost:3001/produk/' + this.produkID)
                .then(response => {
                this.product = response.data;
                console.log(this.product);

                })
                .catch(error => console.log(error));
            },
            methods: {
                submitForm() {
                    this.product.Kuantiti_Produk += parseInt(this.kuantiti);
                    axios
                    .put('http://localhost:3001/kuantiti/' + this.produkID, { kuantiti: this.kuantiti })
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
                    });
                    },
                
                fetchKategoriData() {
                axios.get('http://localhost:3001/kategori')
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
