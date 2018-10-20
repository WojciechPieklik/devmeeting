<template>
  <div>
    <ProductListSorted :products="sharedState.products" />
    <NewProductForm @add-product="addProduct"/>
  </div>
</template>

<script>

import ProductListSorted from './ProductListSorted.vue'
import NewProductForm from './NewProductForm.vue'

import store from '../store.js';

export default {
  name: 'DevMeeting',
  components: {
    ProductListSorted,
    NewProductForm,
  },
  async created() {
    store.fetchProducts();
  },
  data() {
    return {
      sharedState: store.state,
    }
  },
  methods: {
    addProduct(product) {
      store.addProduct(product);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
