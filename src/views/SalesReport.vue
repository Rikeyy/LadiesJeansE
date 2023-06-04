<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] mt-[3%] w-full h-[90%]">
            <h1 class="text-2xl font-semibold">Paparan Stok</h1>
            <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Paparan Stok Produk</span></h2>
            <div class="bg-white w-[90%] mt-[2%] pb-[3%]">
                <div class=" h-[415px] w-[93%] relative overflow-y-auto jadual mx-auto mt-[1%]">
                        <table class=" w-full text-sm text-left">
                           <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white text-center sticky top-0 z-10 ">
                               <tr>
                                   <th scope="col" class="px-6 py-3">
                                       ID Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Nama Produk
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Harga (RM)
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Saiz
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Deskripsi
                                   </th>
                                   <th scope="col" class="px-6 py-3">
                                       Kategori
                                   </th>
                                   <th scope="col" class="px-6 py-3 w-[10%]">
                                       Aksi
                                   </th>
                               </tr>
                           </thead>
                           <!-- <tbody v-if="produkList.length > 0 && produkList.length < 6">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="produk in produkList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                       {{ produk.Produk_ID }}
                                   </th>
                                   <td class="px-6 py-4 w-[15%]">
                                       {{ produk.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ produk.Harga_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ produk.Saiz_Produk }}
                                   </td>
                                   <td class="px-6 py-4">
                                       {{ produk.Deskripsi_Produk }}
                                   </td>
                                   <td class="px-6 py-3">
                                       {{ produk.Kategori.Nama_Kategori}}
                                   </td>
                                   <td class="px-6 py-4 flex justify-around">
                                       <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteProduct(produk.Produk_ID)"></i>
                                       <RouterLink :to="'/update-product/' + produk.id">
                                           <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                       </RouterLink>
                                   </td>
                               </tr>   
                               <tr>
                                <td colspan="7"><p class="text-center py-5 text-gray-500">Daftar lagi produk untuk melihat maklumat produk yang lain.</p></td>
                               </tr>                 
                           </tbody>
                           <tbody v-else-if="produkList.length > 0">
                               <tr class="bg-white border-b border-gray-500 text-center" v-for="produk in produkList">
                                   <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-[15%]">
                                       {{ produk.Produk_ID }}
                                   </th>
                                   <td class="px-6 py-4 w-[15%]">
                                       {{ produk.Nama_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ produk.Harga_Produk }}
                                   </td>
                                   <td class="px-6 py-4  w-[15%]">
                                       {{ produk.Saiz_Produk }}
                                   </td>
                                   <td class="px-6 py-4">
                                       {{ produk.Deskripsi_Produk }}
                                   </td>
                                   <td class="px-6 py-3">
                                       {{ produk.Kategori.Nama_Kategori}}
                                   </td>
                                   <td class="px-6 py-4 flex justify-around">
                                       <i class="fa-sharp fa-solid fa-trash text-lg text-red-600 cursor-pointer" @click="deleteProduct(produk.Produk_ID)"></i>
                                       <RouterLink :to="'/update-product/' + produk.id">
                                           <i class="fa-solid fa-pen-to-square text-lg text-yellow-500 cursor-pointer"></i>
                                       </RouterLink>
                                   </td>
                               </tr>                   
                           </tbody>
                           <tbody v-else>
                                <tr>
                                    <td colspan="7"><p class="text-center py-5 text-gray-500">Tiada produk terdaftar</p></td>
                                </tr> 
                           </tbody> -->
                       </table>
                    </div>
            </div>
        </div>
    </div>
</template>