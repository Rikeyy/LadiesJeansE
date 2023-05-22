<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex pb-[3%]">
        <SidebarManager/>
        <div class="ml-[22%] pt-[2.7%] w-[75%] h-[90%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold">Pengurusan Promosi</h1>
                <h2 class="text-lg text-gray-500">Halaman Utama - Pengurusan Promosi</h2>
            </div>

            <div class="flex justify-between mt-[2%]">
                <div class="flex flex-col justify-between w-[30%] h-full">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[25%] white mb-8 pb-2">
                        <h1 class="font-semibold pl-[4%] mt-[2%] mb-[2%]">Bilangan Promosi Aktif :</h1>
                        <h2 class="text-6xl font-bold text-center">5</h2>
                    </div>

                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-[70%] bg-white pb-9">
                        <h1 class="p-5 text-lg font-semibold text-left bg-white ">Komposisi Status Promosi :</h1>
                        <img src="../assets/Screenshot 2023-05-12 025806.png" class="m-auto w-3/5 white">
                    </div>
                </div>

                <div class="w-[65%]">
                    <div data-aos-duration="2000" data-aos="zoom-in" class="h-full w-full bg-white">
                        <table class="w-[90%]  text-sm text-left jadual mx-auto">
                            <caption class="py-5 text-lg font-semibold text-left bg-white ">
                                Senarai Promosi Aktif
                            </caption>
                                <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nama Promosi
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Kategori
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Deskripsi
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b border-gray-500">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Hari Raya
                                        </th>
                                        <td class="px-6 py-4">
                                            Seluar
                                        </td>
                                        <td class="px-6 py-4">
                                            Beli 2 , Murah 30%
                                        </td>
                                        <td class="px-6 py-4">
                                            Aktif
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-gray-500">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Hari Raya
                                        </th>
                                        <td class="px-6 py-4">
                                            Seluar
                                        </td>
                                        <td class="px-6 py-4">
                                            Beli 2 , Murah 30%
                                        </td>
                                        <td class="px-6 py-4">
                                            Aktif
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-gray-500">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Hari Raya
                                        </th>
                                        <td class="px-6 py-4">
                                            Seluar
                                        </td>
                                        <td class="px-6 py-4">
                                            Beli 2 , Murah 30%
                                        </td>
                                        <td class="px-6 py-4">
                                            Aktif
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-gray-500">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Hari Raya
                                        </th>
                                        <td class="px-6 py-4">
                                            Seluar
                                        </td>
                                        <td class="px-6 py-4">
                                            Beli 2 , Murah 30%
                                        </td>
                                        <td class="px-6 py-4">
                                            Aktif
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-gray-500">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Hari Raya
                                        </th>
                                        <td class="px-6 py-4">
                                            Seluar
                                        </td>
                                        <td class="px-6 py-4">
                                            Beli 2 , Murah 30%
                                        </td>
                                        <td class="px-6 py-4">
                                            Aktif
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>

             <!-- <div data-aos-duration="2000" data-aos="fade-up" class="mt-[3%] bg-white w-full h-[51%] px-[2%] pb-7  ">
                 <table class="w-full text-sm text-left jadual">
                <caption class="p-5 text-lg font-semibold text-left bg-white ">
                    Senarai Promosi 
                    <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senara  i jualan terakhir yang direkod hari ini.</p>
                </caption>
                    <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-sky-300 dark:text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-gray-500">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b  dark:border-gray-500">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-gray-500">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-gray-500">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-gray-500">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div> -->

            

        </div>
    </div>
</template>

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