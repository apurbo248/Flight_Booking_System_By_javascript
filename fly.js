function flight(inputId,isIncrease,classPrice){
    const inputCount = getInput(inputId);
    let updateCount = inputCount ;
   
    if(isIncrease == true){
        updateCount +=1;
    }
    if(isIncrease == false && inputCount>0){
        updateCount -=1;
    }
    document.getElementById(inputId).value = updateCount;


    let totalprice = 0;
    if(classPrice == 'firstClassPrice'){
        totalprice = updateCount * 150;
    }
    if(classPrice == 'economiyClassprice'){
        totalprice = updateCount * 100
    }

    const subTotal1 = getInput('inputBox1');
    const subTotal2 = getInput('inputBox2');
    const subTotal = subTotal1 * 150 + subTotal2 * 100;
    document.getElementById('subtotal').innerText = subTotal;

    const vat = subTotal * 0.1;
    document.getElementById('vat').innerText =vat;

    const Total = subTotal + vat;
    document.getElementById('total').innerText =Total;

}

function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputType = parseInt(input.value);
    return inputType;
}

function BookNow(){
    const input1 = getInput('inputBox1');
    const input2 = getInput('inputBox2');
    const subTotal = document.getElementById('subtotal').innerText;
    const vat = document.getElementById('vat').innerText ;
    const totalPrice = document.getElementById('total').innerText;

    let totalSit=input1+input2;
    alert('*********************Booked Flight Successfully********************** '+
    "Total sit is ( " +totalSit+" )"+
    "   Subtotal is ( " +subTotal+" )"+
    "   Vat is ( " +vat+" )"+
    "   Total price is ( " +totalPrice+" )"+
   "            ***  Wish you a safe journey  ***"
       
    );
}