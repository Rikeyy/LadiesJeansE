<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[3%] w-full h-[90%]">
            <h1 class="text-2xl font-semibold">Laporan Jualan</h1>
            <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Laporan Jualan</span></h2>
            <div class="bg-white w-[90%] mt-[2%] py-[3%]">
                <div class=" h-[415px] w-[93%] relative overflow-y-auto jadual mx-auto mt-[1%]">
                        <table class=" w-full text-sm text-left">
                           <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center sticky top-0 z-10 ">
                               <tr>
                                   <th scope="col" class="px-6 py-3 w-[5%]">
                                       Bilangan
                                   </th>
                                   <th scope="col" class="px-6 py-3 w-[10%]">
                                       ID Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3 w-[20%]">
                                       Nama Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       harga
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       kuantiti
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       jumlah harga
                                   </th>
                                   <th scope="col" class="px-6 py-3 w-[20%]">
                                       tarikh dan masa
                                   </th>
                               </tr>
                           </thead>
                           <tbody v-if="saleList.length > 0 && saleList.length < 6">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="(sale,index) in saleList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                       {{ index + 1 }}
                                   </th>
                                   <td class="px-6 py-4 w-[15%]">
                                       {{ sale.barcode }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ sale.produk.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ sale.produk.Harga_Produk }}
                                   </td>
                                   <td class="px-6 py-4">
                                       {{ sale.kuantiti }}
                                   </td>
                                   <td class="px-6 py-3">
                                       {{ sale.jumlahHarga}}
                                   </td>
                                   <td class="px-6 py-3">
                                       {{  new Date(sale.createdAt).toLocaleTimeString("en-US", {
                                        hour12: false,
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric"
                                        })
                                        }} pada {{ new Date(sale.createdAt).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric"
                                        }) }}
                                   </td>
                               </tr>   
                               <tr>
                                <td colspan="7"><p class="text-center py-5 text-gray-500">Daftar lagi produk untuk melihat maklumat produk yang lain.</p></td>
                               </tr>                 
                           </tbody>
                           <tbody v-else-if="saleList.length > 0">
                            <tr class="bg-white border-b border-gray-500 text-center" v-for="(sale,index) in saleList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                    {{ index + 1 }}
                                   </th>
                                   <td class="px-6 py-4 w-[15%]">
                                       {{ sale.barcode }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ sale.produk.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ sale.produk.Harga_Produk }}
                                   </td>
                                   <td class="px-6 py-4">
                                       {{ sale.kuantiti }}
                                   </td>
                                   <td class="px-6 py-3">
                                       {{ sale.jumlahHarga}}
                                   </td>
                                   <td class="px-6 py-3">
                                    {{  new Date(sale.createdAt).toLocaleTimeString("en-US", {
                                        hour12: false,
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric"
                                        })
                                        }} pada {{ new Date(sale.createdAt).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric"
                                        }) }}
                                   </td>
                               </tr>             
                           </tbody>
                           <tbody v-else>
                                <tr>
                                    <td colspan="7"><p class="text-center py-5 text-gray-500">Tiada produk terdaftar</p></td>
                                </tr> 
                           </tbody>
                       </table>
                    </div>
                    <button @click="generatePDF" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Generate PDF
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  data() {
    return {
      saleList: [],
    };
  },
  mounted() {
    this.fetchSalesData();
  },
  methods: {
    fetchSalesData() {
      axios
        .get('http://localhost:3001/jualan')
        .then(response => {
          this.saleList = response.data;
          console.log(this.saleList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    generatePDF() {
    const doc = new jsPDF();
    const rows = [];

    // Prepare the table rows for the PDF
    this.saleList.forEach((sale, index) => {
      const rowData = [
        index + 1,
        sale.barcode,
        sale.produk.Nama_Produk,
        sale.produk.Harga_Produk,
        sale.kuantiti,
        sale.jumlahHarga,
        // Format the date and time
        new Date(sale.createdAt).toLocaleDateString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }) +
          ' ' +
          new Date(sale.createdAt).toLocaleTimeString('en-US', {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          }),
      ];
      rows.push(rowData);
    });

    // Set the column headers
    const headers = [
      'Bilangan',
      'ID Produk',
      'Nama Produk',
      'Harga',
      'Kuantiti',
      'Jumlah Harga',
      'Tarikh dan Masa',
    ];

    // Add the table to the PDF
    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 20,
    });

    // Save the PDF file
    doc.save('sales_report.pdf');
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