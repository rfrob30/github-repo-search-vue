import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import mutations from './mutations';
import persistedState from './persistedState';


Vue.use(Vuex);
Vue.prototype.$http = axios;
export const createStore = () => new Vuex.Store({
  //initalize states
  state: {
  username: '',
  userdata: {},
  repourl: '',
  repoReadme: ''},
  plugins: [persistedState],
  mutations: {
    ...mutations,
  },
  //getter functions for states
  getters: {
    getUsername: state => (state.username),
    getUserdata: state => (state.userdata),
    getRepoUrl: state => (state.repourl),
    getRepoReadme: state => (state.repoReadme),
  },
  //actions that commits to a mutation function
  actions: {
    //stores inputted username
    storeUsername({commit}, username){
      commit('setUsername', {data: username, key: 'username'})
    },
    //stores repository url
    storeRepoUrl({commit}, url){
      console.log(url)
      commit('setRepoUrl', {data: url, key: 'repourl'})
    },

    //fetch and store user's data
    fetchUserdata({ commit }, username) {
      axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          commit('setUserdata', { data: response.data, key: 'userdata' });
        })
        .catch(() => {
          console.log('err')
        })
    },

    //fetch and store user's decoded readme file
    fetchRepoReadme({commit}, url){
      url = url + '/readme'
      axios.get(url)
      .then((response) => {
        //atob decodes base 64 encoding
        commit('setRepoReadme', { data: atob(response.data.content), key: 'repoReadme' });
      })
      .catch(() => {
        console.log('err')
      })
    }
  },
});

export default createStore();
