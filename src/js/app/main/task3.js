//正则表达式的拓展
import { log } from './utility.js';

export default {
	/**
	 * 在es5中RegExp构造函数的参数有两种写法
	 */
	scene1() {
		/*写法一：参数是字符串，参数一是正则表达式的匹配模式；
		第二个参数是正则表达式的修饰符*/
		const regex1 = new RegExp('\\d+', 'i');

		log(regex1.test('123'));
		/*写法二：参数是一个正则表达式*/
		const regex2 = new RegExp(/\d+/i); //等价于 const regex2 = /\d+/i;
	},
	/**
	 * 对于情景一中的第二种写法，es6有了拓展，允许写第二个参数
	 * 第二个参数是一个修饰符，它会把第一个参数中定义的修饰符覆盖掉
	 */
	scene2() {
		const regex = new RegExp(/xyz/i, 'g');

		log(regex.flags); //es6为正则表达式新增了flags属性，会返回正则表达
		//式的修饰符
	},
	/**
	 * u 修饰符
	 * ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的
	 * Unicode字符。也就是说，会正确处理大于两个字节的UTF-16编码。
	 */
	scene3() {
		//\uD83D\uDC2A是一个四个字节的UTF-16编码，代表一个字符。但是，ES5不支持
		//四个字节的UTF-16编码，会将其识别为两个字符，所以代码运行结果为true
		log(/^\uD83D/.test('\uD83D\uDC2A'));
		//加了u修饰符以后，ES6就会识别其为一个字符，所以代码运行结果为false
		log(/^\uD83D/u.test('\uD83D\uDC2A'));
	},
	/**
	 * 在es5的正则表达式中，点（.）字符的含义是除了换行符外的任意单个字符。但对于
	 * 码点大于0xFFFF的unicode字符，点字符不能识别，必须加上u修饰符
	 */
	scene4() {
		//ES6新增了使用大括号表示Unicode字符,在正则表达式中，必须加上u修饰符，才能识别
		log(/\u{61}/.test('a')); // false
        log(/\u{61}/u.test('a')); // true

		const s = `\u{20BB7}`; //先定义一个大于两个字节的字符

		log(/^.$/.test(s));
		log(/^.$/u.test(s));
	},
	/**
	 * y修饰符：粘连（sticky）修饰符
	 * y修饰符和g（全局匹配修饰符）类似，不同的是g修饰符只要剩余位置存在匹配即可，而y修
	 * 饰符必须确保匹配从剩余的第一个位置开始，这也是“粘连”的含义之所在
	 */
	scene5() {
		const s = 'aaa_aa_a';
		const regex1 = /a+_/g;
		const regex2 = /a+_/y;

		log(regex1.exec(s));
		log(regex2.exec(s));
		log('lastIndex', regex1.lastIndex);

		log(regex1.exec(s));
		log(regex2.exec(s));
		log('lastIndex', regex1.lastIndex);
	},
	/**
	 * 使用lastIndex属性可以更好地说明y修饰符和g修饰符的区别
	 */
	scene6() {
		const regex = /a/g;

		regex.lastIndex = 3; //指定从3号位置开始匹配，g能匹配到第4位上的a，但y就匹配不到了
		log(regex.exec('aaa_aa_a'));
	}
}