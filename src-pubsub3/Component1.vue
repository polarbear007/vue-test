<template>
	<div>
		<h2>Component1</h2><br>
		<span>给Component2 发送消息：</span><input type="text" v-model="msgToSend"> <button v-on:click="sendMsg">发送</button><br>
		<span>从Component2 接收的消息：{{gettedMsg}}</span>
	</div>
</template>

<script>
	import PubSub from 'pubsub-js';
	
	export default{
		name: 'Component1',
		data: function(){
			return{
				gettedMsg: '',
				msgToSend: ''
			}
		},
		mounted() {
			PubSub.subscribe('component2.msg', (routingkey, msg)=>{
				this.gettedMsg = msg;
			})
		},
		methods:{
			sendMsg(){
				if(this.msgToSend.trim() !== ''){
					PubSub.publish('component1.msg', this.msgToSend);
					this.msgToSend = '';
				}else{
					alert("请输入要发送的内容！");
				}
			}
		}
	}
</script>

<style>
</style>
