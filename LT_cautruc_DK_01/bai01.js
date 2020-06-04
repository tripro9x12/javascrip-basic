function kiemtra(){
    let a = parseInt(prompt("Nhập a"), "");
    let b = parseInt(prompt("Nhập b"), "");
    if(a % b == 0){
        console.log("a chia hết cho b");
    }else console.log ("a không chia hết cho b");
}
kiemtra();