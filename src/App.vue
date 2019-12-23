<template>
  <div id="app">
    <router-view class="view" />
    <TabBar class="tabbar"></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
.view {
  left: 0;
  bottom: 100;
}
.tabbar {
  float: left;
  bottom: 0px;
}
</style>
