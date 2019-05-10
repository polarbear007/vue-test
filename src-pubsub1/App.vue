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
		// 我们事先在实例挂载的时候，先给 PubSub绑定一个回调函数， bindingkey 为 delete.fruit
		// 当接收到 路由键为  delete.fruit 的消息时，就会调用此回调函数
		mounted: function(){
			PubSub.subscribe('delete.fruit', (routinkey, index)=>{
				this.fruits.splice(index, 1);
			})
		}
	}
</script>

<style>
</style>
