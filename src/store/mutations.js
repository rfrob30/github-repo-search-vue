export default {

  setUserdata(state, payload){
    state[payload.key] = payload.data
  },
  setRepoUrl(state,payload){
    state[payload.key] = payload.data
  },
  setUsername(state,payload){
    state[payload.key] = payload.data
  },
  setRepoReadme(state, payload){
    state[payload.key] = payload.data
  },
};
