<template>
  <section class="userRepo">
    <h1>{{getUsername}}</h1>
    <ul>
      <li v-for="(repo,index) in getUserdata" v-bind:key="index"> 
        <span @click="storeRepoUrl(repo.url);userReadme(repo.url)">{{repo.name}}</span>
      </li>
    </ul>
  </section>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'userRepo',
  //on create, fetch user's data
  created() {
    this.fetchUserdata(this.getUsername)
  },
  methods: {
    //get actions from store
    ...mapActions([
      'fetchUserdata',
      'storeRepoUrl'
    ]),
    //route to /read-me
    userReadme(repoUrl) {
      this.$router.push({ name: 'readMe' });
    },
  },
  computed: {
    ...mapGetters([
      'getUserdata',
      'getUsername'
    ])
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
</style>
