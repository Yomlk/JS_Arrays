//1-ая Задача
function task1(){
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum = arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
    console.log(sum);
    
}

//2-ая Задача
function task2() {
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum = arr.filter(index=>index>0 && index<10).reduce((total,index)=>total+index,0);
    console.log(sum)
    }
    
//3-ая Задача
function task3(){
    let arr = Array.from(Array(3),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    function proverka(arr){
    return arr.every((item)=>item%2==0);
    }
    
    console.log(proverka(arr));
    }
//4-ая Задача
function task4(){
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let newArr = arr.filter((elem)=>elem%5==0);
    console.log(newArr);
    }
//5-ая Задача
function task5() {
    let SredAref = function(arr) {
    let sum = arr.reduce((total,elem)=>total+elem,0);
    return sum/arr.length
    }
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let round = SredAref(arr);
    console.log(round.toFixed(1));
    
    }