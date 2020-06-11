//Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
function check(){
    let chuoi1 = prompt('Nhập chuỗi 1');
    let chuoi2 = prompt('Nhập chuỗi 2');
    let result = (chuoi1.includes(chuoi2) && chuoi2.includes(chuoi1)) ? true : false;
    console.log(result);
}
check();