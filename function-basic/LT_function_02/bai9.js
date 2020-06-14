//Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1. 


let random_Kytu = prompt('Nhập kí tự bất kỳ: ');
let n = parseInt(prompt('Nhập độ dài của mảng: '));
function demKyTu(random_Kytu,n){
    let i = 0;
    let arr = [];
    for(i; i<n;i++){
        arr[i] = prompt(`Nhập phần tử của mảng thứ arr[${i}]`);
    }
    console.log(arr);
    let dem = 0;
    for(let j = 0; j<arr.length; j++){
        if(arr[j] == random_Kytu){
            dem++;
        }
    }
    console.log(dem);
    
}
demKyTu(random_Kytu,n)