<script setup>
    import SidebarManager from '../../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-[75%]">
            <div >
                <h1 class="text-2xl font-semibold mt-[2%]">Ubahsuai Maklumat Produk</h1>
                                <!-- <h1 class="text-2xl font-semibold">Ubahsuai Maklumat Pekerja</h1>  -->
                <h2 class="text-lg text-gray-500">Halaman Utama - Pengurusan Inventori -<span class="text-sky-500">Ubahsuai Maklumat Produk</span></h2>
            </div>
            
            <div class="flex justify-between mt-[2%]">
                <div class="bg-white w-[95%] h-[78%] shadow-2xl rounded-xl pt-[5%] pb-[7%]">
                    <h3 class="text-center text-xl mb-[3%]">Sila masukkan maklumat produk yang baru di ruang yang disediakan.</h3>

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
                        <div>
                            <label for="items">Pilih Kategori:</label>
                            <select id="items" v-model="selectedItem" class="block mt-2 appearance-none w-10% bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                                <option disabled>-Select Item-</option>
                                <option v-for="kategori in kategoriList" :key="kategori.id" :value="kategori.id">{{ kategori.Nama_Kategori }}</option>
                            </select>
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
    </div>
</template>

<script>
        import axios from 'axios';
        import router from '../../router';

        export default {
            data() {
                return {
                    produkID: router.currentRoute.value.params.id,
                    product: "",
                    kategoriList: [],
                    selectedItem: null,
                };
            },
            mounted() {
                this.fetchKategoriData();
                axios.get('http://localhost:3001/produk/' + this.produkID)
                    .then(response => {
                        this.product = response.data;
                        console.log(this.product)
                    })
                    .catch(error => console.log(error));
            },
            methods: {
                submitForm() {
                this.product.kategoriProduk = this.selectedItem; // Assign the selected category to the product
                axios
                    .put('http://localhost:3001/produk/' + this.produkID, this.product)
                    .then(response => {
                    alert('Data updated successfully!');
                    router.push('/urus-produk');
                    })
                    .catch(error => {
                    alert('Failed to update data.');
                    console.log(error);
                    });
                },
                // submitForm() {
                //     axios.put('http://localhost:3001/produk/' + this.produkID, this.product)
                //         .then(response => {
                //             alert("Data updated successfully!");
                //             router.push('/urus-produk');
                //         })
                //         .catch(error => {
                //             alert("Failed to update data.");
                //             console.log(error);
                //         });
                // },
                fetchKategoriData() {
                axios.get('http://localhost:3001/kategori')
                    .then(response => {
                    this.kategoriList = response.data;
                    //   console.log(this.kategoriList);
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