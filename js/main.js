document.querySelector("#palindromo").addEventListener("click", function(){

    let parola = prompt("inserisci la parola da veriricare");

    const verifica = palindromo(parola);
    if(verifica == true){
        alert(`La parola ${parola} è palindroma `)
    }else{
        alert(`La parola ${parola} non è palindroma `)
    }


})



document.querySelector("#pariedispari").addEventListener("click", function(){

    let my_choice = '';

    while((my_choice !== "pari") && (my_choice !== "dispari")){

        my_choice = prompt("pari o dispari?")
    }

    let my_number = parseInt(prompt("inserisci un numero"));

    while((Number.isNaN(my_number))  ){
        my_number = parseInt(prompt("inserisci un numero valido"))

    }

    alert(pari_o_dispari(my_choice, my_number));

})