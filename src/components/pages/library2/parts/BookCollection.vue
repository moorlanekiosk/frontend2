<template>
    <div class="book-win">
    <ul class="books">
        <li class="book" v-for="book in books" :key="book.id">
          <BookItem :book="book" />
        </li>
    </ul>
    </div>
  </template>
  
  <script>
    import BookItem from "./BookItem.vue";
    // import { inject } from 'vue';
  
      export default {
          props: {
              books: {
                  type: Array
              }
          },
          setup()  {
          },
          computed: {
          },
          components: {
              // GenreCollection,
              // BookCollection
              BookItem
          }
      };  
  </script>
  <style lang="scss">
    .book-win {
        display: inline-block;
        width:90em;
        overflow: hidden;
        .books {
            display:table;
            font-size: 20px;
            margin: 1em 1em 1em 1em;
            padding-inline: unset;
            .book {
                display: table-cell;
                list-style-type: none;
                padding: 1em;
            }
        }
    }
 </style>