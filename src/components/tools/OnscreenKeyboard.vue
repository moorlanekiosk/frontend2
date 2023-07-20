<template>
    <div class="keyboard">
      <div class="row"  v-for="row in keys" :key="row.id">
        <button class="key" @click="handleClick(key)" v-for="key in row.keys" :key="key.id" v-html="key"></button>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        // inputValue: '',
        keys: [{id:1,keys:["`","1","2","3","4","5","6","7","8","9","0","-","_","+","=", "<i class='icon fa fa-delete-left'></i>"]},{id:2,keys:["Q","W","E","R","T","Y","U","I","O","P","[","]","{","}"]},{id:3,keys:["A","S","D","F","G","H","J","K","L",":",";","@","'","~","#"]},{id:3,keys:["|","\\","Z","X","C","V","B","N","M","<",">",",",".","?","/"]},{id:4,keys:["[------SPACE------]"]}]
      };
    },
    props: {
        inputValue :{
            required: true,
            type: String
        }
    },
    methods: {
      handleClick(key) {
        // this.inputValue.value += key;
        if(key == "<i class='icon fa fa-delete-left'></i>") {
          this.$emit('input', this.inputValue.slice(0,-1));
        }else if(key == "[------SPACE------]"){
          this.$emit('input', this.inputValue + " ");
        }else{
          this.$emit('input', this.inputValue + key);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .keyboard {
    /* Add styles for the keyboard container */
  }
  
  .row {
    /* Add styles for each row of keys */
  }
  
  button {
    /* Add styles for each key/button */
  }
  button.key {
      height: 2em;
      font-size: 22pt;
      padding: 0 0.6em;
      font-weight: bold;
      font-family: system-ui;
      opacity:0.8;
      &:hover {
        background-color: lightblue;
      }
  }
  </style>
  