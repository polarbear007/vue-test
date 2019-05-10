<template>
	<div id="app">
		<MyComponent :fruits="fruits" @delete="deleteFruit"></MyComponent>
	</div>
</template>

<script>
	import MyComponent from './MyComponent.vue';
	export default{
		name: 'App',
		components:{MyComponent},
		data: function(){
			return {
				fruits: ['苹果', '香蕉', '火龙果', '荔枝', '梨']
			}
		},
		methods:{
			deleteFruit: function(index){
				this.fruits.splice(index, 1);
			}
		}
	}
</script>

<style>
</style>
