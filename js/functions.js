

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

function pari_o_dispari(valore, numero){

    const num2 = Math.floor(Math.random() * (5 - 0) ) ;


    alert("la macchina ha scelto" + " " + num2)


    const somma = numero + num2;
    let machine_choice = "";
    if (somma % 2 == 0){
        machine_choice = "pari"
    }else{
        machine_choice = "dispari"
    }

    if(valore == machine_choice){
        return ("hai vinto congratulazioni")
        
    }else{
        return ("hai perso :(")
    }

}