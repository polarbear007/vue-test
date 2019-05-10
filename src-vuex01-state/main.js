import Vue from 'vue';
import App from './App.vue';
// 引用我们在 store.js 里面暴露的 store 对象
// 并把这个 store 对象作为配置对象的 store 属性值
import store from './store.js';

let root = new Vue({
	el: '#app',
	components:{App},
	template:"<App/>",
	store
});

// 我们可以通过根实例 访问 $store 对象
console.log(root.$store.state.count);

