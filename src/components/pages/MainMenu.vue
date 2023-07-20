<template>
  <div  class="big-logo" :class="cRoute">
    <div class="left">      
    </div>
    <div class="middle">
      <router-link to="/about"><img class="logo" alt="logo" src="./../../assets/logo.svg"></router-link>
    </div>
    <div class="right">
      <router-link to="/">
        <svg class="lib"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 75 70"
        style="enable-background:new 0 0 100 100;"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"><defs
          id="defs301" />
          <g
          id="g291"
          transform="matrix(2.0398909,0,0,1.751073,-50.260825,-40.843041)"><g
            id="g289"
            style="stroke-width:0.10582162;stroke-dasharray:none"><path
              id="polygon285"
              style="fill:none;stroke:#000000;stroke-width:0.79366214;stroke-dasharray:none"
              d="m 31.780374,28.513916 12.035028,6.52607 12.177453,-6.52607"
              sodipodi:nodetypes="ccc" /><path
              d="M 43.744188,37.287855 29.00306,29.601595 v 23.711388 l 14.741128,7.686261 15.097195,-7.831285 V 29.601595 Z"
              id="path287"
              style="fill:none;stroke:#000000;stroke-width:0.79366214;stroke-dasharray:none;stroke-opacity:1"
              sodipodi:nodetypes="ccccccc" /></g></g>
        </svg>
        <span class="lib">Library</span>
      </router-link>
    </div>
  </div>
</template>
  
<script>
  import { watch, ref } from 'vue'
  import { useRoute } from 'vue-router'

  // import { library, dom } from '@fortawesome/fontawesome-svg-core';
  export default {

      setup() {
      const route = useRoute()
      const routeChanged = ref(false);  
      const cRoute = ref('');  
      // const state = reactive({
      //   routeChanged: false
      // })
      watch(
        () => route.fullPath,
        () => {
          console.log("hit");
          routeChanged.value = true;
          cRoute.value = route.path.replaceAll('/','page-');
          setTimeout(() => {
            routeChanged.value = false;
          }, 500) // Reset the flag after the transition is complete (adjust duration as needed)
        }
      );
      return {
        routeChanged, cRoute
      }
    },
    name: 'MainMenu',
    props: {
      backgroundColor: {
        type: String,
        default: '#3498db' // default background color is a shade of blue
      },
      color: {
        type: String,
        default: '#ffffff' // default text color is white
      }
    },
    components: {
      // VerticalTimeline, SpecialEvents
    }  
  };
  </script>
  
  <style lang="scss">
  // .route-link-active {
  //   transition: all 1.5s ease-out;
  // }
  // .route-link-exact-active {
  //   img {
  //     height: 50px;
  //   }    
  // }
  .big-logo {
    img.logo {
      transition: all 0.5s ease-in-out;
      width: 80%;
    }
    .right {
      & > a {
        display:inline-block;
        position: relative;
      }
    }
    span.lib {
        transition: all 0.5s ease-in-out;
        font-size: 30px;
        margin-top: 0em;
        position: absolute;
        top: 50px;
        left: 107px;
        color: black;
        text-align: center;
    }
    // span.lib {
    //   transition: all 0.5s ease-in-out;
    //   font-size: 2.5rem;
    //   margin-top: 0em;
    //   position: absolute;
    //   top: -4rem;
    //   left: -9.45rem;
    //   color: black;
    //   text-align: center;
    // }
    svg.lib {
      transition: all 0.4s ease-in-out;
      width: 43%;
      margin-top:0em;
      &:hover{
        & + span.lib {
          color: white;
          pointer-events: none;
          text-shadow: black 0em 0em 0.1em, black 0em 0em 0.1em, black 0em 0em 0.1em;
        }
        g {
          fill: white;
        }
      } 
    }
    &.page-about {
      opacity: 1;
    }
    &.page- {
      img.logo {
        width:25%;
      }
      // svg.lib {
      //   width: 25%;
      // }
      // span.lib {
      //   position: absolute;
      //   font-size: 18px;
      //   top: 27px;
      //   left: 124px;
      // }    
    }
    opacity: 0.8;
    font-size: 18px;
    color: #838342;
    // padding: 0.5em 0 0 0;
    border-radius: 0px;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-height: 10em;
    margin: 0em;
    display: flex;
    align-items: stretch;
    justify-content: space-around;    
    width:100%;
    div {
    padding: 0.5em 0 0 0;
    background-color: gold;
      flex:1
    }
    .left {
    }
    .middle {

    }
    .right {
      & > a {
        text-decoration: none;
      }
    }
  }
</style>
  