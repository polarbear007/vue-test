<template>
	<div id="bar">
		<div id="bar-nav">
			<router-link to="/bar/sub-bar1">sub-bar1</router-link><br>
			<router-link to="/bar/sub-bar2">sub-bar2</router-link>
		</div>
		<div id="bar-content">
			<span>内容区域：</span><br>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#bar-content{
		padding-top: 50px;
	}
</style>
