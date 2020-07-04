import Vue from 'vue'
import Vuex from 'vuex'
import Module from '@/store/module'
import PDFAPI from '@/store/pdf'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Module: Module,
    PDF: PDFAPI
  }
})
