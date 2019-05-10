<template>
	<div>
		<input type="text" v-model="fruit"> <button v-on:click="addFruit">添加水果</button>
	</div>
</template>

<script>
	import PubSub from 'pubsub-js';
	export default{
		name: 'GrandSonComponent',
		data: function(){
			return {
				fruit: ''
			}
		},
		methods:{
			addFruit(){
				// 当我们点击添加水果按钮时，通过 PubSub 发送消息，把水果的消息发送出去
				if(this.fruit.trim() !== ''){
					PubSub.publish('add.fruit', this.fruit);
					this.fruit = '';
				}else{
					alert("请先输入要添加的水果");
				}
			}
		}
	}
</script>

<style>
</style>
