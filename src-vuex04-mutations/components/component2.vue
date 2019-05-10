<template>
	<div>
		<span>{{$store.state.count}}</span><br>
		<button @click="add">增加</button>
	</div>
</template>

<script>
	export default{
		name: 'component2',
		methods:{
			add(){
				this.$store.commit('addCount', "additional params from component2");
			}
		}
	}
</script>

<style>
</style>
