//Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác.
function check() {
    let a = parseFloat(prompt("Nhập cạnh a: "));
    let b = parseFloat(prompt("Nhập cạnh b: "));
    let c = parseFloat(prompt("Nhập cạnh c: "));

    if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        console.log('a,b,c là cạnh của tam giác');
    }else{
        console.log('a,b,c ko phải là cạnh của tam giác');
    }
}
check();