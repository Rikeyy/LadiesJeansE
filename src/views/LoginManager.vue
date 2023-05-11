<template>
    <div  class="back w-screen h-screen">
        <div data-aos="flip-up" class="glass left-[20%] top-[10%] absolute w-3/5 h-4/5 text-white">
            <div class="flex h-full rounded-[50px]">
                <form @submit.prevent="" class="w-3/5 rounded-l-[50px] text-white text-center m-auto">
                    <h1 class="text-6xl font-medium pb-6">Hi! <span class="text-6xl font-medium text-sky-500">Selamat Datang</span></h1>
                    <h2 class="text-3xl font-light pb-10">Log Masuk Sebagai <span class="text-4xl font-medium text-sky-500">Pengurus</span></h2>
                    <p class="text-xl font-light pb-3" for="">ID<span class="text-xl font-medium text-sky-500"> Pengurus</span></p> 
                    <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full w-[45%] bg-transparent border-2 border-sky-500 px-3 py-1" type="text" name="" id="" placeholder="ID Pengurus" required>
                    <p class="text-xl font-light pb-3 pt-6" for="">Kata<span class="text-xl font-medium text-sky-500"> Laluan</span></p> 
                    <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full w-[45%] bg-transparent border-2 border-sky-500 px-3 py-1" type="password" name="" id="" placeholder="Katalaluan" required> <br><br>
                    <button type="submit" class="text-white bg-gradient-to-r w-[45%] from-sky-500 to-indigo-500 h-12 px-12 rounded-full my-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Log Masuk</button>
                </form>
                <div class="bg-[#fff] w-2/5 rounded-r-[50px] ">
                    <img class="w-4/5 h-full m-auto" src="../assets/undraw_co-working_re_w93t.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.back{
    background-image: url("../assets/blob-scene-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.hmm{
    background-image: url("../assets/Visiwig-Dots.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.glass{
    background: rgba( 0, 0, 0, 0.3 );
    box-shadow: 0 8px 32px 0 rgba(0, 149, 255, 0.7);
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 50px;
    border: 1px solid rgb(77, 77, 77);}
</style>