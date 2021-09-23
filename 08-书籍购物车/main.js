const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name: "《山雨》",
        date: "2015-6",
        price: 35.00,
        count: 1
      },
      {
        id: 2,
        name: "《保守主义的精神》",
        date: "2012-8",
        price: 115.00,
        count: 1
      },
      {
        id: 3,
        name: "《剑指offer》",
        date: "2019-2",
        price: 41.00,
        count: 1
      },
      {
        id: 4,
        name: "《帕丁顿熊》",
        date: "2008-9",
        price: 73.00,
        count: 1
      },
    ]
  },
  methods:{
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  filter:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed:{
    totalPrice(){
      // let sum=0;
      // for(let i=0;i<this.books.length;i++)
      //   sum+=this.books[i].price*this.books[i].count
      // for(let i in this.books)
      //   sum+=this.books[i].price*this.books[i].count
      // for(let item of this.books)
      //   sum+=item.price*item.count
      // return sum
      return this.books.reduce(function (preValue,book){
        preValue+=book.price*book.count
        return preValue
      },0)
    }
  }
})
//filter//map//reduce
const nums=[10,20,111,222,44,323,45]
let newNum=nums.filter(function (n){
  return n<100
})
console.log(newNum)
let new2Num=newNum.map(function (n){
  return n*2
})
console.log(new2Num)
//reduce函数的使用,对所有内容进行汇总