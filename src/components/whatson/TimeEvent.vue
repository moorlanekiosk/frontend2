<template>
  <div class="container" :class="classa">
    <div class="date">{{ datea }}</div>
    <i class="icon fa" :class="icona"></i>
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'TimeEvent',
    props: {
      classa: {
        type: String 
      },
      datea: {
        type: String,
        default: '9:00am' 
      },
      icona: {
        type: String,
        default: 'fa-book-open' 
      }
    },
    components: {
    },
    methods:{
    }
  };
  </script>
  
  <style lang="scss">
  // .row {
    // border: 1px dotted grey;
    // &.left-up {
    //   flex: 0 1 auto;
    // }
    // &.left-down {
    //   flex: 1 1 auto;
    // }
    // &.left-right {
    //   flex: 0 1 40px;
    // }
  // }
  </style>
  