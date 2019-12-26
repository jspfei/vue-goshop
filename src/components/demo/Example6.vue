<template>
  <div>
    <h2>Vuex免费视频教程</h2>
    <hr />
    <h3>第1节：初出茅庐 来个小Demo</h3>
    <hr />
    <div>
      <p>{{msg}}</p>
      <p>store.count: {{$store.state.count}} -- {{count}}</p>
      <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </div>
    </div>
    <h3>第2节：state访问状态对象</h3>
    <hr />
    <div>
      <h5>一、通过computed的计算属性直接赋值</h5>
      <p>
        computed:{
        count(){
        return this.$store.state.count;
        }
        }
      </p>
    </div>
    <h3>第3节：Mutations修改状态</h3>
    <hr />
    <div>
      <h5>$store.commit( )</h5>
      <p>$store.commit('add')</p>
      <h5>传值：</h5>
      <p>
        const mutations={
        add(state,n){
        state.count+=n;
        },
        reduce(state){
        state.count--;
        }
        }
      </p>
      <p>$store.commit('add',10)</p>
      <h5>模板获取Mutations方法</h5>
      <p>import { mapState,mapMutations } from 'vuex';</p>
      <p>
        <button @click="reduce">-</button>
      </p>
    </div>
    <h3>第4节：getters计算过滤操作</h3>
    <hr />
    <div>
      <p>{{count}}</p>
      <h5>getters基本用法：</h5>
      <p>
        const getters = {
        count:function(state){
        return state.count +=100;
        }
        }
      </p>
    </div>
    <h3>用mapGetters简化模板写法：</h3>
    <hr />
    <div>
      <p>import { mapState,mapMutations,mapGetters } from 'vuex';</p>
      <p>...mapGetters(["count"])</p>
    </div>
    <h3>第5节：actions异步修改状态</h3>
    <hr />

    <div>
      <p>actions和之前讲的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。</p>
      <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
      </p>
    </div>
    <h3>第6节：module模块组</h3>
    <hr />
    <div>
      <h5>声明模块组：</h5>

      <p>
        const moduleA={
        state,mutations,getters,actions
        }
      </p>
      <p>
        export default new Vuex.Store({
        modules:{a:moduleA}
        })
      </p>
      <p>{{$store.state.a.count}}</p>
    </div>
    <div style="height:100px"></div>
  </div>
</template>
<script>
import store from "@/store/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  store,
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
    // count() {
    //   return this.$store.getters.count;
    // }
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  }
  // computed: mapState({
  //   count: state => state.count
  // })
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
};
</script> 

<style   scoped>
h3,
h5 {
  text-align: left;
}
</style>