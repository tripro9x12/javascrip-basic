/*Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử,
 nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng số nguyên không?
 Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
 */
function nhap(n, V, arr) {
    // n = parseInt(prompt('nhập n: '));
    // arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(`V = ${V}`);
    console.log(arr);
}
function tim_kiem(n, V, arr) {
    //sử dụng indexOf thì sau khi tìm thấy phải break, nếu không sau khi nó tìm thấy
    //thì vẫn tiếp tục duyệt tiếp dẫn đến lỗi;
    let result = arr.includes(V) ? 'V is in the array' : 'V is not in the array';
    console.log(result);
}
function main() {
    let V = parseInt(prompt("nhập V: "));
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, V, arr);
    tim_kiem(n, V, arr);
}
main();