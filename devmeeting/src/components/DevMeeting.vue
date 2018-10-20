<template>
  <div>
    <ol>
      <li v-for="l in languages" :key="l.id">{{ l.name }}</li>
    </ol>
    <form @submit.prevent="onSubmit()">
      <input
        name="langName"
        v-model="newName"
        v-validate="'required|min:3'"
        type="text"
        placeholder="language name">
      <button>Add</button>
      <div v-show="errors.has('langName')">
        {{ errors.first('langName') }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DevMeeting',
  data() {
    return {
      languages: [
        {id:0, name:'Java'},
        {id:1, name:'Java w wersji skrypt'},
        {id:2, name:'React'}
      ],
      counter: 3,
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
        this.languages.push({
          id: i,
          name: this.newName,
        });
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
