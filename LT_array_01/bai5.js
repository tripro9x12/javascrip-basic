//Bài 5- Viết chương trình đếm số nguyên âm trong một mảng

function nhap(n, arr) {
    // n = parseInt(prompt('nhập n: '));
    // arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(arr);
}
function count(n, arr) {
    let dem = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<0){
            dem++;
        }
    }
    console.log(`số nguyên âm có trong mảng là: ${dem} `);
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    count(n, arr);
}
main();