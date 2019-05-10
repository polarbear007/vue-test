<template>
	<div id="app">
		<Component1></Component1>
		<Component2></Component2>
	</div>
</template>

<script>
	import Component1 from "./Component1.vue";
	import Component2 from "./Component2.vue";
	
	export default{
		name: 'App',
		components:{Component1, Component2},
	}
</script>

<style>
</style>
