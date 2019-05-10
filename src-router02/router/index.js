import Vue from 'vue';
import VueRouter from 'vue-router';

// 不管要路由多少个组件，我们全部都在 index.js 里面引入
import Foo from '../views/Foo.vue';
import subFoo1 from '../views/sub-foo1.vue';
import subFoo2 from '../views/sub-foo2.vue';

import Bar from '../views/Bar.vue';
import subBar1 from '../views/sub-bar1.vue';
import subBar2 from '../views/sub-bar2.vue';

// 一定要记得通过  Vue.use() 去加载组件，不然页面无法显示
Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		// 设置默认路径
		{
			path: '/',
			redirect: '/foo'
		},
		{
			path: '/foo',
			component: Foo,
			// 我们可以在一个路由对象里面添加一个 children 属性
			// 这个属性接收一个 数组类型数据，数组元素还是路由对象
			children: [
				{
					path: '',
					redirect: 'sub-foo1'
				},
				{
					// 这里我们需要注意的一个问题是： 在vue-router 里面
					// 最左边的 / 永远表示根路径，所以如果我们在嵌套路由中使用 / 
					// 就可能会产生一些问题。
					// 【解决思路】
					// 		1、 我们在嵌套的路由对象中，path 全部写全路径名： /foo/sub-foo1
					//      2、 我们直接写   sub-foo1 就好，不要写 /sub-foo1
					
					// 如果我们写 /sub-foo1 的话，那么我们在浏览器访问时，需要直接通过
					//  xxxx/sub-foo1 访问这个组件，而不是  xxxx/foo/sub-foo1 
					// 显示的层级关系就会被破坏
					path: 'sub-foo1',
					component: subFoo1
				},
				{
					path: 'sub-foo2',
					component: subFoo2
				},
				// 同样的道理，设置默认值，我们就直接搞个   "" 即可
				{
					path: '',
					redirect: 'sub-bar1'
				}
			]
		},
		{
			path: '/bar',
			component: Bar,
			children: [
				{
					path: 'sub-bar1',
					component: subBar1
				},
				{
					path: 'sub-bar2',
					component: subBar2
				},
				{
					path: '',
					redirect: 'sub-bar1'
				}
			]
		}
	]
})