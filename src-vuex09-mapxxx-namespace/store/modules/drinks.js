export default {
	namespaced: true,
	state: {
		drinks: ['可乐', '雪碧', '果汁']
	},
	mutations: {
		addDrinks(state, payload){
			state.drinks.push(payload);
		}
	},
	actions: {
		addDrinksAsync(context, payload){
			setTimeout(()=>{
				context.commit('addDrinks', payload);
			}, 2000);
		}
	},
    getters: {
		drinksCount(state){
			return state.drinks.length;
		}
	}
}