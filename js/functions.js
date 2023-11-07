

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