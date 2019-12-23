<template>
  <div class="itemWarp" @click="changePage" v-text="txt"></div>
</template>

<script>
export default {
  props: {
    txt: String,
    page: String
  },
  methods: {
    changePage() {
      this.$router.push("/" + this.page);
      this.$emit("change", this.page);
    }
  }
};
</script>

<style>
.itemWarp {
  text-align: center;
  font-size: 14px;
  line-height: 44px;
  width: 100%;
}
</style> 