/* Viết chương trình tính tiền điện với chỉ số mới và chỉ số cũ Được nhập vào từ bàn phím.
 In ra màn hình chỉ số cũ, chỉ số mới và số tiền phải trả. 
 Biết rằng 100 kWh đầu giá 1000, từ kWh 101 – 150 giá 1200, 
 từ kWh 151 – 200 giá 2000, từ 201 trở lên giá 2500.
*/
let csc = parseInt(prompt("Nhập chỉ số củ: "));
let csm = parseInt(prompt("Nhập chỉ số mới: "));
let tieu_thu = csm - csc;
let so_tien_phai_tra;
if(tieu_thu<=100){
    so_tien_phai_tra = tieu_thu * 1000;
}else if(tieu_thu>100 && tieu_thu<=150){
    so_tien_phai_tra = 100 * 1000 + (tieu_thu - 100) * 1200;
}else if(tieu_thu>150 && tieu_thu<=200){
    so_tien_phai_tra = 100 * 1000 + 50 * 1200 + (tieu_thu-150)*2000;
}else{
    so_tien_phai_tra = 100 * 1000 + 50 * 1200 + 50 * 2000 + (tieu_thu-200)*2500;
}
console.log(`chỉ số củ = ${csc} \nchỉ số mới = ${csm} `);
console.log(`số tiền phải trả là: ${so_tien_phai_tra} `);
