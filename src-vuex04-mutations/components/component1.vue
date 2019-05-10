<template>
	<div>
		<span>{{$store.state.count}}</span><br>
		<button @click="add">增加</button>
	</div>
</template>

<script>
	export default{
		name: 'component1',
		methods:{
			add(){
				// 我们不能直接修改 $store.state 里面的数据
				// 而是应该使用  commit() 去调用 mutations 里面的函数，让这些函数去修改
				// $store.state 里面的数据
				// 第一个参数接收的是要调用的函数名
				// 第二个参数接收的是我传递的额外参数，其实跟以前我们通过  $emit() 去触发
				// 自定义类型事件是一样的。
				// 如果不需要传额外的参数的话，我们可以不写。
				this.$store.commit('addCount', "additional params from component1");
			}
		}
	}
</script>

<style>
</style>
