/**
 * 数组的扩展
 */
import { log } from './utility.js';

export default {
	/**
	 * Array.from()
	 * 该方法用于将两类对象转成真正的数组：
	 * 一类是：类似数组的对象，该类对象的本质特征只有一点，即必须有length属性。因此，任
	 * 何有length属性的对象，都可以通过Array.from方法转为数组
	 * 二类是：可遍历（iteratable）的对象即部署了iterator接口的对象（包括ES6新增的数据结
	 * 构Set和Map），因为对象中的属性的排列是没有顺序的，所以不能说是可遍历的
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
	 * 只要是具有iterator接口的数据结构，Array.from都能将其转为数组：比如字符串和Set数据
	 * 结构
	 */
	scene2() {
		log(Array.from('hello')); //因为字符串是具有iterator接口的数据结构，
								  //可以通过Array.from转为数组
		const namesSet = new Set(['a', 'b']);

		log(Array.from(namesSet));
	},
	/**
	 * Array.from()的第二个参数
	 * 该参数的作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
	 */
	scene3() {
		const arr = ['a', 'b', 'c'];

		log(Array.from(arr, (item, index) =>  `${item}-${index}`));
	},
	/**
	 * Array.of()
	 * 该方法用于将一组值，转化为数组，主要目的是弥补数组构造函数Array()的不足，因为参数个
	 * 数的不同会导致Array()方法出现差异
	 * 只有当参数个数大于一个时，Array()方法才返回参数组成的数组，而当参数只有一个时，该参数
	 * 实际上指定的是返回数组的长度
	 */
	scene4() {
		log(new Array());
		log(new Array(3));
		log(new Array(1, 2, 3));
	},
	/**
	 * Array.of()不存在因为参数个数不同导致的差异，它的行为非常统一，就是返回参数组成的
	 * 数组，如果没有参数则返回空的数组
	 */
	scene5() {
		log(Array.of());
		log(Array.of(3));
		log(Array.of(1,2,3));
	},
	/**
	 * 数组实例的copyWithin() 方法
	 * 该方法表示在当前数组内部，将指定位置的成员复制到其他位置（会覆盖掉原有成员），然后
	 * 返回当前数组，也就是说，该方法会改变当前数组；
	 */
	scene6() {
		const arr = [1, 2, 3, 4, 5];

		arr.copyWithin(0, 3, 5);
		log(arr);
	},
	/**
	 * 数组实例的find()和findIndex()
	 * find(); 顾名思义，就是为了在数组中找出一个符合条件的数组成员；
	 * findIndex(); 顾名思义，就是为了返回在数组中找到的数组成员的索引；
	 */
	scene7() {
		const arr = [1, 2, 3, -4, 5];

		log(arr.find(item => item < 0));
		log(arr.findIndex(item => item < 0));
	},
	/**
	 * 数组实例的fill() 注意和copyWithin()的区别
	 * 该方法使用给定值，填充数组，数组中已有的数值会被全部抹去
	 * 该方法的第一个参数表示用来填充的值，第二个参数表示开始填充的位置，第三个参数表示
	 * 结束填充的位置
	 */
	scene8() {
		const arr1 = Array.of(1, 2, 3, 4, 5);
		const arr2 = Array.from(arr1);

		log(arr1.fill(7));
		log(arr2.fill(7, 2, 3));
	},
	/**
	 * entries(), keys()和values()
	 * es6提供了三个新的方法，用于遍历数组
	 * 这三个方法都是返回一个遍历器对象，可以用for...of循环进行遍历
	 * 不同的是keys()是对键名的遍历，values()是对键值的遍历，entries()是对键值对的遍历
	 */
	scene9() {
		const arr = Array.of('a', 'b', 'c', 'd');
		const entrie = arr.entries();

		log(entrie);

		/*for (let i of entrie) {
			log(i);
		}*/

		log(entrie.next().value);
		log(entrie.next().value);
		log(entrie.next().value);
		log(entrie.next().value);
	},
	/**
	 * includes()
	 * 该方法用来判断数组中是否包含给定的值
	 * 传统的判断方法indexOf有两个缺点；
	 * 一是，不够语义化，indexOf的含义是返回匹配到的值的索引，需要和-1做比较才能得出结论
	 * 二是，indexOf内部使用严格相等运算符来做判断，这会导致对NaN的误判
	 * includes()使用的是不同的判断算法，不会出现上面的问题
	 */
	scene10() {
		const arr = Array.of('a', 'b', 'c', 'd', NaN);

		log(arr.includes('a'));
		log(arr.includes('e'));
		log(arr.includes(NaN));
	}
}