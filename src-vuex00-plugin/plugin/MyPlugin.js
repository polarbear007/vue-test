var MyPlugin = {};

MyPlugin.install = function(Vue, options){
	// 给 Vue.prototype 添加一个  $testProperty 属性
	// 并且这个属性不允许被替换成其他的对象
	Object.defineProperty(Vue.prototype, "$testProperty", {
		value: {msg: 'hello'},
		configurable: false,
		writeable: false,
		enumerable: true
	})
};

export default MyPlugin;