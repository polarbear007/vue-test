import Vue from 'vue';
import Vuex from 'vuex';

// 先用 Vue.use() 函数引入插件 
Vue.use(Vuex);

// 然后我们创建并暴露 store 对象
export default new Vuex.Store({
	state: {
		count: 0
	}
})