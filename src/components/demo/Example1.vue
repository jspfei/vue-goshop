<template>
  <div id="example">
    <div>
      <h2>内部指令</h2>
      <h3>v-if 判断是否加载</h3>
      <hr />
      <div v-if="isLogin">你好，World!</div>
      <div v-else>请是否来自其他世界</div>

      <h3>v-show 判断是否加载</h3>
      <hr />
      <div v-show="isLogin">css 设置属性变化</div>

      <h3>v-for指令 ：解决模板循环问题</h3>
      <hr />
      <ul>
        <li v-for="(item,key) in sortItem" v-bind:key="key">{{item}}</li>
      </ul>
      <hr />
      <ul>
        <li
          v-for="(student,index) in students"
          v-bind:key="index"
        >{{student.name}} - {{student.age}}</li>
      </ul>
      <h3>v-text & v-html</h3>
      <hr />
      <div>
        <span v-text="message"></span>
        <span v-html="msgHtml"></span>
      </div>
      <h3>v-on：绑定事件监听器</h3>
      <hr />
      <div>
        本场比赛得分：{{count}}
        <br />
        <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount" />
        <br />
        <button @click="jiafen">加分</button>
        <button @click="jianfen">减分</button>
      </div>
      <h3>v-model指令</h3>
      <hr />
      <div>
        <p>原始文本信息：{{message}}</p>
        <h5>文本框</h5>
        <p>
          v-model:
          <input type="text" v-model="message" />
        </p>
        <h5>文本区域加入数据绑定</h5>
        <p>
          <textarea cols="30" rows="3" v-model="message"></textarea>
        </p>
        <h5>多选按钮绑定一个值</h5>
        <p>
          <input type="checkbox" name id="isTrue" v-model="isTrue" />
          <label for="isTrue">{{isTrue}}</label>
        </p>
        <h5>多选绑定一个数组</h5>
        <p>
          <input type="checkbox" name id="JSPang" value="JSPang" v-model="web_Names" />
          <label for="JSPang">JSPang</label>

          <input type="checkbox" name id="Panda" value="Panda" v-model="web_Names" />
          <label for="Panda">Panda</label>
          <br />
          <input type="checkbox" name id="KKK" value="KKK" v-model="web_Names" />
          <label for="KKK">KKK</label>

          <input type="checkbox" name id="DogGod" value="DogGod" v-model="web_Names" />
          <label for="DogGod">DogGod</label>
          <br />
          <span>{{web_Names}}</span>
        </p>
        <h5>单选按钮绑定数据</h5>
        <p>
          <input type="radio" name id="one" value="男" v-model="sex" />
          <label for="one">男</label>

          <input type="radio" name id="two" value="女" v-model="sex" />
          <label for="one">女</label>
          <br />
          <span>{{sex}}</span>
        </p>
      </div>
      <h3>v-bind 指令</h3>
      <hr />
      <div>
        <img :src="imgSrc" width="200px" height="100px" />
        <h5>绑定css样式</h5>
        <div :class="className">1、绑定classA</div>
        <div :class="{classA:isOK}">2、绑定class中的判断</div>
        <div :class="[classA,classB]">3、绑定class中的数组</div>
        <div :class="isOK?classB:classA">4、绑定class中的三元表达式判断</div>
        <div :style="{color:red,fontSize:font}">5、绑定style</div>
        <div :style="styleObject">6、用对象绑定style样式</div>
      </div>
      <h3>其他内部指令(v-pre & v-cloak & v-once)</h3>
      <hr />
      <div>
        <h5>v-pre指令:在模板中跳过vue的编译，直接输出原始值</h5>
        <div v-pre>{{message}}</div>
        <h5>v-cloak指令:在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，</h5>
        <div v-cloak>{{ message }}</div>
        <h5>v-once指令：在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。</h5>
        <div v-once>第一次绑定的值：{{message}}</div>
        <div>
          <input type="text" v-model="message" />
        </div>
        <div style="height:100px"></div>
      </div>
    </div>
  </div>
</template>

<script>
function sortNumber(a, b) {
  return a - b;
}
export default {
  data() {
    return {
      isLogin: true,
      items: [20, 22, 33, 11, 2, 1, 222],
      students: [
        { name: "jspang", age: 32 },
        { name: "Panda", age: 30 },
        { name: "PanPaN", age: 21 },
        { name: "King", age: 45 }
      ],
      message: "hello Vue!",
      msgHtml: "<h2>hello Vue!</h2>",
      count: 10,
      secondCount: 0,
      isTrue: true,
      web_Names: [],
      sex: "男",
      imgSrc:
        "http://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg",
      className: "classA",
      isOK: true,
      red: "red",
      font: "39px",
      classB: "classB",
      styleObject: {
        fontSize: "24px",
        color: "green"
      }
    };
  },
  computed: {
    sortItem: function() {
      return this.items.sort(sortNumber);
    }
  },
  methods: {
    jiafen() {
      this.count++;
    },
    jianfen() {
      this.count--;
    },
    onEnter() {
      this.count = this.count + parseInt(this.secondCount);
    }
  }
};
</script>

<style scoped>
h3,
h5 {
  text-align: left;
}
.example {
  left: 0rem;
  width: 100%;
  height: 960px;
  bottom: 60px;
}
.classA {
  color: red;
  font-size: 20px;
}
.classB {
  color: yellow;
  font-size: 13px;
}
</style>