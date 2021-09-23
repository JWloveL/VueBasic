var name='小明'
var age=18
var flag=true

function sum(num1,num2){
  return num1+num2
}
if(flag){
  console.log(sum(20,30))
}
// 导出方式1
export {
  flag,sum
}
// 导出方式2
export var num1=1000;
export var height=1.68;

//导出函数/类
export  function mul(num1,num2){
  return num1*num2
}

export class Person{
  run(){
    console.log('我奔跑,不像无定向的；我斗拳，不像打空气的');
  }
}

//一个模块包含某个功能，但不希望给这个功能命名,不允许存在多个
export default function (argument){
  console.log(argument);
}