//Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
function nhap(n, arr) {
    // n = parseInt(prompt('nhập n: '));
    // arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(arr);
}
function arr_reverse(n, arr) {
    // arr.reverse();
    // console.log(`mảng sau khi nghịch đảo là: ${arr} `);

    let first = 0;
    let last = arr.length - 1;
    while(first<last){
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
    console.log(`mảng sau khi nghịch đảo là: ${arr} `);
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    arr_reverse(n, arr);
}
main();