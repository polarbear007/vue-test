import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		firstName: 'A',
		lastName: 'B'
	},
	// 我们把派生的 fullName 属性写在 getters 里面，
	// 需要引用 fullName 属性的组件不需要自己写计算属性，可以直接引用 getters 里面的fullName
	getters:{
		fullName(state){
			return state.firstName  + "-" + state.lastName;
		}
	}
})