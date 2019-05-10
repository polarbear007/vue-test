import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		count: 0
	},
	mutations:{
		// 使用同步方法去修改 state 里面的数据
		add1(state, payload){
			state.count++;
		},
		// 使用异步的方法去修改 state 里面的数据
		add2(state, payload){
			setTimeout(()=>{
				state.count++;
			}, 2000);
		}
	},
	// 我们把需要异步处理的函数写在 actions 里面，这样多个组件就可以直接调用
	// actions 里面的函数，第一个参数接收的是 context 对象，其实就是 $store 对象
	// 我们可以直接通过  context 对象去调用 commit() 函数 
	actions:{
		addAsync(context, payload){
			setTimeout(()=>{
				context.commit('add1', payload);
			}, 2000);
		}
	}
})