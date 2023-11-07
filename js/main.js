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



document.querySelector("#pariedispari").addEventListener("click", function(){

    let my_choice = '';

    while((my_choice !== "pari") && (my_choice !== "dispari")){

        my_choice = prompt("pari o dispari?")
    }

    let my_number = parseInt(prompt("inserisci un numero"));

    while(!(Number.isInteger(my_number))  ){
        my_number = parseInt("inserisci un numero valido")

    }

    alert("la macchina ha scelto" + " " + pari_o_dispari(my_number))


    const somma = my_number + pari_o_dispari(my_number);
    let machine_choice = "";
    if (somma % 2 == 0){
        machine_choice = "pari"
    }else{
        machine_choice = "dispari"
    }

    if(my_choice == machine_choice){
        alert("hai vinto congratulazioni")
        
    }else{
        alert("hai perso :(")
    }




})