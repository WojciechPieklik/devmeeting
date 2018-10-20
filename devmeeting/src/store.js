import axios from 'axios';

const store = {
  state: {
    products: []
  },
  async fetchProducts() {
    this.state.products = await axios.get('products.json').then(resp=>resp.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
}

export default store;
