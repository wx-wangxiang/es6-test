/**
 * 函数的扩展
 */
import { log } from './utility.js';

export default {
	/**
	 * 函数参数的默认值
	 * 注意点：
	 * 参数变量是默认声明的，所以不能用let或const再次声明变量，否则会报错
	 */
	scene1() {
		//传统函数默认值的写法
		function es5Add(x, y) {
			x = x || 1;
			y = y || 2;
			return x + y;
		}

		//es6的默认值的写法
		function es6Add(x = 1, y = 2) {
			return x + y;
		}

		log(es5Add(0, 0)); //3
		log(es6Add(0, 0)); //0

	},
	/**
	 * rest参数
	 * rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中
	 * 注意rest参数之后不能再有其他参数了（即只能是最后一个参数），否则会报错
	 */
	scene2() {
		function add(...values) {
			let sum = 0;

			for (let val of values) {
				sum += val;
			}

			return sum;
		}

		log(add(1, 2, 3));
	},
	/**
	 * 扩展运算符
	 * 扩展运算符就是三个点（...）,它好比rest参数的逆运算，将一个数组转为参数序列
	 */
	scene3() {
		log(...[1, 2, 3]);
	},
	/**
	 * 扩展运算符的应用
	 * 替代了数组的apply方法，如果要将一个数组转为函数的参数需要用到apply方法，有了扩展
	 * 运算符就不需要apply方法了
	 */
	scene4() {
		//比如用Math.max()方法，求数组中的最大值
		const arr = [1, 2, 3, 4, 5];
		//es5
		log(Math.max.apply(null, arr)); //5
		//es6
		log(Math.max(...arr)); //5

		//合并数组
		//es5
		log([6, 7].concat(arr));
		//es6
		log([6, 7, ...arr]);
	},
	/**
	 * 箭头函数
	 * 如果箭头函数没有参数或者参数个数大于1个，则需要使用圆括号代替参数部分
	 * 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return
	 * 语句返回
	 * 使用箭头函数的注意点：函数体内的this对象，就是定义时所在的对象，而不是使用时的对象
	 */
	scene5() {
		//es5
		var f = function(arr) {
			return arr;
		};
		//es6
		var ff = arr => arr
	}
}