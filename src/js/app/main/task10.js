/**
 * Promise
 */
import { log } from './utility.js';

export default {
	/**
	 * Javascript语言的执行环境是"单线程"的，即一次只能完成一件任务，如果有多个任务就
	 * 必须排队，前面一个任务完成再执行下面一个任务。这种模式的好处是实现起来比较简单
	 * 执行环境相对单纯；坏处是只要有一个任务耗时太长，其它任务就得等着，会拖延整个程
	 * 序的执行；由此就出现了异步编程；
	 * Promise是异步编程的一种解决方案
	 * 在程序上实现异步编程有两种方式，一种是回调，另一种是事件触发；而Promise
	 * 是区别于以上两种方式的一种实现方式
	 * Promise的特点：
	 * 1.对象的状态不受外界影响。Promise对象代表一个异步操作，其总共有三种状态：
	 * pending（进行中），resolved（已完成），rejected（已失败）；只有异步操作的结果
	 * 可以决定当前是哪种状态，任何操作都无法改变这个状态；
	 * 2.一旦promise的状态发生了改变，就不会再变，而且任何时候都可以得到这个结果；
	 * promise状态的改变只有两种情况，pending变成resolved；pending变成rejected；只要
	 * 这两种状态发生了就不会再改变了，如果状态已经发生，你再对Promise对象添加回调，
	 * 也会得到这个结果，这和事件触发不同，事件触发的情况下，你错过了再去监听，是得不
	 * 到结果的；
	 * Promise的缺点：
	 * 1.无法取消Promise，一旦创建它就会立即执行，无法中途取消；
	 * 2.如果不设置回调函数，Promise内部发生的错误不会反应到外部；
	 * 3.当promise处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将结
	 * 束）
	 */
	scene1() {
		const ajax = function(callback) {
			console.log('执行1');
			setTimeout(function(){
				callback && callback.call();
			}, 1000);
		};

		ajax(function() {
			console.log('timeout1');
		});
	},
	/**
	 * Promise的基本用法
	 */
	scene2() {
		const ajax = function() {
			console.log('执行2');
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					resolve();
				}, 1000);
			});
		}

		ajax().then(function() {
			console.log('timeout2');
		})
	},
	/**
	 * 多个Promise的写法
	 */
	scene3() {
		const ajax = function() {
			console.log('执行3...');
			return new Promise(function(resolve, reject) {
				setTimeout(()=>{
					log('等待1...');
					resolve();
				}, 1000);
			});
		};

		ajax()
			.then(()=>{
				return new Promise((resolve, reject)=>{
					setTimeout(()=>{
						log('等待2...');
						resolve();
					}, 1000)
				})
			})
			.then(()=>{
				setTimeout(()=>{
					log('end');
				}, 1000);
			});
	},
	/**
	 * 出错信息的捕获
	 */
	scene4() {
		const ajax = function(num) {
			log('执行4');

			return new Promise((resolve, reject)=>{
				if (num >= 10) {
					resolve();
				} else {
					throw new Error('出错了');
				}
			})
		};

		ajax(5).then(()=>{
			log('执行成功');
		}).catch(function(err) {
			log(err);
		})
	},
	/**
	 * Promise.all()
	 * 模拟场景，所有图片加载完成，再添加到页面
	 * 1.三张图片加载，只有都成功的加载Promise的状态才会变成resolved;
	 * 此时三个loadImg的返回值组成一个数组，传递给p的回调函数。
	 * 2.只要三个加载函数之中有一个被rejected，Promise的状态就变成rejected，
	 * 此时第一个被reject的实例的返回值，会传递给p的回调函数。
	 */
	scene5() {
		function loadImg(src) {
			return new Promise((resolve, reject)=>{
				const img = document.createElement('img');
				img.src = src;
				img.onload = function() {
					resolve(img);
				};
				img.onerror = function(err) {
					reject(err);
				}
			});
		};

		function showImgs(imgs) {
			imgs.forEach(function(img) {
				document.body.appendChild(img);
			});
		};

		Promise
			.all([
				loadImg('http://oh5b2q4x9.bkt.clouddn.com/147982284857222800_a580xH.jpg'),
				loadImg('http://oh5b2q4x9.bkt.clouddn.com/147982286620415300_a580xH.jpg'),
				loadImg('http://oh5b2q4x9.bkt.clouddn.com/147982286810929300_a580xH.jpg')
			])
			.then(showImgs)
			.catch(function(err) {
				console.log(err);
			})
	},
	/**
	 * Promise.resolve()
	 * 该方法可以将一个对象转换成Promise对象
	 */
	scene6() {
		var ajaxPromise1 = Promise.resolve($.ajax({url: '/api/GetList'}));
		//等价于
		var ajaxPromise2 = new Promise(function(resolve, reject) {
			$.ajax({
				url: '/api/GetList',
				type: 'get',
				data: {},
				dataType: 'json',
				cache: false,
				success: function(res) {
					resolve(res)
				}
			});
		})
	}
}