/*Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng.
 Chương trình này đếm số ký tự số trong mảng. 
 */
function nhap(n,arr){
    for(let i = 0; i<n;i++){
        arr[i] = prompt(`nhập phần tử thứ arr[${i}] `);
    }
    console.log(arr);
}
function count_Num(n,arr){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>=0 || arr[i]<0){
            count++;
        }
    }
    console.log(`count number = ${count}`);
}

function main(){
    let n = parseInt(prompt("nhập n: "));
    let arr = [];
    nhap(n,arr);
    count_Num(n,arr);
}
main()