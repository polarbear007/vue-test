// 因为我们需要使用 Vue.use() 函数，所以我们也必须引入 vue 模块
import Vue from 'vue';
// 然后引入 vue-router 模块
import VueRouter from 'vue-router';

// 后面配置路由器对象，需要用到这两个组件模块，所以也引入进来
import hello from '../views/hello.vue';
import world from '../views/world.vue';

// 引入了 VueRouter 以后，一定要调用 use 函数，调用
// 插件的 install 函数，把插件定义的属性和函数添加到vue 实例中
Vue.use(VueRouter);

// 最后配置路由器对象，并把这个对象对外暴露出去
// 如果我们在 main.js 里面去配置的话，那么就不需要暴露了，
// 直接在vue 实例里面配置router 即可
export default new VueRouter({
	routes:[
		{
			path: '/hello',
			component: hello
		},
		{
			path: '/world',
			component: world
		}
	]
})