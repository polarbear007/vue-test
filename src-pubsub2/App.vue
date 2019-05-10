<template>
	<div id='app'>
		<MyComponent :fruits="fruits"></MyComponent>
	</div>
</template>

<script>
	import PubSub from 'pubsub-js';
	import MyComponent from "./MyComponent.vue";
	
	export default{
		name: 'App',
		components:{MyComponent},
		data: function(){
			return {
				fruits: ['苹果', '香蕉', '火龙果', '荔枝', '梨']
			}
		},
		mounted: function(){
			PubSub.subscribe('delete.fruit', (routinkey, index)=>{
				this.fruits.splice(index, 1);
			});
			// 绑定一个增加水果的回调函数, 注意回调函数的第一个参数是 路由键
			// 第二个参数才是消息本身 
			PubSub.subscribe('add.fruit', (routinkey, fruit)=>{
				this.fruits.push(fruit);
			});
		}
	}
</script>

<style>
</style>
