<template>
  <div>
    <ProductListSorted :products="products" />
    <NewProductForm @add-product="addProduct"/>
  </div>
</template>

<script>

import ProductListSorted from './ProductListSorted.vue'
import NewProductForm from './NewProductForm.vue'

export default {
  name: 'DevMeeting',
  components: {
    ProductListSorted,
    NewProductForm,
  },
  async created() {
    this.$store.dispatch('getProducts');
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch('addProduct', product);
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
