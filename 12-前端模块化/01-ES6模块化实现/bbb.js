// 1.导入的{}中定义的变量
import {sum} from "./aaa.js";
var name='小红'
var flag=false

// 2.直接导入export定义的变量
console.log(sum(100, 200));
import {height,num1} from "./aaa.js";

console.log(num1);
console.log(height);

// 导入export的function
import {mul,Person} from "./aaa.js";
console.log(mul(100, 200));
const p=new Person();
p.run();
//自主命名default函数
import myFunc from "./aaa.js"
myFunc('太初有道')
//5.统一全部导入
import * as aaa from "./aaa.js"
console.log(aaa.num1);
