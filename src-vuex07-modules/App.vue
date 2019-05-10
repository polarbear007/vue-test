<template>
	<div id="app">
		<div id="main">
			<h2>水果</h2>
			<input type="text" v-model="fruitToAdd"><button @click="addFruit">添加水果</button>
			<ul>
				<!-- rootState 的数据就像以前那样引用就可以了 -->
				<li v-for="(fruit, index) in $store.state.fruits" :key="index">
					{{fruit}}
				</li>
			</ul>
		</div>
		<div id="student">
			<h2>学生</h2>
			<input type="text" v-model="stuToAdd"><button @click="addStu">添加学生</button>
			<ul>
				<!-- 学生模块的 state 就需要添加命名空间去引用 -->
				<li v-for="(stu, index) in $store.state.student.stus" :key="index">
					{{stu}}
				</li>
			</ul>
		</div>
		<div id="drinks">
			<h2>饮料</h2>
			<input type="text" v-model="drinkToAdd"><button @click="addDrink">添加饮料</button>
			<ul>
				<!-- 饮料模块的 state 也需要添加命名空间去引用 -->
				<li v-for="(drink, index) in $store.state.drink.drinks" :key="index">
					{{drink}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				fruitToAdd: '',
				stuToAdd: '',
				drinkToAdd: ''
			}
		},
		methods:{
			addFruit(){
				if(this.fruitToAdd.trim() !== ''){
					this.$store.dispatch('addFruitAsync', this.fruitToAdd);
				}else{
					alert('请输入要添加的水果！');
				}
				this.fruitToAdd = '';
			},
			addStu(){
				if(this.stuToAdd.trim() !== ''){
					// actions 里面的函数并不需要添加命令空间
					this.$store.dispatch('addStuAsync', this.stuToAdd);
				}else{
					alert('请输入要添加的学生姓名！');
				}
				this.stuToAdd = '';
			},
			addDrink(){
				if(this.drinkToAdd.trim() !== ''){
					this.$store.dispatch('addDrinksAsync', this.drinkToAdd);
				}else{
					alert('请输入要添加的饮料！');
				}
				this.drinkToAdd = '';
			}
		}
	}
</script>

<style>
</style>
