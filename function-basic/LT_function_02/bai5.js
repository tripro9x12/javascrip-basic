//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

let a = parseInt(prompt('Nhập a: '));
let b = parseInt(prompt('Nhập b: '));
let c = parseInt(prompt('Nhập c: '));

function soSanh(a,b,c){
    if(a<b && a<c){
        return (`a = ${a} nhỏ nhất`);
    }else if(b<c){
        return (`b = ${b} nhỏ nhất`);
    }else{
        return (`c = ${c} nhỏ nhất`);
    }
}
console.log(soSanh(a,b,c));
