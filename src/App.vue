<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app {
  color: red;
}
</style>
