<template>
    <template v-if="item == 'left-up'">
        <div class="row left-up">
          <slot></slot>
        </div>
    </template>
    <template v-else-if="item == 'left-down'">
      <div class="row left-down">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="item == 'right'">
      <div class="row right">
        <slot></slot>
      </div>
    </template>
    <template v-else>
    </template>
</template>
  
<script>
export default {
    name: 'DisplayColumn',
    props: {
      item: {
        type: String,
        default: 'left-up' 
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
  