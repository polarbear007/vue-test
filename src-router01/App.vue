<template>
	<div id="app">
		<div class="nav">
			<router-link to="/hello">hello</router-link> <br>
			<router-link to="/world">world</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.nav{
		width: 100px;
		height: 300px;
		float: left;
		border: 1px solid black;
	}
	.content{
		width: 200px;
		height: 300px;
		float: left;
		border: 1px solid black;
	}
</style>
