function retornaNumerosValidos (array) {
    let numerosValidos = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0) {
            numerosValidos.push(array[i]); 
        }
    }
    console.log("os números pares são: ", numerosValidos);
}

let array = [1,2,4,5,7,8];

retornaNumerosValidos(array);