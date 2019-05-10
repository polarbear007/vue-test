<template>
	<div>
		<ul>
			<li v-for="(fruit, index) in fruits" :key="index">
				{{fruit}}   <button v-on:click="deleteFruit(index)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name : 'MyComponent',
		props: ['fruits'],
		methods:{
			deleteFruit: function(index){
				this.$emit('delete', index);
			}
		}
	}
</script>

<style>
</style>
