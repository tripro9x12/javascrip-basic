/*Bài 6: Viết chương trình nhập vào một mảng ký tự,
 tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
 */
function nhap(n,arr){
    for(let i = 0; i<n; i++){
        arr[i] = prompt(`nhập phần tử thứ arr[${i}] `);
    }
    console.log(arr);
}
function replace_e(n,arr){
    for(let i = 0 ;i<arr.length; i++){
        if(arr[i] == '-'){
            arr[i] = '_';
        }
    }
    console.log(arr);
}
function main(){
    let n = parseInt(prompt('nhập số lượng phần tử của mảng'));
    let arr = [];
    nhap(n,arr);
    replace_e(n,arr);
}
main();