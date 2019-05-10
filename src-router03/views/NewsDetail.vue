<template>
	<div>
		<p>编号:{{news.id}}</p>
		<p>标题:{{news.title}}</p>
		<p>内容:{{news.content}}</p>
	</div>
</template>

<script>
	export default{
		name: 'NewsDetail',
		// 因为这个 NewsDetail 组件想要复用显示不同<router-link>标签
		// 对应的文章内容，所以这个组件里面应该有所有文章的内容才对
		// 而这个 newsList 对象是加载页面的时候，从后台获取的。我们不想获取多次
		// 所以这个数据通过 props ，由父组件直接共享就好了
		props: ['newsList'],
		data(){
			return {
				// 这里的 news 变量，就是路径变量对应的文章对象
				news: {}
			}
		},
		// <router-link> 传递的路径参数保存在 $route 对象里面
		// 当点击不同的 <router-link>， $route 对象里面的 params 参数就会发生变化 
		// 我们需要深度监视这个  $route 对象里面的 params 属性值变化，一旦变化
		// 就修改 news 对应的值即可。
		// computed 属性在某种程度上也可以监视一个属性值的变化，但是这里不适合
		// 因为 computed 属性
		watch:{
			$route(newRoute){
				this.news = this.newsList.find((element)=>{
					if(element.id == newRoute.params.id){
						return true;
					}
				})
			}
		}
	}
</script>

<style>
</style>
