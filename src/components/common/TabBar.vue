
<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item
        :class="selected == item.page ? 'selected': 'normal'"
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        v-for="item in tabbarDes"
        :key="item.page"
      ></Item>
    </div>
  </div>
</template>

<script>
import Item from "@/components/common/Item.vue";
export default {
  components: {
    Item
  },
  data: function() {
    return {
      selected: "monitor",
      tabbarDes: [
        {
          txt: "首页",
          page: ""
        }
        // {
        //   txt: "tab2",
        //   page: "page2"
        // }
      ]
    };
  },
  methods: {
    getVal(res) {
      this.selected = res;
    },
    backClick() {
      this.$router.push("/");
    }
  }
};
</script>
   
<style type="text/css">
.warp {
  border-top: 1px solid #eee;
  display: flex;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
}
.selected {
  color: #272d2f;
}
.normal {
  color: gray;
}
</style>
  