document.querySelector("#palindromo").addEventListener("click", function(){

    let parola = prompt("inserisci la parola da veriricare");

    const verifica = palindromo(parola);
    if(verifica == true){
        alert(`La parola ${parola} è palindroma `)
    }else{
        alert(`La parola ${parola} non è palindroma `)
    }


}



)