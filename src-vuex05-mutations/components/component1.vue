<template>
	<div>
		<input type="text" v-model="fruit"><button @click="addFruit">通过mutations添加</button>
		<ul>
			<li v-for="(fruit, index) in $store.state.fruits" :key="index">
				{{fruit}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'component1',
		data(){
			return {
				fruit: ''
			}
		},		
		methods:{
			// 在component1 里面我们按照 vuex 的要求，通过 commit() 去调用
			// mutations 里面的 addFruit 函数
			addFruit(){
				if(this.fruit.trim() !== ''){
					this.$store.commit('addFruit', this.fruit);
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
