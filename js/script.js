//recupero il pulsante dal dom
const btn = document.getElementById("calculate")

//il pulsante devve e in attesa quindi deve essere cliccato
btn.addEventListener("click", function () {

//quando il pulsante viene clikkato recupera i dati quindi i km e l'eta
    const km = document.getElementById("km").value;
    const age = document.getElementById("age").value;

    //calcolo il prezzo base
    let final_price = km * 0.21;
    let message = `il prezzo del tuo biglietto e pari a ${final_price.toFixed(2)}`;
    //verifico l'eta del passegero che a seconda del valore e applico lo sconto
    
    if (age == 1){ //minorenne
        final_price  *= 0.8;
        message = `il prezzo del tuo biglietto e pari a ${final_price.toFixed(2)}`;
    }
    else if (age == 2){//over 65
        final_price  *= 0.6;
    }
    

    console.log(document.getElementById('message').innerHTML);
    document.getElementById('message').innerHTML = message;


});

btn_reset.addEventListener('click', function (){
    
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    document.getElementById('message').innerHTML = '';
})

