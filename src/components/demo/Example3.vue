<template>
  <div>
    <h2>选项</h2>
    <hr />
    <h3>propsData Option 全局扩展的数据传递</h3>
    <hr />
    <div>propsData在实际开发中我们使用的并不多，我们在后边会学到Vuex的应用，他的作用就是在单页应用中保持状态和数据的。</div>

    <h3>computed Option 计算选项</h3>
    <hr />
    <div>
      <p>computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。</p>
      <h5>格式化输出结果：</h5>
      <p>{{newPrice}}</p>
      <h5>用计算属性反转数组</h5>
      <ul>
        <li v-for="(item,index) in reverseNews" :key="index">{{item.title}} -- {{item.date}}</li>
      </ul>
    </div>
    <h3>Methods Option 方法选项</h3>
    <hr />
    <div>
      <p>{{count}}</p>
      <p>
        <button @click="add">add</button>
      </p>
      <h5>methods中参数的传递</h5>
      <p>
        <button @click="add(2)">add</button>
      </p>
      <h5>methods中的$event参数</h5>
      <p>
        <button @click="add(2,$event)">add</button>
      </p>
      <h5>native 给组件绑定构造器里的原生事件。</h5>
      <p>
        <btn @click.native="add(3)"></btn>
      </p>
    </div>
    <h3>Watch 选项 监控数据</h3>
    <hr />
    <div>
      {{tipMsg}}
      <br />
      <p>
        <btn @click.native="add(3)"></btn>
      </p>
    </div>
    <h3>Mixins 混入选项操作</h3>
    <hr />
    <div>
      <h5>Mixins的基本用法</h5>
      <p>我们现在有个数字点击递增的程序，假设已经完成了，这时我们希望每次数据变化时都能够在控制台打印出提示：“数据发生变化”.</p>
      <p>count:{{count}}</p>
      <p>
        <button @click="add">增加数量</button>
      </p>
      <h5>mixins的调用顺序</h5>
      <p>从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。</p>
      <h5>全局API混入方式</h5>
      <p>
        Vue.mixin({
        updated:function(){
        console.log('我是全局被混入的');
        }
        })
      </p>
    </div>

    <h3>Extends Option 扩展选项</h3>
    <hr />
    <div>
      <p>通过外部增加对象的形式，对构造器进行扩展。它和我们上节课讲的混入非常的类似。</p>
      <h5>一、extends我们来看一个扩展的实例。</h5>
      <p>extends:bbb</p>
      <h5>二、delimiters 选项</h5>

      <p>delimiters:['${','}']</p>
    </div>

    <div style="height:100px"></div>
  </div>
</template>
<script>
var btn = {
  template: `<button>组件Add</button>`
};

//额外临时加入是，显示日志
var addLog = {
  updated() {
    console.log("数据发生变化，变化成 " + this.count + ".");
  }
};
var bbb = {
  created: function() {
    console.log("我是被扩展出来的");
  },
  methods: {
    add() {
      console.log("我是被扩展出来的方法！");
    }
  }
};
export default {
  data() {
    return {
      price: 100,
      newsList: [
        {
          title: "香港或就“装甲车被扣”事件追责 起诉涉事运输公司",
          date: "2017/3/10"
        },
        { title: "日本第二大准航母服役 外媒：针对中国潜艇", date: "2017/3/12" },
        {
          title: "中国北方将有明显雨雪降温天气 南方阴雨持续",
          date: "2017/3/13"
        },
        {
          title: "起底“最短命副市长”：不到40天落马，全家被查",
          date: "2017/3/23"
        }
      ],
      count: 0,
      tipMsg: ""
    };
  },
  computed: {
    newPrice() {
      return "￥" + this.price + "元";
    },
    reverseNews() {
      return this.newsList.reverse();
    }
  },
  methods: {
    add(num, event) {
      if (num != "" && typeof num == "number") {
        this.count += num;
      } else {
        this.count++;
      }
      if (event) {
        console.log(event);
      }
    }
  },
  components: {
    btn
  },
  watch: {
    count(newVal, oldVal) {
      if (newVal > 10) {
        this.tipMsg = "数量大于10,超出库存了";
      } else {
        this.tipMsg = "还有库存！";
      }
    }
  },
  mixins: [addLog],
  extends: bbb
};
</script>
<style scoped>
h3,
h5 {
  text-align: left;
}
</style>