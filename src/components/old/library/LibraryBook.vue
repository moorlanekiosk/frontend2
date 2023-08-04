<template>
    <button @click="redirectToUrl" class="book" :style="{ backgroundColor, color }">
      <slot></slot>
    </button>
</template>
  
  <script>
  export default {
    name: 'LibraryBook',
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
  
  <style scoped>
  .book {
    font-size: 24px;
    padding: 16px 32px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-height: 10em;
    min-width: 8em;
    margin: 0.5em;
}
  .book:hover {
    filter: brightness(0.85);
  }
  </style>
  