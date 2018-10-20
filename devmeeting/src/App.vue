<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Najlepsze języki programowania"/>
    <DevMeeting />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DevMeeting from './components/DevMeeting.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DevMeeting,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
