import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		fruits: ['苹果', '香蕉', '火龙果', '荔枝']
	},
	mutations:{
		addFruit(state, payload){
			state.fruits.push(payload);
		}
	}
});