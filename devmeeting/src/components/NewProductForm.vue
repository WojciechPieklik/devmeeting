<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input
        name="langName"
        v-model="newName"
        v-validate="'required|min:3'"
        type="text"
        placeholder="product name">
      <button>Add</button>
      <div v-show="errors.has('langName')">
        {{ errors.first('langName') }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewProductForm',
  data() {
    return {
      counter: 1,
      newName: null
    }
  },
  methods: {
    onSubmit() {

      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        var i = this.counter++;

        this.$emit('add-product', {
          id: i,
          name: this.newName,
        });

        this.newName = null;
        this.$validator.reset();
      });

    },
  },
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
