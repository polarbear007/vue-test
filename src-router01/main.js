import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
	el: '#app',
	components:{App},
	template:"<App/>",
	// es6 简洁语法 
	router,
})