import Vue from 'vue';
import Vuex from 'vuex';

import mutations from "./mutations";
import actions from "./action";
import getters from './getters'

Vue.use(Vuex);

const state = {
  count: 1
}




const moduleA = {
  state, mutations, getters, actions
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: { a: moduleA }
})