var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == 10){
        alert("Fim da contagem!!!")
        currentNumber = 9;
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == 0) {
     
        alert("impossível contar negativos!!!")
        currentNumber = 1;
    }
}