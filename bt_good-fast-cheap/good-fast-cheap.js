function show(id) {
    return document.getElementById(id);
}

let switch_1 = show('input_switch_1');
let switch_2 = show('input_switch_2');
let switch_3 = show('input_switch_3');
function check(id) {
    // console.log(switch_1.checked, switch_2.checked, switch_3.checked)
   if(switch_1.checked && switch_2.checked && switch_3.checked){
        switch(id){
            case 'input_switch_1':
                switch_2.checked= false;
                break;
            case 'input_switch_2':
                switch_3.checked= false;
                break;
            case 'input_switch_3':
                switch_1.checked= false;
                break;
        }
        

   }
}
