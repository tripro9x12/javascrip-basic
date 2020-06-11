/*Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
 Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. 
Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
 */
function nhap(n, a, b) {
    for (let i = 0; i < n; i++) {
        a[i] = parseInt(prompt(`nhập phần tử thứ arr a[${i}]`));
    }
    for(let j = 0; j<n;j++){
        b[j] = parseInt(prompt(`nhập phần tử thứ arr b[${j}]`));
    }
    console.log(`array a = ${a}, array b = ${b} `); //int
}
function noi_mang(n, a, b, c) {
    //concat giữ nguyên kiểu dữ liệu;
    // c = a.concat(b);
    // console.log(`array c = [${c}]`);


    //làm cách này thì phải convert về lại kiểu Number;
    let result = '';
    var d = a.join(',');
    var e = b.join(',');
    result = d + ','+ e;
    c = result.split(',');
    for(let i = 0;i<c.length;i++){
        c[i] = Number(c[i]);
    }
    console.log(c); 
}

function main() {
    let n = parseInt(prompt('nhập n: '));
    let a = [];
    let b = [];
    let c = [];
    nhap(n, a, b);
    noi_mang(n, a, b, c);
}
main();