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
      <p>设置参数：</p>
      <p>
        {
        path:'/params/:newsId/:newsTitle',
        component:Params
        }
      </p>
      <p>接收参数：</p>

      <p>新闻ID： $route.params.newsId</p>
      <p>新闻标题： $route.params.newsTitle</p>
    </div>
    <h3>第6节：vue-router 的重定向-redirect</h3>
    <hr />
    <div>
      <h3>重定向时传递参数</h3>
      <p>
        {
        path:'/params/:newsId(\\d+)/:newsTitle',
        component:Params
        },{
        path:'/goParams/:newsId(\\d+)/:newsTitle',
        redirect:'/params/:newsId(\\d+)/:newsTitle'//直接使用redirect属性就可以。跳转到已经配置的其他界面上
        }
      </p>
    </div>
    <h3>第7节：alias别名的使用</h3>
    <hr />
    <div>
      <p>配置别名 alias</p>
      <p>
        {
        path: '/hi1',
        component: Hi1,
        alias:'/jspang'
        }
      </p>
      <br />
      <p>使用别名跳转</p>
      <br />

      <p>router-link to="/jspang"</p>
      <br />

      <h5>** redirect和alias的区别 **</h5>
      <br />

      <p>
        redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
        alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了router-view中的内容。
      </p>
      <br />

      <h5>填个小坑：</h5>
      <br />

      <p>
        别名请不要用在path为’/’中，如下代码的别名是不起作用的。
        <br />
        {
        path: '/',
        component: Hello,
        alias:'/home'
        }
      </p>
    </div>
    <h3>第8节：路由的过渡动画</h3>
    <hr />
    <div>
      <p>
        transition标签
        想让路由有过渡动画，需要在router-view>标签的外部添加transition>标签，标签还需要一个name属性。
        <br />
        <!-- <transition name="fade">
          <router-view></router-view>
        </transition>-->
      </p>
      <p>
        .fade-enter {
        opacity:0;
        }
        .fade-leave{
        opacity:1;
        }
        .fade-enter-active{
        transition:opacity .5s;
        }
        .fade-leave-active{
        opacity:0;
        transition:opacity .5s;
        }
      </p>
    </div>
    <h3>第9节：mode的设置和404页面的处理</h3>
    <hr />
    <div>
      <h5>mode的两个值</h5>
      <p>
        histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！
        <br />hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
      </p>
      <h5>404页面的设置：</h5>
      <p>
        1.设置我们的路由配置文件（/src/router/index.js）：
        <br />
        {
        path:'*',
        component:Error
        }
        <br />2.新建404页面：Error.vue
      </p>
    </div>
    <h3>第10节：路由中的钩子</h3>
    <hr />
    <div>
      <h5>有两个钩子函数可以使用:</h5>

      <p>
        beforeRouteEnter：在路由进入前的钩子函数。
        <br />beforeRouteLeave：在路由离开前的钩子函数。
      </p>
      <h5>三个参数：</h5>
      <p>
        to:路由将要跳转的路径信息，信息是包含在对像里边的。
        <br />from:路径跳转前的路径信息，也是一个对象的形式。
        <br />next:路由的控制参数，常用的有next(true)和next(false)。
        <br />
      </p>
      <h5>例子：</h5>
      <p>
        {
        <br />path:'/params/:newsId(\\d+)/:newsTitle',
        <br />component:Params,
        <br />beforeEnter:(to,from,next)=>{
        <br />console.log('我进入了params模板');
        <br />console.log(to);
        <br />console.log(from);
        <br />next();
        <br />},
      </p>
    </div>

    <h3>第11节：编程式导航</h3>
    <hr />
    <div>
      <h5>向前</h5>
      <p>this.$router.go(1)</p>
      <h5>后退</h5>
      <p>this.$router.go(-1)</p>
      <h5>指定跳转</h5>
      <p>this.$router.push(‘/xxx ‘)</p>
      <h5>首页</h5>
      <p>this.$router.push('/');</p>
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