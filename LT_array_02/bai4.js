//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
function count(){
    let input_string = prompt("Nhập 1 chuỗi: ");
    let dem = 0;
    //xóa khoảng chắn 2 đầu;
    input_string = input_string.trim();
    console.log(input_string);
    
    for(let i =0;i<input_string.length;i++){
        //không đếm khoảng chắn
        if(input_string[i] =' ' && input_string[i+1] != ' '){
            dem++;
        }
    }
    console.log(`đếm = ${dem}`);
}
count();