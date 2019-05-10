import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		fruits: ['苹果', '香蕉', '荔枝', '柚子']
	},
	mutations:{
		addFruit(state, payload){
			state.fruits.push(payload);
		}
	},
	getters:{
		fruitsCount(state){
			return state.fruits.length;
		}
	},
	actions:{
		addFruitAsync(context, payload){
			setTimeout(()=>{
				context.commit('addFruit', payload);
			}, 2000);
		}
	}
});