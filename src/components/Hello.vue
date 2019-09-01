<template>
  <div class="hello">
      <label for="input">Enter Github User:</label>
      <input id="input" v-model="username" type="text">
      <button @click="storeUsername(username); searchUser()">Search</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'hello',
  methods: {
    //refer actions from store
    ...mapActions([
      'storeUsername'
    ]),
    //route to /userRepo on search
    searchUser() {
      this.$router.push({ name: 'userRepo' });
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
  text-decoration: underline;
}
</style>
