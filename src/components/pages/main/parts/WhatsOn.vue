<template>
  <div class="whats-on">
    <div class="box">
    <slot></slot>
  </div>
   </div>
</template>
  
<script>
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import {faDeleteLeft, faKeyboard, faBook, faBookOpen, faBookOpenReader, faCakeCandles, faAward, faPeopleGroup, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
  // import VerticalTimeline from './VerticalTimeline.vue'
  // import SpecialEvents from './SpecialEvents.vue'
  library.add(faDeleteLeft, faKeyboard, faBook,faBookOpen,faBookOpenReader,faCakeCandles, faAward,faPeopleGroup, faBriefcaseMedical);
  dom.watch();
export default {
    name: 'WhatsOn',
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
  .big-logo {
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
    }
  }
  span.lib {
    font-size: 2.4rem;
    margin-top: 0em;
    position:relative;
    top:-5.3em;
    left:-5.4em;
    color:black;
  }
  svg.lib {
    width: 57%;
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
  // open book by Tarandeep Singh from <a href="https://thenounproject.com/browse/icons/term/open-book/" target="_blank" title="open book Icons">Noun Project</a> (CC BY 3.0)
  // open book by Kevin from <a href="https://thenounproject.com/browse/icons/term/open-book/" target="_blank" title="open book Icons">Noun Project</a> (CC BY 3.0)
  .whats-on {
    background-color: gold;
    opacity: 0.8;
    font-size: 18px;
    color: #838342;
    padding: 0.5em 0 0 0;
    border-radius: 0px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-height: 10em;
    min-width: 8em;
    margin: 0em;
    width:100%;
    // :hover{
      // filter: brightness(0.85);
    // }
  .box {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    .left-up {
      grid-column: 1;
      grid-row: 1
    }
    .left-down {
      grid-column: 1;
      grid-row: 2
    }
    .right {
      grid-column: 2;
      grid-row: 1 / 3

    }
  }
}
// .row {
//   display: flex;
//   .column {
//     flex: 50%;
//     td:first-child {
//       float:left;
//     }
//     td:nth-child(2) {
//       float:right;
//     }
//   }
// }

  </style>
  