<template>
    <div  class="back w-screen h-screen">
        <div data-aos="flip-up" class="glass left-[20%] top-[10%] absolute w-3/5 h-4/5 text-white  max-lg:h-3/5 max-lg:w-4/5 max-lg:left-[10%] max-lg:top-[20%]">
            <div class="flex h-full rounded-[50px]">
                <form @submit.prevent="submitForm" class="w-3/5 rounded-l-[50px] text-white text-center m-auto max-lg:w-full">
                    <h1 class="text-6xl max-md:text-4xl  max-md:pt-5 max-md:pb-3 font-medium pb-6">Hi! <span class="text-6xl font-medium max-md:text-4xl  text-sky-500">Selamat Datang</span></h1>
                    <h2 class="text-3xl max-md:text-xl font-light pb-10 max-md:pb-5">Log Masuk Sebagai <span class="text-4xl max-md:text-2xl font-medium text-sky-500">Pengurus</span></h2>
                    <p class="text-xl font-light pb-3" for="">ID<span class="text-xl font-medium text-sky-500"> Pengurus</span></p> 
                    <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full text-center w-[45%] max-md:w-[60%] bg-transparent border-2 border-sky-500 px-3 py-1" type="text"  v-model="idPekerja" placeholder="ID Pengurus" id="" required>
                    <p class="text-xl max-md:pt-4 font-light pb-3 pt-6" for="">Kata<span class="text-xl font-medium text-sky-500"> Laluan</span></p> 
                    <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full text-center w-[45%] max-md:w-[60%] bg-transparent border-2 border-sky-500 px-3 py-1" type="password" v-model="password" placeholder="Kata Laluan" required> <br><br>
                    <button type="submit" class="text-white max-md:w-auto max-md:mb-5 bg-gradient-to-r w-[45%] from-sky-500 to-indigo-500 h-12 px-12 rounded-full my-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Log Masuk</button>
                </form>
                <div class="bg-[#fff] w-2/5 rounded-r-[50px] max-lg:hidden">
                    <img class="w-4/5 h-full m-auto" src="/undraw_co-working_re_w93t.svg">
                </div>
            </div>
        </div>
    </div>
    <ToastMessage ref="toast"/>
</template>

<script>
import axios from 'axios';
import ToastMessage from '../components/ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {
      idPekerja: '',
      password: '',
      isDesktop: false, // Flag to check if the user is using a desktop device
    };
  },
  mounted() {
    // Check the user's device type on component mount
    this.checkDeviceType();
  },
  methods: {
    checkDeviceType() {
        const xlBreakpoint = 1280; // Adjust this value as per your desired breakpoint

        this.isDesktop = window.innerWidth >= xlBreakpoint;
        console.log(this.isDesktop);
      },
    submitForm() {
      if (!this.isDesktop) {
        const message = 'Log Masuk hanya dibenarkan di laptop atau PC.';
        const status = 'Gagal';

        this.$refs.toast.toast(message, status, 'error');
        return; // Exit the method without making the API request
      }

      const credentials = {
        idPekerja: this.idPekerja,
        password: this.password,
      };

      axios
        .post('https://lje-ms-backend.onrender.com/loginManager', credentials)
        .then(response => {
          const message = 'Log Masuk Berjaya';
          const status = 'Berjaya';

          this.$refs.toast.toast(message, status, 'success');

          setTimeout(() => {
            this.$router.push('/main');
          }, 2000);
        })
        .catch(error => {
          console.log('Login failed:', error.message);
          if (error.response && error.response.status === 403) {
            const message =
              'Maaf Hanya Pengurus Yang Boleh Log Masuk';
            const status = 'Gagal';

            this.$refs.toast.toast(message, status, 'error');
          } else {
            const message = 'ID Pekerja atau Kata Laluan Salah';
            const status = 'Gagal';

            this.$refs.toast.toast(message, status, 'error');
          }
        });
    },
  },
};
</script>


<style>
.back{
    background-image: url("/blob-scene-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.hmm{
    background-image: url("/Visiwig-Dots.svg");
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