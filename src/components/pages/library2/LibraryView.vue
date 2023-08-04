<template>
    <ul class="genres">
        <li class="genre" v-for="genre in filteredGenres(gid)" :key="genre.id">
            <span class="name">{{ genre.name }}</span>
            <GenreCollection :gid="genre.id"/>
            <BookCollection :books=filteredBooksByGenre(genre.id) />
        </li>
    </ul>
</template>
  
  <script>
    import GenreCollection from './parts/GenreCollection.vue';
    import BookCollection from './parts/BookCollection.vue';
    import { inject } from 'vue';
  
    export default {
        props: {
            gid: {
                type: Number
            }
        },
        setup()  {
            const store = inject('store');
            const { filteredGenres, filteredBooksByGenre } = store;
            // const genres = ref(filteredGenres(props.gid));
            // const books = ref(store.state.books);
            // console.log(props.gid, gens);
            return {
                // filteredBooks,
                filteredBooksByGenre,
                filteredGenres,
                // genres,
                // books
            };
        },
        // computed: {
        //     filterBooks() {
        //         return this.filterGenres();
        //     },
        //     filterGenres(gid) {
        //         return this.filterGenres(gid);
        //     },
        // },
        components: {
            GenreCollection,
            BookCollection
        }
    };
  </script>
  <style lang="scss">
    .genres {
        // min-height: 5em;
        flex-grow: 1;
        display:block;
        font-size: 20px;
        margin: 1em 1em 1em 1em;
        padding-inline: unset;
        .genre {
            display: block;
            margin: 0em 0em 0.5em 0em;
            background-color: white;
            list-style-type: none;
            // border: 1px solid black;
            border: 1px solid #1f567d;
            border-radius: 20px;
            .genre {
                & > .name {
                    background-color: #6cabd8;
                    color: #ffffff;
                }
            }
            & > .name {
                display: block;
                background-color: #1f567d;
                color: #ffffff;
                text-decoration: none;
                margin: 0;
                padding: 0.5em;
                font-size: 21pt;
                text-align: center;
                border-radius: 0px;
                outline: 1px solid #1f567d;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }
        }
    }
  </style>