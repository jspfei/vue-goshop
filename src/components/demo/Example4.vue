<template>
  <div>
    <h2>实例和内置组件</h2>
    <hr />
    <h3>实例入门-实例属性</h3>
    <hr />
    <div>
      <h5>Vue和Jquery.js一起使用</h5>
      <p>1、下载并引入jquery框架</p>
      <p>
        //在Vue中使用jQuery
        mounted:function(){
        $('#app').html('我是jQuery!');
        }
      </p>
      <h5>二、实例调用自定义方法</h5>
      <p>app.add();</p>
    </div>

    <h3>第2节：实例方法</h3>
    <hr />
    <div>
      <h5>一、$mount方法</h5>
      <p>$mount方法是用来挂载我们的扩展的，</p>
      <h5>二、$destroy() 卸载方法</h5>
      <p>vm.$destroy();</p>
      <h5>三、$forceUpdate() 更新方法</h5>
      <p>vm.$forceUpdate()</p>
      <h5>四、$nextTick() 数据修改方法</h5>
      <p>
        vm.message="update message info ";
        vm.$nextTick(function(){
        console.log('message更新完后我被调用了');
        })
      </p>
    </div>
    <h3>第3节：实例事件</h3>
    <hr />
    <div>
      <h5>一、$on 在构造器外部添加事件。</h5>
      <p>
        app.$on('reduce',function(){
        console.log('执行了reduce()');
        this.num--;
        });
        <br />
        //外部调用内部事件
        function reduce(){
        app.$emit('reduce');
        }
      </p>
      <h5>二、$once执行一次的事件</h5>
      <p>
        app.$once('reduceOnce',function(){
        console.log('只执行一次的方法');
        this.num--;
        });
      </p>
      <h5>三、$off关闭事件</h5>
      <p>
        //关闭事件
        function off(){
        app.$off('reduce');
        }
      </p>
    </div>
    <div style="height:100px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
h3,
h5 {
  text-align: left;
}
</style>