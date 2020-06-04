/*Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
 Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
 */
let age = parseInt(prompt("Nhập số tuổi cần kiểm tra: "));
let bol = false;
function check(age){
    if(age>0 && age <120){
        bol = true;     
    }else{
        bol;
    }
    console.log(bol);
}
check(age);