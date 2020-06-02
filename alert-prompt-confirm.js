function basic(){
    alert("bạn muốn thực hiện việc gì");
    var i = prompt("prompt: mời bạn nhập vào 1 số");
    confirm("confirm: kết quả: " +i);
    for(var a = 0; a<i; a++){
        alert("index of a: "+a);
    }
    
}
// basic();
function conso(){
    let b = 2;
    let c = 3;
    let resurt = b + c;
    console.log(resurt);
}
conso();
// node alert-prompt-confirm.js