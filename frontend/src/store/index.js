import { createStore } from 'vuex'
import storyStore from './modules/story-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    storyStore,
  },
})

export default store
