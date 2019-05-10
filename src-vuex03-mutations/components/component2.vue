<template>
	<div>
		<span>{{$store.state.count}}</span><br>
		<button @click="add">add</button>
	</div>
</template>

<script>
	export default{
		name: 'component2',
		methods:{
			add(){
				this.$store.state.count++;
			}
		}
	}
</script>

<style>
</style>
