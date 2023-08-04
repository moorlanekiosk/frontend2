<template>
  <ul class="genres">
      <li class="genre" :v-for="genre in filteredGenres(props.gid)" :key="genre.id" >
        <div  :v-if="hasContents(genre.id)">
            <span class="name">{{ genre.name }}</span>
            <GenreCollection :gid="genre.id" />
            <BookCollection :books=filteredBooksByGenre(genre.id) />
        </div>
      </li>
  </ul>
</template>

<script>
  import GenreCollection from './GenreCollection.vue';
  import BookCollection from './BookCollection.vue';
  import { ref, inject } from 'vue';

    export default {
        props: {
            gid: {
                type: Number
            }
            // genres: {
            //     type: Array
            // }
            // books: {
            //     type: Array
            // }
        },
        setup(props)  {
            const store = inject('store');
            const { filteredGenres, filteredBooksByGenre, hasContents } = store;
            
            const genres = ref(filteredGenres(props.gid));
            // console.log(props.gid);
            // console.log(gens);
            const filterGenres = () => {
                return filteredGenres(props.gid);
            };
            return {
                // filteredBooks,
                filteredBooksByGenre,
                filterGenres,
                genres,
                hasContents
            };
        },
        components: {
            GenreCollection,
            BookCollection
        }
    };  
</script>
<style lang="scss">
</style>