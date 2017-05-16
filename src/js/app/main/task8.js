/**
 * 对象的扩展
 */
import { log } from './utility.js';

export default {
	/**
	 * 对象属性的简洁表示法
	 * es6允许在对象中直接写入变量，这时，变量名就是对象的属性名，变量值就是对象的
	 * 属性值
	 */
	scene1() {
		const PI = 3.1415926;
		const obj = {PI}; // {PI: 3.1415926}

		log(obj);
	},
	/**
	 * 对象属性的简洁表示法用于函数的返回值，将会很方便
	 */
	scene2() {
		const x = 1;
		const y = 2;

		return {x, y}; //{x: 1, y: 2}
	},
	/**
	 * 对象中方法的简洁表示法
	 */
	//......//
	/**
	 * 属性名表达式
	 */
	/**
	 * 属性名表达式
	 * javascript中定义对象的属性，有两种方法
	 * @1：直接用标识符作为属性名
	 * @2：用表达式作为属性名
	 */
	scene3() {
		const obj = {};

		obj.foo = true; //@1
		obj['a' + 'bc'] = 123; //@2
		log(obj); 
	},
	/**
	 * 在es5的对象字面量中，定义对象属性时，属性名不能用表达式，但es6扩展了该功能
	 * es6允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放入方括号中
	 */
	scene4() {
		const name = 'Name';
		const age = 'Age';

		let person = {
			[name]: 'tom',
			[age]: 20
		}
		log(person);
	},
	/**
	 * Object.is();
	 * ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格
	 * 相等运算符（===）；前者会自动转换数据类型；后者在处理NaN和 +0，-0是有问题；
	 * Object.is()则解决了上述的问题；
	 */
	scene5() {
		log(+0 === -0); //true
		log(NaN === NaN); //false

		log(Object.is(+0, -0)); //false
		log(Object.is(NaN, NaN)); //true
	},
	/**
	 * Object.assign();
	 * 该方法用于对象的合并，将源对象中的可枚举属性，复制到目标对象中；
	 * 该方法的第一个参数是目标对象，后面的参数都是源对象；
	 * 如果目标对象和源对象有同名属性，源对象与源对象有同名属性，则后面对象的属性
	 * 会覆盖前面对象的属性；
	 */
	scene6() {
		const target = {a: 1};
		const source1 = {b: 2};
		const source2 = {c: 3};

		Object.assign(target, source1, source2);
		console.log(target);
	},
	/**
	 * Object.assign()的常见使用场景；
	 * @1：为对象添加属性
	 * @2：为对象添加方法
	 * @3：克隆对象
	 */
}
