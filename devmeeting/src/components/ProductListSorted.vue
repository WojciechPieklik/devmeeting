<template>
  <ProductList :products="sortedProducts" />
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  name: 'ProductListSorted',
  props: {
      products: {
        type: Array,
        required: true
      }
  },
  components: {
    ProductList,
  },
  computed: {
    sortedProducts: function() {
      return this.products.sort((p1,p2) => {
        var str1 = p1.name;
        var str2 = p2.name;
        return str1 < str2 ? -1 : str1 > str2;
      });
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
