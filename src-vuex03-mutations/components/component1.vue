<template>
	<div>
		<span>{{$store.state.count}}</span><br>
		<button @click="add">add</button>
	</div>
</template>

<script>
	export default{
		name: 'component1',
		methods:{
			add(){
				console.log(this.$store);
				//this.$store.state.count++;
			}
		}
	}
</script>

<style>
</style>
