import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		count: 0
	},
	mutations:{
		addCount(state, payload){
			// payload 是接收额外的参数的
			// 如果不需要额外的参数，那么我们也可以不写的
			console.log(payload);
			state.count++;
		}
	}
});