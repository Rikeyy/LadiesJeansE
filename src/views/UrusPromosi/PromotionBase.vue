<template>
  <table class="w-full text-sm text-left jadual">
    <caption class="p-5 text-lg font-semibold text-left bg-white">
      <div class="flex justify-between">
        <div>
          Senarai Promosi
          <p class="mt-1 font-normal text-gray-400">Senarai promosi yang terdaftar di dalam sistem.</p>
        </div>
        <div>
          <router-link to="/urus-promosi/add">
            <div class="hijau">
              <div class="text-center py-3 flex pt-[6%] w-[250px]">
                <i class="fa-solid fa-plus bg-green-300 rounded-full px-[5px] py-[3px] text-green-600 ml-[17%]"></i>
                <p class="text-sm font-normal ml-3 mt-[2px]">Tambah Kategori</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </caption>

    <thead class="uppercase bg-sky-300 text-white text-center">
      <tr>
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
        <th scope="col" class="py-3 px-3">
          Aksi
        </th>
      </tr>
    </thead>
    <tbody>
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
          <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deletePromosi(promosi.id)"></i>
          <router-link :to="'/urus-promosi/update/'+ promosi.id"><i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
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
      axios
        .delete(`http://localhost:3001/promosi/${promosi_id}`)
        .then(response => {
          // Remove the deleted promotion from promosiList
          const index = this.promosiList.findIndex(p => p.id === promosi_id);
          if (index !== -1) {
            this.promosiList.splice(index, 1);
          }
          console.log('Promotion deleted successfully.');
        })
        .catch(error => {
          console.error('Error deleting promotion:', error);
        });
    }
  },
};
</script>
