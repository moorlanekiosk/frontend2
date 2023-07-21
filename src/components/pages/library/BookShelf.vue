<template>
    <div @click="redirectToUrl" class="shelf" :style="{  color }">
      <slot></slot>
    </div>
</template>
  
  <script>
  export default {
    name: 'BookShelf',
    props: {
      backgroundColor: {
        type: String,
        default: '#3498db' // default background color is a shade of blue
      },
      color: {
        type: String,
        default: '#ffffff' // default text color is white
      },
      url: {
        type: String,
        required: true
      }
    },
    methods: {
      redirectToUrl() {
        window.location.href = this.url;
      }
    }  
  };
  </script>
  
  <style>
  .shelf {
    font-size: 24px;
    /* padding: 16px 32px; */
    /* border-radius: 8px; */
    /* border: 5px solid color; */
    /* cursor: pointer; */
    transition: background-color 0.3s ease;
    /* min-height: 10em; */
}
  .shelf:hover {
    filter: brightness(0.85);
  }
  </style>
  