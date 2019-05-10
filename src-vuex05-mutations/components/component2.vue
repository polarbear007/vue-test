<template>
	<div>
		<input type="text" v-model="fruit"><button @click="addFruit">直接添加</button>
		<ul>
			<li v-for="(fruit, index) in $store.state.fruits" :key="index">
				{{fruit}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'component2',
		data(){
			return {
				fruit: ''
			}
		},		
		methods:{
			// 在 component2 里面，我们还是使用   this.$store.state.xxx = xxx 
			// 这种方式直接修改 state 里面的共享数据
			addFruit(){
				if(this.fruit.trim() !== ''){
					this.$store.state.fruits.push(this.fruit);
				}else{
					alert('请输入要添加的水果');
				}
				this.fruit = '';
			}
		}
	}
</script>

<style>
</style>
