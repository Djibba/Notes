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

    + NB: Problème = questionnement , Cahier des charges :document dans lequel il est consigné l'ensemble des besoins d'un client
        dictionnaire de données : un tableau dans lequel il est consigné l'ensemble des données essentielles à la conception d'un modele
    Un modéle, c'est une référence. Autrement dit c'est une abstraction de la réalité se rapprochant le plus de cette derniere.
    Exemple le modele demographique, la pluviometrie, la cartographie permettant de dimensionner les différents secteurs d'une zone, d'une région, le modele Entité-Association qui est une représentation statique des données

### 1.5 Qu'est que la modelisation

    C'est la mise en oeuvre d'un modele. Il en existe plusieurs parmi lesquelles:
        + la modélisation fonctionnelle : elle est basée sur l'identification ou la caractérisation d'un objet.
        + la modélisation orienté objet : considére tout élément de la nature comme étant un objet pouvant se déplacer dans le temps et dans l'espace.

### 1.6 Qu'est qu'une base de données

    Une base de données est un ensemble de données structurées de manieres cohérante et stocker dans un dispositif physique. Exemple gestion des étudiants, gestion de la comptabilité d'une entreprise, gestion d'un hopital

### 1.7 Qu'est ce qu'un SGBD

    C'est un logiciel qui permet de gerer ou d'administrer une ou plusieurs bases de données. Oracle, SQL, MySQL, Access, Protgres, MariaDB

## Chap 2: Les modeles Entité-Association et relationnel de données

### 2.1 Le modele Entité-Association

#### Définition

    Le modele Entité-Association est une représentation graphique des données (faisant fi de la chronologie) et reposant essentiellement sur les notions:
        + Entité
        + Association
        + Attribut
        + Cardinalité ou multiplicité
        + et de roles

### 1 Entité

    C'est un ensemble d'objet se partageant la meme structure. C'est un ensemble d'objet regroupé sous un meme type
    + Representation : Rectangle subdivisé en deux parites ( nom Entité : entete, caracteristiques : corps). Exemple
         _________________________
        |   Personne              |
         _________________________
        |  idPersonne             |
        |  nom                    |
        |  prenom                 |
        |  dateNaissance          |
        |  email                  |
        |   telephone
        _________________________ |

### 2 Attribut

    Un attribut est une caracteristique d'une entite. Exemple idPersonne est un attribut de l'entité personne

### 3 Identifiant

#### 3.1 Définition

    un identifiant est un attribut ou groupe d'attributs représentant une entité. Il en existe trois types :
        + Identifiants candidats : c'est un attribut ou groupe d'attributs susceptibles de représenter une entité. Exemple: considérons l'entité personne ci dessus, les attributs idPersonne email et telephone sont des identifiants candidats
        + Identifiant primaire : c'est un attribut ou un ensemble d'attributs représentant de maniere unique une entité. C'est l'identifiant candidat choisi ou élu. Exemple idPersonne est l'identifiant peimaire de l'entité personne. Convention : l'identifiant primaire est toujours souligné donc l'entité personne devient
         _________________________
        |   Personne              |
         _________________________
        |  idPersonne___          |
        |  nom                    |
        |  prenom                 |
        |  dateNaissance          |
        |  email                  |
        |   telephone
        _________________________ |

        + Identifiant secondaire ou etranger : c'est un identfiant primaire d'une entité qui migre vers une autre entité.

### 4 Association

    Une association est une liaison entre une ou plusieurs entités. Une association est un verbe à l'infinitif ou conjugué à la troisieme personne du singulier ou bien un groupe nominal. Une association peut avoir des attributs. Elle porte à ses extremités des cardinalités et des roles.
