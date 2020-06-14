//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.

let n = parseInt(prompt('Nhập số nguyên bất kỳ'));
function check_soNguyen(n){
    if(n>0){
        return true;
    }else return false;
}
console.log(check_soNguyen(n));