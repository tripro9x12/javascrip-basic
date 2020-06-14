//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.

let n = prompt('Nhập vào 1 ký tự bất kỳ');
function checkNumber(param){
    if(param<0 || param >=0){
        return true;
    }else{ return false};
}
console.log(checkNumber(n));