let age = 10;
let pays = 'france';

// condition si
if( age > 18 || pays != 'france'){
document.body.innerHTML ="<p>j'ai plus de 18 ans</p>";
}


// condition si ou si
let meteo = 'soleil';

if (meteo === 'pluie'){
    document.body.innerHTML = '<p>Prendre un parapluie</p>'
} 

else if (meteo === 'neige'){
    document.body.innerHTML = '<p>Prendre des chaussures de ski</p>'
}

else if (meteo === 'soleil'){
    document.body.innerHTML = '<p>Prendre son <b>maillot de bain </p>'
} 
 else {
    document.body.innerHTML = '<p>Météo inconnue<p/>'

}

// prompt : afficher une fenetre de saisie 
let saisie = prompt ('Saisissez un nombre');
// document.body.innerHTML = 'Vous avez saisi '+saisie;

// ex 1 
if (saisie>0){
    document.body.innerHTML = 'Positif '+saisie;

}
else if (saisie<0){
    document.body.innerHTML = 'Negatif'+saisie
}
// else (saisie=0) {
//     document.body.innerHTML = 'Positif' + saisie
// }
