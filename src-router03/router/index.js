import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsDetail from '../views/NewsDetail.vue'

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/news-detail/:id',
			component: NewsDetail
		}
	]
});