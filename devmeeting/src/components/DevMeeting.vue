<template>
  <div>
    <ol>
      <li v-for="l in languages">{{l.name}}</li>
    </ol>
    <input v-model="newName" type="text" placeholder="language name">
    <button v-on:click="addLanguage()">Add</button>
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
    addLanguage() {
      var i = this.counter++;
      this.languages.push({
        id: i,
        name: this.newName
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
