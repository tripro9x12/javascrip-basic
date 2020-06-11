/*Bài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó.
 In ra giá trị trung bình của các phần tử trong mảng.
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
    let max = 0;
    let index = 0;
    let sum = 0;
    let TB;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];
        if (max<arr[i]) {
           max = arr[i];   
           index = i;  
        }

    }
    console.log(`index: ${index} max: ${arr[index]}`);
    TB = sum/arr.length;
    console.log(`giá trị trung bình: ${TB}`);
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    tim_Max(n, arr);
}
main();