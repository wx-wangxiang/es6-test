/**
 * 数值的扩展
 */
import {log} from './utility.js';

export default {
	/**
	 * es6为Number对象新加了两方法
	 * @1：Number.isFinite(); 检查数值是否是有限的
	 * @2：Number.isNaN(); 检查数值是否是NaN
	 * 这两种方法与传统的全局方法isFinite()和isNaN()的区别在于，传统的方法先调用Number()
	 * 将非数值的值转为数值，再进行判断；而这两个方法只对数值有效，Number.isFinite()对于
	 * 非数值一律返回false，而Number.isNaN()只有对于NaN才返回true；
	 */
	scene1() {
		//Number.isFinite();
		log(Number.isFinite(1));
		log(Number.isFinite('1'));
		log(Number.isFinite(true));
		log(Number.isFinite(Infinity));

		//Number.isNaN();
		log(Number.isNaN(NaN));
		log(Number.isNaN(9/NaN));
		log(Number.isNaN(true));
	},
	/**
	 * Number.parseInt()和Number.parseFloat()
	 * es6将全局方法parseInt()和parseFloat()移植到了Number对象上，行为完全保持不变
	 * 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
	 */
	scene2() {
		//es5的写法
		log(parseInt('23.23'));
		log(parseFloat('1234.234d'));

		//es6的写法
		log(Number.parseInt('23.23'));
		log(Number.parseFloat('1234.234d'));
	},
	/**
	 * Number.isInteger()
	 * 该方法用来判断一个数是否为整数
	 * 需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0
	 * 被视为同一个值
	 */
	scene3() {
		log(Number.isInteger(3));
		log(Number.isInteger(3.0));
		log(Number.isInteger(3.1));
	},
	/**
	 * Number.EPSILON 常量 (浮点数计算时可接受的误差范围)
	 * 该常量用来判断浮点数的计算的误差是否在可接受的范围内，小于这个常量就是可接受的误差
	 * 范围
	 * 
	 */
	scene4() {
		log(Number.EPSILON);
		log(0.3 - 0.2);
	},
	/**
	 * Math对象的扩展
	 * ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，
	 * 只能在Math对象上调用。
	 * Math.trunc() 该方法用于去除一个数的小数部分，返回整数部分
	 * 其实就是大于0时向下取整（floor）小于0时向上取整（ceil）
	 */
	scene5() {
		log(Math.trunc(4.1));
		log(Math.trunc('123.456')); //对于非数值，该方法在内部先用Number方法将其转为数值
		log(Math.trunc(NaN));
		log(Math.trunc('foo'));
		log(Math.trunc()); //对于空值和无法截取整数的值，返回NaN

		//在es5中可以模拟
		Math.trunc = Math.trunc || function(val) {
			return val < 0 ? Math.ceil(val) : Math.floor(val);
		};
	},
	/**
	 * Math.sign()
	 * 该方法用来判断一个数到底是正数、负数、还是零；
	 * 针对不同的情况该方法会返回五种值；
	 */
	scene6() {
		log(Math.sign(-5));
		log(Math.sign(5));
		log(Math.sign(0));
		log(Math.sign(-0));
		//除上述的四种类型的值，其他值全部返回NaN
		//对于非数值，该方法在内部先用Number方法将其转为数值
		log(Math.sign(NaN));
		log(Math.sign('foo'));
		log(Math.sign(false)); //0; true: 1
		log(Math.sign());
	}
}