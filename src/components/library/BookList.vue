<template>
    <div>
      {{  searchText }}
      <ul class="books shelf">
          <li class="book" v-for="book in filteredBooks" :key="book.id">
              <ABook :book="book"></ABook>
          </li>
      </ul>
  </div>
</template>

<script>
  import ABook from './ABook.vue';
  import { inject } from 'vue';

  export default {
    setup()  {
      const store = inject('store');
      const { books, searchText } = store.state;
      return { books, searchText };

    },
    computed: {
      filteredBooks() {
        const store = inject('store');
        const {searchText,  books } = store.state;
        if (!searchText) {
          console.log("books set");
          return books;
        }  
        const searchTextLower = searchText.toLowerCase();
        // console.log(books[0].title);
        // // return books.filter(book =>
        // //   true
        // // );
        return books.filter(book => {
            console.log(book.title, book.author);
            if(book.author === undefined){
              return book.title.toLowerCase().includes(searchTextLower)
            }else{
              return book.title.toLowerCase().includes(searchTextLower) || book.author.toLowerCase().includes(searchTextLower)
            }
          }
        );
      }
    },
    components: {
        ABook
    }
  };
</script>
<style lang="scss">
  .books {
      display:table;
      li.book {
          // height: 10em;
          display: inline-table;
          margin: 0em 1em 1em 0em;
      }
  } 
</style>