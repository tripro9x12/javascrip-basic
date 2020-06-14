//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

let n = parseInt(prompt('Nhập số tự nhiên bất kỳ'));
function giaiThua(n){
    let giai_Thua = 1;
    for(let i = 1; i<=n; i++){
        giai_Thua *=i;
    }
    console.log(giai_Thua);
}
giaiThua(n);
