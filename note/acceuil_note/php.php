<!-- DEFINITION & UTILITE  -->
PHP <!-- PHP Hypertext Preprocessor  -->
PHP <!-- le PHP s'exécute coté serveur et permet de dynamiser un site -->
Site statique <!--doit être actualisé par quelqu'un pour changer  -->
Site dynamique <!--changer tout seul en fonction du visiteur ou de n'importe quel autre paramètre (heure,saison,etc.) -->
Client<!--Ordinateur, qui demande une page web -->
Serveur <!-- Méga ordinateur, qui ne s'arrête jamais et qui va envoyer la page web demandée au client -->

<!-- BALISE PHP -->

<?php  ?> <!--balise pour entrer du code php -->
<?php 
echo " " & print " "  //permet d'afficher du text favoriser echo
' \" '  //permet d'ecrire un gillemet
include 'footer.php';//permet d'inclure des fichiers dans pluisieur pages (header menu footer)
?>
<!-- VARIBLE -->
$nom_var = valeur <!-- declaration d'une variable -->
$var1 = "seck";
echo "mon nom est  $var1"; \* equivaut a *\ echo 'mon nom est'.$var1;
<!-- LES CONDITIONS -->
<?php
		$note =-45; 
		if ($note<10 AND $note >0) {
			echo "vous n'avez pas la moyenne";
		}elseif ($note == 10) {
			echo "vous avez juste la moyenne";
		}elseif ($note >10 && $note <=20) {
			echo "vous avez la moyenne ";
		}else
		echo "note impossible";
		$note =5; 
		switch ($note) {
			case 5:
			echo "vous n'avez pas la moyenne";
				break;
				case 10:
			echo "vous avez juste la moyenne";
				break;
			default:
				echo "refaite votre choix";
				break;
		}

	 ?>
<!-- LES BOUCLES -->
---> while
---> do while
---> for
--->foreach($montab as $items){
			echo $items.'<br/>';
		}
	foreach ($montab as $key => $value) {
			echo'l\'age de '.$key.' est ' . $value.'<br>';
	}
//---------------------LES TABLEAUX
//---TABLEAUX numeroté ou indexé
$montab = array('saliou','seck','modou');
//---TABLEAU associative
$montab = array(
		'saliou' =>20,//ou $montab['saliou'] = 20;
		'modou' =>22,//ou $montab['modou'] = 22;
		'moussa' =>'non renseigner'//ou $montab['moussa'] = 'non renseigner;
	)
//AUTRE FACON D AFFICHER UN TABLEAU
print_r($nom_du_tableau);
var_dump($note); //affiche les informations structurées d'une variable 
//---TABLEAU MULTIDIMENSION

//LES FONCTIONS
les nom de fonction ne sont pas sensible a la classe
//syntaxe
function NomFonction(){
	code execute par la fonction;
}
<?//---------------------------RECHERCHE DANS UN TABLEAU

"array_key_exists" :// pour vérifier si une clé existe dans l'array ;
 array_key_exists('cle', $array);
"in_array" : //pour vérifier si une valeur existe dans l'array ;
if (in_array('Cerise', $fruits))
"array_search" :// pour récupérer la clé d'une valeur dans l'array.
$position = array_search('Banane', $fruits);
array_splice($tab,ind_a_part_supp);//permet de supprimer certain element et de les remplacer par d'autres et renvoi un tableau des element supprimer
array_merge(tab1,tab2)//permet de combiner deux tableau et d'afficher le tableau resultant
array_combine($tab1,$tab2);//$tab1 devient la cle et $tab2 devient la valeur
array_unique($tab)supprime les doublons
sort()//permet de trier ordre croissant
rsort()//permet de trier par odre decroissant 
ksort()
krsort()
asort()
arsort()
La fonction preg_match() vérifie que le format d’une chaîne correspond à un motif (ou masque)
"\w" et "\d"//rechercher n'importe quel lettre(chiffre pour \d) non acentué plus le "_"



//--------LES FONCTION DE STRING
<?php
	ctype_alpha($ch)//Vérifie qu'une chaîne est alphabétique
	echo strlen("saliou  seck");
	echo str_word_count("saliou bonjour à  seck");
	echo str_repeat("saliou <br>", 5);
	echo str_replace("seck", "ck", "saliou seck");
	echo strtoupper("saliou  seck ");
	"str_shuffle"// mélanger les lettres
	echo strtolower("SALIOU SECK <br>");
	echo strpos("saliou  seck","seck");//recherche de char ou string renvoi l'indice ou on a trouvé l'indice 
	$str ='j\'aime le <strong> "PHP" </strong>';
	echo $str;
	echo htmlspecialchars($str);//transformer les balises html en char 
	echo " <br> ";
	echo nl2br("Bonfour !
	Comment ça va ?"); //permet de lire les retour a la ligne comme des br
	echo " <br> ";
	// < => &lt
	// > => &gt 
	// & => &amp
	// " => &quot
	// ' => &#039
	print_r(explode(" ","saliou de seck")) ;//caher une chaine de carctere dans un tableau
	echo " <br> ";
	print_r(str_split("saliou seck",3));//caher une chaine de carctere dans un tableau
	echo " <br> ";
	$tab = array("bonjour","à","tous");
	echo implode(" ",$tab);//permet de transformé un tableau en chaine de caracté
	echo join(" ",$tab);
	"ucfirst" — //Met le premier caractère en majuscule
	//completer une chaine de caractère " "
	echo str_pad("Chapitres",20," "),str_pad("Pages",20," ",STR_PAD_LEFT),"<br>";
	echo str_pad($titre1,20,"."),str_pad($page1,20,".",STR_PAD_LEFT),"<br>";
 	echo str_pad($titre2,20,"."),str_pad($page2,20,".",STR_PAD_LEFT),"<br>";

>

$annee = date('Y');//H=Heure,i=Minute,d=Jour,m=Mois,Y=Année

//-------------Affectation par référence
Cela consiste à créer une nouvelle variable mais qui pointe la même valeur qu’une autre. Pour créer une référence on utilise esperluette &
Si vous modifier la valeur d’une variable, la valeur de l’autre sera aussi modifié (votre pseudo, et votre prénom sont bien différents
 mais ils font référence à vous).

<?php
$prenom = "dany";
$pseudo = &$prenom;
$prenom .= "el";
echo $pseudo; // affichera danyel;
?>
Pour supprimer une référence on utilise la fonction unset().

<?php
$prenom = "dany";
$pseudo = &$prenom;
unset($pseudo);
$prenom .= "el";
echo $pseudo; // affichera une erreur
>

//----------------------Transmettre des données avec l URL
URL (Uniform Resource Locator)
Lorsqu'on fait un lien vers une page, il est possible d'ajouter des paramètres sous la forme
"bonjour.php?nom=Dupont&prenom=Jean" qui seront transmis à la page.

La page bonjour.php dans l'exemple précédent recevra ces paramètres dans un array nommé $_GET :
$_GET['nom']aura pour valeur « Dupont » ;
$_GET['prenom']aura pour valeur « Jean ».

Cette technique est très pratique pour transmettre des valeurs à une page, mais il faut prendre garde au fait que le visiteur peut les modifier très facilement. Il ne faut donc pas faire aveuglément confiance à ces informations, et tester prudemment leur valeur avant de les utiliser.

La fonction isset() permet de vérifier si une variable est définie ou non.
if (isset($_GET['prenom']) AND isset($_GET["nom"]))
//transtypage
$_GET['repeter'] = (int) $_GET['repeter'];//si la variable contient autre chose qu'un entier (par exemple « grenouille »), elle est transformée en entier.

//formulaire 

<input type="checkbox" name="case" id="case" /> <label for="case">Ma case à cocher</label>
// on donne un nom à la case à cocher via l'attributname(ici : « case »).
// Ce nom va générer une variable dans la page cible, par exemple$_POST['case'].
// Si la case a été cochée, alors$_POST['case'] aura pour valeur « on ».
// Si elle n'a pas été cochée, alors$_POST['case']n'existera pas. Vous pouvez faire un test avec isset($_POST['case'])pour vérifier si la case a été cochée ou non.

NB//Il faut bien penser à renseigner l attribut value du bouton d option car c est lui qui va déterminer la valeur de la variable

NBNBNB//Il faut penser à utiliser cette fonction sur tous les textes envoyés par l'utilisateur qui sont susceptibles d'être affichés sur une page web. Sur un forum par exemple, il faut penser à échapper les messages postés par vos membres, mais aussi leurs pseudos (ils peuvent s'amuser à y mettre du HTML !) ainsi que leurs signatures. Bref, tout ce qui est affiché et qui vient à la base d'un visiteur, vous devez penser à le protéger avec htmlspecialchars.

Si vous préférez retirer les balises HTML que le visiteur a tenté d envoyer
 plutôt que de les afficher, utilisez la fonction "strip_tags".
 trim()//eviter les espace superflux
 stripslashes();//echaper les slash

 //ENVOI DE FICHIERS
 Dès l'instant où votre formulaire propose aux visiteurs d'envoyer un fichier, il faut ajouter
 l attribut enctype="multipart/form-data"à la balise<form>
//getimagesize()
 Pour contrôler les dimensions d'une image, il suffit d'utiliser une fonction PHP, getimagesize(), 
 qui retourne untableau
<?php
$image_sizes = getimagesize($_FILES['icone']['tmp_name']);
if ($image_sizes[0] > $maxwidth OR $image_sizes[1] > $maxheight) $erreur = "Image trop grande";
>

 //CONSTANTES
 pour definir une constante on utilise le mot cle define("nom_de_la_constante","valeur de la variable");
 //les constantes magique
 __FILE__//le chemin complet et le nom du fichier
 __DIR__//le nom du dossier ou le fichier se trouve 
 __FUNCTION__//renvoi le nom de la fonction ou la constante se trouve
 __LINE__//renvoi la ligne 

 //difference de porte entre variable et constante
 les variable declarer de facon global ne sont pas accessible au niveau des fonction alorsque c possible pour les constante
 les variable declarer dans une fonction ne peuvent pas etre utiliser hors de cette fonction

//LES VARIABLE SUPERGLOBALES
 //SESSION
1. Un visiteur arrive sur votre site. On demande à créer une session pour lui. PHP génère alors un numéro unique
. Ce numéro est souvent très gros et écrit en hexadécimal, par exemple : a02bbffc6198e6e0cc2715047bc3766f.
Ce numéro sert d''identifiant et est appelé « ID de session » (ou PHPSESSID). PHP transmet automatiquement
cet ID de page en page en utilisant généralement un cookie.
2. Une fois la session générée, on peut créer une infinité de variables de session pour nos besoins. Par exemple
, on peut créer une variable $_SESSION['nom'] qui contient le nom du visiteur, $_SESSION['prenom'] qui contient le
prénom, etc. Le serveur conserve ces variables même lorsque la page PHP a fini d'être générée. Cela veut dire que, quelle
que soit la page de votre site, vous pourrez récupérer par exemple le nom et le prénom du visiteur via la superglobale
$_SESSION !
3. Lorsque le visiteur se déconnecte de votre site, la session est fermée et PHP « oublie » alors toutes les variables de
session que vous avez créées. Il est en fait difficile de savoir précisément quand un visiteur quitte votre site. En effet,
lorsqu'il ferme son navigateur ou va sur un autre site, le vôtre n'en est pas informé. Soit le visiteur clique sur un bouton
« Déconnexion » (que vous aurez créé) avant de s'en aller, soit on attend quelques minutes d''inactivité pour le
déconnecter automatiquement : on parle alors de timeout. Le plus souvent, le visiteur est déconnecté par un timeout.
Tout ceci peut vous sembler un peu compliqué, mais c''est en fait très simple à utiliser. Vous devez connaître deuxfonctions :
session_start() : //démarre le système de sessions.
des variables de session.
session_destroy() :// ferme la session du visiteur. Cette fonction est automatiquement appelée lorsque le visiteur
ne charge plus de page de votre site pendant plusieurs minutes (c'est le timeout), 
//COOKIES
Qu'est-ce qu'un cookie ?//Un cookie, c'est un petit fichier que l'on enregistre sur l'ordinateur du visiteur.
Pour écrire un cookie, on utilise la fonction PHP setcookie (qui signifie « Placer un cookie » en anglais).
On lui donne en général trois paramètres, dans l'ordre suivant :
1. le nom du cookie (ex. : pseudo) ;
2. la valeur du cookie (ex. : M@teo21) ;
3. la date d'expiration du cookie, sous forme de timestamp (ex. : 1090521508).
Il s'agit d'un timestamp, c''est-à-dire du nombre de secondes écoulées depuis le 1er janvier 1970. Le timestamp 
est une valeur qui augmente de 1 toutes les secondes
Si vous voulez supprimer le cookie dans un an, il vous faudra donc écrire : time() + 365*24*3600. Cela veut 
dire :timestamp actuel $+$ nombre de secondes dans une année 
utilisation//<?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600); ?>
<?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600, null,
null, false, true); >
Le dernier paramètre true permet d'activer le mode httpOnly sur le cookie, et donc de le rendre en quelque sorte plus sécurisé. Ça ne coûte rien et vous diminuez le risque qu'un jour l'un de vos visiteurs puisse se faire voler le contenu d'un cookie à cause d'une faille XSS.
//NBNBNBIl y a un petit problème avec setcookie… Comme pour session_start, cette fonction ne marche QUE si vous l'appelez
avant tout code HTML (donc avant la balise <!DOCTYPE>)
Afficher un cookie
C'est la partie la plus simple. Avant de commencer à travailler sur une page, PHP lit les cookies du client 
pour récupérer toutes les informations qu'ils contiennent. Ces informations sont placées dans la superglobale $_COOKIE, sous forme d'array,comme d'habitude.

//Lire et écrire dans un fichier
r//Ouvre le fichier en lecture seule.
r+//Ouvre le fichier en lecture et écriture. 
a //Ouvre le fichier en écriture seule. crée le si il n'existe pas
a+//Ouvre le fichier en lecture et écriture.  n'existe pas, il est créé automatiquement.

//Pour lire, on a deux possibilités :
lire caractère par caractère avec la fonction "fgetc" ;
lire ligne par ligne avec "fgets"
la fonction fseek //qui va replacer le curseur où l'on veut dans le fichier. .
fseek($monfichier, 0); // On remet le curseur au début du fichier

//CREER UNE IMAGE EN PHP
 le code PHP qu'il faut mettre pour « annoncer » au navigateur que l'on va renvoyer une image PNG :
<?php
header ("Content-type: image/png");
?>
//Créer l'image de base
//À partir d'une image vide
Pour créer une image vide en PHP, on utilise la fonctionimagecreate.
Cette fonction est simple. Elle prend deux paramètres : la largeur et la hauteur de l image 
<?php
header ("Content-type: image/png");
$image = imagecreate(200,50);

//À partir d une image existante
JPEG : il faut utiliser la fonction "imagecreatefromjpeg" ;
PNG : il faut utiliser la fonction "imagecreatefrompng".
<?php
header ("Content-type: image/jpeg");
$image = imagecreatefromjpeg("couchersoleil.jpg");
?>
//pour afficher l'image
JPEG : il faut utiliser la fonction "imagejpeg" ;
PNG : il faut utiliser la fonction "imagepng".
<?php
header ("Content-type: image/png"); // 1 : on indique qu'on va envoyer une image PNG
$image = imagecreate(200,50); // 2 : on crée une nouvelle image de taille 200 x 50
// 3 : on s'amuse avec notre image (on va apprendre à le faire)
imagepng($image); // 4 : on a fini de faire joujou, on demande à afficher l'image
?>
//Enregistrer l'image sur le disque
<?php
$image = imagecreate(200,50);
// on fait joujou avec notre image
imagepng($image, "images/monimage.png"); // on enregistre l'image dans le dossier "images"
?>
//Manipuler les couleurs en php
Pour définir une couleur en PHP, on doit utiliser la fonction "imagecolorallocate".

//Écrire du texte
<?php
imagestring($image, $police, $x, $y, $texte_a_ecrire, $couleur);//imagestringup pour le text verticalement
?>
$image : c'est notre fameuse variable qui contient l'image.
$police : c'est la police de caractères. Vous devez mettre un nombre de 1 à 5 ; 1 = petit, 5 = grand.
$x et $y : ce sont les coordonnées aux quelles vous voulez placer votre texte sur l'image. 
les coordonnee de l'image s'arrêtent à (199, 49)
//exemple
<?php
header ("Content-type: image/png");
$image = imagecreate(200,50);

$orange = imagecolorallocate($image, 255, 128, 0);
$bleu = imagecolorallocate($image, 0, 0, 255);
$bleuclair = imagecolorallocate($image, 156, 227, 254);
$noir = imagecolorallocate($image, 0, 0, 0);
$blanc = imagecolorallocate($image, 255, 255, 255);

imagestring($image, 4, 35, 15, "Salut les Zéros !", $blanc);

imagepng($image);
?>

//Dessiner une forme
ImageSetPixel//Son rôle : dessiner un pixel aux coordonnées (x,y).
ImageSetPixel ($image, 100, 100, $noir);
ImageLine//Celle-là sert à dessiner une ligne entre deux points de coordonnées (x1,y1)  et (x2,y2).
ImageLine ($image, 30, 30, 120, 120, $noir);
ImageEllipse//dessine une ellipse dont le centre est aux (x,y), de largeur $largeur et de hauteur $hauteur.
ImageEllipse ($image, $x, $y, $largeur, $hauteur, $couleur);
ImageEllipse ($image, 100, 100, 100, 50, $noir);
ImageRectangle//dessine un rectangle, dont le coin en haut à gauche est de coordonnées $(x_1, y_1)$ et celui en bas à droite $(x_2, y_2)$.
ImageRectangle ($image, $x1, $y1, $x2, $y2, $couleur);
ImageRectangle ($image, 30, 30, 160, 120, $noir);
ImagePolygon
// Elle dessine un polygone ayant un nombre de points égal à$nombre_de_points(s'il y a trois points, c'est donc un triangle). L'array$array_pointscontient les coordonnées de tous les points du polygone dans l'ordre : $x_1$, $y_1$, $x_2$, $y_2$, $x_3$, $y_3$, $x_4$, $y_4$…
ImagePolygon ($image, $array_points, $nombre_de_points, $couleur);
$points = array(10, 40, 120, 50, 160, 160); ImagePolygon ($image, $points, 3, $noir);

//Des fonctions encore plus puissantes
//Rendre une image transparente
seule le format PNG supporte le trasparence
<?php
imagecolortransparent($image, $couleur);
?>

//Mélanger deux images
la fonction qui permet de realiser la fusion entre deux imagese est "imagecopymerge"
<?php
header ("Content-type: image/jpeg"); // L'image que l'on va créer est un jpeg

// On charge d'abord les images
$source = imagecreatefrompng("logo.png"); // Le logo est la source
$destination = imagecreatefromjpeg("couchersoleil.jpg"); // La photo est la destination

// Les fonctions imagesx et imagesy renvoient la largeur et la hauteur d'une image
$largeur_source = imagesx($source);
$hauteur_source = imagesy($source);
$largeur_destination = imagesx($destination);
$hauteur_destination = imagesy($destination);

// On veut placer le logo en bas à droite, on calcule les coordonnées où on doit placer le logo sur la photo
$destination_x = $largeur_destination - $largeur_source;
$destination_y =  $hauteur_destination - $hauteur_source;

// On met le logo (source) dans l'image de destination (la photo)
imagecopymerge($destination, $source, $destination_x, $destination_y, 0, 0, $largeur_source, $hauteur_source, 60);

// On affiche l'image de destination qui a été fusionnée avec le logo
imagejpeg($destination);
?>
Les paramètres à donner à la fonction sont, dans l'ordre, les suivants.

L'image de destination :// ici$destination, la photo. C'est l'image qui va être modifiée et dans laquelle on va mettre notre logo.

L image source : //ici$source, c'est notre logo. Cette image n'est pas modifiée.

L'abscisse à laquelle vous désirez placer le logo sur la photo 

L'ordonnée à laquelle vous désirez placer le logo sur la photo 
L abscisse de la source : //en fait, la fonction imagecopymerge permet aussi de ne prendre qu'une partie de l'image source. Ça peut devenir un peu compliqué, alors nous, on va dire qu'on prend tout le logo. On part donc du point situé aux coordonnées (0, 0) de la source. Mettez donc 0 pour l'abscisse.

L'ordonnée de la source : de même pour l'ordonnée. Mettez 0.

La largeur de la source :// c'est la largeur qui détermine quelle partie de l'image source vous allez prendre. Nous on prend toute l'image source, ne vous prenez donc pas la tête non plus et mettez $largeur_source.

La hauteur de la source : de même, mettez $hauteur_source.

Le pourcentage de transparence :// c'est un nombre entre 0 et 100 qui indique la transparence de votre logo sur la photo. Si vous mettez 0, le logo sera invisible (totalement transparent), et si vous mettez 100, il sera totalement opaque (il n'y aura pas d'effet de « fusion »). Mettez un nombre autour de 60-70, en général c'est bien. 

//REDIMENSIONNER UNE IMAGE :imagecopyresampled

<?php
$source = imagecreatefromjpeg("couchersoleil.jpg"); // La photo est la source
$destination = imagecreatetruecolor(200, 150); // On crée la miniature vide

// Les fonctions imagesx et imagesy renvoient la largeur et la hauteur d'une image
$largeur_source = imagesx($source);
$hauteur_source = imagesy($source);
$largeur_destination = imagesx($destination);
$hauteur_destination = imagesy($destination);

// On crée la miniature
imagecopyresampled($destination, $source, 0, 0, 0, 0, $largeur_destination, $hauteur_destination, $largeur_source, $hauteur_source);

// On enregistre la miniature sous le nom "mini_couchersoleil.jpg"
imagejpeg($destination, "mini_couchersoleil.jpg");
?>
L image de destination :// c'est$destination, l'image qu'on a créée avec imagecreatetruecolor.

L image source :// l'image dont on veut créer la miniature ; ici, c'est notrecouchersoleil.jpgqu'on a chargée avec imagecreatefromjpeg.

L abscisse du point à laquelle vous placez la miniature sur l image de destination :// pour faire simple, on va dire que notre image de destination contiendra uniquement la miniature. Donc on placera la miniature aux coordonnées (0, 0), ce qui fait qu'il faut mettre 0 à cette valeur.

L ordonnée du point à laquelle vous placez la miniature sur l image de destination :// pour les mêmes raisons, mettez 0.

L abscisse du point de la source : //ici, on prend toute l'image source et on en fait une miniature. Pour tout prendre, il faut partir du point (0, 0), ce qui fait que là encore on met 0 à cette valeur.

L ordonnée du point de la source : encore 0.

La largeur de la miniature :// un des paramètres les plus importants, qui détermine la taille de la miniature à créer. Dans notre cas notre miniature fait 200 pixels de large. On a stocké ce nombre dans la variable$largeur_destination.

La hauteur de la miniature :// de même pour la hauteur de la miniature à créer.

La largeur de la source : //il suffit d'indiquer la taille de notre image source. On a stocké cette valeur dans$largeur_source, donc on la réutilise ici.

La hauteur de la source : //de même pour la hauteur.

/LES EXPRESSIONS REGULIERES

Il existe deux types d expressions régulières, qui répondent aux doux noms de :

POSIX :// c'est un langage d'expressions régulières mis en avant par PHP, qui se veut un peu plus simple que PCRE (ça n'en reste pas moins assez complexe). Toutefois, son principal et gros défaut je dirais, c'est que ce « langage » est plus lent que PCRE ;

PCRE :// ces expressions régulières sont issues d'un autre langage (le Perl). Considérées comme un peu plus complexes, elles sont surtout bien plus rapides et performantes.
//Les fonctions qui nous intéressent
Nous avons donc choisi PCRE. Il existe plusieurs fonctions utilisant le « langage PCRE » et qui commencent toutes par preg_ :
preg_grep ;
preg_split ;
preg_quote ;
preg_match ;
preg_match_all ;
preg_replace ;
preg_replace_callback.
//regex (c'est le petit nom qu'on donne à « expression régulière ») 
<?php
if (preg_match("** Votre REGEX **", "Ce dans quoi vous faites la recherche"))
{
	echo 'Le mot que vous cherchez se trouve dans la chaîne';
}
else
{
	echo 'Le mot que vous cherchez ne se trouve pas dans la chaîne';
}
?>

//Des recherches simples
#Ma regex#Options//on peut utiliser des options
<?php
if (preg_match("#guitare#", "J'aime jouer de la guitare."))
{
    echo 'VRAI';
}
else
{
    echo 'FAUX';
}
?>
#Guitare#i//permet d'ignoré la casse
Le symbole OU //c'est la barre verticale « | ». #guitare|piano#

//Début et fin de chaîne
^ (accent circonflexe) : indique le début d une chaîne ;"#^Bonjour#"
$ (dollar) : indique la fin d une chaîne."#zéro$#"

//les classes de caractères
	//Des classes simples
"#gr[ioa]s#"//Entre crochets, c'est ce qu'on appelle une classe de caractères. Cela signifie qu'une des lettres à l'intérieur peut convenir.
[a-zA-Z0-9]
#[a-z]# //Cette phrase contient une lettre  VRAI
#[A-Z0-9]# //cette phrase ne comporte ni majuscule ni chiffre FAUX
#^[0-9]#  //Je vis au 21e siècle  FAUX
#<h[1-6]>#	//<h1>Une balise de titre HTML</h1>  VRAI
NEGATION //#[^0-9]#
signifie que vous voulez que votre chaîne comporte au moins un caractère qui ne soit pas un chiffre.
//Les quantificateurs
Les symboles les plus courants
Vous devez retenir trois symboles :

?(point d interrogation) :// la lettre est facultative. Elle peut y être 0 ou 1 fois.
Ainsi,"#a?#"// reconnaît 0 ou 1 « a » ;
+(signe plus) : la lettre est obligatoire. Elle peut apparaître 1 ou plusieurs fois.
Ainsi,"#a+#"//reconnaît « a », « aa », « aaa », « aaaa », etc. ;
*(étoile) : //la lettre est facultative. Elle peut apparaître 0, 1 ou plusieurs fois.
Ainsi,"#a*#"//reconnaît « a », « aa », « aaa », « aaaa », etc. Mais s'il n'y a pas de « a », ça fonctionne aussi !
//pour repeter pluisieur caractère
#Ay(ay)*#
Ce code reconnaîtra « Ay », « Ayay », « Ayayay », « Ayayayay »
La regex #Ay(ay|oy)*# renverra par exemple vrai pour « Ayayayoyayayayoyoyoyoyayoy » ! C'est le « ay » OU le « oy » répété plusieurs fois, tout simplement !

//etre plus preci grace aux accolates
Il y a trois façons d'utiliser les accolades.

{3} : si on met juste un nombre, cela veut dire que la lettre (ou le groupe de lettres s'il est entre parenthèses) doit être répétée 3 fois exactement.
#a{3}#fonctionne donc pour la chaîne « aaa ».

{3,5} : ici, on a plusieurs possibilités. On peut avoir la lettre de 3 à 5 fois.
#a{3,5}#fonctionne pour « aaa », « aaaa », « aaaaa ».

{3,} : si vous mettez une virgule, mais pas de 2e nombre, ça veut dire qu il peut y en avoir jusqu à l infini. Ici, cela signifie « 3 fois ou plus ».
#a{3,}#fonctionne pour « aaa », « aaaa », « aaaaa », « aaaaaa », etc. Je ne vais pas tous les écrire, ça serait un peu long.
NB
?revient à écrire {0,1} ;
+revient à écrire {1,} ;
*revient à écrire {0,}.
#Quoi \?#
Ici, l antislash sert à dire que le point d'interrogation juste après n'est pas un symbole spécial, mais bel et bien une lettre comme une autre !
// a l'interieur des crochete les meta caractère ne marche pas donc initule de les echapper sauf le " - ] #"
#[a-z?+*{}]#

//LES RACCOURCIS
\d  //Indique un chiffre.Ça revient exactement à taper[0-9]
\D  //Indique ce qui n'est PAS un chiffre.Ça revient à taper[^0-9]
\w  //Indique un caractère alphanumérique ou un tiret de soulignement.Cela correspond à[a-zA-Z0-9_]
\W  //Indique ce qui n'est PAS un mot.Si vous avez suivi, ça revient à taper[^a-zA-Z0-9_]
\t  //Indique une tabulation
\n  //Indique une nouvelle ligne
\r  //Indique un retour chariot
\s  //Indique un espace blanc
\S  //Indique ce qui n'est PAS un espace blanc (\t \n \r)
.  //Indique n'importe quel caractère.Il autorise donc tout !
//NB
Pour le point, il existe une exception : il indique tout sauf les entrées (\n).
Pour faire en sorte que le point indique tout, même les entrées, vous devrez utiliser l'option « s » de PCRE. Exemple :
#[0-9]-.#s

Vous avez juste besoin de retenir ce qui suit pour faire une regex POSIX :

il n'y a pas de délimiteur ni d'options. Votre regex n'est donc pas entourée de dièses ;

il n'y a pas de classes abrégées comme on l'a vu plus haut, donc pas de\d, etc. En revanche, vous pouvez toujours utiliser le point pour dire : « n'importe quel caractère ».

//Capture et remplacement
//Les parenthèses capturantes
nous allons travailler avec la fonction preg_replace.
 à chaque fois qu'il y a une parenthèse, cela crée une variable appelée$1(pour la première parenthèse),$2pour la seconde, etc.
 //mettre en gras tous les mots compris entre des[b][/b]
 <?php
$texte = preg_replace('#\[b\](.+)\[/b\]#i', '<strong>$1</strong>', $texte);
?>
Voici comment s'utilise la fonctionpreg_replace.

On lui donne en premier paramètre la regex. Rien de particulier, comme vous pouvez le constater, à part qu'il faut bien garder en tête que chaque parenthèse va créer une variable ($1,$2, etc.).   
 
Ici, j'ai rajouté l'option « i » pour que le code fonctionne aussi avec des majuscules ([B][/B]).

Ensuite, et c'est là qu'est la nouveauté, on indique le texte de remplacement : « <strong>$1</strong> » (je vous rappelle que<strong>permet de mettre en gras en HTML). 
Entre les balises HTML, j'ai mis$1. Cela signifie que ce qui se trouve dans la parenthèse capturante (entre[b]et[/b]) sera en fait entouré des balises<strong> !

Enfin, dernier paramètre, c'est le texte dans lequel on fait notre recherche / remplacement (ça, vous connaissez déjà).
//NB
N'oubliez pas que c'est l'ordre dans lequel les parenthèses sont ouvertes qui est important.

Vous pouvez utiliser jusqu'à 99 parenthèses capturantes dans une regex (ça vous laisse de la marge). Ça va donc jusqu'à$99.

Une variable$0est toujours créée ; elle contient toute la regex. Sur le même exemple que tout à l'heure :#(anti)co(nsti)(tu(tion)nelle)ment#…$0contient « anticonstitutionnellement ».

Si, par hasard, vous ne voulez pas qu'une parenthèse soit capturante (pour vous faciliter les comptes, ou parce que vous avez beaucoup beaucoup de parenthèses), il faut qu'elle commence par un point d'interrogation suivi d'un deux points « : ». Par exemple :

#(anti)co(?:nsti)(tu(tion)nelle)ment#La seconde parenthèse n'est pas capturante. Il ne nous reste que trois variables (quatre si on compte$0) :

Créez votre bbCode
exemple
[b][/b] : pour mettre du texte en gras ;

[i][/i] : pour mettre du texte en italique ;

[color=red][/color] : pour colorer le texte (il faudra laisser le choix entre plusieurs couleurs).

U : le U majuscule est une option que vous ne connaissez pas et qui signifie « Ungreedy » (« pas gourmand »).

Voici donc le code correct pour mettre en gras et en italique avec le bbCode :

<?php
$texte = preg_replace('#\[b\](.+)\[/b\]#isU', '<strong>$1</strong>', $texte);
$texte = preg_replace('#\[i\](.+)\[/i\]#isU', '<em>$1</em>', $texte);
?>
<?php
$texte = preg_replace('#\[color=(red|green|blue|yellow|purple|olive)\](.+)\[/color\]#isU', '<span style="color:$1">$2</span>', $texte);
?>
Ainsi, si on tape[color=blue]texte[/color], ça écriratexteen bleu. Vous pouvez essayer avec les autres couleurs aussi !

//un lien
<?php
$texte = preg_replace('#http://[a-z0-9._/-]+#i', '<a href="$0">$0</a>', $texte);
?>


//exemple concret---------------------------------------------------------------------------------------

<?php
if (isset($_POST['texte']))
{
    $texte = stripslashes($_POST['texte']); // On enlève les slashs qui se seraient ajoutés automatiquement
    $texte = htmlspecialchars($texte); // On rend inoffensives les balises HTML que le visiteur a pu rentrer
    $texte = nl2br($texte); // On crée des <br /> pour conserver les retours à la ligne
    
    // On fait passer notre texte à la moulinette des regex
    $texte = preg_replace('#\[b\](.+)\[/b\]#isU', '<strong>$1</strong>', $texte);
    $texte = preg_replace('#\[i\](.+)\[/i\]#isU', '<em>$1</em>', $texte);
    $texte = preg_replace('#\[color=(red|green|blue|yellow|purple|olive)\](.+)\[/color\]#isU', '<span style="color:$1">$2</span>', $texte);
    $texte = preg_replace('#http://[a-z0-9._/-]+#i', '<a href="$0">$0</a>', $texte);

    // Et on affiche le résultat. Admirez !
    echo $texte . '<br /><hr />';
}
?>

<p>
    Bienvenue dans le parser du Site du Zéro !<br />
    Nous avons écrit ce parser ensemble, j'espère que vous saurez apprécier de voir que tout ce que vous avez appris va vous être très utile !
</p>

<p>Amusez-vous à utiliser du bbCode. Tapez par exemple :</p>

<blockquote style="font-size:0.8em">
<p>
    Je suis un gros [b]Zéro[/b], et pourtant j'ai [i]tout appris[/i] sur http://www.siteduzero.com<br />
    Je vous [b][color=green]recommande[/color][/b] d'aller sur ce site, vous pourrez apprendre à faire ça [i][color=purple]vous aussi[/color][/i] !
</p>
</blockquote>

<form method="post">
<p>
    <label for="texte">Votre message ?</label><br />
    <textarea id="texte" name="texte" cols="50" rows="8"></textarea><br />
    <input type="submit" value="Montre-moi toute la puissance des regex" />
</p>
</form>

//-----------------------------------------------------------------------------------------------------------------------------
//PROTEGER UN DOSSIER AVEC htaccess

Ouvrez un nouveau fichier avec votre éditeur de texte favori. Nous allons écrire des codes qui n'ont rien à voir avec du HTML ou du PHP : ce sont des instructions pour le serveur. Elles vont lui expliquer que seules certaines personnes sont autorisées à accéder au dossier. Copiez-y ce code :
<?php //les balises php sont a enlevé
AuthName "Page d'administration protégée"
AuthType Basic
AuthUserFile "/home/site/www/admin/.htpasswd"
Require valid-user
 ?>
Parmi ces quatre lignes, il y en a deux que vous allez devoir changer :

AuthName : c'est le texte qui invitera l'utilisateur à inscrire son login et son mot de passe. Vous pouvez personnaliser ce texte comme bon vous semble ;

AuthUserFile : là c'est plus délicat ; c'est le chemin absolu vers le fichier.htpasswd(que vous mettrez dans le même répertoire que le.htaccess).

//FONCTION POUR CHIFFRER UN MOT DE PASSE
password_hash

Qu'est-ce que l'architecture MVC ?

Un des plus célèbres design patterns s'appelle MVC, qui signifie Modèle - Vue - Contrôleur


?>