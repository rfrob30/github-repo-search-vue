<template>
  <section class="read-me">
    <vue-markdown :source="getRepoReadme"></vue-markdown>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import VueMarkdown from 'vue-markdown'

export default {
  name: 'readMe',
  //for mark down
  components: {
    VueMarkdown
  },
  //on create, fetch user's repo's read me
  created() {
    this.fetchRepoReadme(this.getRepoUrl)
  },
  methods: {
    //get actions from store
    ...mapActions([
      'fetchRepoReadme',
      'storeRepoUrl'
    ]),
  },
  computed: {
    //getters from store
    ...mapGetters([
      'getRepoUrl',
      'getRepoReadme',
      
    ])
  },

};
</script>



