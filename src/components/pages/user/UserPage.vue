<template>
    <div>
      <!-- About.vue content -->
      <UserDetails>

      </UserDetails>
      <UserBooks></UserBooks>
    </div>
</template>
  
<script>
  import UserDetails from './UserDetails.vue';
  import UserBooks from './UserBooks.vue';

  export default {
    // About.vue component logic
    components: {
      UserDetails, UserBooks
    }
  };
</script>
<style lang="scss">

</style>