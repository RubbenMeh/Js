// création d'un sous-programme (fonction)
// création d'un paramètre dans m
function bonjour(nom,age)
{
    // instruction 
    console.log('Bonjour ' + nom + ' ' + age + 'age');
}


// appel du sous-programme 
// donner une valeur au paramètre 
bonjour( "Gloire",25);
bonjour( 'Sékou',20);
// fontion avec un retour 
function addition(chiffre1,chiffre2)
{
    
    // return : retourner une valeur 
}

function radians (chiffre) {
    return chiffre/180*Math.PI
    

}
console.log(radians(90))


function moyenne (chiffre1,chiffre2,chiffre3,chiffre4) {

    return (chiffre1 + chiffre2 + chiffre3 + chiffre4)/4 

}

console.log(moyenne(10,12,15,15))


function carré (chiffre0) {

    return (chiffre0)*chiffre0
}
console.log(carré(5))

function panier (prixht,nbpro) {
    return (prixht)+20/100+(prixht)*(nbpro)
}
console.log(panier(11,5))



