<template>
  <div>
    <h2>Vue-router免费视频教程</h2>
    <hr />
    <h3>第1节：Vue-router入门</h3>
    <hr />
    <div>
      <ol>
        <li>在src/components目录下，创建Hi.vue文件</li>
        <li>引入 Hi组件：我们在router/index.js文件的上边引入Hi组件</li>
        <li>增加路由配置：在router/index.js文件的routes[]数组中，新增加一个对象，代</li>
        <li>router-link制作导航</li>
      </ol>
    </div>
    <h3>第2节：vue-router配置子路由</h3>
    <hr />
    <div>
      配置子路由在 router/index 选项中childern中配置
      <p>
        ,{
        path:'/hi',
        component:Hi,
        children:[
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
        ]
        }
      </p>
    </div>
    <h3>第3节：vue-router如何参数传递</h3>
    <hr />
    <div>
      <h5>一、用name传递参数</h5>
      <p>在路由文件src/router/index.js里配置name属性。</p>
      <p>模板里(src/App.vue)用$route.name的形势接收，比如直接在模板中显示：</p>
      <h5>二、通过'router-link' 标签中的to传参</h5>
      <p>设置参数</p>
      <br />
      <p>:to="{name:xxx,params:{key:value}}"</p>
      <br />
      <p>接收参数</p>
      <br />
      <p>$route.params.username</p>
    </div>
    <h3>第4节：单页面多路由区域操作</h3>
    <hr />
    <div>
      <p>在一个页面中有2个以上的router-view区域</p>
      <ol>
        <li>给 router-view配置 name 属性。例如：left,right</li>
        <li>
          在components字段中配置：对应 router-view显示的组件
          <p>
            path: '/Hi',
            components: {
            default:Hello,
            left:Hi2,
            right:Hi1
            }
          </p>
        </li>
      </ol>
    </div>
    <h3>第5节：vue-router 利用url传递参数</h3>
    <hr />
    <div>
      <p>:冒号的形式传递参数</p>
      <p>
        设置参数：{
        path:'/params/:newsId/:newsTitle',
        component:Params
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