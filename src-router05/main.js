import Vue from 'vue';
import App from './App.vue';
import router from './router';

let vm = new Vue({
	el: '#app',
	components:{App},
	template:"<App/>",
	router
});

// 我们可以通过根实例  vm 对象访问  $route 属性
console.log("通过根实例 vm 对象访问：");
console.log(vm.$route.path="/bar");
