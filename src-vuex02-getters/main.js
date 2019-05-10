import Vue from 'vue';
import App from './App.vue';
import store from './store.js';

let vm = new Vue({
	el: '#app',
	components:{App	},
	template:"<App/>",
	store
});
