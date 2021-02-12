CREER UN CLASSE
<?php  Les développeurs PHP ont l habitude de donner l extension .class.php à leurs fichiers contenant des classes pour
bien les distinguer.
Quelques règles à ce sujet : ne définissez qu une classe par fichier et donnez au fichier le même nom que votre classe.
Le nom de votre classe devrait par ailleurs commencer par une majuscule.

variables membres : aussi appelées attributs ou propriétés ;
fonctions membres : aussi appelées méthodes

//Les getters et setters
<?php
class Membre
{
	private $pseudo;
	private $email;
	private $signature;
	private $actif;
	public function getPseudo()
	{
		return $this->pseudo;
	} 
	public function setPseudo($nouveauPseudo)
	{
		$this->pseudo = $nouveauPseudo;
	}
}
En fait, les getters et setters sont souvent des fonctions simples, mais l'intérêt est qu'on peut faire des calculs et des 
vérifications
sur les données. Par exemple, on pourrait améliorer la fonction setPseudo comme ceci :
Code : PHP
<?php
public function setPseudo($nouveauPseudo)
{
// Vérifier si le nouveau pseudo n'est ni vide ni trop long
if (!empty($nouveauPseudo) AND strlen($nouveauPseudo) < 15)
{
// Ok, on change son pseudo
$this->pseudo = $nouveauPseudo;
}
}
//les autres fonctions
<?php
class Membre
{
public function envoyerEMail($titre, $message)
{
mail($this->email, $titre, $message);
} 
public function bannir()
{
$this->actif = false;
$this->envoyerEMail('Vous avez été banni', 'Ne revenez plus!');
} 
}

//creer des objet de notre classe 
<?php
include_once('Membre.class.php');
$membre = new Membre();
$membre->setPseudo('M@teo21');
echo $membre->getPseudo() . ', je vais te bannir !';
$membre->bannir();

//Constructeur, destructeur et autres fonctions spéciales
En plus des fonctions que nous avons créées dans notre classe Membre, il existe un certain nombre de fonctions « spéciales »
qu il vous faut connaître. On les appelle fonctions magiques ou encore méthodes magiques.
On les reconnaît facilement car leur nom commence par deux underscores (tiret bas, sous le chiffre 8 d un clavier AZERTY
français). Par exemple : __construct, __destruct, __get, etc.
//Le constructeur : __construct
<?php
class Membre
{
public function __construct($idMembre)
{
// Récupérer en base de données les infos du membre
// SELECT pseudo, email, signature, actif FROM membres WHERE
id = ...
// Définir les variables avec les résultats de la base
$this->pseudo = $donnees['pseudo'];
$this->email = $donnees['email'];
// etc.
} .
..
?>

//Le destructeur : __
Pour détruire un objet, ou toute autre variable, on peut le faire à la main avec la fonction unset() :
<?php
unset($membre);
?>














?>