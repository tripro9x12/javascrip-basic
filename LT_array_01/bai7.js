/*Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử,
    nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không,
    nếu V thuộc mảng đã cho xoá V khỏi mảng (Bản chất việc xoá ở đây tức là dịch phần tử
    ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)
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
function delete_V(n, V, arr) {
    for (let i in arr) {
        if (arr[i] == V) {
            delete arr[i];
        }
    }
    console.log(arr);

}
function main() {
    let V = parseInt(prompt("nhập V: "));
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, V, arr);
    delete_V(n, V, arr);
}
main();