<template>
	<div id="app">
		<div id="nav">
			<router-link to="/foo">Foo</router-link><br>
			<router-link to="/bar">Bar</router-link>
		</div>
		<div id="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'App'
	}
</script>

<style>
	#nav{
		width: 100px;
		height: 300px;
		float: left;
		border: 1px solid black;
	}
	#content{
		width: 200px;
		height: 300px;
		float: left;
		border: 1px solid black;
	}
</style>
