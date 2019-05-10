<template>
	<div id="app">
		firstName: <span>{{$store.state.firstName}}</span><br>
		lastName:  <span>{{$store.state.lastName}}</span><br>
		fullName:  <span>{{$store.getters.fullName}}</span>
	</div>
</template>

<script>
	export default{
		name: 'App',
		// 不需要自己来写 计算属性 了
		// computed:{
		// 	fullName(){
		// 		return  this.$store.state.firstName + "-" + this.$store.state.lastName;
		// 	}
		// }
	}
</script>

<style>
</style>
