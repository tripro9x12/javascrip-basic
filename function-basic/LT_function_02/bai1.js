/*Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
 Gọi hàm vừa xây dựng được.
 */
let x = parseFloat(prompt('Nhập vào một số bất kỳ'));
function mathPow(x){
    // return Math.pow(x,2);
    return x*x;
}
console.log(mathPow(x));
