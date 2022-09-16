let html = '<ul>';
for( let x = 0 ; x < 5 ; x++ ) { 
    html+='<li> indice' + x + '</li>'
}
html+= '</ul>';
document.body.innerHTML = html;

// parcours un tableau indicé
let eleves = [
    'Gloire', // 'Gloire'
    'Rubben',
    'Kevin',
    'Anderson'

];

let liste = '<ol>';
for ( let x = 0 ; x < eleves.length;x++){
    liste += ''
}