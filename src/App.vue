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
  <div>
  </div>
  <!-- <WhatsOn>
    <DisplayColumn item="left-up">
      <h2>Today</h2>
      <VerticalTimeline>
        <TimeEvent classa="shac left" datea="9-00am" icona="fa-book-open">
          <h2>Shacharit</h2>
          <p>Hodu 8.00am.</p>
        </TimeEvent>
        <TimeEvent classa="maariv right" datea="7-00pm" icona="fa-book-open">
          <h2>Mincha & Maariv</h2>
        </TimeEvent>
      </VerticalTimeline>
    </DisplayColumn>
    <DisplayColumn item="left-down">
      <SpecialEvents></SpecialEvents>
    </DisplayColumn>
    <DisplayColumn item="right">
        <h2>Shabbat</h2>
        <VerticalTimeline>
        <TimeEvent classa="maariv left" datea="7-20pm" icona="fa-book-open">
          <h2>Mincha & Maariv</h2>
        </TimeEvent>
        <TimeEvent classa="candle right" datea="7-29pm-8-42pm" icona="fa-cake-candles">
          <h2>Candle Lighting</h2>
        </TimeEvent>
        <TimeEvent classa="shac left" datea="9-00am" icona="fa-book-open">
          <h2>Shacharit</h2>
          <p>Hodu 9.015am</p>
        </TimeEvent>
        <TimeEvent classa="banim right" datea="5-00pm-6-00pm" icona="fa-book-open-reader">
          <h2>Avot uBanim</h2>
        </TimeEvent>
        <TimeEvent classa="mincha left" datea="7-20pm" icona="fa-book-open">
          <h2>Mincha</h2>
        </TimeEvent>
        <TimeEvent classa="women right" datea="7-20pm" icona="fa-people-group">
          <h2>Women Nach Group</h2>
        </TimeEvent>
        <TimeEvent classa="medical left" datea="7-20pm" icona="fa-briefcase-medical">
          <h2>Medical Halacha & Ethics Shiur</h2>
          <p>by Dr Hibbert</p>
        </TimeEvent>
      </VerticalTimeline>
    </DisplayColumn>
  </WhatsOn> -->
    <!-- <BookList /> -->
  <!-- <div>
    <BookShelf backgroundColor="#ddd" color="#000" url="shelf">
      <LibraryBook backgroundColor="#ff6347" color="#ffffff" url="book"></LibraryBook>
      <LibraryBook backgroundColor="#ff6347" color="#ffffff" url="book"></LibraryBook>
    </BookShelf> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LargeButton backgroundColor="#ff6347" color="#ffffff" url="books">Books</LargeButton> -->
    <!-- <LargeButton backgroundColor="#2ecc71" color="#ffffff" url="shelves">Shelves</LargeButton> -->
    <!-- <DB msg="Welcome DB!"/> -->
  <!-- </div> -->
  <div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
export default {
  name: 'App',
  components: {
    // WhatsOn,
      // SpecialEvents, 
    // DB,
    //  BookShelf, LibraryBook,
    //  DisplayColumn, TimeEvent,
    MainMenu, StickyHeader
    //  , VerticalTimeline
    //  , BookList
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
