export default {
	/*chapter1*/
	/**
	 * let 的用法
	 * @1.块级作用域（最简单的定义方法就是：用大括号包起来的代码区域就是块作用域）
	 * @2.es6默认强制开启严格模式，而es5必须在文件开头用“use strict”指明是否启用严格模式
	 * @3.使用let不能重复命名
	 */
	letTest() {
		/*scene one*/
		/*for (let i=0; i<3; i++) {
			console.log(i);
		}
		console.log(i);*/ //在使用let 的情况下，这里会报引用错误

		/*scene two*/
		//使用let不能重复命名
		/*let a = 1;
		let a = 2;*/

	},
	/**
	 * const的用法
	 * @1.const和let一样也是有块级作用域的
	 * @2.const是用来定义常量的，定义后的常量不能修改
	 * @3.const声明的时候必须赋值
	 * @4.当const声明的是一个对象时,因为对象是一个引用类型，返回的是内存中的指针；所以
	 * 当const声明一个对象时，这个指针是不能变的，但对象本身可以改变；
	 */
	constTest() {
		/*scene 2*/
		/*const PI = 3.1415926;
		PI = 3;*/

		/*scene 3*/
		/*const PI;
		PI = 3;*/

		/*scene 4*/
		const obj = {
			a: 1
		}

		obj.b = 2;
		console.log(obj);
	}
}