/**
 * 数组的扩展
 */
import { log } from './utility.js';

export default {
	/**
	 * Array.from()
	 * 该方法用于将两类对象转成真正的数组：
	 * 一类是：类似数组的对象
	 * 二类是：可遍历（iteratable）的对象即部署了iterator接口的对象（包括ES6新增的数据结
	 * 构Set和Map）
	 */
	scene1() {
		const oarrayLike = {
			0: 'a',
			1: 'b',
			2: 'c',
			length: 3
		};

		log(Array.from(oarrayLike));
	},
	/**
	 * 只要是部署了iterator接口的数据结构，Array.from都能将其转为数组：比如字符串和Set数据结构
	 */
	scene2() {
		log(Array.from('hello')); //因为字符串是具有iterator接口的数据结构，
								  //可以通过Array.from转为数组
		const namesSet = new Set(['a', 'b']);

		log(Array.from(namesSet));
	}
}