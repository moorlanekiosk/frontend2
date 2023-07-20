<template>
    <div>
        <input inputmode='none' ref="search" class="search" type="text" v-model="searchText" placeholder="Search Library.." />
        <div>
            <OnscreenKeyboard @input="handleKeyboardInput" :inputValue="searchText"/>
        </div>
        <ul class="books shelf">
            <li class="book" v-for="book in filteredBooks" :key="book.id">
                <ABook :book="book"></ABook>
            </li>
        </ul>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import { reactive } from 'vue';
  import ABook from './ABook.vue';
  import OnscreenKeyboard from './../tools/OnscreenKeyboard.vue';

  export default {

    setup()  {
      const data = reactive({
        books: null,
      });
      axios.get(`http://${location.hostname}:3000/api/book/getAll`)
      .then(response => {
        data.books = response.data;
      })
      .catch(error => {
        console.error(error);
      });

    return { data };      
    //         axios.get("http://localhost:3000/api/books")
    //     .then(response => { this.books = response.data})
    //     .catch(error => { console.error(error);})
    //     return this.books;
    },
    data() {
      return {
        searchText: '',
        books: [
        { "id":"30052", 
        img:"[30084][30657]",
        author: 'Rabbi Zev Greenwald', 
        "title": "A Life of Torah", 
        tags:["Author: Rabbi Zev Greenwald",
        "Children",
        "Shelf: Children's Books",
        "ISBN:9781598269581"]},
        { "id":"30056", img:"[30123][30678]",author: 'Avraham Ohayon', "title": "Eternal Light Vol 1",tags:["Author: Avraham Ohayon","Children","Shelf: Comics","ISBN:9781680255324"]},
          // Add more books here
        ]
      };
    },
    computed: {
      filteredBooks() {
        if (!this.searchText) {
          return this.data.books;
        }  
        const searchTextLower = this.searchText.toLowerCase();
        return this.data.books.filter(book =>
          book.title.toLowerCase().includes(searchTextLower) || book.author.toLowerCase().includes(searchTextLower)
        );
      }
    },
    components: {
        ABook, OnscreenKeyboard
    },
    methods: {
        handleKeyboardInput(value) {
          this.searchText = value;
          this.$refs.search.focus();
          // this.search.focus;
        }
    }
  };
  </script>
  <style lang="scss">
  .search {
    font-size: 30px;
    width: 50%;
    margin:1em 0;
  }

  .books {
    // img {
    //     position: absolute;
    //     left: 0;
    //     background-color: #fafad2c9;
    //     z-index: -1;
    // }  
    display:table;
    li.book {
        // height: 10em;
        display: inline-table;
        margin: 0em 1em 1em 0em;
    }
  } 
  </style>