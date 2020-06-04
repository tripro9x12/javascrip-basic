/*Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con)
 khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng là 0.3%.
 */
function main(){
    let money_first = parseFloat(prompt("Nhập số tiền ban đầu"));
    let number_month = parseFloat(prompt("nhập số tháng cho vay"));
    let lai_xuat;
    let i = 1;
    for(i;i<=number_month; i++){
        lai_xuat = money_first * 0.3/100;
        money_first = money_first + lai_xuat;
        console.log(`tháng ${i}: lãi xuất: ${lai_xuat} `);
        console.log(`Tổng số tiền nhận được là: ${money_first} \n `);
    }
}
main();