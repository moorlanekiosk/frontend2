<template>
    <div class="debug">
      <button @click="sendMessageToVB">Quit</button>
      {{ UserMessage }}
      <button @click="toggleKeyboard">KeyBoard</button>
        <button @click="toggleUserStatus">Logon</button>
        {{ UserStatus() }}
        <input type="text" v-model="userValue"/>
        <slot></slot>
    </div>
  </template>
  
  <script>
  // import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons';
  import { inject, computed, ref } from 'vue';
  
  export default {
    name: 'DebugPanel',
    setup() {
      const store = inject('store');
      const { toggleUserStatus, toggleKeyboard, UserStatus, setUserName } = store;
      const userValue = computed({
        get: () => store.state.user.name,
        set: (newValue) => {
          setUserName(newValue);
        },
      });
      const UserMessage = ref('hi!');
      const sendMessageToVB = () => {
        //var message = "Exit!";
        //window.chrome.webview.postMessage(JSON.stringify(message));
        //dotNetObject.PostMessageToDotNet(JSON.stringify(message));
        if(window.chrome.webview) {
          const example = window.chrome.webview.hostObjects.example;
          // eslint-disable-next-line
          example.PostMessageToDotNet("exit");
        }
        //window.chrome.webview.postMessage(JSON.stringify(message));
      };
      const rcvMessageFromVB = (message) => {
        UserMessage.value = message.data;
      };
      if(window.chrome.webview) window.chrome.webview.addEventListener('message', rcvMessageFromVB);
      return {
        sendMessageToVB, toggleKeyboard, toggleUserStatus, UserStatus, userValue, UserMessage
      };
    },
  };
  </script>
  
  <style lang="scss">
  .fixed-footer {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    &.show {
      display: block;
    }
    background-color: #e8a64c;
  }
  footer-space {
    height: 0;
  }
  </style>
  