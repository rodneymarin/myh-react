function newNumberToGuess(userFirstGuess)
{
    var arr = ["1","2","3","4","5","6","7","8","9"];
    //select random digit from user input
    var posToSelect = Math.round(Math.random() * (3 - 1) + 1);
    //delete all user digits from array
    var arr2 = arr.filter((element)=>{
        return (element != userFirstGuess[0]) && (element != userFirstGuess[1]) && (element != userFirstGuess[2]);
    });
    //randomize array
    arr2.sort(() => Math.random()-0.5);
    //randomize new selected user digit position
    var arr3 = [1,2,3]; //posible digits positions
    arr3.splice(posToSelect-1,1); //keep 2 positions posibles
    arr3.sort(() => Math.random()-0.5); //randomize
    arr3.pop();
    arr2.splice(arr3[0]-1,0,userFirstGuess[posToSelect-1]);
    return arr2[0]+arr2[1]+arr2[2];
}

function calcMuertos(userGuess, realNumber){
    var result = 0;
    for(let i = 0; i < 3; i++) {
        if (userGuess[i] == realNumber[i]) {result++};
    }
    return result;
}

function calcHeridos(userGuess, realNumber, muertos){
    var result = 0;
    for(let i = 0; i < 3; i++) {
        if (userGuess.indexOf(realNumber[i])>=0) {result++};
    }
    return result-muertos;
}

function hasRepDigits (cadena) {
    // Crear un objeto para almacenar los dígitos ya vistos
    var digitos = {};
    // Recorrer la cadena de caracteres
    for (var i = 0; i < cadena.length; i++) {
      // Obtener el dígito actual
      var digito = cadena [i];
      // Si el dígito ya está en el objeto, significa que se repite
      if (digitos [digito]) {
        // Devolver verdadero
        return true;
      }
      // Si no, agregar el dígito al objeto
      digitos [digito] = true;
    }
    // Si se llega al final del bucle, significa que no hay dígitos repetidos
    // Devolver falso
    return false;
}

export {newNumberToGuess, calcMuertos, calcHeridos, hasRepDigits};