<template>
	<div id="app">
		<!-- 我们可以直接引用 $store.state 里面的属性值 -->
		<span>{{$store.state.count}}</span><button @click="test">获取store里面的count值</button>
	</div>
</template>

<script>
	export default{
		name: "App",
		methods:{
			test(){
				// 在根实例的其他组件实例对象里面，也可以拿到$store 对象，
				// 这个 $store 对象其实跟 根实例里面拿的那个对象是同一个对象
				alert(this.$store.state.count);
			}
		}
	}
</script>

<style>
</style>
