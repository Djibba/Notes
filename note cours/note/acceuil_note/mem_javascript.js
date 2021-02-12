getElementById(),getElementsByTagName()etgetElementsByName()
querySelector(), querySelectorAll()
var href = link.getAttribute('href');
link.setAttribute('href', 'http://www.siteduzero.com');
// Ajoute une nouvelle classe
div.classList.add('new-class');

// Retire une classe
div.classList.remove('new-class');

// Retire une classe si elle est présente ou bien l'ajoute si elle est absente
div.classList.toggle('toggled-class');

// Indique si une classe est présente ou non
if (div.classList.contains('old-class')) {
    alert('La classe .old-class est présente !');
}

document.getElementById('myDiv').innerHTML (+)= '<blockquote>Je mets une citation à la place du paragraphe</blockquote>';

var blockquote = paragraph.parentNode;

//nodeType et nodeName  firstChild et lastChild firstElementChild et 
lastElementChild

//----------------------nodeValue et data
Changeons de problème : il faut récupérer le texte du premier enfant, et le texte contenu dans l'élément <strong>, mais comment faire ?

//childNodes
La propriété childNodes retourne un tableau contenant la liste des enfants

//nextSibling  et  previousSibling nextElementSibling et
 previousElementSibling
 