<template>
	<div id="foo">
		<div id="foo-nav">
			<!-- 这里可以写全路径  /foo/sub-foo1
			*    也可以写相对路径  sub-foo1
			*    我们后面会讲具体的原因
			*  -->
			<router-link to="sub-foo1">sub-foo1</router-link><br>
			<router-link to="/foo/sub-foo2">sub-foo2</router-link>
		</div>
		<div id="foo-content">
			<span>内容区域：</span><br>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#foo-content{
		padding-top: 50px;
	}
</style>
