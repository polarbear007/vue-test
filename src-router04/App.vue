<template>
	<div id="app">
		<div id="news-title-list">
			<ul>
				<li v-for="news in newsList" :key="news.id" >
					<router-link :to="`/news-detail?id=${news.id}`">
						{{news.title}}
					</router-link>
					<button @click="pushTest(`/news-detail?id=${news.id}`)">push测试</button>
					<!-- <button @click="replaceTest(`/news-detail?id=${news.id}`)">replace测试</button> -->
				</li>
			</ul>
			<button @click="backTest">back测试</button>
			<button @click="forwardTest">forward测试</button>
		</div>
		<div id="news-content">
			<router-view :newsList="newsList"></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				newsList: [
					{ id: '001', title: 'news-title-001' , content: 'news-content-001'},
					{ id: '002', title: 'news-title-002' , content: 'news-content-002'},
					{ id: '003', title: 'news-title-003' , content: 'news-content-003'},
					{ id: '004', title: 'news-title-004' , content: 'news-content-004'}
				]
			}
		},
		methods:{
			// 虽然可以传入回调函数，但是我们一般不使用
			pushTest(path){
				this.$router.push(path);
			},
			replaceTest(path){
				this.$router.replace(path);
			},
			backTest(){
				this.$router.back();
			},
			forwardTest(){
				this.$router.forward();
			}
		}
	}
</script>

<style>
</style>
