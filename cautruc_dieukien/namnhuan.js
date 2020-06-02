let year = parseInt(prompt("Nhập năm"));
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            document.write(`${year} là năm nhuận`);
        }else{
            document.write(`${year} là năm không nhuận`);
        }
    }else{
    document.write(`${year} là năm nhuận`);
    }
}else{
document.write(`${year} là năm không nhuận`);
}