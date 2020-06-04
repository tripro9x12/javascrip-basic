/*Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác 
và sau mỗi tháng bạn cần tính toán số tiền hoa hồng bạn nhận được. 
Với mức hoa hồng theo doanh số bán hàng như sau:

5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu, nếu tổng doanh số lớn hơn 100 triệu
và bé hơn 300 triệu thì tăng lên 10%, tăng lên 20 % nếu tổng doanh số là lớn hơn 300 triệu.
 */
function main(){
    let doanh_so = prompt("Nhập doanh số bán hàng: ");
    let hoa_hong;
    if(doanh_so>0){
        if(doanh_so<=100000000){
            hoa_hong = doanh_so * 5/100;
        }
        else if(doanh_so>100000000 && doanh_so<=300000000){
            hoa_hong = 100000000 * 5/100 + (doanh_so-100000000)* 10/100;
        }else{
            hoa_hong = 100000000 * 5/100 + 200000000 * 10/100 + (doanh_so-300000000) * 20/100;
        }
    }
    console.log(`doanh số bán hàng: ${doanh_so}`);
    console.log(`số tiền hoa hồng nhận được là: ${hoa_hong} `);
}
main();