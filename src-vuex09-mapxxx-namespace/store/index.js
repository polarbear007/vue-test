import Vue from 'vue';
import Vuex from 'vuex';
// 引入模块
import student from './modules/student.js';
import drinks from './modules/drinks.js';
// 启用 Vuex 插件
Vue.use(Vuex);

// store 对象还是可以正常配置 state / mutations / actions/ getters 
export default new Vuex.Store({
	state:{
		fruits: ['苹果', '香蕉', '橘子']
	},
	mutations:{
		addFruit(state, payload){
			state.fruits.push(payload);
		}
	},
	actions:{
		addFruitAsync(context, payload){
			setTimeout(()=>{
				context.commit('addFruit', payload);
			}, 2000);
		}
	},
	getters:{
		fruitsCount(state){
			return state.fruits.length;
		}
	},
	// 我们可以把拆分出去的模块，在这里通过 modules 集中引入
	// 引入的时候，一般需要给模块起个名称，这个名称将会作为此模块的命名空间
	modules:{
		student: student,
		drink: drinks
	}
});