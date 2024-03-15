
//3-ая Задача
function task3(){
    let arr = Array.from(Array(3),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    function proverka(arr){
        return arr.every((item)=>item%2==0);
    }
    console.log(proverka(arr));
}
