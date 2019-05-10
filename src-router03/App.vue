<template>
	<div id="app">
		<div id="news-list">
			<ul>
				<!-- 遍历 newsList， 创建多个对应的  router-link 标签
				*    每个遍历对应的 path 上面添加对应的 id 标识
				*    这里我们使用模板字符串直接引用变量，如果不使用模板，也可以手动拼接字符串
				*   -->
				<router-link tag="li" v-for="news in newsList" :key="news.id" :to="`/news-detail/${news.id}`">
				   <a href="#">{{ news.title }}</a>
				</router-link>
			</ul>
		</div>
		<div id="news-content">
			 <!-- 使用 props 的方式，把整个  newsList 变量共享给 NewsDetail 组件 -->
			<router-view v-bind:newsList="newsList"></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			// 因为懒得去写后台代码，所以这里直接写了个死的数据，将就一下
			newsList:[
				{ id: '001', title: 'news-title-001' , content: 'news-content-001'},
				{ id: '002', title: 'news-title-002' , content: 'news-content-002'},
				{ id: '003', title: 'news-title-003' , content: 'news-content-003'},
				{ id: '004', title: 'news-title-004' , content: 'news-content-004'}
			]
		};
	}
};
</script>

<style></style>
