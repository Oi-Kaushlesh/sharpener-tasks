// quest 1
// var getName = () =>{
//     console.log("hello")
// }
// console.log(getName())

// quest 2 part 1
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c)
// console.log(this.x)
// console.log(window.a)
// console.log(window.x)
// console.log(b());

// quest 2 part 2
// function abc() {
//     console.log(a);
//     }
//     abc();
//     var a = 7;

// next quest
// var obj = {
//     val: 100
//     }
//     function fun(a, b , c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     }
//     fun.call(obj, [3, 4, 5])

// next quest
// function y() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Done Coding");
// }
// y();

// next quest
// function fun1(a) {
//   const fun2 = (b) => {
//     a = a + b;

//     console.log(a);
//   };
// }

// fun1(10)(30);

// next quest
// setTimeout(() => console.log("timer1 expired"), 1000);
// setTimeout(() => console.log("timer2 expired"), 0);
// function x(y) {
//   console.log("inside x");
//   y();
// }
// x(function y() {
//   setTimeout(() => console.log("inside y"), 0);
// });

// next quest
// var fun = (a) => a;
// console.log(fun(a));
// var a = 10;

// part next
// var fun = (a, b) => {
//   var sum = a + b;
//   return sum;
// };
// var a = 10;
// var b = 20;
// console.log(fun(a, b));

// next part
// var student = function (name) {
//   this.name = name;

//   function printName() {
//     console.log(this.name);
//   }

//   printName();
// };

// var yash = new student("yash");

// next part
// var fun = a =>{ a }
// var a =10;
// console.log(fun(a))

