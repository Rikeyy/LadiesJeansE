<script setup>
    import SidebarWorker from '../../components/SidebarWorker.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarWorker/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
            <h1 class="text-2xl font-semibold">Tambah Stok Produk</h1>
            <h2 class="text-lg text-gray-500">Halaman Utama - Paparan Stok</h2>
            <div class="bg-white w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%]">
                <h3 class="text-4xl font-semibold pb-[2%]">Maklumat Produk</h3>
                <div class="flex justify-between">
                    <table>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Nama Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2">
                                {{ product.Nama_Produk }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                ID Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2">
                                {{ product.Produk_ID }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Deskripsi Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2">
                                {{ product.Deskripsi_Produk }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Harga Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2">
                                {{ product.Harga_Produk }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Kategori Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2" v-if="product.Kategori">
                            {{ product.Kategori.Nama_Kategori}}
                        </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Saiz Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2">
                                {{ product.Saiz_Produk }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold py-3 px-6">
                                Kuantiti Produk
                            </td>
                            <td class="text-lg font-bold px-3">
                                :
                            </td>
                            <td class="text-lg pl-2"> 
                                <input type="number" v-model="kuantiti" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="flex justify-center mt-6">
                <button class="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold" @click="submitForm">Submit</button>
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

                // Generate the barcode using the Produk_ID
                const barcodeValue = this.product.Produk_ID;

                // Generate barcode with JsBarcode
                const barcodeElement = document.getElementById('barcode');
                JsBarcode(barcodeElement, barcodeValue, {
                    format: 'CODE128',
                });
                })
                .catch(error => console.log(error));
            },
            methods: {
                submitForm() {
                    this.product.Kuantiti_Produk += parseInt(this.kuantiti);
                    axios
  .put('http://localhost:3001/produk/' + this.produkID, { kuantiti: this.kuantiti })
  .then(response => {
    alert('Data updated successfully!');
    router.push('/urus-produk');
  })
  .catch(error => {
    alert('Failed to update data.');
    console.log(error);
  });
                    },
                
                fetchKategoriData() {
                axios.get('http://localhost:3001/kategori')
                    .then(response => {
                    this.kategoriList = response.data;
                    //   console.log(this.kategoriList);
                    })
                    .catch(error => {
                    console.error('Error fetching kategori data:', error);
                    });
                }                
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

.putih{
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff; 
}

.hijau{
    border-radius: 20px;
    background: #d3f9d6;
    box-shadow:  8px 8px 23px #1e3b25,
                -8px -8px 23px #ffffff;
}

.jadual{
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff;
}
</style>