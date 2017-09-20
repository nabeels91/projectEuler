var arr3=[];
var arr5=[];
var aim=1000;

for(i=3;i<aim;i){
  arr3.push(i);
  i=i+3;
}//console.log(arr3);   //test
for(i=5;i<aim;i){
  arr5.push(i);
  i=i+5;
}//console.log(arr5);    //test

  var sumArr3=0;
for(i=0;i<arr3.length;i++){
  sumArr3=sumArr3+arr3[i];
}
// console.log('the sum of array3 '+sumArr3);   //test

var sumArr5=0;
for(i=0;i<arr5.length;i++){
  sumArr5=sumArr5+arr5[i];
}
//console.log('the sum of array5 '+sumArr5);    //test
 
 total=sumArr5+sumArr3;
console.log("The sum of all the multiples of 3 or 5 below 1000 = "+ total);
 
//this is for the other method and checks... using array manipulation--later!! :D

// var theBiggerArray;
// if(arr3.length > arr5.length){
//   console.log('array3 is longer with: '+ arr3.length + ' entries');
//   theBiggerArray=arr3.length;
// }
// else if(arr3.length < arr5.length){
//   console.log('array5 is longer with: '+ arr5.length + ' entries');
//   theBiggerArray=arr5.length;
  
// }else console.log('they are equal '+arr3+"="+arr5);
//   theBiggerArray=arr3.length;



//var sum=[];

// while(arr3.length<arr5.length){
//   arr3.push(0);
// }


// for(a=0; a<=theBiggerArray; a++){
//   var add= arr3[a]+arr5[a];
//   sum.push(add);
  
// }console.log(','+sum);
  

 