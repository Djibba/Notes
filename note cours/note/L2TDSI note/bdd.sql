SELECT *
FROM table
WHERE condition
GROUP BY expression
HAVING condition
{ UNION | INTERSECT | EXCEPT }
ORDER BY expression
LIMIT count
OFFSET start

SQL DISTINCT
L’utilisation de la commande SELECT en SQL permet de lire toutes les données d’une ou plusieurs
colonnes. Cette commande peut potentiellement afficher des lignes en doubles. Pour éviter des
redondances dans les résultats il faut simplement ajouter DISTINCT après le mot SELECT
"SELECT DISTINCT ma_colonne FROM nom_du_tableau"//Cette requête sélectionne le champ « ma_colonne » de la table « nom_du_tableau » en évitant de
retourner des doublons

SQL AS (alias)
SELECT colonne1 AS c1, colonne2 FROM `table` ou encore  SELECT colonne1 c1, colonne2 FROM `table`
La syntaxe pour renommer une table dans une requête est la suivante :
SELECT * FROM `nom_table` AS t1
La requête ci-dessous renomme la table « produit » en « p » et la table « produit_categorie » en « pc
» (plus court et donc plus rapide à écrire) :
SELECT p_id, p_nom_fr_fr, pc_id, pc_nom_fr_fr FROM `produit` AS p  LEFT JOIN `produit_categorie` AS pc ON pc.pc_id = p.p_fk_category_id

SQL WHERE
La commande WHERE dans une requête SQL permet d’extraire les lignes d’une base de données
qui respectent une condition. Cela permet d’obtenir uniquement les informations désirées.
-- Syntaxe
La commande WHERE s’utilise en complément à une requête utilisant SELECT. La façon la plus simple de l’utiliser est la suivante :
SELECT nom_colonnes FROM nom_table WHERE condition

-- Opérateurs de comparaisons

= Égale
<> Pas égale
!= Pas égale
> Supérieur à
< Inférieur à
>= Supérieur ou égale à
<= Inférieur ou égale à
IN Liste de plusieurs valeurs possibles
BETWEEN Valeur comprise dans un intervalle donnée (utile pour les nombres ou dates)
LIKE Recherche en spécifiant le début, milieu ou fin d'un mot.
IS NULL Valeur est nulle
IS NOT NULL Valeur n'est pas nulle

SQL AND & OR
Une requête SQL peut être restreinte à l’aide de la condition WHERE. Les opérateurs logiques AND
et OR peuvent être utilisées au sein de la commande WHERE pour combiner des conditions.
SELECT nom_colonnes FROM nom_table WHERE condition1 AND condition2
SELECT nom_colonnes FROM nom_table WHERE condition1 OR condition2
SELECT nom_colonnes FROM nom_table WHERE condition1 AND (condition2 OR condition3)
SELECT * FROM produit WHERE categorie = 'informatique' AND stock < 20
SELECT * FROM produit WHERE ( categorie = 'informatique' AND stock < 20 ) OR ( categorie = 'fourniture' AND stock < 200 )

SQL IN
L’opérateur logique IN dans SQL s’utilise avec la commande WHERE pour vérifier si une colonne est
égale à une des valeurs comprise dans set de valeurs déterminés. C’est une méthode simple pour
vérifier si une colonne est égale à une valeur OU une autre valeur OU une autre valeur et ainsi de
suite, sans avoir à utiliser de multiple fois l’opérateur OR
syntaxe
SELECT nom_colonne FROM table WHERE nom_colonne IN ( valeur1, valeur2, valeur3, ... )

SQL BETWEEN
L’opérateur BETWEEN est utilisé dans une requête SQL pour sélectionner un intervalle de données
dans une requête utilisant WHERE. L’intervalle peut être constitué de chaînes de caractères, de
nombres ou de dates. L’exemple le plus concret consiste par exemple à récupérer uniquement les
enregistrements entre 2 dates définies.
Syntaxe
L’utilisation de la commande BETWEEN s’effectue de la manière suivante :
SELECT * FROM table WHERE nom_colonne BETWEEN 'valeur1' AND 'valeur2'