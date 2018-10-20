import axios from 'axios';

const store = {
  state: {
    products: []
  },
  async fetchProducts() {
    this.state.products = await axios.get('http://localhost:3000/products').then(resp=>resp.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
}

export default store;
