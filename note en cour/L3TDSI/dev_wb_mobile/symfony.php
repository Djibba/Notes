<?php
installation de symfony en ligne de commande : symfony new nom_du_projet --version=lts 

Le répertoire du cache et des journaux du projet (par défaut <project>/var/cache/ et <project>/var/log/) 
doit être accessible en écriture par le serveur Web. 

Symfony Flex , un outil permettant de simplifier l'installation / la suppression de packages dans les applications Symfony.

symfony check:security commande permettant de vérifier s'il y'a des vulnérabilités dans les dépendances 

Page = route + controller 

composer require annotations : commande permettant d'installer le paquet des annotations dans le projet
/**
* @Route("/lucky/number") //annotation pour créer une route
*/

php bin/console : outils de debogage symfony
php bin/console debug:router : commande permettant d'obtenir la liste des routes 

composer require twig : commande permettant d'installer le paquet twig qui est le moteur de template de symfony 
render() fonction qui permet d'utiliser le twig 
{{  }} : syntaxe permattant d'imprimer les variables twig 

config/
    Contient… configuration !. Vous configurerez des itinéraires, des services et des packages.
src/
    Tout votre code PHP vit ici.
templates/
    Tous vos modèles Twig vivent ici.
bin/
    Le fameux bin/console fichier vit ici (et d'autres fichiers exécutables moins importants).
var/
    C'est là que les fichiers créés automatiquement sont stockés, comme les fichiers cache ( var/cache/) et les journaux ( var/log/).
vendor/
    Les bibliothèques tierces (c'est-à-dire «fournisseur») vivent ici! Ceux-ci sont téléchargés via le gestionnaire de packages Composer .
public/
    Il s'agit de la racine du document de votre projet: vous placez ici tous les fichiers accessibles au public.

commande est appelée router:matchet montre quelle route correspondra à l'URL donnée.

/**
 * @Route("/blog/{slug}", name="blog_show")
 */

La mise en cache de document Web (ex : page web, images) est utilisée afin de réduire la consommation de bande passante, la charge du 
serveur web (les tâches qu'il effectue), ou améliorer la rapidité de consultation lors de l'utilisation d'un navigateur web.
Un cache Web conserve des copies de documents transitant par son biais. Le cache peut, dans certaines conditions, répondre aux requêtes 
ultérieures à partir de ses copies, sans recourir au serveur Web d'origine.

Un contrôleur est une fonction PHP que vous créez qui lit les informations de l'objet Request et crée et renvoie un Responseobjet. La 
réponse peut être une page HTML, JSON, XML, un téléchargement de fichier, une redirection, une erreur 404 ou autre

composer require symfony/maker-bundle --dev 

php bin/console make:controller nom_du_controller : commande qui permet de générer un controller

php bin/console make:crud nom_du_crud : commade permettant de générer un crud

Pour obtenir la session, ajoutez un argument et tapez-le avec Symfony\Component\HttpFoundation\Session\SessionInterface:

Pour obtenir la valeur de n'importe quel paramètre de configuration d'un contrôleur, utilisez la getParameter()
Pour renvoyer JSON à partir d'un contrôleur, utilisez la json() méthode 

ORM (Object Relational Mapping) est pour le mapping des tables en classe PHP. C'est une technique qui permet d'interroger et manipuler
des données en utilisant le paradigme de programmation orienté objet. 
DBAL (DataBase Abstraction Layer) est la couche d'abstraction sur PHP PDO
ODM (Object Document Mapping) est pour le mapping des documents MongoDB en clsses PHP 
composer require symfony/orm-pack : commande permettant d'installer le paquet orm
composer require --dev symfony/maker-bundle : commande permettant d'installer le paquet bundle

php bin/console doctrine:database:create : commande permmetant de créer une base de données. Il faut d'abord aller dans le fichier .env
et changer le user_db, le password et le db_name

php bin/console make:entity : commande permettant de créer une entité (une table )

php bin/console make:migration : commande permmettant d'installer le paquet migration qui permet d'analyser le code et faire des mise 
à jour dans la base de données 
php bin/console doctrine:migrations:migrate : commande permettant le lancer les migrations

les fixture permet de créer un jeu de fausses données dans la base de données
composer require orm-fixtures --dev : commande permettant d'installer le composant qui permet d'utiliser les fixture
php bin/console make:fixtures : commande permettant de créer une fixture
php bin/console doctrine:fixtures:load : commande permettant de lancer une fixture 

Repositiry : pour faire des selections de données dans la table de ma base de données

$form = $this->createFormBuilder($nom_du_formulaire)
             ->add('nom_du_cham')              //permet de créer un champ
             ->getForm();   //pour recupérer le formulaire en entier
     : création d'une formulaire avec symfony
la fonction form() de twig permet d'afficher une formulaire créer dans le controller

form_themes: ['bootstrap_4_layout.html.twig'] : on ajoute cette ligne dans le fichier twig.yaml qui est  dans config/packages/
pour utiliser une theme bootstrap et dans le twig on utilise la ligne {% form_theme formArticle 'bootstrap_4_layout.html.twig' %}
pour utiliser les services bootstrap

{{ form_start(nom_du_formulaire)}} //debut du formulaire
    {{ form_row(nom_du_formulaire.champ)}}  //affiche le input de ce champ  
{{ form_end(nom_du_formulaire)}}  //fin du formulaire

$form->handleRequest($request) : permet d\'analyser les champs du formulaire si ils sont vides ou pas avant de recuperer les données
entrées
On peut créer un formulaire en utilisant la commande : php bin/console make:form nom_formulaire. Après on va dans notre controller 
dans la fonction qu'utilise la route on importe le formulaire en tapant : $form = $this->createForm(nom_formulaire::class, $article)
Le paramconverter permet de convertir un parametre en un entité
?>