une base de donnee: est un ensemble d infomation bien structuré dont le but est de stocker et d'extraire des informations 
Une base de données relationnelle est une base de données structurée selon un modèle permettant de dresser des relations 
entre les différents objets qu'elle comporte. 
système de gestion de base donne(SGBD) :c'est le logiciel qui gère une base de donnee
	système de gestion de base relationnel(SGBDR)
	système de gestion de base de donnee non relationnel()
SQL(structured query language)langage de requetes structurées
langages de requetes structurées
show databases;//permet d afficher toute les bases de 
//creer une base de donnee
create database l2tdsi //permet de creer une base de donnee
USE:use l2tdsi //pour selectionner une base de donnes
mysql> create table etudiant(
    -> ide int primary key not null AUTO_INCREMENT,
    -> Nom varchar(20) not null,
    -> Prenoms varchar(50),
    -> Mail varchar (60) not null,
    -> tel varchar(50) not null
    -> );
show tables//permet d'afficher les tables qui existe
//
insert into etudiant(ide,Nom,Prenom,Mail,tel)
    -> values("01","Seck","Saliou","saliouseck2009@gmail.com","772412765");

>
ALTER TABLE `membres` DROP `group_id`;
ALTER TABLE ELEVE ADD PRIMARY KEY (numE);

//afficher les colone
describe etudiant

//SAUVEGARDE
BACKUP DATABASE testDB
TO DISK = 'D:\backups\testDB.bak'
WITH DIFFERENTIAL;//une sauvegarde différentielle réduit le temps de sauvegarde
 (seules les modifications étant sauvegardées).
 Déplacer une colonne après une autre

ALTER TABLE MA_TABLE MODIFY COLUMN MA_COLONNE TYPE_DE_MA_COLONNE AFTER AUTRE_COLONNE
Déplacer une colonne en début de table

ALTER TABLE MA_TABLE MODIFY COLUMN MA_COLONNE TYPE_DE_MA_COLONNE FIRST
SELECT *
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'premiere'

DELIMITER |
CREATE TRIGGER before_insert_client BEFORE INSERT
ON CLIENT FOR EACH ROW
BEGIN
    IF NEW.Pays !="Senegal"  
    AND NEW.Pays !="Mauritanie"     
    AND NEW.Pays !="djibouti"      
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! le pays d’un client ne peut être que
     'Mauritanie','Sénégal' ou 'Djibouti'");
    END IF;
END  |
DELIMITER;

DELIMITER |
CREATE TRIGGER before_update_clientUP BEFORE UPDATE
ON CLIENT FOR EACH ROW
BEGIN
    IF NEW.Pays !="Senegal"  
    AND NEW.Pays !="Mauritanie"     
    AND NEW.Pays !="djibouti"      
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! le pays d’un client ne peut être que
     'Mauritanie','Sénégal' ou 'Djibouti'");
    END IF;
END  |
DELIMITER;

DELIMITER |
CREATE TRIGGER before_insert_commande BEFORE INSERT
ON commande FOR EACH ROW
BEGIN
    IF (NEW.Datecom > NEW.Datelivrai)     
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! Datecom doit etre inferieur a Datelivrai");
    END IF;
END  |

DELIMITER |
CREATE TRIGGER before_update_commande BEFORE UPDATE
ON commande FOR EACH ROW
BEGIN
    IF (NEW.Datecom > NEW.Datelivrai)     
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! Datecom doit etre inferieur a Datelivrai");
    END IF;
END  |

DELIMITER |
CREATE TRIGGER before_insert_produit BEFORE INSERT
ON produit FOR EACH ROW
BEGIN
    IF (NEW.QteStock<1)     
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! la quantite stocker doit etre positif");
    END IF;
END  |

DELIMITER |
CREATE TRIGGER before_update_produit BEFORE UPDATE
ON produit FOR EACH ROW
BEGIN
    IF (NEW.QteStock<1)     
      THEN
        INSERT INTO Erreur (erreur) VALUES ("ERREUR! la quantite stocker doit etre positif");
    END IF;
END  |
-------------------------------COUR PROF RESUMER---------------------------------------

exo
creer base de donne en precisant l'encodage
creer des varible avec le type set ou enum
supprimer une table avec des TABLE_CONSTRAINTS
ajouter modifier supprimer renommer une colonne
supprimer une cle etranger

