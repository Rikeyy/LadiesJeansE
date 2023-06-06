<template>
    <div class="fixed h-[90vh] bg-gray-100 w-[17%] left-[2%] top-[5%] tepi">
        <img src="../assets/lJE__3_-removebg-preview.png" class="mx-auto w-[60%]" alt="">
        
        <div class="font-normal text-md ml-[18%] mt-[70%]">
            <div class="flex mb-6">
                <RouterLink to="/pekerja/utama" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Halaman Utama</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/pekerja/jualan" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Rekod Jualan</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <RouterLink to="/pekerja/tambah-produk" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Tambah Stok</div></RouterLink>
            </div>
        </div>

        <div class="flex mt-[90%] justify-around">
            <i class="fa-solid fa-right-from-bracket scale-[2] text-center mt-[5.6%] bg-gradient-to-r from-sky-400 to-indigo-300 w-[45%] py-[1%] rounded-lg shadow-md hover:scale-[2.1] duration-200" style="color: #fff;"></i>
        </div>
    </div>
</template>

<style>
.tepi{
    border-radius: 30px;
background:  rgb(243 244 246);
box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 6px 20px -9px rgba(0,0,0,0.75);
}

.active-link {
    color: #0022ce;
}
</style>