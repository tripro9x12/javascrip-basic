/*Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử.
 Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
*/

function nhap(n, arr) {
    // n = parseInt(prompt('nhập n: '));
    // arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(arr);
}
function show(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            console.log(`index: ${i} value: ${arr[i]}`);
        }
    }
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    show(n, arr);
}
main();