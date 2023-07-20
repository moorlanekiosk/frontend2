<template>
  <div class="special-events">
    <h2>Announcements</h2>
    <div class="announcements">
      <ul>
        <li><i class="icon fa fa-ticket"></i> Winners of the Avot U Banim Raffle!<div>Rafi - Shimon - Moshe</div></li>
        <li><i class="icon fa fa-baby-carriage"></i> Mazel Tov - It's a boy!<div>congratulations to family Cohen</div></li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import { faBook, faBookOpen, faCakeCandles, faAward, faPeopleGroup, faKitMedical, faTicket, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
  library.add(faBook,faBookOpen,faCakeCandles, faAward,faPeopleGroup, faKitMedical, faTicket, faBabyCarriage);
  dom.watch();
export default {
    name: 'SpecialEvents',
    props: {
    },
    components: {
    }  
  };
  </script>
  
  <style scoped lang="scss">
  .special-events {
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
    // :hover{
      // filter: brightness(0.85);
    // }
    .announcements {
      background-color: #838342;
      min-height: 30em;
      width: 100%;
      li {
        color: black;
        padding: 1em;
        border: 1px solid black;
        margin: 1em;
        margin-top: 1em;
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.651) ;
        svg.icon > path {
          color:white;
        }
        & > div {
          font-weight: bold;
          color: darkred;
        }        
      }
    }
}

  </style>
  