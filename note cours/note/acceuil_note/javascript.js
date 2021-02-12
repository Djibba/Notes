<script>
alert('mon texte');
sizeof();
parseInt();
prompt();
la fonction "confirm()"
if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?')) {
    alert('Le code a bien été exécuté !');
}
</script>

// VARIABLE
pour declarer une variable on utilise le mot cle "var"
var myVariable;
// LES CONDITION
===//est egal a (en valeur et en type)
!==//est different de (en valeur ou en type)
			condition ternaire
	exemple
bon = (heure <= 18) ? "Bonjour" : "Bonsoir";
			"switch"
//LES FONCTIONS
function multi(x, y){
	return x*y;
}
alert(multi(4,5));//appel de la fonction
//----LES OBJETS
//creer un objet vide
var myObject = {};
//------------------
exemple
var moi = {
	prenom : "saliou",
	nom : "seck",
	age : 20,
	identite : function(){
		return "Prénom : " + this.nom +
			   "\n nom " + this.prenom +
			   "\n age " + this.age;
	}

}
//----OBJETS PRIMITIVE
 var p = new  String("je suis en objet");
 var obj_cree = new  Object();
//---CREER OBJETS avec constructeur
//----------------------------------------------------------------
			function Identite(p,n,a){
				this.prenom = p;
				this.nom = n;
				this.age = a;
			}
			var p1 = new Identite("saliou","seck","15");
			alert(p1.prenom + " " + p1.nom + " " + p1.age);
//----------------------------------------------------------------


//---------------------LES TABLEAUX
//creer un array vide
var myArray = [];
//declarer un tableau
var myArray_b = [42, 'Sébastien', 12, 'Laurence'];//ou 
var myArray = new Array('Sébastien', 12, 'Ludovic',false);
alert(myArray[1]); // Affiche : « Laurence »
for (var i = 0, c = myArray.length; i < c; i++) //pour eviter de calculer a chaque tour de boucle myArray.length
//operation sur les tableau
myArray.push('Ludovic'); // Ajoute « Ludovic » à la fin du tableau
myArray.push('Pauline', 'Guillaume'); // Ajoute « Pauline » et « Guillaume » à la fin du tableau
//La méthode "unshift()" fonctionne comme 'push()', excepté que les items sont ajoutés au début du tableau
myArray.shift(); // Retire le premier élément  du tableau
myArray.pop(); // Retire le dernier élément du tableau
var str1 = 'je ne suis pas sure si ça va marcher ou pas';
var tab1 =str1.split(" ");//permet de transformé la chaine de caractère en tableau de chaine de caractère en donnant le séparateur comme argument
var str2 = tab1.join();//pertmet de transformé un tableau en chaine de caractère


// ---les OBJETS litteraux
var family = {
self: 'Sébastien',
sister: 'Laurence',
brother: 'Ludovic',
cousin_1: 'Pauline',
cousin_2: 'Guillaume'
};
//acces au item
family.sister;
family['sister'];
// ajoutés des item
family.uncle = 'Didier'; // « Didier » est ajouté et est accessible via l'identifiant « uncle »
family['uncle'] = 'Didier';// Même opération mais d'une autre manière

//les fonctions anonymes
(function test() {
    // Code.
})();

//deboguer notre code
La méthode "console.log()" //vous permet d'afficher la valeur d'une variable sans bloquer l'exécution de votre code, 
//contrairement à la fonction alert(). Mais l'intérêt de cette méthode va beaucoup plus loin car elle permet 
//de visualiser le contenu des objets de manière relativement pratique

//Manipuler le code HTML (partie 1/2)
Le Document Object Model (abrégé DOM) est une interface de programmation pour les documents XML et HTML.
//L'objet window
	De même, lorsque vous déclarez une variable dans le contexte global de votre script,
cette variable deviendra en vérité une propriété de l'objet window
	Une dernière chose importante qu'il vous faut mémoriser : toute variable non déclarée 
(donc utilisée sans jamais écrire le mot-clé var) deviendra immédiatement une propriété de l'objet window

//Naviguer dans le document
Accéder aux éléments
L'accès aux éléments HTML via le DOM est assez simple mais demeure actuellement plutôt limité.
Le document
L'objet document est un sous-objet de window, l'un des plus utilisés. Et pour cause, il représente la page Web
 et plus précisément la balise<html>
L'objet document possède trois méthodes principales :getElementById(),getElementsByTagName()etgetElementsByName().

//getElementById()
Cette méthode permet d'accéder à un élément en connaissant son ID qui est simplement l'attribut id de
l'élément. Cela fonctionne de cette manière :

//getElementsByTagName()
var divs = document.getElementsByTagName('div');
Faites très attention dans le nom de cette méthode : il y a un « s » à Elements. C'est une source fréquente d'erreurs.
Cette méthode permet de récupérer, sous la forme d'un tableau, tous les éléments de la famille.

//getElementsByName()
Cette méthode est semblable à getElementsByTagName() et permet de ne récupérer que les éléments qui possèdent un attribut 
name que vous spécifiez. L'attribut name n'est utilisé qu'au sein des formulaires,

Voyons maintenant les particularités de ces deux méthodes. La première, querySelector(), renvoie le premier élément trouvé
correspondant au sélecteur CSS, tandis que querySelectorAll() va renvoyer tous les éléments 
 (sous forme de tableau) correspondant au sélecteur CSS fourni
 var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"

alert(queryAll.length); // Affiche : "2"
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"
on peut aussi utilisé "textContent" pour n afficher que le texte situer entre deux balise et non les element html

//methode permettant d'acceder directement a certains élément grace a document 
document.title;
document.body;
document.link;
 //Éditer les éléments HTML
  l'objet Element nous fournit deux méthodes,getAttribute() et setAttribute() permettant respectivement de récupérer et 
  d'éditer un attribut Le premier paramètre est le nom de l'attribut, et le deuxième, dans le cas des et Attribute() uniquement,
   est la nouvelle valeur à donner à l'attribut
 //EXEMPLE------------------------------------------------
   //Les attributs accessibles
   <body>
    <a id="myLink" href="http://www.un_lien_quelconque.com">Un lien modifié dynamiquement</a>

    <script>
        var link = document.getElementById('myLink');
        var href = link.getAttribute('href'); // On récupère l'attribut « href »

        alert(href);

        link.setAttribute('href', 'http://www.siteduzero.com'); // On édite l'attribut « href »
    </script>
</body>
//donner un attribut classe a notre balise on utilise className
 document.getElementById('myColoredDiv').className = 'blue';

 //NB---------------------------------
 Toujours dans le même cas, le nom for est réservé lui aussi en JavaScript (pour les boucles). Vous ne pouvez donc pas modifier l'attribut HTML for 
 d un<label>en écrivant "element.for", il faudra utiliser element.htmlFor à la place.

 //manipuler l'atribut  class
-----------------------------------------------------------------------
 var div = document.querySelector('div');

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

// Parcourt et affiche les classes CSS
var result = '';

for (var i = 0; i < div.classList.length; i++) {
    result += '.' + div.classList[i] + '\n';
}

alert(result);
------------------------------------------------------------------

        //Récupérer du HTML
innerHTML permet de récupérer le code HTML enfant d'un élément sous forme de texte. Ainsi, si des balises sont
 présentes,innerHTML les retournera sous forme de texte :

        //Ajouter ou éditer du HTML
Pour éditer ou ajouter du contenu HTML, il suffit de faire l'inverse, c'est-à-dire de définir un nouveau contenu :
document.getElementById('myDiv').innerHTML = '<blockquote>Je mets une citation à la place du paragraphe</blockquote>';

Si vous voulez ajouter du contenu, et ne pas modifier le contenu déjà en place, il suffit d’utiliser+=à
 la place de l'opérateur d'affectation :
document.getElementById('myDiv').innerHTML += ' et <strong>une portion mise en emphase</strong>.';

//NB
Toutefois, une petite mise en garde : il ne faut pas utiliser le += dans une boucle ! En effet,innerHTMLralentit 
considérablement l'exécution du code si l'on opère de cette manière, il vaut donc mieux concaténer 
son texte dans une variable pour ensuite ajouter le tout via innerHTML. 

Le fonctionnement d'innerText est le même qu'innerHTML excepté le fait que seul 
le texte est récupéré, et non les balises. 

        //textContent
La propriété textContent est la version standardisée d'innerText; elle est reconnue par tous les navigateurs
 à l'exception des versions d'Internet Explorer antérieures à la 9. Le fonctionnement est évidemment le même.
 //EXEMPLE ILLUSTRATIF
 Tester le navigateur
Il est possible via une simple condition de tester si le navigateur prend en charge telle ou telle méthode ou propriété.
--------------------------------------------------------------------------------------------------
<body>
    <div id="myDiv">
        <p>Un peu de texte <a>et un lien</a></p>
    </div>

    <script>
        var div = document.getElementById('myDiv');
        var txt = '';

        if (div.textContent) { // « textContent » existe ? Alors on s'en sert !
            txt = div.textContent;
        } else if (div.innerText) { // « innerText » existe ? Alors on doit être sous IE.
            txt = div.innerText + ' [via Internet Explorer]';
        } else { // Si aucun des deux n'existe, cela est sûrement dû au fait qu'il n'y a pas de texte
            txt = ''; // On met une chaîne de caractères vide
        }

        alert(txt);
    </script>
</body>
----------------------------------------------------------------------------------------------------------

//La propriété parentNode
La propriété parentNode permet d'accéder à l'élément parent d'un élément. Regardez ce code :
//exemple
---------------------------------------------------------------------
<blockquote>
    <p id="myP">Ceci est un paragraphe !</p>
</blockquote>
var paragraph = document.getElementById('myP');
var blockquote = paragraph.parentNode;
----------------------------------------------------------------------

//nodeType et nodeName
nodeType et nodeName servent respectivement à vérifier le type d'un nœud et le nom d'un nœud.
nodeType 
retourne un nombre, qui correspond à un type de nœud
Numéro		Type de nœud

1			Nœud élément*
2			Nœud attribut*
3			Nœud texte*
4			Nœud pour passage CDATA (relatif au XML)
5			Nœud pour référence d'entité
6			Nœud pour entité
7			Nœud pour instruction de traitement
8			Nœud pour commentaire*
9			Nœud document
10			Nœud type de document
11 			Nœud de fragment de document
12 			Nœud pour notation

nodeName
, quant à lui, retourne simplement le nom de l'élément, en majuscule. Il est toutefois conseillé 
d'utiliser toLowerCase()(ou toUpperCase()) pour forcer un format de casse et ainsi éviter les mauvaises surprises.
//exemple
var paragraph = document.getElementById('myP');
alert(paragraph.nodeType + '\n\n' + paragraph.nodeName.toLowerCase());

//Lister et parcourir des nœuds enfants
firstChild et lastChild
Comme leur nom le laisse présager,firstChild et lastChild servent
respectivement à accéder au premier et au dernier enfant d'un nœud.

Dans le cas où vous ne souhaiteriez récupérer que les enfants qui sont considérés comme des éléments 
HTML (et donc éviter les nœuds #text par exemple), sachez qu'il existe les propriétés firstElementChild et 
lastElementChild. Ainsi, dans l'exemple précédent, la propriété firstElementChild renverrait l'élément<a>.
Malheureusement, ces deux propriétés ne sont supportées qu'à partir de la version 9 concernant Internet Explorer.

//----------------------nodeValue et data
Changeons de problème : il faut récupérer le texte du premier enfant, et le texte contenu dans l'élément <strong>, mais comment faire ?

Il faut soit utiliser la propriété nodeValue soit la propriété data. Si on recode le script précédent, nous obtenons ceci :

//childNodes
La propriété childNodes retourne un tableau contenant la liste des enfants d'un élément. L'exemple suivant illustre le fonctionnement de cette propriété, de manière à récupérer le contenu des éléments enfants :
//---------------------------------------------------
<body>
    <div>
        <p id="myP">Un peu de texte <a>et un lien</a></p>
    </div>

    <script>
        var paragraph = document.getElementById('myP');
        var children = paragraph.childNodes;

        for (var i = 0, c = children.length; i < c; i++) {

            if (children[i].nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
                alert(children[i].firstChild.data);
            } else { // C'est certainement un nœud textuel
                alert(children[i].data);
            }

        }
    </script>
</body>
//----------------------------------------------------------------------//

//nextSibling  et  previousSibling
nextSibling et previousSibling sont deux propriétés qui permettent d'accéder respectivement au nœud suivant et au nœud précédent.
//-----------------------------------------------------
<body>
    <div>
        <p id="myP">Un peu de texte, <a>un lien</a> et <strong>une portion en emphase</strong></p>
    </div>

    <script>
        var paragraph = document.getElementById('myP');
        var first = paragraph.firstChild;
        var next = first.nextSibling;

        alert(next.firstChild.data); // Affiche « un lien »
    </script>
</body>
//-------------------------------------------------------------------//

Tout comme pour firstChild et lastChild, sachez qu'il existe les propriétés nextElementSibling et
 previousElementSibling qui permettent, elles aussi, de ne récupérer que les éléments HTML. 
 Ces deux propriétés ont les mêmes problèmes de compatibilité que firstElementChild et lastElementChild.

//NB
Attention aux nœuds vides
En considérant le code HTML suivant, on peut penser que l'élément<div>ne contient que trois enfants<p>:

<div>
    <p>Paragraphe 1</p>
    <p>Paragraphe 2</p>
    <p>Paragraphe 3</p>
</div>
Mais attention, car ce code est radicalement différent de celui-ci :

<div><p>Paragraphe 1</p><p>Paragraphe 2</p><p>Paragraphe 3</p></div>
En fait, les espaces entre les éléments tout comme les retours à la ligne sont considérés comme 
des nœuds textuels (enfin, cela dépend des navigateurs) ! Ainsi donc, si l'on schématise le premier code,
 on obtient ceci :
Heureusement, il existe une solution à ce problème ! Les attributs firstElementChild,lastElementChild,
nextElementSibling et previousElementSiblingne retournent que des éléments HTML et permettent donc 
d'ignorer les nœuds textuels. Ils s'utilisent exactement de la même manière que les attributs 
de base (firstChild,lastChild, etc.). Attention, ces attributs ne sont pas supportés par les 
versions d'Internet Explorer antérieures à la 9.

//----------------------Créer et insérer des éléments
Ajouter des éléments HTML
Avec le DOM, l'ajout d'un élément HTML se fait en trois temps :

1- On crée l'élément ;

2- On lui affecte des attributs ;

3- On l'insère dans le document, et ce n'est qu'à ce moment-là qu'il sera « ajouté ».

//--------Création de l'élément
La création d'un élément se fait avec la méthodecreateElement(), un sous-objet de l'objet racine, 
c'est-à-diredocumentdans la majorité des cas :

var newLink = document.createElement('a');

//----------------------------------Affectation des attributs
Ici, c'est comme nous avons vu précédemment : on définit les attributs, soit avecsetAttribute(),
 soit directement avec les propriétés adéquates.

newLink.id    = 'sdz_link';
newLink.href  = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');
//----------------------------------Insertion de l'élément
On utilise la méthodeappendChild()pour insérer l'élément. Append child signifie « ajouter un enfant », 
ce qui signifie qu'il nous faut connaître l'élément auquel on va ajouter l'élément créé. Considérons 
donc le code suivant :

<!doctype html>
<html>
 <head>
    <meta charset="utf-8" />
    <title>Le titre de la page</title>
</head>

<body>
    <div>
        <p id="myP">Un peu de texte <a>et un lien</a></p>
    </div>
</body>
</html>

On va ajouter notre élément<a>dans l'élément<p>portant l'IDmyP. Pour ce faire, il suffit de récupérer 
cet élément, et d'ajouter notre élément<a>viaappendChild():

document.getElementById('myP').appendChild(newLink);

//---------------------------------------Ajouter des nœuds textuels
L'élément a été inséré, seulement il manque quelque chose : le contenu textuel ! 
La méthodecreateTextNode()sert à créer un nœud textuel (de type #text) qu'il nous suffira
 d'ajouter à notre élément fraîchement inséré, comme ceci :

var newLinkText = document.createTextNode("Le Site du Zéro");

newLink.appendChild(newLinkText);
L'insertion se fait ici aussi avecappendChild(), sur l'élémentnewLink. Afin d'y voir plus clair, 
résumons le code :
//-----------------------------------------------------------------
<body>
    <div>
        <p id="myP">Un peu de texte <a>et un lien</a></p>
    </div>

    <script>
        var newLink = document.createElement('a');

        newLink.id = 'sdz_link';
        newLink.href = 'http://www.siteduzero.com';
        newLink.title = 'Découvrez le Site du Zéro !';
        newLink.setAttribute('tabindex', '10');

        document.getElementById('myP').appendChild(newLink);

        var newLinkText = document.createTextNode("Le Site du Zéro");

        newLink.appendChild(newLinkText);
    </script>
</body>
//----------------------------------------------------------------------//
//RESUMER
var newLink = document.createElement('a');
var newLinkText = document.createTextNode("Le Site du Zéro");

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

newLink.appendChild(newLinkText);

document.getElementById('myP').appendChild(newLink);


Les références avec le DOM
Schématiser le concept de référence avec le DOM est assez simple : deux variables peuvent accéder au même élément. Regardez cet exemple :
//-------------------------------------------------------------------------------
var newLink = document.createElement('a');
var newLinkText = document.createTextNode('Le Site du Zéro');

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';

newLink.appendChild(newLinkText);

document.getElementById('myP').appendChild(newLink);

// On récupère, via son ID, l'élément fraîchement inséré
var sdzLink = document.getElementById('sdz_link');

sdzLink.href = 'http://www.siteduzero.com/forum.html';

// newLink.href affiche bien la nouvelle URL :
alert(newLink.href);
---------------------------------------------------------------------------------//

Ce qu'il faut retenir de tout ça, c'est que les objets du DOM sont toujours accessibles par référence, et c'est la raison pour laquelle ce code ne fonctionne pas :

var newDiv1 = document.createElement('div');
var newDiv2 = newDiv1; // On tente de copier le <div>

            //Cloner un élément
Pour cloner un élément, rien de plus simple :cloneNode(). Cette méthode requiert un paramètre booléen (trueoufalse) :
 si vous désirez cloner le nœud avec (true) ou sans (false) ses enfants et ses différents attributs.
Petit exemple très simple : on crée un élément<hr />, et on en veut un deuxième, donc on clone le premier :
//-------------------------------------------------------------------------------------------------------
// On va cloner un élément créé :
var hr1 = document.createElement('hr');
var hr2 = hr1.cloneNode(false); // Il n'a pas d'enfants…

// Ici, on clone un élément existant :
var paragraph1 = document.getElementById('myP');
var paragraph2 = paragraph1.cloneNode(true);

// Et attention, l'élément est cloné, mais pas « inséré » tant que l'on n'a pas appelé appendChild() :
paragraph1.parentNode.appendChild(paragraph2);
---------------------------------------------------------------------------------------------------------//

                    //Remplacer un élément par un autre
Pour remplacer un élément par un autre, rien de plus simple, il y areplaceChild(). Cette méthode accepte deux paramètres : 
le premier est le nouvel élément, et le deuxième est l'élément à remplacer. Tout commecloneNode(), cette méthode 
s'utilise sur tous les types de nœuds (éléments, nœuds textuels, etc.).

Dans l'exemple suivant, le contenu textuel (pour rappel, il s'agit du premier enfant de<a>) du lien va être remplacé par un autre.
 La méthodereplaceChild()est exécutée sur l'élément<a>, c'est-à-dire le nœud parent du nœud à remplacer.
//--------------------------------------------------------------------------------------------------------
<body>
    <div>
        <p id="myP">Un peu de texte <a>et un lien</a></p>
    </div>

    <script>
        var link = document.querySelector('a');
        var newLabel = document.createTextNode('et un hyperlien');

        link.replaceChild(newLabel, link.firstChild);
    </script>
</body>
----------------------------------------------------------------------------------------------------------//

                //Supprimer un élément
Pour insérer un élément, on utiliseappendChild(), et pour en supprimer un, on utiliseremoveChild(). Cette méthode prend en paramètre
 le nœud enfant à retirer. Si on se calque sur le code HTML de l'exemple précédent, le script ressemble à ceci :
//-------------------------------------
var link = document.querySelector('a');

link.parentNode.removeChild(link);
--------------------------------------//
Il n'y a pas besoin de récupérermyP(l'élément parent) avecgetElementById(), autant le faire directement avecparentNode.
À noter que la méthoderemoveChild()retourne l'élément supprimé, ce qui veut dire qu'il est parfaitement possible de 
supprimer un élément HTML pour ensuite le réintégrer où on le souhaite dans le DOM :
//----------------------------------------------------------------------------------------------------------
var link = document.querySelector('a');

var oldLink = link.parentNode.removeChild(link); // On supprime l'élément et on le garde en stock

document.body.appendChild(oldLink); // On réintègre ensuite l'élément supprimé où on veut et quand on veut
-------------------------------------------------------------------------------------------------------------//
        
                        //  Vérifier la présence d'éléments enfants
Rien de plus facile pour vérifier la présence d'éléments enfants :hasChildNodes(). Il suffit d'utiliser cette méthode
 sur l'élément de votre choix ; si cet élément possède au moins un enfant, la méthode renverra true:

                        //  Insérer à la bonne place :insertBefore()
La méthode insert Before()permet d'insérer un élément avant un autre. Elle reçoit deux paramètres : le premier est 
l'élément à insérer, tandis que le deuxième est l'élément avant lequel l'élément va être inséré. Exemple :
<p id="myP">Un peu de texte <a>et un lien</a></p>
//--------------------------------------------------------------------
<script>
    var paragraph = document.querySelector('p');
    var emphasis = document.createElement('em'),
        emphasisText = document.createTextNode(' en emphase légère ');

    emphasis.appendChild(emphasisText);

    paragraph.insertBefore(emphasis, paragraph.lastChild);
</script>
---------------------------------------------------------------------//

-------NB
Le JavaScript met à dispositioninsertBefore(), mais pasinsertAfter(). C'est dommage car, bien que l'on puisse s'en passer,
 cela est parfois assez utile. Qu'à cela ne tienne, créons donc une telle fonction.
Malheureusement, il ne nous est pas possible, à ce stade-ci du cours, de créer une méthode, qui s'appliquerait comme ceci :