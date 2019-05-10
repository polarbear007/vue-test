export default {
	state: {
		stus: ['eric', 'jack', 'rose']
	},
	mutations: {
		addStu(state, payload){
			state.stus.push(payload);
		}
	},
	actions: {
		addStuAsync(context, payload){
			setTimeout(()=>{
				context.commit('addStu', payload);
			}, 2000);
		}
	},
    getters: {
		stusCount(state){
			return state.stus.length;
		}
	}
}