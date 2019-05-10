<template>
	<div>
		<ul>
			<li v-for="(fruit, index) in fruits" :key="index">
				{{fruit}}   <button v-on:click="deleteFruit">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name : 'MyComponent',
		props: {
			fruits: Array,
			// 要求父组件传入的参数必须是函数，而且必须要传
			// 我们还可以通过 validator 属性添加一个函数校验传入的变量值
			// 我们也可以通过 default 属性添加一个默认值
			// 【注意】当指定的值是一个数组或者对象的时候，default 的值应该通过函数返回
			//  default: function(){
			//       return {name:  'eric'}		
			//  }
			deleteFruit: {
				type: Function,
				required: true
			}
		}
	}
</script>

<style>
</style>
