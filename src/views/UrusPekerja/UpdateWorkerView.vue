    <script setup>
        import SidebarManager from '../../components/SidebarManager.vue';    
    </script>

    <template>
        <div class="bg-[#f0f0f0] min-h-screen w-full flex pb-[3%]">
            <SidebarManager/>
            <div class="ml-[22%] mt-[2.7%] w-[75%]">
                <div>
                    <h1 class="text-xl font-semibold ">Ubahsuai Maklumat Pekerja</h1>
                    <h2 class="text-md text-gray-500"><span><RouterLink to="/main">Halaman Utama</RouterLink></span> - <span><RouterLink to="/urus-pekerja">Pengurusan Pekerja</RouterLink></span> - <span class="text-sky-400">Ubahsuai Maklumat Pekerja</span></h2>
                </div>
                
                <div class="flex justify-between mt-[2%]">
                    <div class="bg-white w-[95%] h-[78%] rounded-xl shadow-2xl pt-[3%] pb-[5%]">
                        <h3 class="text-center text-lg mb-[3%]">Sila masukkan maklumat pekerja yang baru di ruang yang disediakan.</h3>

                        <form class="w-[80%] m-auto" @submit.prevent="submitForm">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_nama" v-model="worker.Nama_Pekerja" id="floating_nama" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_nama" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Penuh</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_kp" id="floating_kp" v-model="worker.NoKP_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_kp" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombor Kad Pengenalan</label>
                            </div>
                            <div class="flex justify-between">
                                <div class="relative z-0 w-[45%] mb-6 group">
                                <input type="text" name="floating_phone" id="floating_phone"  v-model="worker.Telefon_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombor Telefon</label>
                            </div>
                            <div class="relative z-0 w-[45%] mb-6 group">
                                <input type="email" name="floating_email" id="floating_email"  v-model="worker.Emel_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-Mel</label>
                            </div>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_address" id="floating_address"  v-model="worker.Alamat_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_address" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat</label>
                            </div>
                            <div class="flex justify-between">
                                <div class="relative z-0 w-[45%] mb-6 group">
                                <input type="text" name="floating_id" id="floating_id"  v-model="worker.Staf_ID" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_id" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Pekerja</label>
                            </div>
                            <div class="relative z-0 w-[45%] mb-6 group">
                            <select name="floating_role" id="floating_role" v-model="worker.Peranan_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                                <option value="Pekerja">Pekerja</option>
                                <option value="Pengurus">Pengurus</option>
                            </select>
                            <label for="floating_role" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peranan</label>
                        </div>
                            </div>
                            <div class="flex justify-between">
                            <div class="relative z-0 w-[45%] mb-6 group">
                                <input type="password" name="floating_password"  v-model="worker.KataLaluan_Pekerja" id="floating_password" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kata Laluan</label>
                            </div>
                            <div class="relative z-0 w-[45%] mb-6 group">
                                <input type="number" name="floating_gaji" id="floating_gaji"  v-model="worker.Gaji_Pekerja" class="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_gaji" class="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gaji Pekerja</label>
                            </div>
                            </div>
                            <label for="items" class="pt-3 pr-3">Muatnaik Gambar Pekerja:</label>
                            <lr-file-uploader-regular
                              css-src="https://esm.sh/@uploadcare/blocks@0.22.9/web/file-uploader-regular.min.css"
                              ctx-name="my-uploader"
                              class="my-config "
                            >
                            </lr-file-uploader-regular>
                            <div class="flex justify-between">
                                <RouterLink to="/urus-pekerja" class="w-[47%] mt-[2.8%]"><button class="text-white w-full bg-gradient-to-r from-red-400 to-red-300 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200">Batal</button></RouterLink>
                                <button class="text-white w-[47%] bg-gradient-to-r from-yellow-400 to-yellow-200 h-12 px-12 rounded-full shadow-xl hover:scale-105 duration-200 mt-[3%]">Ubahsuai</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastMessage ref="toast"/>
        </div>
    </template>

    <style>
.my-config {
  --cfg-pubkey: "3b7e00a614646d15bf1a";
  --cfg-img-only: 1;
  --cfg-multiple: 1;
  --cfg-max-local-file-size-bytes: 10485760;
  --cfg-use-cloud-image-editor: 1;
  --cfg-source-list: "local, camera, gdrive";
  --darkmode: 0;
  --h-accent: 223;
  --s-accent: 100%;
  --l-accent: 61%;
}
</style>

    <script>
        import axios from 'axios';
        import router from '../../router';
        import ToastMessage from '../../components/ToastMessage.vue';
        import * as LR from "@uploadcare/blocks";

        LR.registerBlocks(LR);

        export default {
            components:{
                ToastMessage,
            },
            data() {
                return {
                    workerId: router.currentRoute.value.params.id,
                    worker: ""
                };
            },
            mounted() {
                axios.get('http://localhost:3001/' + this.workerId)
                    .then(response => {
                        this.worker = response.data;
                    })
                    .catch(error => console.log(error));
                    window.addEventListener("LR_UPLOAD_FINISH", async (e) => {
                        const dataUpload = e.detail.data[0];
                        this.link=dataUpload.cdnUrl + dataUpload.name;
                        console.log(this.link);
                    });
            },
            methods: {
                submitForm() {
                    this.worker.GambarPekerja = this.link;
                    axios.put('http://localhost:3001/' + this.workerId, this.worker)
                        .then(response => {
                            const message ='Ubahsuai Maklumat Pekerja Berjaya'
                            const status = 'Berjaya'
                            
                            this.$refs.toast.toast(message,status,'success')

                        })
                        .catch(error => {
                            console.log(error);

                            const message ='Gagal Ubahsuai Maklumat Pekerja'
                            const status = 'Gagal'
                            
                            this.$refs.toast.toast(message,status,'error')
                        });


                            }
            }
        };
    </script>