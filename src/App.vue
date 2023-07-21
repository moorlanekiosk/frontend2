<template>  
  <video autoplay loop muted>
    <source src="./assets/siddur.mp4" type="video/mp4">
  </video>
  <StickyHeader>
    <MainMenu/>
  </StickyHeader>
  <div class="library">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
  </div>
  <div class="page-space">
  </div>
  <FixedFooter>
    <BookSearch/>
  </FixedFooter>
</template>

<script>
// import DB from '../../trash/MongoDb.vue'
// import LargeButton from './components/LargeButton.vue';
// import WhatsOn from './components/whatson/WhatsOn.vue';
// import SpecialEvents from './components/whatson/SpecialEvents.vue';
// import BookShelf from './components/library/BookShelf.vue';
// import LibraryBook from './components/library/LibraryBook.vue';
// import DisplayColumn from './components/whatson/DisplayColumn.vue';
// import VerticalTimeline from './components/whatson/VerticalTimeline.vue'
// import TimeEvent from './components/whatson/TimeEvent.vue';
// import BookList from './components/library/BookList.vue';
import MainMenu from './components/pages/MainMenu.vue';
import StickyHeader from './components/pages/StickyHeader.vue';
import FixedFooter from './components/pages/FixedFooter.vue';
import BookSearch from './components/library/BookSearch.vue';
export default {
  name: 'App',
  components: {
    // WhatsOn,
      // SpecialEvents, 
    // DB,
    //  BookShelf, LibraryBook,
    //  DisplayColumn, TimeEvent,
    MainMenu, StickyHeader, FixedFooter, BookSearch
    //  , VerticalTimeline
    //  , BookList
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & > .page-space {
    flex-shrink: 0;
    flex-grow: 1;
    background-color: hsla(64, 100%, 75%, 0.692);
  }
}
.video-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top:-4em;
  /* padding-bottom: 56.25%; 16:9 aspect ratio */
}

.video-container video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
}
html,
body {
  height: 100%;
  margin: 0;
}
.library {
  background-color: antiquewhite;
}
/* route transitions */
.route-enter-from {
  opacity:0;
  transform: translateX(10em);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity:0;
  transform: translateX(-10em);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
