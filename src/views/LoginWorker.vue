<template>
    <div class="back w-screen h-screen">
      <div data-aos="flip-up" class="glass left-[20%] top-[10%] absolute w-3/5 h-4/5 text-white max-lg:h-3/5 max-lg:w-4/5 max-lg:left-[10%] max-lg:top-[20%]">
        <div class="flex h-full rounded-[50px]">
          <form @submit.prevent="submitForm" class="w-3/5 rounded-l-[50px] text-white text-center m-auto max-lg:w-full ">
            <h1 class="text-6xl font-medium pb-6">Hi! <span class="text-6xl font-medium text-sky-500">Selamat Datang</span></h1>
            <h2 class="text-3xl font-light pb-10">Log Masuk Sebagai <span class="text-4xl font-medium text-sky-500">Pekerja</span></h2>
            <p class="text-xl font-light pb-3" for="">ID<span class="text-xl font-medium text-sky-500"> Pekerja</span></p> 
            <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full w-[45%] bg-transparent border-2 border-sky-500 px-3 py-1" type="text" v-model="idPekerja" placeholder="ID Pekerja" >
            <p class="text-xl font-light pb-3 pt-6" for="">Kata<span class="text-xl font-medium text-sky-500"> Laluan</span></p> 
            <input class="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full w-[45%] bg-transparent border-2 border-sky-500 px-3 py-1" type="password" v-model="password" placeholder="Katalaluan"> <br><br>
            <button type="submit" class="text-white bg-gradient-to-r w-[45%] from-sky-500 to-indigo-500 h-12 px-12 rounded-full my-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Log Masuk</button>
          </form>
          <div class="bg-[#fff] w-2/5 rounded-r-[50px] max-lg:hidden">
            <img class="w-3/5 h-full m-auto max-lg:hidden" src="/undraw_ideas_flow_re_bmea.svg">
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
      accountAttempts: {},
      lockedAccounts: {},
    };
  },
  watch: {
    accountAttempts: {
      deep: true,
      handler(newAttempts) {
        Object.keys(newAttempts).forEach(accountId => {
          if (newAttempts[accountId] >= 3) {
            const currentTime = Date.now();
            this.lockedAccounts[accountId] = currentTime + 120000; // 2 minutes in milliseconds
            const message = `Maaf, akaun ini dikunci selama 2 minit.`;
            const status = 'Gagal';
            this.$refs.toast.toast(message, status, 'error');
            console.log(`Account ${accountId} locked.`);
          }
        });
      },
    },
  },
  computed: {
    isAccountLocked() {
      const unlockTime = this.lockedAccounts[this.idPekerja];
      const currentTime = Date.now();
      return unlockTime && unlockTime > currentTime;
    },
  },
  methods: {
    submitForm() {
      if (this.isAccountLocked) {
        const remainingTime = Math.ceil((this.lockedAccounts[this.idPekerja] - Date.now()) / 1000); // Remaining time in seconds
        const message = `Maaf, akaun ini dikunci selama ${remainingTime} saat.`;
        const status = 'Gagal';
        this.$refs.toast.toast(message, status, 'error');
        console.log(`Account ${this.idPekerja} login attempt failed. Account locked.`);
        return;
      }

      const attempts = this.accountAttempts[this.idPekerja] || 0;
      this.accountAttempts[this.idPekerja] = attempts + 1;
      console.log(`Account ${this.idPekerja} login attempt: ${this.accountAttempts[this.idPekerja]}`);

      const credentials = {
        idPekerja: this.idPekerja,
        password: this.password,
      };

      axios
        .post('https://lje-ms-backend.onrender.com/login', credentials)
        .then(response => {
          // Store user's name in session storage
          sessionStorage.setItem('stafID', this.idPekerja);
          setTimeout(() => {
            this.$router.push('/pekerja/utama');
          }, 2000);
          const message = 'Log Masuk Berjaya';
          const status = 'Berjaya';
          this.$refs.toast.toast(message, status, 'success');
        })
        .catch(error => {
          console.log('Login failed:', error.message);

          if (error.response && error.response.status === 403) {
            const message = 'Maaf, hanya pekerja yang boleh log masuk';
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