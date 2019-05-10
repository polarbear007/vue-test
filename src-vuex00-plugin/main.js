import Vue from 'vue';
import App from './App.vue';
import MyPlugin from './plugin/MyPlugin.js';

// 我们在这里引入  MyPlugin 模块，并通过 use() 函数
// 执行插件定义的那个 Install() 函数
Vue.use(MyPlugin);

// 再然后，我们就使用 Vue 构造函数，创建根实例对象
let root = new Vue({
	el: '#app',
	components:{App},
	template:"<App/>"
});

// 我们可以通过 root 根实例访问到  $testProperty 属性
console.log(root.$testProperty.msg);
