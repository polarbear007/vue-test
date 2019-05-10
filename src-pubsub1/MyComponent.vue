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
	import PubSub from "pubsub-js";
	
	export default{
		name: 'MyComponent',
		props: ['fruits'],
		methods:{
			// 当我们点击删除按钮的时候，通过  PubSub 发送一条消息
			// 路由键为 delete.fruit ， 这样子我们事先绑定的订阅者接收到消息以后
			// 就会执行对应的回调函数。
			deleteFruit: function(index){
				PubSub.publish('delete.fruit', index);
			}
		}
	}
</script>

<style>
</style>
