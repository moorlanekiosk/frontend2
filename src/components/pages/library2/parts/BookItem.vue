<template>
    <div class="cover" :style="`background-image: url('http://${server.hostname}:${server.port}/api/${routes.image}/${book.img}');`">
        <div class="label">
            <div class="title">{{ book.title }}</div>
            <div class="author">{{ book.author }}</div>
        </div>
        <!-- <button @click="openPopup">Open Popup</button> -->
        <Popup />
      </div>
</template>

<script>
  import { inject } from 'vue';
  // import Popup from './PopUp.vue';

  export default {
    setup()  {
      const store = inject('store');
      const { server, routes } = store.state;

      return { server, routes };      
    },
    name:"BookItem",
    props:{
        "book":{
            type: Object,
            required: true
        }
    },
    components: {
      // Popup
    }
  };
  </script>
  <style lang="scss">
// .cover {
//     /* display: block; */
//     /* margin: 0.5em; */
//     padding: 0.5em;
//     border: 2px solid white;
//     /* background-color: white; */
//     /* background-position: center; */
//     background-size: cover;
//     /* opacity: 0.8; */
//     height: 100%;
//     width: fit-content;
// }  
  .cover {
    cursor:pointer;
    padding: 0.5em;
    border: 2px solid white;
    background-size: cover;
    height: 100%;
    min-height: 23em;
    width: 16em;
    div.label {
        background-color: rgba(255, 255, 255, 0.80);
        padding:0.2em;
        & > div {
            font-size: 12px;
            color:black;
            &.title {
                font-size: 24px;
            }
            &.author {
                font-size: 12px;
            }
        }
    }
  } 
  </style>