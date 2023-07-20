<template>
    <div :class="['sticky-header', { 'is-sticky': isSticky }]">
      <!-- Your header content goes here -->
      <slot></slot>
    </div>
    <div class="sticky-space"></div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'StickyHeader',
    setup() {
      const isSticky = ref(false);
  
      // Function to handle scroll event
      const handleScroll = () => {
        isSticky.value = window.scrollY > 0;
        if(isSticky.value) {
            let headr = document.querySelector('.sticky-header');
            console.log(headr.offsetHeight);
            document.querySelector('.sticky-space').style.height = headr.offsetHeight + "px";
        } else {
            document.querySelector('.sticky-space').style.height ="0px";
        }
      };
  
      // Add scroll event listener when the component is mounted
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      // Remove scroll event listener when the component is unmounted
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        isSticky,
      };
    },
  };
  </script>
  
  <style>
  .sticky-header {
    /* Your header styles go here */
    z-index: 1;
  }
  sticky-space {
    height: 0;
  }
  .is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* Additional styles for the sticky header */
  }
  </style>
  