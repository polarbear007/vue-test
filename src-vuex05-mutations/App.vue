<template>
	<div id="app">
		<div id="component1">
			<h2>component1</h2>
			<component1></component1>
		</div>
		<div id="component2">
			<h2>component2</h2>
			<component2></component2>
		</div>
	</div>
</template>

<script>
	import component1 from './components/component1.vue';
	import component2 from './components/component2.vue';
	
	export default{
		name: "App",
		components:{component1, component2},
	}
</script>

<style>
</style>
