/**
 * 函数的扩展
 */
import { log } from './utility.js';

export default {
	/**
	 * 函数参数的默认值
	 * 注意点：
	 * 1.参数变量是默认声明的，所以不能用let或const再次声明变量，否则会报错
	 * 2.参数默认值的位置，一般都是函数的尾参数，如果非尾参数设定了默认值，实际上
	 * 这个参数是没法省略的
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
	 * 一个关于作用域的问题
	 * 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个
	 * 单独的作用域（context）。等到初始化结束，这个作用域就会消失。
	 * 这种语法行为，在不设置参数默认值时，是不会出现的。
	 */
	sceneAdd1() {
		const x = 'hello';

		function test(x, y=x) {
			log('作用域', x, y);
		}
		test('ccc');
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
	 */
	scene5() {
		//es5
		var f = function(arr) {
			return arr;
		};
		//es6
		var ff = arr => arr
	},
	/**
	 * 使用箭头函数时的注意点：函数体内的this对象，指向的是定义时所在的作用域(对象)，而不
	 * 是运行时所在的作用域;
	 * 在箭头函数中this对象的指向是固定的；箭头的this总是指向函数定义生效时所在的对象
	 */
	id: '001',
	scene6() {
		const obj = {
			id: '001',
			name: 'name_001',
			logID() {
				setTimeout(()=>{
					log(this);
					//log(`id: ${this.id}`);
				}, 100)
			},
			logName() {
				setTimeout(function(){
					log(this);
					//log(`name: ${_this.name}`);
				}, 100)
			}
		}
		/*const logID = function() {
			setTimeout(()=>{
				log(`id: ${this.id}`);
			}, 100)
		};*/

		obj.logID();
		obj.logName();
		//obj.logID.call({id: '002'});
	},
	/**
	 * this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
	 * 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
	 * 正是因为它没有this，所以也就不能用作构造函数。
	 */
	scene7() {
		//将es6的箭头函数转成es5的函数
		//es6
		function foo() {
			setTimeout(()=>{
				log(`id:${this.id}`);
			}, 100);
		};
		//es5
		function foo() {
			const _this = this;
			setTimeout(function(){
				log(`id:${_this.id}`)
			}, 100);
		};
	},
	/**
	 * 绑定this
	 * 箭头函数可以绑定this对象，大大减少了显示绑定this对象的写法(apply, call, bind).但
	 * 是箭头函数并不适用于所有场合，所以es7提出了"函数绑定"运算符，用来取代（apply, call,
	 *  bind）;
	 *  函数绑定运算符是一个双冒号（::）,双冒号左边是一个对象，右边是一个函数，它会将左边
	 *  的对象，作为上下文环境（即this对象），绑定到右边的函数上；
	 */
	scene8() {
		//foo::bar;
		//相当于 bar.bind(foo);
		//foo::bar(...arguments);
		//相当于 bar.apply(foo, arguments);
	},
	/**
	 * 尾调用优化
	 * 尾调用是函数式编程的一个重要概念，顾名思义，就是在一个函数的最后一步调用另一个函数
	 * 何为尾调用优化？
	 * 函数的调用会在内存中形成一个调用记录，又称为调用帧，用来保存调用位置和调用变量等信
	 * 息，假设在函数A的内部调用函数B，那么在函数A的调用帧的上方，就会存在一个函数B的调用
	 * 帧，直到函数B运行结束，结果返回到A，B的调用帧才会消失，如果在B的内部又调用了函数C
	 * ，那么在B的调用帧的上方就又会存在一个C的调用帧，以此类推就会在内存中形成一个“调用
	 * 栈”，尾调用由于是函数运行的最后一步操作，所以不需要保留外层函数的调用帧，因为此时
	 * 调用位置和内部变量信息都用不到了，只要直接用内部函数的调用帧，替代外部函数的调用帧
	 * 就可以了，这就是尾调用优化，即只保留内层函数的调用帧；
	 */
	scene9() {
		function g(x) {
			return x;
		}

		function f(x) {
			return g(x); //这里就是尾调用
		}

		function f(x) {
			g(x); //这就不是尾调用
		}

		function f(x) {
			const y = g(x);

			return y; //这也不是 
		}

		function f(x) {
			return g(x) + 1; //在调用后还进行了一次操作，这也不是尾调用
		}

	}
}