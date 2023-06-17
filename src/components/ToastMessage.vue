<template>
    <transition name="toast">
     <div v-if="isVisible " class="fixed top-10 right-[40%] flex justify-center z-50 max-lg:right-[30%] ">
         <div :class="toastClasses" class="w-full">
              <div class="flex items-center">
           <span class="mr-2">
             <!-- Add appropriate icon based on the status -->
             <i v-if="type === 'success'" class="fa-solid fa-circle-check text-3xl text-white"></i>
             <i v-else-if="type === 'error'" class="fa-solid fa-circle-xmark text-3xl text-red-500"></i>
             <i v-else class="fa-solid fa-circle-check text-3xl"></i>
           </span>
           <div class="ml-2">
             <!-- Display the status text -->
             <div class="text-sm text-white font-medium">{{ message.status }}</div>
             <!-- Display the message text -->
             <div class="mb-1 text-white font-light">{{ message.text }}</div>
           </div>
         </div>
         </div>
     </div>
     </transition>
 </template>
 
 <style>
  /* enter transitions */
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-100%);
  }
  .toast-enter-to {
    opacity: 1;
    transform: translateY(0%);
  }
  .toast-enter-active {
    transition: all 0.5s ease;
  }

  /* leave transitions */
  .toast-leave-from {
    opacity: 1;
    transform: translateY(0%);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
  .toast-leave-active {
    transition: all 0.5s ease;
  }
</style>
 
 <script>
     export default
     {
         data()
         {
             return{
                 isVisible:false,
                 message:{
                     text:'',
                     status:'',
                 },
                 type:'',
                 
             }
         },
         computed:{
             toastClasses()
             {
                 return[
                     'px-4 py-4 rounded-lg  text-sm font-medium drop-shadow-2xl',
                     {
                         'bg-sky-500': this.type==='success',
                         'bg-red-400': this.type === 'error',
                         'bg-green-400 ': this.type === 'info' 
                     },
                 ]
             }
         },
         methods:{
             toast(message,status, type='info')
             {
                 this.message={
                     text:message,
                     status:status,
                 }
                 this.type = type,
                 this.isVisible = true
                 setTimeout(()=>{
                     this.isVisible = false
                 }, 3000)
             }
         }
 
     }
 </script>