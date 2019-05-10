<template>
	<div id="app">
		<div id="nav">
			<router-link to="/foo">foo</router-link><br>
			<router-link to="/bar">bar</router-link>
		</div>
		<div id="content">
			<router-view></router-view>
			<router-view name="a"></router-view><br>
			<router-view name="b"></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#nav{
		width: 200px;
		height: 200px;
		border: 1px solid black;
		float: left;
	}
	
	#content{
		width: 200px;
		height: 200px;
		border: 1px solid black;
		float: left;
	}
</style>
