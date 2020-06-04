let a = parseInt(prompt("nhập số nguyên a: "));
let b = parseInt(prompt("nhập số nguyên b: "));
let c = parseInt(prompt("nhập số nguyên c: "));
if(a>b && a>c){
    console.log(`a = ${a} là số lớn nhất`);
}else if(b>c){
    console.log(`b = ${b} là số lớn nhất`);
}else{
    console.log(`c = ${c} là số lớn nhất`);
}