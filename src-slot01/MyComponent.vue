<template>
	<div>
		<!-- 事先在子组件里面定义好插槽的名字和位置，如果父组件有指定插槽的内容则会显示
		* 	 如果父组件没有指定的话，则会隐藏此插槽里面的内容
		* -->
		<h2>
			<slot name="header"></slot>
		</h2>
		<slot name="main"></slot>
	</div>
</template>

<script>
	export default{
		name : 'MyComponent',
		
	}
</script>

<style>
</style>
