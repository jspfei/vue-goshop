<template>
  <div>
    <h2>全局API</h2>
    <h3>Vue.directive 自定义指令</h3>
    <hr />
    <div>
      <div v-jspang="color" id="demo">{{num}}</div>
    </div>

    <h3>Vue.extend构造器的延伸</h3>
    <hr />
    <div></div>
    <h3>Vue.set全局操作</h3>
    <hr />
    <div>
      {{count}}
      <br />
      <button @click="add">set方法添加</button>
    </div>
    <h3>Component 初识组件</h3>
    <hr />
    <div>
      <panda></panda>
    </div>
    <h3>Component 组件props 属性设置</h3>
    <hr />
    <div>
      <h5>定义属性并获取属性值</h5>
      <panda2 here="China"></panda2>
      <h5>属性中带’-‘的处理方式</h5>
      <panda3 from-here="China"></panda3>
      <h5>在构造器里向组件中传值</h5>
      <panda4 v-bind:here="message"></panda4>
    </div>
    <h3>Component 父子组件关系</h3>
    <hr />
    <div>
      <jspang></jspang>
    </div>
    <h3>Component 标签</h3>
    <hr />
    <div>
      <component v-bind:is="who"></component>
      <button @click="changeComponent">changeComponent</button>
    </div>

    <div style="height:100px"></div>
  </div>
</template>
<script>
//在构造器外部声明数据
var outData = {
  count: 1,
  goodName: "car",
  num: 12,
  color: "blue",
  message: "SiChuan",
  who: "componentA"
};
var city = {
  template: `<div>Sichuan of China</div>`
};
var jspang = {
  template: `<div>
                    <p> Panda from China!</p>
                    <city></city>
            </div>`,
  components: {
    city: city
  }
};
var componentA = {
  template: `<div style="color:red;">I'm componentA</div>`
};
var componentB = {
  template: `<div style="color:green;">I'm componentB</div>`
};
var componentC = {
  template: `<div style="color:pink;">I'm componentC</div>`
};

export default {
  data() {
    return outData;
  },
  methods: {
    add() {
      this.count++;
    },
    changeComponent() {
      if (this.who == "componentA") {
        this.who = "componentB";
      } else if (this.who == "componentB") {
        this.who = "componentC";
      } else {
        this.who = "componentA";
      }
    }
  },
  components: {
    panda: {
      template: `<div style="color:red;">局部注册的panda标签</div>`
    },
    panda2: {
      template: `<div style="color:red;">Panda from {{ here }}.</div>`,
      props: ["here"]
    },
    panda3: {
      template: `<div style="color:red;">Panda from {{ fromHere  }}.</div>`,
      props: ["fromHere"]
    },
    panda4: {
      template: `<div style="color:red;">Panda from {{ here }}.</div>`,
      props: ["here"]
    },
    jspang,
    componentA: componentA,
    componentB: componentB,
    componentC: componentC
  }
};
</script>
<style scoped>
h3,
h5 {
  text-align: left;
}
</style>