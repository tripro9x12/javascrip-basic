function convert_tien(){
    let amount = document.getElementById('amount').value;
    let from_currency = document.getElementById('from_currency').value;
    let to_currency = document.getElementById('to_currency').value;
    let result;

    if(from_currency == 'VietNam'){
        if(to_currency == 'USD'){
            result = amount / 23000;
        }
        else{
            result = amount;
        }
    }else{
        if(to_currency == 'USD'){
            result = amount;
        }
        else{
            result = amount * 23000;
        }
    }
    document.getElementById('show').innerHTML = result;
}
convert_tien();