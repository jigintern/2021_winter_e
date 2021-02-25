import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    text: "",
    flamingNumber: 1,
  },
  mutations: {
    changeText(state, text) {
      state.text = text;
    },
    changeFlaming(state, flamingNumber) {
      state.flamingNumber = flamingNumber;
    }
  }
})

export default store