<template>
	<div id="app">
		<input type="text" v-model="fruitToAdd">
		<button @click="myAddFruit">直接添加</button>
		<button @click="myAddFruitAsync">异步添加</button><br>
		<span>当前水果种类数量：{{fruitsCount}}</span>
		<ul>
			<li v-for="(fruit, index) in fruits" :key="index">
				{{fruit}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
	export default{
		name:'App',
		data(){
			return {
				fruitToAdd: ''
			}
		},
		computed: {
			...mapState(['fruits']),
			...mapGetters(['fruitsCount'])
		},
		methods:{
			...mapActions({
				addFruitAsync: 'addFruitAsync',
				// 在 mapActions 里面添加一个自定义的函数，这个函数里面可以使用 this
				// 这个 this 可以拿到组件里面自己声明的变量 
                // 也可以拿到前面映射好的那个 addFruitAsync 函数
				myAddFruitAsync(){
					if(this.fruitToAdd.trim() !== ''){
						this.addFruitAsync(this.fruitToAdd);
					}else{
						alert("请输入要添加的水果");
					}
					this.fruitToAdd = '';
				}
			}),
			...mapMutations({
				addFruit: 'addFruit',
				// 在 mapMutations 里面添加一个自定义的函数，这个函数里面可以使用 this
				myAddFruit(){
					if(this.fruitToAdd.trim() !== ''){
						this.addFruit(this.fruitToAdd);
					}else{
						alert("请输入要添加的水果");
					}
					this.fruitToAdd = '';
				}
			})
		}
	}
</script>

<style>
</style>
