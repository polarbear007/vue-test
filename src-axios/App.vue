<template>
	<div id="app">
		<ul>
			<li v-for="(stu, index) in stus" :key="index">
				{{stu.sid}}---{{stu.sname}}---{{stu.age}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default{
		name: 'App',
		data: function(){
			return {
				// 因为我们在后台保存的是集合是 map 
				// 所以前台使用 object 来保存，但是遍历方法跟数组一样
				stus: {}
			}
		},
		// 在项目完成挂载以后，我们就在回调函数里面去跨域申请数据
		// 来填充 stus 的初始值
		mounted(){
			axios({
				url: 'http://localhost:8081/stu'
			}).then((response)=>{
				this.stus = response.data;
			}).catch(()=>{
				console.log('跨域请求失败');
			})
		}
	}
</script>

<style>
</style>
