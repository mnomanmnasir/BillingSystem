
const calcu = () => {
    
    let amount = document.getElementById('bill_amount').value;

    
    let tip = document.getElementById('tip_percent').value;


    let tip_cal = amount * (tip/100);
    

    let total = tip_cal + Number(amount);


    document.getElementById('tip_amount').value = tip_cal;


    document.getElementById('total_billed').value = total;

    

    
}