/**
 * Symbol
 */
import { log } from './utility';

export default {
	/**
	 * Symbol是es6新引入的数据类型，表示独一无二的值，它是javascript的第七种数据类型；
	 * 前六种：null，undefined，布尔值（Boolean），String， Number，Object；Symbol值通过
	 * Symbol函数生成；
	 * Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台
	 * 显示，或者转为字符串时，比较容易区分。如果不加参数，它们在控制台的输出都是Symbol()，
	 * 不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一
	 * 个值
	 */
	scene1() {
		const sym1 = Symbol('foo');
		const sym2 = Symbol('bar');

		log(sym1, sym2);
	},
	/**
	 * 使用场景
	 * Symbol值可以用来作为标识符，用于对象的属性，这能保证不会出现同名的属性。这对于一个
	 * 对象由多个模块构成的情况非常有用，能防止某一个key被不小心改写或覆盖
	 * 注意：当用symbol值用做对象的属性名是，不能用点运算符；因为点运算符后面总是字符串，
	 * 所以不会读取mySymbol作为标识名所指代的那个值
	 */
	scene2() {
		const mySymbol = Symbol();
		const a = {};

		a.mySymbol = 'hello';
		log(a[mySymbol], a['mySymbol']);
	},
	/**
	 * 属性名的遍历
	 * 以Symbol值作为属性名的属性不会出现在for...in, for...of循环中，也不会被Object.keys()
	 * Object.getOwnPropertyNames(), JSON.stringify()返回。只能通过Object.getOwnPropertySymbols()
	 * 返回，该方法以数组的形式返回指定对象的所有Symbol属性名；
	 */
	scene3() {
		const obj = {};
		const a = Symbol('a');
		const b = Symbol('b');

		Object.assign(obj, {a, b});
		log(Object.getOwnPropertySymbols(obj));

		Object.assign(obj, {[a]: 'hello', [b]: 'es6'});
		log(Object.getOwnPropertySymbols(obj));
	},
	/**
	 * Symbol.for();
	 * 有时候，我们想重新使用一个symbol值，Symbol.for()就可以做到这一点，和Symbol一样它
	 * 接受一个字符串作为参数，接下来的机制就不同了，拿到参数后，Symbol.for()会先在全局搜索
	 * 有没有以该参数为key的Symbol值，如果有则就返回搜索到的key值，如果没有则立即创建一个
	 * Symbol值，比如Symbol.for('a')被执行了10次，则每次都返回同一个Symbol值，而Symbol('a')
	 * 执行了10次，则会返回10个Symbol值；
	 */
	scene4() {
		const a1 = Symbol.for('a');
		const a2 = Symbol.for('a');

		log(Object.is(a1, a2));
	}
}