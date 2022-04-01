import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCard: null
  },
  getters: {
    getSelectedCard: state => {
      return state.selectedCard
    }
  },
  mutations: {
    SET_SELECTED_CARD (state, value) {
      state.selectedCard = value
    }
  },
  actions: {
    setSelectedCard ({ commit }, value) {
      commit('SET_SELECTED_CARD', value)
    }
  },
  modules: {
  }
})
