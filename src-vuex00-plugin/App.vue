<template>
	<div id="app">
		<button @click="test">测试插件1</button>
		<button @click="test2">测试插件2</button>
	</div>
</template>

<script>
	export default{
		name: 'App',
		methods:{
			test(){
				// 我们可以在子组件 App.vue 里面访问到 $testProperty 属性
				// 而且这个属性的值跟根实例里面访问的值是同一个对象
				console.log(this.$testProperty.msg);
			},
			test2(){
				this.$testProperty.msg = '哈哈';
				console.log(this.$testProperty.msg);
				// 可以修改 this.$testProperty 对象的属性值，但是不可以修改
				// this.$testProperty 对象的地址值
				this.$testProperty = {msg: '你好'};
				console.log(this.$testProperty.msg);
			}
		}
	}
</script>

<style>
</style>
