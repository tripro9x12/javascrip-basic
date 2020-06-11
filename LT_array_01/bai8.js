/*Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
 Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
 */
function nhap(n, arr) {
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhập phần tử thứ arr[${i}]`));
    }
    console.log(`mảng trước khi sắp xếp: [${arr}]`);
}

function sap_xep(n, arr){
    let temp;
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(`mảng sau khi sắp xếp giảm dần: [${arr}]`);
}
function main() {
    let n = parseInt(prompt('nhập n: '));
    let arr = [];
    nhap(n, arr);
    sap_xep(n, arr);
}
main();