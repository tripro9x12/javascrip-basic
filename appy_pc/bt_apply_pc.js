function tong(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let resurt;
    resurt = input1 + input2; 
    document.getElementById('show1').innerHTML =  resurt;
}
function hieu(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let resurt;
    resurt = input1 - input2; 
    document.getElementById('show1').innerHTML =  resurt;
}
function nhan(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let resurt;
    resurt = input1 * input2; 
    document.getElementById('show1').innerHTML =  resurt;
}
function chia(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let resurt;
    resurt = input1 / input2; 
    document.getElementById('show1').innerHTML =  resurt;
}
