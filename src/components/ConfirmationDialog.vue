<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white w-96 rounded-lg shadow-lg p-6">
        <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
        <p class="mb-6">{{ message }}</p>
        <div class="flex justify-end">
          <button @click="handleConfirm" class="px-4 py-2 bg-green-500 text-white rounded-lg mr-2">Confirm</button>
          <button @click="handleCancel" class="px-4 py-2 bg-red-500 text-white rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    },
    methods: {
      handleConfirm() {
        this.$emit('confirm');
      },
      handleCancel() {
        this.$emit('cancel');
      }
    }
  };
  </script>
  