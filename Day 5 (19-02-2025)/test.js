let arrr = ['1', '2', '3', '4', '5'];
function myFunction(arr, number) {
    let num = number.toString();
    let p = 0;
   if(arr.includes(num)){
    p = p + arr.indexOf(num);
    arr.splice(p,1);
   }
   else{
    arr.push(num)
   }
    
    return arr;
}
console.log(myFunction(arrr,1));