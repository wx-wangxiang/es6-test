/**
 *字符串拓展
 */
import {log} from './utility.js';

export default {
	/**
	 * unicode 表示法
	 * 当一个字符的编码大于0xFFFF时，es5就不能正确输出；
	 * es6就对此做了扩展
	 */
	scene1() {
		log('a', `\u0061`);
		log('s', `\u20BB7`); //此时会把这个四个字节的字符当成两个字符来处理
		log('s', `\u{20BB7}`); //𠮷,es6的处理方式是将字符编码放入大括号中，此时可以正确输出
	},
	/**
	 * codePointAt能正确返回一个码点大于0xFFFF的字符码点，即能正确识别码点大于0xFFFF的字符
	 * @return {[type]} [description]
	 */
	scene2() {
		const s = '𠮷a'; //定义一个码点大于0xFFFF的字符

		log(s.charCodeAt(0)); //55362
		log(s.charCodeAt(1)); //57271
		log(s.charCodeAt(2)); //97
		log(s.codePointAt(0).toString(16)); //20BB7
		log(s.codePointAt(1)); //57271
		log(s.codePointAt(2)); //97
	},
	/**
	 * codePointAt的其中一个使用场景
	 * 判断一个字符是有两个字节组成还是由四个字节组成
	 */
	scene3() {
		function is32Bit(char) {
			return char.codePointAt(0) > 0xFFFF;
		}

		log(is32Bit('a'));
		log(is32Bit('𠮷'));
	},
	/**
	 * 遍历器接口
	 * es6为字符串提供了遍历器接口，使得字符串可以被for...of循环遍历；
	 * 并且该种遍历可以识别码点大于0xFFFF的字符，而传统的for循环不具备这种能力
	 */
	scene4() {
		const char = '𠮷';

		for (let i=0; i<char.length; i++) {
			log(char[i]);
		}

		for (let i of char) {
			log(i)
		}
	},
	/**
	 * 模板字符串
	 * 模板字符串是增强版的字符串，用反引号标识。它可以当做普通字符串使用也可以用来定义
	 * 多行字符串，或者在字符串中嵌入变量；
	 * @1：使用模板字符串表示多行字符串时，所有的空格，换行和缩进都会被保留在输出之中
	 */
	scene5() {
		const normalStr = `this is a normal string`;
		const multiLine = `this is a multiline string,
	this is a multiline string`

		log(normalStr);
		log(multiLine);
	},
	/**
	 * 模板字符串中还能嵌入变量，表达式以及函数
	 */
	scene6() {
		const PI = 3.1415926;

		log(`PI: ${PI}`);
		log(`PI\`s type is ${typeof PI}`);

		function getCircleLength(r) {
			return 2*PI*r;
		}

		log(`the length of circle(r=2): ${getCircleLength(2)}`);
	},
	/**传统上javascript只有indexOf方法来判断一个字符串中是否包含另一个字符串
	 * es6为字符串扩展的方法
	 * includes(), startsWith(), endsWith()
	 */
	scene7() {
		const str = 'hello world!';

		log(str.includes('hello')); //返回布尔值，表示是否找到了参数字符串
		log(str.startsWith('hello')); //返回布尔值，表示参数字符串是否在源字符串的头部。
		log(str.endsWith('world!')); //返回布尔值，表示参数字符串是否在源字符串的尾部。

		//这三个方法都支持第二个参数，表示开始搜索的位置，但endsWith的行为与其他两个方法
		//有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
		log(str.includes('world', 6));
		log(str.startsWith('world', 6));
		log(str.endsWith('hello', 5));
	},
	/**
	 * repeat() 方法
	 * 该方法返回一个新字符串，表示将原字符串重复n次；
	 */
	scene8() {
		log('a'.repeat(3));
		log('a'.repeat(5.6)); //如果参数是小数，则会进行取整操作
		log('a'.repeat('3')); //如果参数是字符串，则会先转换成数字
	},
	/**
	 * padStart(), padEnd()
	 * 字符串补全长度的方法，如果某个字符串不够指定的长度，会在头部或尾部进行补全；
	 */
	scene9() {
		log('a'.padStart(5, 'xy'));
		log('a'.padEnd(5, 'xy'));

		//如果指定的长度小于源字符串的长度，则返回源字符串
		log('abcd'.padStart(3, 'xy'));
		log('abcd'.padEnd(3, 'xy'));

		//如果源字符串的长度和用来补全的字符串的长度的和大于指定的长度，
		//则会截去超出位数的补全字符串。
		log('abcd'.padStart(5, '123'));
		log('abcd'.padEnd(5, '123'));

		//如果省略第二个参数，则会用空格进行补全
		log('abcd'.padStart(7));
	},
	/**
	 * padStart()的使用场景
	 */
	scene10() {
		//1.数值的补全
		log('1'.padStart(10, '0'));
		log('123'.padStart(10, '0'));

		//2.提示字符串格式
		log('12'.padStart(10, 'YYYY-MM-dd'));
		log('05-16'.padStart(10, 'YYYY-MM-dd'));
	}
}