"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d=b*b-4*a*c
  console.log(d)
    
  if (d>0){
    let x1=(-b + Math.sqrt(d) )/(2*a)
    let x2=(-b - Math.sqrt(d) )/(2*a)
    console.log("KKK",x1,x2)
    return arr.push(x1,x2)
  } else if (d=0){
    x1=-b/(2*a)
    return arr.push(x1)
    } else if (d<0)
     return arr.push(x1,x2)
    
  return arr;
}

const result=solveEquation(1,5,4)
console.log("jjj",result)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
