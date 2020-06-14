//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được

let r = parseFloat(prompt('Nhập bán kính hình tròn'));
let PI = 3.14;
function dienTich(PI, r) {
    return Math.pow(r, 2) * PI;
}
console.log(dienTich(PI, r));

function chuVi(PI, r) {
    return 2 * r * PI;
}
console.log(chuVi(PI, r));