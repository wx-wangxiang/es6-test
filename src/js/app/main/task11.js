/**
 * Set 和 Map 数据结构
 */
import { log } from './utility.js';

export default {
	/**
	 * Set数据结构的基本用法
	 * Set是es6提供的一种新的数据结构，它类似于数组，但是其中的值都是唯一的，没有重
	 * 复的值。Set本身是一个构造函数，用来生成Set数据结构；它可以接受一个数组（或者
	 * 类似数组的对象）作为参数来生成Set数据结构
	 */
	scene1() {
		const s = new Set([1, 2, 3, 4, 5, 4, 3, 2, 1]);

		log(...s);
		//Set构造函数提供了一种数组去重的方法
		//[...new Set(arrary)]
	},
	/**
	 * 注意点：
	 * 向Set加入值的时候，不会发生数据类型的转化。所以5和'5'是两个不同的值
	 */
	scene2() {
		const s = new Set([1, 2, 3, 4, 5, '5', NaN, NaN, {}, {}]);

		log(...s);
	},
	/**
	 * Set实例的属性和方法
	 * Set结构有以下属性：
	 * 1.Set.prototype.constructor: 构造函数，默认就是Set函数。
	 * 2.Set.prototype.size: 返回Set实例的成员总数。
	 */
	scene3() {
		const s = new Set([1, 2, 3, 4, 5]);

		log(s.size);
	},
	/**
	 * Set实例的方法分为两大类：操作方法（用于操作数据），遍历方法（用于遍历成员）
	 * 1.add(value): 向Set结构添加指定的值，返回set结构本身；
	 * 2.delete(value): 删除一个指定的值，返回布尔值，表示是否删除成功；
	 * 3.has(value): 返回布尔值，表示该值是否是Set结构的成员；
	 * 4.clear(): 清除所有成员，没有返回值
	 */
	scene4() {
		const s = new Set([1, 2, 3, 4, 5]);

		log(s.add(6));
		log(s.delete(1));
		log(s.has(2));
		s.clear();
		log(Array.from(s));
	},
	/**
	 * 从上一个例子可以看出，Array.from()可以将Set结构转为数组，所以这里就又有了另一
	 * 种数组去重的方法；
	 */
	scene5() {
		const arr = Array.from(new Set([1, 2, 2, 3]));

		log(arr);
	},
	/**
	 * Set的遍历方法，用来遍历成员
	 * 1.keys(): 返回键名的遍历器
	 * 2.values(): 返回键值的遍历器
	 * 3.entries(): 返回键值对的遍历器
	 * 4.forEach(): 使用回调函数遍历每个成员，没有返回值
	 */
	scene6() {
		//由于Set结构没有键名只有键值或者说键名和键值是同一个值，所以keys()和
		//values()的行为完全一致
		const s = new Set(['red', 'green', 'blue']);

		for(let item of s.keys()) {
			log(item);
		}

		for(let item of s.values()) {
			log(item);
		}

		for(let item of s.entries()) {
			log(item);
		}
		//注意点：Set结构默认可遍历，它的默认遍历器生成函数就是它的values方法
		//这就意味着可以省略values()方法，直接用for...of循环遍历set结构

		s.forEach((value)=>{
			console.log(`forEach: ${value}`);
		})
	},
	/**
	 * Map的含义和基本用法
	 * 传统的对象的键只能由字符串来表示，es6的Map结构则扩展了该功能，es6的Map结构
	 * 类似于对象，也是键值对的集合，但键的范围不限于字符串，各种类型的值包括对象
	 * 都可以当做键；是一种更完善的Hash结构实现
	 * Map构造函数接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
	 */
	scene7() {
		const map = new Map([['name', '张三'], ['age', 20]]);

		log(map.get('name'));
		map.set('sex', 'man');
		log(map.get('sex'));
		//如果对同一个键多次赋值，后面的值将覆盖前面的值。
		map.set('age', 23);
		log(map.get('age'));
	},
	/**
	 * 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
	 */
	scene8() {
		const map = new Map();

		map.set([0], 'hello');
		log(map.get([0]));
	},
	/**
	 * Map实例的属性和操作方法
	 * map.size
	 * map.set(key, value)
	 * map.get(key)
	 * map.has(key)
	 * map.delete(key)
	 * map.clear()
	 */
	scene9() {
		const map = new Map();

		map.set(1, '1');
		map.set(2, '2');
		log(map.size);
	},
	/**
	 * 遍历方法
	 * keys()
	 * values()
	 * entries()
	 * forEach()
	 */
}