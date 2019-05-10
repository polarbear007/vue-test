<template>
	<div id="app">
		<span>计数：{{$store.state.count}}</span><br>
		<button @click="add1">"同步"添加</button>
		<button @click="add2">"异步"添加</button>
		<button @click="add3">"异步"添加的另一种思路</button>
		<button @click="add4">"异步"添加的另一种思路：actions</button>
	</div>
</template>

<script>
	export default{
		name: 'App',
		methods:{
			// 调用 mutations 里面的同步方法修改 state 数据
			add1(){
				this.$store.commit('add1');
			},
			// 调用 mutations 里面的异步方法修改state 数据
			add2(){
				this.$store.commit('add2');
			},
			add3(){
				// 我们把异步函数写在组件的 methods 里面
				// 在回调函数里面调用 commit() 函数去调用 mutations 里面的函数
				setTimeout(()=>{
					this.$store.commit('add1');
				}, 2000);
			},
			add4(){
				this.$store.dispatch('addAsync', '额外参数');
			}
		}
	}
</script>

<style>
</style>
