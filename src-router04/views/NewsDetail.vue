<template>
	<div>
		<p>编号：{{news.id}}</p>
		<p>标题：{{news.title}}</p>
		<p>内容：{{news.content}}</p>
	</div>
</template>

<script>
	export default{
		name: 'NewsDetail',
		props:['newsList'],
		data(){
			return {
				news: {}
			}
		},
		// 因为使用路径参数，所以这个组件会被复用，并不会每次都销毁，重新创建
		// 因此，我们不能使用生命周期函数来获取最新的参数
		// 而应该使用 watch 深度监视 $route 的变化 
		watch:{
			$route(newRoute){
				this.news = this.newsList.find((element)=>{
					return newRoute.query.id == element.id;
				})
			}
		},
		// 初始化显示，使用 mounted 
		mounted(){
			this.news = this.newsList.find((element)=>{
				return this.$route.query.id == element.id;
			})
		}
	}
</script>

<style>
</style>
