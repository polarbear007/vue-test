<template>
	<div id="app">
		<MyComponent>
			<!-- 根据插槽名去匹配，所以我们先写 main 插槽，也没关系 。
			* 	 在父组件里面定义的插槽的内容，这些标签绑定的变量和函数作用域都是父组件的
			*    所以我们不需要通过 props 或者 $emit() 来通信
			* -->
			<template v-slot:main>
				<ul>
					<li v-for="(fruit, index) in fruits" :key="index">
						{{fruit}} <button v-on:click="deleteFruit(index)">删除</button>
					</li>
				</ul>
			</template>
			<template v-slot:header>
				<!-- 插槽内部可以像上面那样传一组标签，也可以只传一个具体的变量数据 -->
				{{header}}
			</template>
		</MyComponent>
	</div>
</template>

<script>
	import MyComponent from './MyComponent.vue';
	export default{
		name: 'App',
		components:{MyComponent},
		data: function(){
			return {
				fruits: ['苹果', '香蕉', '火龙果', '荔枝', '梨'],
				header: ''
			}
		},
		methods:{
			deleteFruit(index){
				this.fruits.splice(index, 1);
			}
		}
	}
</script>

<style>
</style>
