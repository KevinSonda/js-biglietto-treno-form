//recupero il pulsante dal dom
const btn = document.getElementById("calculate")

//il pulsante devve e in attesa quindi deve essere cliccato
btn.addEventListener("click", function () {

//quando il pulsante viene clikkato recupera i dati quindi i km e l'eta
    const km = document.getElementById("km").value;
    const age = document.getElementById("age")

    //calcolo il prezzo base
    let price = km * 0.21;
    let finale_price
    //verifico l'eta del passegero che a seconda del valore e applico lo sconto
    if(age == 0){//maggiorenne
        finale_price = price;
    }
    else if(age == 1){ //minorenne
        finale_price = price * 0.8;
    }
    else if(age == 2){//over 65
        finale_price = price * 0.6;
    }
    else {
        alert("non hai selezionato l\'eta. verra applicato il costo base");
    }
})