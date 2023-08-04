<template>
    <div @click="redirectToUrl" class="shelf" :style="{  color }">
      <div class="title">{{ title }}</div>
      <ul class="books">
        <li class="book" v-for="book in filteredBooks" :key="book.id">
            <ABook :book="book"></ABook>
        </li>
      </ul>
      <slot></slot>
    </div>
</template>
  
  <script>
  import ABook from './ABook.vue';
  import { inject } from 'vue'
  export default {
    setup() {
      const store = inject('store');
      const { books } = store.state;
      function filterBooks() {
        // eslint-disable-next-line
        return books;
        // debugger;
        // return books.filter(book => {
        //     console.log(book.title, book.author);
        //     return true;
        //     //return book.library?.includes(shelfId)
        //   }
        // );
      }
      return {
        filterBooks
      }
    },
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
      shelfid: {
        type: String,
        default: "0"
      },
      title: {
        type: String,
        default: 'Shelf' 
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
    },
    computed: {
      filteredBooks() {
        return this.filterBooks(this.shelfid);
      }
    },
    components: {
        ABook
    }
  };
  </script>
  
  <style lang="scss">
  .shelf1 {
    width: 100%;
    // overflow: hidden;
    // font-size: 24px;
    /* padding: 16px 32px; */
    /* border-radius: 8px; */
    /* border: 5px solid color; */
    /* cursor: pointer; */
    transition: background-color 0.3s ease;
    // background: yellow;
    margin: 1em;
    border-radius: 0.2em;
    /* min-height: 10em; */
    &:hover {
      filter: brightness(0.85);
    }
    .title {
      background: rgb(255, 208, 0);
      padding: 0.5em;
      border-radius: 0.2em;
      }
    .books {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth; /* Optional: Adds smooth scrolling */
      .book {
        width: 300px; /* Adjust the width as per your requirement */
        height: auto;
        margin-right: 10px; /* Add some space between images */
      }
    }
}
  </style>
  