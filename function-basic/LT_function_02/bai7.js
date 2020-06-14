//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
let a = parseInt(prompt('Nhập a: '));
let b = parseInt(prompt('Nhập b: '));
function swap(a,b){
    let c = a;
    a = b;
    b = c;
    return (`a = ${a}, b = ${b}`);
}
console.log(swap(a,b));