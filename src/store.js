import Vue from 'vue'
import Vuex from 'vuex'

import posts from './data/posts'
import filters from './data/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts,
    filters
  },
  getters: {
    getPost: state => {
      return state.posts
    },
    getFilters: state => {
      return state.filters
    }
  },
  mutations: {

  },
  actions: {

  }
})
