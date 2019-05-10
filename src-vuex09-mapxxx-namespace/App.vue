<template>
	<div id="app">
		<div id="main">
			<h2>水果</h2>
			<input type="text" v-model="fruitToAdd"><button @click="addFruit">添加水果</button>
			<ul>
				<!-- 以前我们需要使用  $store.state.fruits  -->
				<li v-for="(fruit, index) in fruits" :key="index">
					{{fruit}}
				</li>
			</ul>
		</div>
		<div id="student">
			<h2>学生</h2>
			<input type="text" v-model="stuToAdd"><button @click="addStu">添加学生</button>
			<ul>
				<!-- 以前我们需要使用  $store.state.student.stus  -->
				<li v-for="(stu, index) in stus" :key="index">
					{{stu}}
				</li>
			</ul>
		</div>
		<div id="drinks">
			<h2>饮料</h2>
			<input type="text" v-model="drinkToAdd"><button @click="addDrink">添加饮料</button>
			<ul>
				<!-- 以前我们需要使用  $store.state.drink.drinks  -->
				<li v-for="(drink, index) in drinks" :key="index">
					{{drink}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
	
	export default{
		name: 'App',
		data(){
			return {
				fruitToAdd: '',
				stuToAdd: '',
				drinkToAdd: ''
			}
		},
		computed:{
			...mapState({
				fruits: 'fruits',
				drinks: (state) => state.drink.drinks,
				stus: (state) => state.student.stus
			}),
			...mapGetters({
				fruitsCount: 'fruitsCount',
				drinksCount: 'drink/drinksCount',
				stusCount: 'student/stusCount'
			})
		},
		methods:{
			...mapActions({
				// 先处理好映射关系
				addFruitAsync: 'addFruitAsync',
				addDrinksAsync: 'drink/addDrinksAsync',
				addStuAsync: 'student/addStuAsync',
				// 在自定义的函数里我们，我们可以通过 this 拿到前面刚刚映射好的 addFruitAsync 函数
				// 也可以拿到 组件内部 定义的变量  fruitToAdd
				addFruit(){
					if(this.fruitToAdd.trim() !== ''){
						this.addFruitAsync(this.fruitToAdd);
					}else{
						alert('请输入要添加的水果！');
					}
					this.fruitToAdd = '';
				},
				addStu(){
					if(this.stuToAdd.trim() !== ''){
						this.addStuAsync(this.stuToAdd);
					}else{
						alert('请输入要添加的学生姓名！');
					}
					this.stuToAdd = '';
				},
				addDrink(){
					if(this.drinkToAdd.trim() !== ''){
						this.addDrinksAsync(this.drinkToAdd);
					}else{
						alert('请输入要添加的饮料！');
					}
					this.drinkToAdd = '';
				}
				
			})
		}
	}
</script>

<style>
</style>
