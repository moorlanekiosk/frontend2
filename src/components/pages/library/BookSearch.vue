<template>
    <div>
        <input id="searchBook" inputmode='none' ref="search" class="search" type="text" v-model="searchText" placeholder="Search Library.." />
        <div>
            <OnscreenKeyboard @input="handleKeyboardInput" :inputValue="searchText"/>
        </div>
    </div>
</template>

<script>
  import { inject, computed, } from 'vue';
  import axios from 'axios';
  import OnscreenKeyboard from './../parts/OnscreenKeyboard.vue';

  export default {
    setup()  {
      const store = inject('store');
      const { server, routes, search } = store.state;
      const { setBooks } = store;
      // const searchText = ref(search.text);
      const handleKey = (value) => {
        store.makeWork(value);
      };
      axios.get(`http://${server.hostname}:${server.port}/api/${routes.getAllbooks}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      const searchText = computed({
      get: () => search.text, // Read from the global state
      set: (newValue) => {
        // Write to the global state when the input value changes
        store.makeWork(newValue);
      },
    });

      return { searchText, handleKey };      
    },
    components: {
        OnscreenKeyboard
    },
    methods: {
        handleKeyboardInput(value) {
          this.searchText = value;
          this.handleKey(value);
          this.$refs.search.focus();
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
</style>