/*Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
Bậc 1: 4 triệu đồng/tháng đóng thuế 0%;
Bậc 2: Trên 4 - 6 triệu đồng/tháng: đóng thuế 5%;
Bậc 3: Trên 6 - 9 triệu đồng: đóng thuế 10%;
Bậc 4: Trên 9 - 14 triệu đồng/tháng: đóng thuế 15%;
Bậc 5: trên 14 - 24 triệu đồng/tháng: đóng thuế 20%;
Bậc 6: Trên 24 - 44 triệu đồng/tháng: đóng thuế 25%;
Bậc 7: Trên 44 - 84 triệu đồng/tháng: đóng thuế 30%;
Bậc 8: Trên 84 triệu đồng: đóng thuế 35%.
 */

let polime = parseInt(prompt('Nhập số tiền thu nhập cá nhân trong 1 tháng: '));
let polime_thue;
if(polime<=4000000){
    polime_thue = 0;
}else if(polime>4000000 && polime<=6000000){
    polime_thue = polime * 5/100;
}else if(polime>6000000 && polime<=9000000){
    polime_thue = polime * 10/100;
}else if(polime>9000000 && polime<=14000000){
    polime_thue = polime * 15/100;
}else if(polime>14000000 && polime<=24000000){
    polime_thue = polime * 20/100;
}else if(polime>24000000 && polime<=44000000){
    polime_thue = polime * 25/100;
}else if(polime>44000000 && polime<=84000000){
    polime_thue = polime * 30/100;
}else{
    polime_thue = polime * 35/100;
}
console.log(`số tiền thuế phải đóng trong 1 tháng là: ${polime_thue} đồng`);