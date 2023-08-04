<template>
  <div v-if="UserStatus() == 'On'">
    <router-link to="/user">
    <span class="user-name">{{ UserName() }}</span>
    </router-link>
  </div>
  <router-link to="/popup"  v-else-if="UserStatus() == 'Off'">
  <div class="user-status">
    <img class="card" alt="card" src="./../../../assets/user/credit-cards.svg">
    <button @click="logon" class="logon"><img class="pass" alt="password" src="./../../../assets/user/password.svg"><span class="text">Log On</span></button>
  </div>
  </router-link>
</template>
  
<script>
  import { inject } from 'vue'
  
  export default {
    setup() {
      const store = inject('store');
      const { UserStatus, UserName } = store;
      function logon() {

      }
      function account() {
        return "/user"
      }
      return {
        UserStatus, UserName, logon, account
      }
    },
    name: 'UserStatus',
    props: {
      status: {
        type: String,
        default: 'none'
      }
    },
    components: {
    }  
  };
  </script>
  
<style lang="scss">
  .header {
    .user-status {
      background-color: grey;
      color: cornsilk;
      padding: 0.5em;
      display: flex;

      .card {
        margin:0;
        display: inline-block;
        width: 4rem;
        flex-shrink: 1;
      }
      .logon {
        margin-left:0.8em;
        display: inline-block;
        position: relative;
        padding: 1.5em;
        flex-shrink: 1;
        .pass {
          margin:0;
          display: block;
          width: 5rem;
          flex-shrink: 1;
          position: absolute;
          top: -22px;
          left: 2px;
        }
        .text {
          display: inline-block;
          margin-top: 1.5em;
        }
      }
      .name {
        margin:0;
        display: inline-block;
      }
      .icon {
        margin:0 0 0 0.5em;
        display: inline-block;
      }
    }
    .user-name {
      text-decoration: none;
      background-color: grey;
      color: white;
      padding: 0.8rem;      
    }
  }
</style>
  