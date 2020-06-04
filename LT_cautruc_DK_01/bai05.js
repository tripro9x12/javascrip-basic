/* Chương trình nhập 3 điểm là điểm bài kiểm tra, điểm thi giữa kỳ,
 điểm thi cuối kỳ và xác định học lực dựa trên nguyên tắc:

Điểm trung bình >= 9.0 là hạng A.

Điểm trung bình >=7.0 và < 9.0 là hạng B

Điểm trung bình >=5.0 và < 7.0 là hạng C

Điểm trung bình >=4.0 và < 5.0 là hạng D

Điểm trung bình < 4.0 là hạng F

 */
let diem_kiemTra = parseFloat(prompt("nhập điểm kiểm tra: "));
let diem_giuaKi = parseFloat(prompt("Nhập điểm thi giữa kì: "));
let diem_cuoiKi = parseFloat(prompt("Nhập điểm thi cuối kì: "));

let diemTb = (diem_kiemTra + diem_giuaKi + diem_cuoiKi)/3;
if(diemTb>=9){
    console.log(`điểm TB = ${diemTb}: Hạng A`);
}else if(7<=diemTb && diemTb<9){
    console.log(`điểm TB = ${diemTb}: Hạng B`);
}else if(5<=diemTb && diemTb<7){
    console.log(`điểm TB = ${diemTb}: Hạng C`);
}else if(4<=diemTb && diemTb<5){
    console.log(`điểm TB = ${diemTb}: Hạng D`);
}else{
    console.log(`điểm TB = ${diemTb}: Hạng F`);
}