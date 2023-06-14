<template>
  <div class="p-5 text-md font-semibold text-left bg-white shadow-sm w-[95%] mx-auto">
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
    <table class="w-full text-[13px] text-left">
  
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

<script>
import axios from 'axios';
import ToastMessage from '../../components/ToastMessage.vue';

export default {
  components:{
    ToastMessage,
  },
  data() {
    return {
      promosiList: [],
      data2 : [],
      selectedPromosi: null,
      updateID: "",
    };
  },
  mounted() {
    this.fetchPromotionData();
  },
  methods: {
    fetchPromotionData() {
      axios
        .get('http://localhost:3001/promosi')
        .then(response => {
          this.promosiList = response.data;
          console.log(this.promosiList);
        })
        .catch(error => {
          console.error('Error fetching promotion data:', error);
        });
    },
    deletePromosi(promosi_id) {
      this.updateID = promosi_id
      console.log(this.updateID);
      if (confirm("Are you sure you want to delete this promotion?")) {
      axios
        .delete(`http://localhost:3001/promosi/${promosi_id}`)
        .then(response => {
          // Remove the deleted promotion from promosiList
          const index = this.promosiList.findIndex(p => p.id === promosi_id);
          if (index !== -1) {
            this.promosiList.splice(index, 1);
          }
          const message ='Maklumat Promosi Berjaya Di Padam'
            const status = 'Berjaya'
            
            this.$refs.toast.toast(message,status,'success')        })
        .catch(error => {
          console.error('Error deleting promotion:', error);
        });}
    }
  },
};
</script>
