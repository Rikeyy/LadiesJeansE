<script setup>
  import { ref, onMounted } from 'vue';
  import SidebarManager from '../components/SidebarManager.vue';
  import Chart from 'chart.js/auto';

  // Data received from the backend
  const salesData = ref([]);

  onMounted(async () => {
    // Fetch sales data from the backend
    const response = await fetch('http://localhost:3001/jualan');
    salesData.value = await response.json();

    // Sort sales data by the createdAt date (earliest date first)
    salesData.value.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    // Call the function to render the chart
    renderBarChart();
  });

  function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('ms-MY', options);
  }

  function renderBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');

    // Process the sales data to get the sum of sales by date
    const salesByDate = salesData.value.reduce((accumulator, sale) => {
      const saleDate = formatDate(sale.createdAt);
      if (accumulator[saleDate]) {
        accumulator[saleDate] += sale.jumlahHarga;
      } else {
        accumulator[saleDate] = sale.jumlahHarga;
      }
      return accumulator;
    }, {});

    // Extract the dates and total sales from the processed sales data
    const dates = Object.keys(salesByDate);
    const totalSales = Object.values(salesByDate);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Total Sales',
            data: totalSales,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Set the bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Set the border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Hari',
              font: {
                weight: 'bold',
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              text: 'RM',
              font: {
                weight: 'bold',
              },
            },
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
    });
  }
</script>

<template>
  <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
    <SidebarManager />
    <div class="ml-[22%] mt-[2.7%] w-full h-[90%]">
      <h1 class="text-xl font-semibold">Graf Laporan Jualan</h1>
      <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span><RouterLink to="/laporan">Laporan Jualan</RouterLink></span> - <span class="text-sky-400">Graf Laporan Jualan</span></h2>
      <div class="bg-white text-[15px] w-[90%] mt-[2%] py-[3%]">
        <div class="w-[80%] mx-auto shadow-xl px-[3%] py-[3%] bg-sky-50">
            <canvas ref="barChart" id="barChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
