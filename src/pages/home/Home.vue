<template>
  <div>
    <ul class="list">
      <li>
        <router-link to="/class/example1">内部指令</router-link>
      </li>
      <li>
        <router-link to="/class/example2">全局API</router-link>
      </li>
      <li>
        <router-link to="/class/example3">选项</router-link>
      </li>
      <li>
        <router-link to="/class/example4">实例和内置组件</router-link>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>

<style scoped>
.list {
  list-style-type: none;
}
.list > li {
  font-size: 30px;
}
</style>