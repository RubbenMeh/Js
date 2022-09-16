// creation d'un tableau
// tableaux indicé

let pays = [
    // indice 0 italie, espaggne 1 etc
    "italie",
    "espagne",
    "allemagne",
    "belgique",
    "bresil",
  ];
  
  document.body.innerHTML = "le deuxieme pays est " + pays[1];
  
  // tableau associatif : clé/valeur
  // une variable pluiseurs valeur
  
  let simplon = [];
  simplon["promotion"] = " Développeur web / mobile";
  simplon["nbEleves"] = 18;
  document.body.innerHTML =
    "la promotion" +
    simplon["promotion"] +
    " est composée de " +
    simplon["nbEleves"] +
    "élèves";
  
  // panier
  let panier = [];
  console.log("nombre de produits acheteés" + panier.length);
//   push : ajouter une entré dans le tableau
panier.push('salade');
panier.push ('yaourt');
console.log ('panier');

// supprime une entrée
panier.pop();
console.log ( panier );

// index0f : recherche dans un tableau , un tableau signifie stock de données 
console.log ('Indice de salade : ' + panier.index0f('salade'))

let département = [
    "", 
    "Ain", 
    "Aisne",
    "Allier",
]
document.body.innerHTML = "le departement 1 est " + département[02];

let simplon = [];
 simplon["promn"] = " Développeur web / mobile";
 simplon["nbEleves"] = 18;
 document.body.innerHTML =
   "la promotion" +
   simplon["promotion"] +
   " est composée de " +
   simplon["nbEleves"] +
   "élèves";