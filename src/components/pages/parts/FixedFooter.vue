<template>
    <div class="footer-space"></div>
    <div class="fixed-footer" :class="hasFooter">
      <!-- Your footer content goes here -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  import { inject,ref, watch, nextTick } from 'vue';
  
  export default {
    name: 'FixedFooter',
    setup() {
      const store = inject('store');
      const hasFooter = ref(true);
      // const hasFooter = store.state.display.footer;
  
      // const getClassFromState = () => {
      //   return hasFooter ? 'show' : 'hide';
      // };
      watch(
        () => store.state.display.footer,
        (old,value) => {
          hasFooter.value = value ? "hide": "show";
          nextTick(() => {
            if(value) {
              document.querySelector('.footer-space').style.height ="0px";
            } else {
              let headr = document.querySelector('.fixed-footer');
              document.querySelector('.footer-space').style.height = headr.offsetHeight + "px";
            }
          });
        }
      );
      return {
        hasFooter 
      };
    },
  };
  </script>
  
  <style lang="scss">
  .fixed-footer {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    &.show {
      display: block;
    }
    background-color: #e8a64c;
  }
  footer-space {
    height: 0;
  }
  </style>
  