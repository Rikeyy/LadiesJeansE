<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
            <h1 class="text-xl font-semibold">Paparan Stok</h1>
            <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span><RouterLink to="/paparan-stok">Paparan Stok</RouterLink></span> - <span class="text-sky-400">Maklumat Produk</span></h2>
            <div class="bg-white shadow-sm w-[90%] mt-[2%] pb-[3%] px-[2%] pt-[2%]">
                <h3 class="text-4xl font-semibold pb-[2%]">Maklumat <span class="text-sky-400">Produk</span></h3>
                <div class="flex justify-between">
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
                                {{ product.Kuantiti_Produk }}
                            </td>
                        </tr>
                    </table>
                    <div class="px-[5%] py-[5%] h-[60%] putih mr-[5%]">
                            <svg id="barcode" ref="barcode" class="border-2 border-black m-auto mb-[2%]"></svg>
                            <button @click="printBarcode" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200 ml-[15%] mt-[5%]">Print Barcode</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
        import axios from 'axios';
        import router from '../router';
        import JsBarcode from 'jsbarcode';
        import printJS from 'print-js';

        export default {
            data() {
                return {
                    produkID: router.currentRoute.value.params.id,
                    product: "",
                    kategoriList: [],
                    selectedItem: null,
                    barcodeURL: '',
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
                this.product.kategoriProduk = this.selectedItem; // Assign the selected category to the product
                axios
                    .put('http://localhost:3001/produk/' + this.produkID, this.product)
                    .then(response => {
                    // alert('Data updated successfully!');
                    // router.push('/urus-produk');
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
                },
                printBarcode() {
                // Get the SVG element
                const barcodeElement = document.getElementById('barcode');

                // Generate a new SVG string with updated XML namespaces
                const svgXml = new XMLSerializer().serializeToString(barcodeElement);
                const modifiedSvgXml = svgXml
                    .replace('xmlns="http://www.w3.org/2000/svg"', '')
                    .replace('xmlns:serif="http://www.serif.com/"', '');

                // Create a new window for printing
                const printWindow = window.open('', '_blank');

                // Open a new document in the print window
                printWindow.document.open();

                // Add the modified SVG to the print document
                printWindow.document.write(`
                    <html>
                        <head>
                            <style>
                                @page { size: auto; }
                            </style>
                        </head>
                        <body>
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                            ${modifiedSvgXml}
                        </body>
                    </html>
                `);

                // Close the print document
                printWindow.document.close();

                // Print the document
                printWindow.print();
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