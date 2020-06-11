/*Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
 Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
*/
function nhap(n, arr) {
    // n = parseInt(prompt('nhập n: '));
    // arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(arr);
}
function tim_Max(n, arr) {
    //Math.max(arr);
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
           max = arr[i];   
           index = i;  
        }
    }
    console.log(`index: ${index} max: ${arr[index]}`);
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    tim_Max(n, arr);
}
main();