/*chapter2*/
//解构赋值：
//es6的这种赋值写法本质上属于模式匹配；只要等号两边的模式相同，
//左边的变量就会赋予相应的值。
export default {
	/*数组的解构赋值*/
	dec1() {
		let a, b, rest;

		[a, b] = [1, 2];
		console.log(a,b);
	},
	/*逗号隔开的写法*/
	dec2() {
		let c;

		[ , , c] = [1,2,3];
		console.log(c);
	},
	/*不定参数的写法*/
	dec3() {
		let a, b, rest;

		[a, b, ...rest] = [1, 2, 3, 4, 5];
		console.log(a, b, rest);
	},
	/*解构失败：如果解构不成功，变量的值就等于undefined*/
	dec4() {
		let a, b, c;

		[a, b, c] = [1, 2];
		console.log(a, b, c);
	},
	/*不完全解构，但能解构成功*/
	dec5() {
		let a, b;

		[a, b] = [1, 2, 3];
		console.log(a, b);
	},
	/*对象的解构赋值*/
	dec6() {
		let a, b;

		({a, b} = {a: 1, b: 2}); //注意,这里必须要加括号，因为大括号里面的内容会被当成块作用域
		console.log(a, b);
	},
	/*默认值*/
	dec7() {
		let a, b, c, rest;

		[a, b, c=3] = [1, 2];
		console.log(a, b, c);
	},
	/**
	 * 使用场景1：变量交换；
	 */
	dec8() {
		let [a, b] = [1, 2];

		[a, b] = [b, a];
		console.log(a, b);
	},
	/**
	 * 使用场景2：获取函数返回值；
	 */
}