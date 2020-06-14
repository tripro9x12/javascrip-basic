//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
let n = parseInt(prompt('nhập n: '));
let arr = [];
function reverseMang(n, arr) {
    for (let i = 0; i < n; i++){
        arr[i] = parseInt(prompt(`Nhập phần tử mảng thứ arr[${i}]: `));
    }
    console.log(`Mảng trước khi đảo ngược: ${arr} `);

    arr.reverse();
    console.log(`Mảng sau khi đảo ngược ${arr} `);
}
reverseMang(n,arr);