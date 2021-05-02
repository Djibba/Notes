# Plan du cours

## Chap 1: Généralités

## Chap 2: Modele, Entité, Association et modele relationnel de données

## Chap 3: Présentation de SQL_server

## Chap 4: Administration de SQL_server

## Chap 5: Programmation SQL

## Chap 6: Gestion de Sécurité

</br>

## 1 Chap 1: Généralités

### 1.1 Qu'est ce qu'une données

Une donnée est une information qui peut être de type texte, image, video, son, etc.

### 1.2 Qu'est ce qu'un système

Un système est un ensemble d'éléments qui interagissent entre eux. Exemple l'ordinateur, l'être humain, une table, un stylo

### 1.3 Qu'est ce qu'un système d'information

C'est un ensemble de ressoures matériels ou immateriels permettant de collecter, de stocker, de traiter et de diffuser une information

### 1.4 Qu'est ce qu'un modele

- NB: Problème = questionnement , Cahier des charges :document dans lequel il est consigné l'ensemble des besoins d'un client
  dictionnaire de données : un tableau dans lequel il est consigné l'ensemble des données essentielles à la conception d'un modele

* Un modéle, c'est une référence. Autrement dit c'est une abstraction de la réalité se rapprochant le plus de cette derniere.
  Exemple le modele demographique, la pluviometrie, la cartographie permettant de dimensionner les différents secteurs d'une zone, d'une région, le modele Entité-Association qui est une représentation statique des données

### 1.5 Qu'est que la modelisation

C'est la mise en oeuvre d'un modele. Il en existe plusieurs parmi lesquelles:

- la modélisation fonctionnelle : elle est basée sur l'identification ou la caractérisation d'un objet.
- la modélisation orienté objet : considére tout élément de la nature comme étant un objet pouvant se déplacer dans le temps et dans l'espace.

### 1.6 Qu'est qu'une base de données

Une base de données est un ensemble de données structurées de manieres cohérante et stocker dans un dispositif physique. Exemple gestion des étudiants, gestion de la comptabilité d'une entreprise, gestion d'un hopital

### 1.7 Qu'est ce qu'un SGBD

C'est un logiciel qui permet de gerer ou d'administrer une ou plusieurs bases de données. Oracle, SQL, MySQL, Access, Protgres, MariaDB

## Chap 2: Les modeles Entité-Association et relationnel de données

### 2.1 Le modele Entité-Association

#### Définition

Le modele Entité-Association est une représentation graphique des données (faisant fi de la chronologie) et reposant essentiellement sur les notions:

- Entité
- Association
- Attribut
- Cardinalité ou multiplicité
- et de roles

### 1 Entité

C'est un ensemble d'objet se partageant la meme structure. C'est un ensemble d'objet regroupé sous un meme type

- Representation : Rectangle subdivisé en deux parites ( nom Entité : entete, caracteristiques : corps). Exemple \***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\***
  | Personne | \***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\***
  | idPersonne |
  | nom |
  | prenom |
  | dateNaissance |
  | email |
  | telephone \***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\*** |

### 2 Attribut

Un attribut est une caracteristique d'une entite. Exemple idPersonne est un attribut de l'entité personne

### 3 Identifiant

#### 3.1 Définition

un identifiant est un attribut ou groupe d'attributs représentant une entité. Il en existe trois types :

- Identifiants candidats : c'est un attribut ou groupe d'attributs susceptibles de représenter une entité. Exemple: considérons l'entité personne ci dessus, les attributs idPersonne email et telephone sont des identifiants candidats
- Identifiant primaire : c'est un attribut ou un ensemble d'attributs représentant de maniere unique une entité. C'est l'identifiant candidat choisi ou élu. Exemple idPersonne est l'identifiant peimaire de l'entité personne. Convention : l'identifiant primaire est toujours souligné donc l'entité personne devient \***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\***
  | Personne | \***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\***
  | idPersonne**\_ |
  | nom |
  | prenom |
  | dateNaissance |
  | email |
  | telephone
  **\*\*\*\*\***\*\_\_\_\*\***\*\*\*\*\*\*\*\* |

* Identifiant secondaire ou etranger : c'est un identfiant primaire d'une entité qui migre vers une autre entité.

### 4 Association

Une association est une liaison entre une ou plusieurs entités. Une association est un verbe à l'infinitif ou conjugué à la troisieme personne du singulier ou bien un groupe nominal. Une association peut avoir des attributs. Elle porte à ses extremités des cardinalités et des roles. Il existe 4 types d'associations :

- Association réflexive : c'est une association qui quitte l'entité et revient vers l'entité elle-meme
- Association en forme verbale active : c'est une Association unidirectionnelle reliant deux entités. Le sens de l'Association est imposé par le verbe
- Association en forme verbale passive : c'est une association bidirectionnelle reliant deux entités

* Association n-aire : c'est une association reliant plus de 3 entités

- Lien héritage : c'est un mécanisme de transmission de propriétés d'une entité mère à une entité fille

### 5 Les cardinalités

Une cardinalité est le nombre de fois qu'une entité participe à l'association avec une autre entité. C'est le nombre mininum d'objets et maximum d'objet d'une entité en relation avec ce nombre mininum d'objets et maximum d'objets d'une autre entité. Une cardinalité n'est rien d'autre qu'un couple de nombre.

#### 5.1 Les types de cardinalités

Il existe plusieurs types de cardinalités :

- (0, 1) lecture : au plus un ( ou zéro ou un )
- (1, 1) lecture : un et un seul
- (0, n) lecture : zéro ou pluisieurs
- (1, n) lecture : un ou plusieurs
- (m, n) avec 2 <= m <= n lecture : au moins m et au plus n
  Exemple : Un hotel heberge un ou plusieurs clients

Remarque :

- Un lien d'héritage ne porte pas de cardinalité
- Une association n-aire ne possede que les cardinalités plusieurs plusieurs et chacune des entité concervent ses cardinalités

## Application

Une banque de la place veut réaliser une application pour la gestion de ses comptes clients. Pour ce faire la banque donne l'opportinueté au client d'ouvrir un compte, d'y déposer de l'argent, d'y retire de l'argent et meme de fermer le compte. Un client de la banque est caractérisé par un nom, un prenom, une date de naissance, un lieu de naissance, un numero de telephone, un email et son adresse. Un client possede un ou plusieurs comptes et un compte a un numero et un solde. Un compte est typé :

- compte courant possedant un decouvert
- un compte epargne 

### Creation d'une base de données

+ Syntaxe 1 : `Create database nom_db;`
          `Go ... un separateur`
Exemple: `create database gestion_ventes;`
          `Go`
+ Syntaxe 2: `
              create database nom_db
              --creation du fichier primaire
              ON PRIMARY(
                name = nom_logique,
                filename = 'chemin/*mdf',
                size = taille(ko,Mo,Go),
                maxsize = taillemax,
                filegrowth = pas d'incrementation
              )
              --creation du fichier log
              LOG ON (
                name = nom_logique,
                filename = 'chemin/*ldf,
                size = taille defaut,
                maxsize = taillemaximale,
                filegrowth = pas d'incrementation
              )
              collate french_ci_as
              Go`

--Positionnement sur la base de données
Syntaxe : `USE nom_db`
--GO 

Exercice : Creer les tables suivantes:
+ client(numClient, nomClient, prenomClient,adresseClient, email, tel)
+ commande(numCom, quantiteCom, dateCom, numClient, numVentes)
+ article(numArt, designation, pu,quantiteStock, numCom)
+ ventes(numVentes, quantiteVente, )
+ (2) Alimenter la base de données en ajoutant des enregistrements dans les 
+ (3) Gerer toutes les autoincrementation
+ Solutions </br>
-----------------
Pour se connecter on tape la commande : `sqlcmd -S localhost -U SA -P '<YourPassword>'` </br>
Questions 

- Donner le dictionnaire de données correspondant au cahier de charges
- Identifier les associations et les cardinalités
- Déduire de 1 et 2 le modele Entité-Association

## Travail à faire

- choisir un projet
- Rédiger le cahier de charges
- Donner le dictionnaire de données
- Donner le modele Entinté association
- Générer le script de base de données
- Creer une base de données et importer le script
