//Bài 1: sử dụng hàm document.write();
let i = 10;
let f = 20.5;
let bool = true;
let s = 'Hà Nội';

document.write('value: i = ' + i);
document.write('<br/>');
document.write('value: f = ' + f);
document.write('<br/>');
document.write('value: (boolean) of bool = ' + bool);
document.write('<br/>');
document.write('value: (string) of s = ' + s);
//Bài 2: Diện tích hình chữ nhật
let width = 20;
let height = 10;
let area = width * height;
document.write('<br> Bài 2: <br>');
document.write(`diện tích hình chữ nhật là: ${width} * ${height} = ${area}`);
/*Bài 3: Dùng hàm prompt() để nhập 2 số từ bàn phím a,b. kiểm tra xem a có phải bội số
của b hay không. hiển thị ra màn hình bằng hàm alert();
*/
function kiemtra(){
    let a = prompt("Nhập a:");
    let b = prompt("Nhập b");
    let resurt = (a%b == 0) ? "a chia hết cho b" : "a không chia hết cho b";
    alert(resurt);
}
kiemtra();