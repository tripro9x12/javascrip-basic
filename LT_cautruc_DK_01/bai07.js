/*tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
Phí thuê bao bắt buộc là 25 nghìn.
600 đồng cho mỗi gọi của 50 phút đầu tiên.
400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
 */
function main(){
    const phi_batBuoc = 25000;
    let so_tien_phai_tra;
    let minutes = parseInt(prompt("Nhập số phút thực hiện: "));
    if(minutes<=50){
        so_tien_phai_tra = 600*minutes + phi_batBuoc;
    }else if(minutes>50 && minutes<=200){
        so_tien_phai_tra = 600*50 + (minutes-50)*400 + phi_batBuoc;
    }else{
        so_tien_phai_tra = 600*50 + 400*150 + (minutes-200)*200 +phi_batBuoc;
    }
    console.log(`số phút thực hiện cước điện thoại: ${minutes} `);
    console.log(`số tiền phải trả: ${so_tien_phai_tra} đồng `);

}
main();