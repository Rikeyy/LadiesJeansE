<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
            <h1 class="text-xl font-semibold">Laporan Jualan</h1>
            <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span class="text-sky-400">Laporan Jualan</span></h2>
            <div class="bg-white text-[15px] w-[90%] mt-[2%] py-[3%]">
                <div class="flex justify-between mb-4 mr-8">
                    <div class="w-1/2">
                        <label for="barcode" class="mr-[2%] ml-[18%]">Cari Produk:</label>
                        <input type="text" id="barcode" placeholder="ID Produk" class=" appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  v-model="searchBarcode" @input="searchByBarcode" />
                    </div>

                    <div class="flex w-[50%] justify-end mr-[4%]">
                        <div class="w-[25%]">
                          <label for="day" class="mr-[5%]">Hari:</label>
                          <select id="day" v-model="selectedDay" class="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> 
                            <option value="">Semua</option>
                            <option v-for="day in days" :value="day">{{ day }}</option>
                          </select>
                        </div>
                        <div class="w-[30%]">
                          <label for="month" class="mr-[5%]">Bulan:</label>
                          <select id="month" v-model="selectedMonth" class=" appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-[6PX] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Semua</option>
                            <option v-for="month in months" :value="month">{{ month }}</option>
                          </select>
                        </div>
                    </div>
                </div>
                <div class=" h-[500px] w-[93%] relative overflow-y-auto shadow-xl mx-auto mt-[2%]">
                        <table class=" w-full text-[13px] text-left">
                           <thead class=" uppercase bg-sky-400 text-white text-center sticky top-0 z-10 ">
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
                                   <th scope="col" class="px-6 py-3 w-[15%]">
                                       jumlah harga
                                   </th>
                                   <th scope="col" class="px-6 py-3 w-[20%]">
                                       tarikh dan masa
                                   </th>
                               </tr>
                           </thead>
                           <tbody v-if="filteredSaleList.length > 0 && filteredSaleList.length < 6">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="(sale,index) in filteredSaleList">
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
                                    {{  new Date(sale.createdAt).toLocaleTimeString("ms-MY", {
                                        hour12: false,
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric"
                                        })
                                        }} pada {{ new Date(sale.createdAt).toLocaleDateString("ms-MY", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric"
                                        }).replace(/(\d+) (\w+) (\d+)/, '$1 $2 $3') }}
                                   </td>
                               </tr>   
                               <tr>
                                <td colspan="7"><p class="text-center py-5 text-gray-500">Tiada lagi jualan direkodkan.</p></td>
                               </tr>                 
                           </tbody>
                           <tbody v-else-if="filteredSaleList.length > 0">
                            <tr class="bg-white border-b border-gray-500 text-center" v-for="(sale,index) in filteredSaleList">
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
                                        }} pada {{ new Date(sale.createdAt).toLocaleDateString("ms-MY", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric"
                                        }).replace(/(\d+) (\w+) (\d+)/, '$1 $2 $3') }}
                                   </td>
                               </tr>             
                           </tbody>
                           <tbody v-else>
                                <tr>
                                    <td colspan="7"><p class="text-center py-5 text-gray-500">Tiada jualan direkodkan.</p></td>
                                </tr> 
                           </tbody>
                       </table>
                    </div>
                    <div class="w-full flex">
                        <button @click="generatePDF" class="text-white bg-gradient-to-r from-sky-400 to-indigo-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200 ml-[40%] mt-[2%] py-2">
                                Jana Laporan Jualan
                        </button>
                        <RouterLink to="/graf-jualan" class="text-gray-500 w-[37%] text-right mt-[2%]">Pergi ke graf laporan jualan <span><i class="fa-solid fa-arrow-right pl-3"></i></span></RouterLink>
                    </div>
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
      filteredSaleList: [],
      selectedDay: '',
      selectedMonth: '',
      days: Array.from({ length: 31 }, (_, i) => i + 1), 
      months: Array.from({ length: 12 }, (_, i) => i + 1), 
      searchBarcode: '',
    };
  },
  created() {
    this.fetchSalesData();
  },
  watch: {
    selectedDay: {
      handler(newDay) {
        this.filterSales();
      },
    },
    selectedMonth: {
      handler(newMonth) {
        this.filterSales();
      },
    },
  },
  methods: {
    fetchSalesData() {
      axios
        .get('http://localhost:3001/jualan')
        .then(response => {
          this.saleList = response.data;
          this.filterSales(); 
          console.log(this.saleList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    generatePDF() {
  const doc = new jsPDF();
  const rows = [];
  let totalSales = 0; // Variable to store the total sales

  this.filteredSaleList.forEach((sale, index) => {
    const rowData = [
      index + 1,
      sale.barcode,
      sale.produk.Nama_Produk,
      sale.produk.Harga_Produk,
      sale.kuantiti,
      sale.jumlahHarga,
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

    totalSales += sale.jumlahHarga; // Add the sale amount to the totalSales variable
  });

  const headers = [
    'Bilangan',
    'ID Produk',
    'Nama Produk',
    'Harga',
    'Kuantiti',
    'Jumlah Harga',
    'Tarikh dan Masa',
  ];

  // Add the title
  doc.setFontSize(18);
  doc.text('Laporan Jualan', 14, 15);

  // Add the total sales
  doc.setFontSize(12);
  doc.text(`Jumlah Jualan: RM ${totalSales.toFixed(2)}`, 14, 25);

  doc.autoTable({
    head: [headers],
    body: rows,
    startY: 35, // Adjust the startY position to leave space for the title and total sales
  });

  doc.save('sales_report.pdf');
},
    filterSales() {
      if (this.selectedDay === "" && this.selectedMonth === "") {
        this.filteredSaleList = this.saleList;
        return;
      }

      this.filteredSaleList = this.saleList.filter((sale) => {
        const saleDate = new Date(sale.createdAt);

        const selectedDayMatch = this.selectedDay === "" || saleDate.getDate() === parseInt(this.selectedDay, 10);
        const selectedMonthMatch = this.selectedMonth === "" || saleDate.getMonth() + 1 === parseInt(this.selectedMonth, 10);

        return selectedDayMatch && selectedMonthMatch;
      });
    },
    searchByBarcode() {
      if (this.searchBarcode.trim() === '') {
        this.filteredSaleList = this.saleList;
        return;
      }

      const lowerCaseSearchBarcode = this.searchBarcode.trim().toLowerCase();
      this.filteredSaleList = this.saleList.filter((sale) => {
        const saleBarcode = sale.barcode.toLowerCase();
        return saleBarcode.includes(lowerCaseSearchBarcode);
      });
    },
  },
};
</script>
