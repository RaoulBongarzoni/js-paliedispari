

function palindromo(stringa){

    let newstringa = ""
    for (let i = stringa.length - 1; i>=0 ; i-- ){
        newstringa += stringa[i];
    }
    if(newstringa == stringa){

        return true;
    }else{
        return false;
    }



}

function pari_o_dispari(numero){

    const num2 = Math.floor(Math.random() * (5 - 0) ) ;


    const somma = num2 + numero;
    if (somma % 2 == 0){
        return num2
    }else{
        return num2
    }

}