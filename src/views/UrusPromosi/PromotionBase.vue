<template>
  <div  class="p-5 text-md font-semibold text-left bg-white shadow-sm w-[95%] mx-auto">
    <div class="flex justify-between">
      <div>
        Senarai Promosi
        <p class="mt-1 font-normal text-gray-400">Senarai promosi yang terdaftar di dalam sistem.</p>
      </div>
      <div>
        <router-link to="/urus-promosi/add">
          <div class="bg-[#d3f9d6] rounded-3xl shadow-lg hover:scale-105 duration-200">
            <div class="text-center py-3 flex pt-[6%] w-[250px]">
              <i class="fa-solid fa-plus bg-green-300 rounded-full px-[5px] py-[3px] text-green-600 ml-[17%]"></i>
              <p class="text-sm font-normal ml-3 mt-[2px]">Tambah Kategori</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>


  <div class="relative overflow-y-auto shadow-xl min-h-[415px] w-[95%] m-auto ">
    
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
            <div class="loader">
          </div>
        </div>
  
    <table v-else class="w-full text-[13px] text-left">
  
      <thead class="uppercase bg-sky-400 text-white text-center sticky top-0 z-10">
        <tr>
          <th scope="col" class="py-3 w-[10%]">
            ID Promosi
          </th>
          <th scope="col" class="py-3">
            Nama Promosi
          </th>
          <th scope="col" class="py-3">
            Deskripsi promosi
          </th>
          <th scope="col" class="py-3">
            Harga Promosi (RM)
          </th>
          <th scope="col" class="py-3">
            Status Promosi
          </th>
          <th scope="col" class="py-3">
            Kategori Terlibat
          </th>
          <th scope="col" class="py-3 px-3 w-[8%]">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody v-if="promosiList.length > 0 && promosiList.length <6">
        <tr class="bg-white border-b border-gray-500 text-center" v-for="promosi in promosiList">
          <td scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ promosi.ID_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Nama_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Deskripsi_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Harga_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Status_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Kategori.Nama_Kategori }}
          </td>
          <td class="py-4 flex justify-around">
            <router-link :to="'/urus-promosi/update/'+ promosi.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deletePromosi(promosi.id)"></i>
          </td>
        </tr>
        <tr>
          <td colspan="6"><p class="text-center py-5 text-gray-500">Daftar lagi promosi untuk melihat maklumat promosi yang lain.</p></td>
        </tr>
      </tbody>
      <tbody v-else-if="promosiList.length > 0">
        <tr class="bg-white border-b border-gray-500 text-center" v-for="promosi in promosiList">
          <td scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ promosi.ID_Promosi }}
          </td>
          <td scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ promosi.Nama_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Deskripsi_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Harga_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Status_Promosi }}
          </td>
          <td class="py-4">
            {{ promosi.Kategori.Nama_Kategori }}
          </td>
          <td class="py-4 flex justify-around">
            <router-link :to="'/urus-promosi/update/'+ promosi.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
            <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deletePromosi(promosi.id)"></i>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6"><p class="text-center py-5 text-gray-500">Tiada promosi terdaftar.</p></td>
        </tr>
      </tbody>
    </table>
    <ToastMessage ref="toast"/>

  </div>
</template>

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

<script>
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';
import Swal from 'sweetalert2';


export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      promosiList: [],
      data2 : [],
      selectedPromosi: null,
      loading: false,
      updateID: "",
    };
  },
  mounted() {
    this.fetchPromotionData();
  },
  methods: {
    fetchPromotionData() {
      this.loading = true; 
      axios
        .get('https://lje-ms-backend.onrender.com/promosi')
        .then(response => {
          this.promosiList = response.data;
          console.log(this.promosiList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        })
        .finally(() => {
          this.loading = false; 
        });
    },
    deletePromosi(promosi_id) {
  this.updateID = promosi_id;

  Swal.fire({
    title: 'Pasti?',
    text: 'Adakah anda pasti untuk memadam maklumat promosi ini?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, padam',
    cancelButtonText: 'Batal',
    customClass: {
    icon: 'text-blue-500', // Customize the icon color
  },
  confirmButtonColor: '#e53e3e', // Set the confirm button color to red
  }).then((result) => {
    if (result.isConfirmed) {
      this.loading = true; 
      axios
        .delete(`https://lje-ms-backend.onrender.com/promosi/${promosi_id}`)
        .then((response) => {
          const index = this.promosiList.findIndex((p) => p.id === promosi_id);
          if (index !== -1) {
            this.promosiList.splice(index, 1);
          }
          const message = 'Maklumat Promosi Berjaya Di Padam';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
        })
        .catch((error) => {
          console.error('Error deleting promotion:', error);
        })
        .finally(() => {
          this.loading = false; 
        });
    }
  });
}

  },
};
</script>
