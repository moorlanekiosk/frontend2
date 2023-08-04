<!-- Popup.vue -->
<template>
    <div class="popup" v-if="isPopupVisible">
      <!-- Popup content -->
      <div class="popup-content">
        <!-- Add your content here -->
        <button @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isPopupVisible = ref(false);
  
      const openPopup = () => {
        isPopupVisible.value = true;
      };
  
      const closePopup = () => {
        isPopupVisible.value = false;
      };
  
      return {
        isPopupVisible,
        openPopup,
        closePopup,
      };
    },
  };
  </script>
  
  <style>
  /* Style your popup here */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
  }
  </style>
  