import Vue from 'vue';
import VueRouter from 'vue-router';
import foo1 from '../views/foo1.vue';
import foo2 from '../views/foo2.vue';
import bar1 from '../views/bar1.vue';
import bar2 from '../views/bar2.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/foo',
			components: {
				a: foo1,
				b: foo2
			}
		},
		{
			path: '/bar',
			components: {
				a: bar1,
				b: bar2			
			}
		}
	]
});

