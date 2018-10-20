import Vue from 'vue';
import axios from 'axios';
import createLogger from 'vuex/dist/logger';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    products: []
  },
  mutations: {
    addProduct(state,payload) {
      state.products.push(payload.product);
    },
    setProducts(state,payload) {
      state.products = payload.products;
    }
  },
  actions: {
    addProduct({ commit }, payload) {
      commit({
        type: 'addProduct',
        product: payload
      });
    },
    async getProducts({ commit }) {
      const payload = await axios.get('http://localhost:3000/products').then(resp=>resp.data);
      commit({
        type: 'setProducts',
        products: payload
      });
    }
  },
  plugins: [createLogger()]
});
