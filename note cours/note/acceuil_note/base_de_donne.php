<?
"armoire" est appelée la "base" dans le langage SQL.
 C est le gros meuble dans lequel les secrétaires ont l habitude de classer les informations.
Dans une armoire, il y a plusieurs "tiroirs". Un tiroir, en SQL, c est ce qu on appelle une table.
 Chaque tiroir contient des données différentes. Par exemple, on peut imaginer un tiroir qui contient 
 les pseudonymes et infos sur vos visiteurs, un autre qui contient les messages postés sur votre forum…
Mais que contient une table ? C''est là que sont enregistrées les données, sous la forme d''un tableau.
 Dans ce tableau, les colonnes sont appelées des "champs", et les lignes sont appelées des "entrées".

 Champ : permet de définir le nom du champ (très important !) ;

Type : le type de données que va stocker le champ (nombre entier, texte, date…) ;

Taille/Valeurs : permet d'indiquer la taille maximale du champ, utile pour le type VARCHAR notamment, 

Index : active l'indexation du champ. Ce mot barbare signifie dans les grandes lignes que votre champ 
sera adapté aux recherches. Le plus souvent, on utilise l'indexPRIMARYsur les champs de typeid ;

AUTO_INCREMENT : permet au champ de s'incrémenter tout seul à chaque nouvelle entrée.
 On l utilise fréquemment sur les champs de typeid.
 //les types les plus importants
 INT : nombre entier ;
VARCHAR : texte court (entre 1 et 255 caractères) ;
TEXT : long texte (on peut y stocker un roman sans problème) ;
DATE : date (jour, mois, année).
//PHP propose plusieurs moyens de se connecter à une base de données MySQL.
L'extension mysql_ : ce sont des fonctions qui permettent d'accéder à une base de données MySQL et donc de
  communiquer avec MySQL. Leur nom commence toujours par mysql_. Toutefois, ces fonctions sont vieilles et
  on recommande de ne plus les utiliser aujourd'hui.
L'extension mysqli_ : ce sont des fonctions améliorées d'accès à MySQL. Elles proposent plus de fonctionnalités
  et sont plus à jour.
L'extension PDO : c'est un outil complet qui permet d'accéder à n'importe quel type de base de données.
  On peut donc l'utiliser pour se connecter aussi bien à MySQL que PostgreSQL ou Oracle.
  //se connecter a mysql via un PDO
  $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
//gestion des erreurs
  <?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
>
//Récupérer les données
	//Faire une requête
$reponse = $bdd->query('Tapez votre requête SQL ici');
SELECT * FROM jeux_video//Prendre tout ce qu'il y a dans la tablejeux_video 
SELECT : en langage SQL, le premier mot indique quel type d'opération doit effectuer MySQL.
 Dans ce chapitre, nous ne verrons queSELECT. Ce mot-clé demande à MySQL d'afficher ce que contient une table.

* : après le SELECT, on doit indiquer quels champs MySQL doit récupérer dans la table. Si on n est intéressé 
que par les champs « nom » et « possesseur », il faudra taper :
//SELECT nom, possesseur FROM jeux_video
Si vous voulez prendre tous les champs, tapez*.

FROM : c'est un mot de liaison qui se traduit par « dans ».FROMfait la liaison entre le nom des 
champs et le nom de la table.
jeux_video : c'est le nom de la table dans laquelle il faut aller piocher.

//afficher le résultat d'une requête
on prend la réponse de MySQL et on y exécute fetch(), ce qui nous renvoie la première ligne.
<?php
$donnees = $reponse->fetch();
>//$donnees est un array qui contient champ par champ les valeurs de la première entrée.$donnees['console']
//Retenez tout particulièrement les choses suivantes :
   -la connexion à la base de données n'a besoin d'être faite qu une seule fois, au début de la page ;
   -il faut fermer les résultats de recherche avec closeCursor() après avoir traité chaque requête.

   //WHERE
   SELECT * FROM jeux_video WHERE possesseur='Patrick'
   //ORDER BY
   SELECT * FROM jeux_video ORDER BY prix
   SELECT * FROM jeux_video ORDER BY prix DESC//pour ranger par odre decroissante
   //LIMIT nous permet de ne sélectionner qu'une partie des résultats
   SELECT * FROM jeux_video LIMIT 0, 20
LIMIT 0, 20 : affiche les vingt premières entrées ;
LIMIT 5, 10 : affiche de la sixième à la quinzième entrée ;
LIMIT 10, 2 : affiche la onzième et la douzième entrée.
SELECT nom, possesseur, console, prix FROM jeux_video WHERE console='Xbox' OR console='PS2' ORDER BY prix DESC LIMIT 0,10;
NB//Il faut utiliser les mots-clés dans cet ordre : WHERE puis ORDER BY puis LIMIT, sinon MySQL ne
 <!-- comprendra pas votre requête. -->
//Avec des marqueurs « ? »
<?php
$req = $bdd->prepare('SELECT nom FROM jeux_video WHERE possesseur =?');?>
<?php
$req = $bdd->prepare('SELECT nom FROM jeux_video WHERE possesseur =? AND prix <= ?');
$req->execute(array($_GET['possesseur'], $_GET['prix_max']));
?>
//Avec des marqueurs nominatifs
<?php
$req = $bdd->prepare('SELECT nom, prix FROM jeux_video WHERE possesseur = :possesseur AND prix <= :prixmax');
$req->execute(array('possesseur' => $_GET['possesseur'], 'prixmax' => $_GET['prix_max']));
>

//Traquer les erreurs
pour activer les erreurs :on ajoute la ligne suivante juste aprés la connexion avec la base de donnée
array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);?>

//ECRIRE DES DONNEES
//INSERT : ajouter des données
La requête "INSERT INTO" permet d ajouter une entrée
INSERT INTO jeux_video(ID, nom, possesseur, console, prix,
nbre_joueurs_max, commentaires) VALUES('', 'Battlefield 1942',
'Patrick', 'PC', 45, 50, '2nde guerre mondiale')
//Insertion de données variables grâce à une requête préparée
<?php
$req = $bdd->prepare('INSERT INTO jeux_video(nom, possesseur, console, prix, nbre_joueurs_max, commentaires) 
	VALUES(:nom, :possesseur, :console, :prix, :nbre_joueurs_max, :commentaires)');
$req->execute(array(
	'nom' => $nom,
	'possesseur' => $possesseur,
	'console' => $console,
	'prix' => $prix,
	'nbre_joueurs_max' => $nbre_joueurs_max,
	'commentaires' => $commentaires
	));

echo 'Le jeu a bien été ajouté !';
>
//UPDATE : modifier des données
SQL//UPDATE jeux_video SET prix = 10, nbre_joueurs_max = 32 WHERE ID = 51
//application en php
<?php
$bdd->exec('UPDATE jeux_video SET prix = 10, nbre_joueurs_max = 32 WHERE nom = \'Battlefield 1942\'');
>// renvoie le nombre de lignes modifiées.
//DELETE : supprimer des données
DELETE FROM jeux_video WHERE nom='Battlefield 1942'
NB//Si vous oubliez leWHERE, toutes les entrées seront supprimées. Cela équivaut à vider la table.
//reperer une erreur
Repérez la requête qui selon vous plante (certainement celle juste avant la boucle  while), et demandez d'afficher
 l'erreur s il y en a une, comme ceci :
//$reponse = $bdd->query('SELECT nom FROM jeux_video') or die(print_r($bdd->errorInfo()));

                // Les fonctions SQL
Les fonctions SQL peuvent être classées en deux catégories :

les fonctions scalaires : elles agissent sur chaque entrée. Par exemple, vous pouvez transformer 
en majuscules la valeur de chacune des entrées d'un champ ;

les fonctions d agrégat : lorsque vous utilisez ce type de fonctions, des calculs sont faits sur l'ensemble de
la table pour retourner une valeur.exemple, calculer la moyenne des prix retourne une valeur:le prix moyen.
 // EXEMPLE 
SELECT UPPER(nom) AS nom_maj FROM jeux_video
SELECT UPPER(nom) AS nom_maj, possesseur, console, prix FROM jeux_video
SELECT LOWER(nom) AS nom_min FROM jeux_video
SELECT LENGTH(nom) AS longueur_nom FROM jeux_video
//ROUND : arrondir un nombre décimal
SELECT ROUND(prix, 2) AS prix_arrondi FROM jeux_video

                //Les Fonctions D'agrégat
AVG// calcule la moyenne d'un champ contenant des nombres
SELECT AVG(prix) AS prix_moyen FROM jeux_video//cette requêt ne va retourner qu'une seule entrée,le prix moyen
SELECT AVG(prix) AS prix_moyen FROM jeux_video WHERE possesseur='Patrick'
SUM ://additionner les valeurs
SELECT SUM(prix) AS prix_total FROM jeux_video WHERE possesseur='Patrick'
MAX :// retourner la valeur maximale
SELECT MAX(prix) AS prix_max FROM jeux_video
MIN :// retourner la valeur minimale
SELECT MIN(prix) AS prix_min FROM jeux_video
COUNT :// compter le nombre d'entrées
SELECT COUNT(*) AS nbjeux FROM jeux_video
SELECT COUNT(*) AS nbjeux FROM jeux_video WHERE possesseur='Florent'
SELECT COUNT(nbre_joueurs_max) AS nbjeux FROM jeux_video
SELECT COUNT(DISTINCT possesseur) AS nbpossesseurs FROM jeux_video
SELECT AVG(prix) AS prix_moyen, console FROM jeux_video// CECI N A PAS DE SENS ON NE PEUT PAS RECUPERER CES 2 V
GROUP BY : //grouper des données
SELECT AVG(prix) AS prix_moyen, console FROM jeux_video GROUP BY console
HAVING: //filtrer les données regroupées
SELECT AVG(prix) AS prix_moyen, console FROM jeux_video GROUP BY console HAVING prix_moyen <= 10
SELECT AVG(prix) AS prix_moyen, console FROM jeux_video WHERE possesseur='Patrick' GROUP BY console HAVING 
prix_moyen <= 10

//Utilisation des champs de date en SQL
SELECT pseudo, message, date FROM minichat WHERE date = '2010-04-02'

SELECT pseudo, message, date FROM minichat WHERE date BETWEEN '2010-04-02 00:00:00' AND '2010-04-18 00:00:00'
NOW() : //obtenir la date et l'heure actuelles
CURDATE()etCURTIME()//qui retournent respectivement uniquement la date (AAAA-MM-JJ) et l'heure (HH:MM:SS).
DAY(),MONTH(),YEAR()// extraire le jour, le mois ou l'année
HOUR(),MINUTE(),SECOND() //: extraire les heures, minutes, secondes
SELECT pseudo, message, DAY(date) AS jour, MONTH(date) AS mois, YEAR(date) AS annee, HOUR(date) AS heure, MINUTE(date) AS minute, SECOND(date) AS seconde FROM minichat
//DATE_FORMAT : formater une date
SELECT pseudo, message, DATE_FORMAT(date, '%d/%m/%Y %Hh%imin%ss') AS date FROM minichat
//DATE_ADD et DATE_SUB : ajouter ou soustraire des dates
SELECT pseudo, message, DATE_ADD(date, INTERVAL 15 DAY) AS date_expiration FROM minichat
Le champdate_expirationcorrespond à « la date de l entrée + 15 jours ». Le mot-cléINTERVALne doit pas être changé ; 
en revanche, vous pouvez remplacerDAYparMONTH,YEAR,HOUR,MINUTE,SECOND
//SELECT pseudo, message, DATE_ADD(date, INTERVAL 2 MONTH) AS date_expiration FROM minichat


//Les jointures entre tables
Il existe plusieurs types de jointures, qui nous permettent de choisir exactement les données que l'on veut récupérer. Je vous propose d'en découvrir deux, les plus importantes :

les jointures internes : elles ne sélectionnent que les données qui ont une correspondance entre les deux tables ;

les jointures externes : elles sélectionnent toutes les données, même si certaines n'ont pas de correspondance 
dans l'autre table.
//Les jointures internes
Jointure interne avecWHERE(ancienne syntaxe)
SELECT nom, prenom FROM proprietaires, jeux_video//une colonne ambiguë car MySQL ne sait pas s'il doit récupérer un nom de personne (comme Dugommier) ou un nom de jeu (comme Super Mario Bros)
//pour palier a ce problème

"SELECT jeux_video.nom, proprietaires.prenom FROM proprietaires, jeux_video WHERE jeux_video.ID_proprietaire = proprietaires.ID"
//ecriture utilisant les alias
"SELECT jeux_video.nom AS nom_jeu, proprietaires.prenom AS prenom_proprietaire
FROM proprietaires, jeux_video
WHERE jeux_video.ID_proprietaire = proprietaires.ID"

"SELECT j.nom AS nom_jeu, p.prenom AS prenom_proprietaire
FROM proprietaires AS p, jeux_video AS j
WHERE j.ID_proprietaire = p.ID"

//Jointure interne avecJOIN(nouvelle syntaxe)
SELECT j.nom nom_jeu, p.prenom prenom_proprietaire
FROM proprietaires p
INNER JOIN jeux_video j
ON j.ID_proprietaire = p.ID
//exemple utilisation
SELECT j.nom nom_jeu, p.prenom prenom_proprietaire
FROM proprietaires p
INNER JOIN jeux_video j
ON j.ID_proprietaire = p.ID
WHERE j.console = 'PC'
ORDER BY prix DESC
LIMIT 0, 10

//Les jointures externes
LEFT JOIN : récupérer toute la table de gauche
RIGHT JOIN : récupérer toute la table de droite

//les expressions regulieres
Vous avez juste besoin de retenir ce qui suit pour faire une regex POSIX :

il n'y a pas de délimiteur ni d'options. Votre regex n'est donc pas entourée de dièses ;

il n'y a pas de classes abrégées comme on l'a vu plus haut, donc pas de\d, etc. En revanche, vous pouvez toujours utiliser le point pour dire : « n'importe quel caractère ».
" SELECT nom FROM visiteurs WHERE ip REGEXP '^84\.254(\.[0-9]{1,3}){2}$' "

//Cela signifie : Sélectionne tous les noms de la tablevisiteursdont l'IP commence par « 84.254 » et se termine par deux autres nombres de un à trois chiffre(s) (ex. : 84.254.6.177).


?>