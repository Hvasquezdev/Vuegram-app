import Vue from 'vue'
import Vuex from 'vuex'

import posts from './data/posts'
import filters from './data/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts,
    filters,
    step: 1,
    image: '',
    selectedFilter: 'normal',
    caption: ''
  },
  getters: {
    getPost: state => {
      return state.posts
    },
    getFilters: state => {
      return state.filters
    },
    getStep: state => {
      return state.step
    },
    getPostImage: state => {
      return state.image
    },
    getPostFilter: state => {
      return state.selectedFilter
    },
    getPostCaption: state => {
      return state.caption
    }
  },
  mutations: {
    setPostImage: (state, payload) => {
      state.image = payload
    },
    setStep: (state, payload) => {
      state.step = payload
    },
    setPostFilter: (state, payload) => {
      state.selectedFilter = payload
    },
    setPostCaption: (state, payload) => {
      state.caption = payload
    }
  },
  actions: {
    setPostImage: ({commit}, payload) => {
      commit('setPostImage', payload)
    },
    setStep: ({commit}, payload) => {
      commit('setStep', payload)
    },
    setPostFilter: ({commit}, payload) => {
      commit('setPostFilter', payload)
    },
    setPostCaption: ({commit}, payload) => {
      commit('setPostCaption', payload)
    }
  }
})
