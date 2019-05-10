import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsDetail from '../views/NewsDetail.vue';
import ErrorPage from '../views/error.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		{
			path: '/news-detail',
			component: NewsDetail,
			query: {id: '001'}
		},
		{
			path: '*',
			component: ErrorPage
		}
	]
})
