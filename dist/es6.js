'use strict';

window.onload = function () {
	var ali = document.getElementsByTagName('li');

	var _loop = function _loop(i) {
		ali[i].onclick = function () {
			alert(i);
		};
	};

	for (var i = 0; i < ali.length; i++) {
		_loop(i);
	}
	var ARR = [1, 2, 3];
	ARR.push(4);
	console.log(ARR);
	var OBJ = { 'hello': 'world' };
	OBJ.hello = 'hi';
	console.log(OBJ);

	var str = 'hello';
	str = str + ' world';
	console.log(str.padEnd(20, 'x'));
	console.log(Number.isFinite(25));
	console.log(Number.isFinite(Infinity));
	console.log(isFinite(25));
	console.log(isFinite(Infinity));
	console.log(Number.isNaN(25));
	console.log(Number.isNaN(NaN));
	console.log(Number.parseInt(25.987));
	console.log(Number.parseFloat(25.987));
	console.log(Number.isInteger(25.00));
	console.log(0.1 + 0.2);
	console.log(Number.EPSILON);
	console.log(Math.sqrt(9));
	console.log(Math.pow(27, 1 / 3));
	console.log(Math.cbrt(8)); //开立方
	console.log(Math.hypot(3, 4)); //平方和
	console.log(Array.from(str)); //转成真正的数组
	show(1, 2, 3, 4);
	function show() {
		Array.from(arguments).map(function (val) {
			console.log(val);
		});
	}
	console.log(Array.of(3));
	console.log(new Array(3));
	var arr = new Array(1, 2, 3, 4, 5);
	console.log(arr.copyWithin(1, 2, 3));
	var str = arr.find(function (val) {
		return val > 3;
	});
	console.log(str);
	console.log(arr.findIndex(function (val) {
		return val > 3;
	}));
	console.log(arr.fill(8, 2, 4));
	console.log(arr.includes(2));
	//数组的解构赋值
	var a = 1,
	    b = 2,
	    c = 3;


	console.log(a);
	console.log(b);
	console.log(c);

	//对象的解构赋值，变量名要跟key值相同
	var _myName$myAge = { myName: 'hello', myAge: '20' },
	    myName = _myName$myAge.myName,
	    myAge = _myName$myAge.myAge;
	var _myName$myAge2 = { myName: 'hello', myAge: '20' },
	    a = _myName$myAge2.myName,
	    b = _myName$myAge2.myAge;

	console.log(myName);
	console.log(a);

	// var D1 = document.getElementById('D1');
	// var list = [
	// 	{text:111},
	// 	{text:211},
	// 	{text:311},
	// 	{text:411},

	// ];
	// D1.innerHTML = `
	// <ul>
	// 	${
	// 		list.map(function(obj){
	// 			return 	`<li>${obj.text}</li>`
	// 		}).join('')
	// 	}
	// </ul>
	// `
};