<template>
    <div class="fixed h-[90vh] bg-gray-100 w-[17%] left-[2%] top-[5%] tepi">
        <img src="../assets/lJE__3_-removebg-preview.png" class="mx-auto w-[60%]" alt="">
        
        <div class="font-normal text-lg ml-[18%] mt-[70%]">
            <div class="flex mb-6">
                <i class="fa-solid fa-arrow-right mt-[5px] mr-[7px]" style="color: #000000;"></i>
                <RouterLink to="/pekerja/utama" exact-active-class="active-link">
                <div class="hover:text-blue-300 cursor-pointer">Halaman Utama</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <i class="fa-solid fa-arrow-right mt-[5px] mr-[7px]" style="color: #000000;"></i>
                <RouterLink to="/pekerja/jualan" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Rekod Jualan</div></RouterLink>
            </div>
            <div class="flex mb-6">
                <i class="fa-solid fa-arrow-right mt-[5px] mr-[7px]" style="color: #000000;"></i>
                <RouterLink to="/pekerja/tambah-produk" exact-active-class="active-link">
                <div class="hover:text-blue-300  cursor-pointer">Tambah Stok</div></RouterLink>
            </div>
        </div>

        <div class="flex mt-[90%] justify-around">
            <i class="fa-sharp fa-solid fa-circle-user scale-[2.5] mt-[6.4%]" style="color: #000000;"></i>
            <div class="">
                <p>Rikey Kurniawan </p>
                <p>AI200214</p>
            </div>
            <i class="fa-solid fa-right-from-bracket scale-[2] mt-[5.6%]" style="color: #000000;"></i>
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