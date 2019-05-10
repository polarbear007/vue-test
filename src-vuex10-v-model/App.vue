<template>
	<div id="app">
		<input type="text" v-model="msg">
	</div>
</template>

<script>
	export default{
		name: 'App',
		// 如果我们想要使用 v-model 绑定 store.state 里面的某个变量
		// 1、 必须把这个变量映射到组件的 computed 中
		// 2、 不能使用 ...mapState 语法去映射，因为你不仅要写 get 方法，还要写set 方法
		computed:{
			msg: {
				get(){
					return this.$store.state.msg;
				},
				set(newMsg){
					this.$store.commit('updateMsg', newMsg);
				}
			}
		}
	}
</script>

<style>
</style>
