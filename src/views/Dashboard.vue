<script setup>
    import SidebarManager from '../components/SidebarManager.vue';
</script>

<template>
    <div class="bg-[#f0f0f0] h-screen w-full flex">
        <SidebarManager/>
        <div class="ml-[22%] mt-[4%] w-[75%] h-[90%]">
            <div data-aos-duration="2000" data-aos="fade-down">
                <h1 class="text-2xl font-semibold">Halaman Utama</h1>
                <h2 class="text-lg text-gray-500">Halaman Utama - <span class="text-sky-500">Papan Pemuka</span></h2>
            </div>
            
            <div class="flex justify-around mt-[2%] ">
                <div data-aos-duration="2000" data-aos="zoom-in" class="w-[30%] h-60 pink">
                    
                </div>

                <div data-aos-duration="2000" data-aos="zoom-in" class="w-[30%] biru">
                    
                </div>

                <div data-aos-duration="2000" data-aos="zoom-in" class="w-[30%] purple">
                    
                </div>           
            </div>

            <div data-aos-duration="2000" data-aos="fade-up" class="mt-[3%] bg-white w-full h-[51%] px-[2%] pb-[3%] ">
                 <table class="w-full text-sm text-left jadual">
                <caption class="p-5 text-lg font-semibold text-left bg-white ">
                    Jualan Terakhir
                    <p class="mt-1 font-normal text-gray-500 dark:text-gray-400">Senarai jualan terakhir yang direkod hari ini.</p>
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
            </div>
        </div>
    </div>
</template>

<style>
.pink{
    border-radius: 34px;
    background: #f7d9e3;
    box-shadow:  8px 8px 23px #81406e   ,
                -8px -8px 23px #ffffff;
}

.biru{
    border-radius: 34px;
    background: #cbf0f4;
    box-shadow:  8px 8px 23px #516062,
                -8px -8px 23px #ffffff;
}

.purple{
    border-radius: 50px;
    background: #cbd4f4;
    box-shadow:  8px 8px 23px #4b2e5c,
                -8px -8px 23px #ffffff;
}

.jadual{
    background: #ffffff;
    box-shadow:  8px 8px 23px #666666,
                -8px -8px 23px #ffffff;
}
</style>