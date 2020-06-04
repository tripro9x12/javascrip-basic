//Bài 6: Giải phương trình bậc 1.
let a = parseFloat(prompt("Nhập a: "));
let b = parseFloat(prompt("Nhập b: "));
let x;
if(a==0){
    if(b==0){
        console.log('Phương trình vô số nghiệm');
    }else{
        console.log('Phương trình vô nghiệm');
    }
}else{
    x = -b/a;
    console.log(`PT có nghiệm là: x = ${x}`);  
}