# ADMINISTRATION DU SYSTEME

- uname : Affichage des informations relatives à la release UNIX installée
- halt : Arrêt du système
- shutdown : Arrêt du système
- sudoedit : Edition d un fichier en tant que root
- cal : Affichage du calendrier du mois en cours.

- "sudo" : Substitute User DO
- "sudo su" : devenir root et le rester
  Pour quitter le « mode root », tapez "exit" (ou faites la combinaison Ctrl + D).

<!-- COMMANDE RESERVER A ROOT -->

- id : Affichage des informations d'identité d'un utilisateur.
- groups : Affichage des groupes auxquels appartient un utilisateur.
- finger : Affichage des informations disponibles sur un utilisateur.

Utilisateurs référencés stockés dans le fichier /etc/passwd
Dans le fichier /etc/shadow, une ligne par utilisateur décrit par neuf champs séparés par des ':' :
ogin (en clair),
mot de passe (crypté),
date de dernière modification du mot de passe (en jours depuis le 1er janvier 1970),
délai avant la prochaine modification possible après un changement de mot de passe (en jours),
délai avant l'obligation de changer de nouveau de mot de passe après un changement sinon expiration du compte (en jours),
délai d'avertissement avant une modification obligatoire,
délai avant désactivation après une expiration,
date de désactivation,
reservé

- "adduser new_user_name" // ajouter un utilisateur
- "passwd user_name" //permet de changer le mot de pass de l'utilisateur passer en paramètre
  NB:"passwd" //sans paramètre modifie le mot de pass de l'utilisateur actif
- "deluser user_name"// permet de supprimer un utilisateur
- "deluser --remove-home user_name"// supprimer aussi son home et tous ses fichiers personnels
  NB: "adduser" et "deluser" sont des commandes qui n'existent que sous Debian et tous ses descendants, dont Ubuntu.
  Partout ailleurs on doit utiliser useradd et userdel, qui sont les commandes Unix traditionnelles fonctionnant
  partout. Elles font globalement la même chose mais de manière beaucoup plus basique : si vous n'appelez pas passwd
  vous-mêmes, le compte ne sera pas activé et n'aura pas de mot de passe.
  lorsqu'on fait un "ls-l" la 3ème colonne indique le propriétaire du fichier ou dossier ; la 4ème indique le groupe qui possède ce fichier
  ou dossier.
- "addgroup group_name"// créer un groupe
- "usermod" :// modifier un utilisateur
- "usermod -g amis patrick"//change de groupe.(permet de mettre patrick dans le groupe amis)
  Ajouter un administrateur à un groupe :

- gpasswd -a utilisateur groupe

Enlever le mot de passe d'un groupe :

- .bashrc : script exécuté à chaque connexion de l'utilisateur. Il permet de définir des alias, d'exécuter des commandes ou de positionner des variables d'environnement, par exemple,
- .bash_logout : idem pour la déconnexion,
- .bash_history : historique des commandes utilisées,

- gpasswd -r groupe

"usermod-l new_name old_name"// renomme l'utilisateur (le nom de son répertoire personnel ne sera pas changé par contre) ;
Il est aussi possible de faire en sorte qu'un utilisateur appartienne à plusieurs groupes.
Pour ce faire, utilisez le paramètre -G (majuscule)
Exemple "usermod -G amis,paris,collegues patrick".
Séparez les noms des groupes par une virgule, sans espace entre chaque nom de groupe
"usermod -aG amis patrick"// pour ajouter des groupes à un utilisateur (sans perdre les groupes il appartenait avant cela), use "-a" :
"delgroup name_group" pertmet de supprimer un groupes
"addgroup delgroup" //n'existent que sous Debian et ses dérivés (même remarque que pour adduser et deluser).
Les commandes « traditionnelles » qui fonctionnent partout sont "groupadd" et "groupdel",// mais elles offrent moins d'options.
//----------------- CHOWN GESTION DES PROPRIETAIRES D UN FICHIER
0"chown new_proprietaire fichier"//La commande chown, qui doit être utilisée en tant que root, attend deuxparamètres au moins :
// nom du nouveau propriétaire ;
//le nom du fichier à modifier;
"chgrp new_proprietaire fichier" :// changer le groupe propriétaire d'un fichier
NB //chown peut aussi changer le groupe propriétaire d'un fichier !:
"chown patrick:amis rapport.txt"
// Cela affectera le fichier à l'utilisateur patrick et au groupe amis.
// Il suffit de séparer par un symbole deuxpoints (« : ») le nom du nouvel utilisateur (à gauche) et le nom du nouveau groupe (à
// droite).
"chown-R" : //affecter récursivement les sous-dossiers
"chmod" : modifier les droits d'accès
d (Directory) : indique si l'élément est un dossier ;

l (Link) : //indique si l'élément est un lien (raccourci) ;

r (Read) : //indique si on peut lire l'élément ;

w (Write) : //indique si on peut modifier l'élément ;

x (eXecute) : //si c'est un fichier, « x » indique qu'on peut l'exécuter. Ce n'est utile que pour les fichiers exécutables (programmes et scripts).

le premier triplet: "rwx" //indique les droits que possède le propriétaire du fichier sur ce dernier ;

le second triplet: "rwx" //indique les droits que possèdent les autres membres du groupe sur ce fichier ;

enfin, le dernier: triplet "rwx" //indique les droits que possèdent tous les autres utilisateurs de la machine sur le fichier.
r=4,w=2,x=1
--- = 0 = 0 + 0 + 0
r-- = 4 = 4 + 0 + 0
-w- = 2 = 0 + 2 + 0
--x = 1 = 0 + 0 + 1
rw- = 6 = 4 + 2 + 0
-wx = 3 = 0 + 2 + 1
r-x = 5 = 4 + 0 + 1
rwx = 7 = 4 + 2 + 1
//exemple
"chmod 600 rapport.txt"
//AUTRE FACON DE PROCEDER

u = user (propriétaire) ;

g = group (groupe) ;

o = other (autres).

… et que :

- signifie : « Ajouter le droit » ;

* signifie : « Supprimer le droit » ;

= signifie : « Affecter le droit »

chmod g+w rapport.txt //Signification : « Ajouter le droit d'écriture au groupe ».
chmod o-r rapport.txt //Signification : « Enlever le droit de lecture aux autres ».
chmod u+rx rapport.txt //Signification : « Ajouter les droits de lecture et d'exécution au propriétaire »
chmod u=rwx,g=r,o=- rapport.txt //Signification : « Affecter tous les droits au propriétaire, juste la lecture au groupe, rien aux autres ».
chmod -R 700 /home/mateo2//recursive
//l'editeur de text nano
"Ctrl + W"// lance une recherche dans le fichier
"Ctrl + O"//Pour enregistrer à tout moment, faites
"-m" : //autorise l'utilisation de la souris sous Nano.
/etc/nanorc

//Configurer sa console avec .bashrc
//couleur terminal

# set a fancy prompt (non-color, unless we know we "want" color) case "$TERM" in xterm-color

//creer des alias

# enable color support of ls and also add handy aliases if [ "$TERM" != "dumb" ]; //alias nom='commande'

alias rm='rm --preserve-root'
alias ll='ls -lArth'
//edition du fichier bashrc globale
/etc/bash.bashrc

//INSTALLER DES PROGRAMMES AVEC apt-get
L'endroit où tous les paquets se trouvent est appelé dépôt (repository en anglais).
//fichier qui contient la liste de depot
/etc/apt/sources.list
Nous devons généralement suivre trois étapes pour télécharger un paquet :
"apt-get update (optionnel)" :// pour mettre notre cache à jour si ce n'est pas déjà fait ;
"apt-cache search monpaquet (optionnel)" : //pour rechercher le paquet que nous voulons télécharger si nous neconnaissons pas son nom exact ;
"apt-get install monpaquet" : //pour télécharger et installer notre paquet.
"apt-get remove lbreakout2"//desinstalle le packet
"apt-get autoremove lbreakout2"//de supprimer aussi les dépendances inutiles
"apt-get upgrade"//permet de mettre a jout tous les packets Pensez à faire un apt-get update pour mettre à jour le cache des paquets

//LE MANUEL MAN
Appuyez sur la touche / (slash) pour effectuer une recherche ; c'est très pratique ! Tapez ensuite le mot que vous
recherchez dans le manuel puis appuyez sur Entrée. Si la recherche renvoie un résultat vous serez automatiquement
placés sur le premier résultat trouvé. Pour passer au résultat suivant, tapez à nouveau / puis directement sur Entrée
(sans retaper votre recherche).
apt-get install manpages-fr//lire les page du manuel en francais
//Résumé de la syntaxe du SYNOPSIS
Voici un petit résumé de la syntaxe du SYNOPSIS pour vous souvenir de la façon dont chaque élément doit être interprété :
"gras" : tapez le mot exactement comme indiqué
"souligne" : remplacez le mot souligné par la valeur qui convient dans votre cas
"[-hvc]" : toutes les options -h, -v et -c sont facultatives
"a|b" : vous pouvez écrire l'option « a » OU « b », mais pas les deux à la fois
"option…" les points de suspension indiquent que l'option peut être répétée autant de fois que vous voulez.
//apropos : trouver une commande
Le man suppose que vous connaissez déjà votre commande et que vous voulez en savoir plus.
C'est là que la commande "apropos" intervient. Vous lui donnez en paramètre un mot clé et elle va le rechercher
dans les descriptions de toutes les pages du manuel.
La commande apropos est donc un peu l'inverse de man : elle vous permet de retrouver une commande.
//La commande whatis
La commande whatis est une sorte de man très allégé. Elle donne juste l'en-tête du manuel
pour expliquer en deux mots à quoi sert la commande.
//RECHERCHER DES FICHIERS
Locate // une recherche rapide
la commande ne fait pas la recherche sur votre disque dur
entier, mais seulement sur une base de données de vos fichiers
forcer la commande locate à reconstruire la base de données des fichiers
Cela se fait avec la commande "updatedb", à exécuter en root (avecsudo)
//find : une recherche approfondie
FOCTIONNEMENT//find« où » « quoi » « que faire avec »
rechercher tous les fichiers qui font plus de 10 Mo.// find -size +10M
Recherche à partir de la date de dernier accès//find -name "_.odt" -atime 6
-type d // pour rechercher uniquement des répertoires (directories) ;
-type f // pour rechercher uniquement des fichiers (files).
find . -name "_.jpg" -printf "%p - %u\n"//affiche le nom du fichier, un tiret et le nom du propriétaire
find -name "_.jpg" -delete//supprimer tous mes fichiers « jpg »
find -name "_.jpg" -exec chmod 600 {} \;
Pour chaque fichier.jpgtrouvé, on exécute la commande qui suit-exec :
cette commande ne doit PAS être entre guillemets ;
les accolades{}seront remplacées par le nom du fichier ;
la commande doit finir par un\;obligatoirement.

//-------------Extraire, trier et filtrer des données
grep : filtrer des données
//utilisation simple de grep
grep alias .bashrc
//-i : ne pas tenir compte de la casse (majuscules / minuscules)
//-v :connaître toutes les lignes qui ne contiennent pas un mot
//-r : rechercher dans tous les fichiers et sous-dossiers
grep -r "Site du Zéro"" code/
//on doit utiliser l'option-E pour faire comprendre à grep que l'on utilise une expression régulière.
//exemple d'utulisatieo
grep -E [Aa]lias .bashrc
… renvoie toutes les lignes qui contiennent « alias » ou « Alias ».

//sort : trier les lignes
-o : écrire le résultat dans un fichier//sort -o noms_tries.txt noms.txt
-r : trier en ordre inverse
-R : trier aléatoirement
-n : trier des nombres
Le tri de nombres est un peu particulier. En effet, la commande sort ne distingue pas si les caractères
sont des nombres et va donc par défaut les trier par ordre alphabétique. Par conséquent,
le « mot » 129 précèdera 42 alors que ça devrait être l'inverse !'
//wc : compter le nombre de lignes
wc noms.txt
resultat : 8 8 64 noms.txt
Ces trois nombres signifient, dans l'ordre :
le nombre de lignes.
le nombre de mots.
le nombre d'octets.
-m : compter le nombre de caractères
-c : compter le nombre d'octets
-w : compter le nombre de mots
-l : compter le nombre de lignes'

//uniq : supprimer les doublons
-c : compter le nombre d'occurrences
-d : afficher uniquement les lignes présentes en double'
//cut : couper une partie du fichier
par exemple, si vous souhaitez conserver uniquement les caractères 2 à 5 de chaque ligne du fichier,
vous taperez :// cut -c 2-5 noms.txt
Pour conserver du 1er au 3ème caractère :// cut -c -3 noms.txt
De même, pour conserver du 3ème au dernier caractère :// cut -c 3- noms.txt
avec delimiteur//cut -d , -f 1 notes.csv
//$ cut -d , -f 1,3 notes.csv
cut -d , -f 2-4 notes.csva pour effet de conserver les champs n°2, 3 et 4.
cut -d , -f 3- notes.csvconserve les champs du n°3 jusqu'à la fin.'

//> et >> : rediriger le résultat dans un fichier
//astuce
Parfois, vous ne voulez ni voir le résultat d'une commande ni le stocker dans un fichier.
Dans ce cas, l'astuce consiste à rediriger le résultat dans /dev/null.C'est un peu le « trou noir »
de Linux : tout ce qui va là-dedans disparaît immédiatement'.Par exemple : commande_bavarde > /dev/null
//cut -d , -f 1 fichier_inexistant.csv > eleves.txt 2> erreurs.log

> eleves.txt : redirige le résultat de la commande (sauf les erreurs) dans le fichier eleves.txt.
> C'est la sortie standard ;'
> 2> erreurs.log : redirige les erreurs éventuelles dans le fichier erreurs.log. C'est la sortie d'erreurs.
> //cut -d , -f 1 fichier_inexistant.csv > eleves.txt 2>&1----Tout ira désormais dans eleves.txt :
> le résultat (si cela a fonctionné), de même que les erreurs (s'il y a eu un problème).'

//< et << : lire depuis un fichier ou le clavier
sort -n << FIN//permet d'écrire des nombres ligne par ligne puis de les trier

// | : chaîner les commandes

//Surveiller l'activité du système
w :// qui fait quoi ?//16:50:30 up 8:50, 2 users, load average: 0,08, 0,34, 0,31
Nous allons apprendre dans ce chapitre à utiliser une série de commandes qui
nous permettront de savoir ce qui se passe actuellement dans notre ordinateur.

//L'uptime (aussi accessible via la commande uptime)
, l'information d'uptime est la suivante : up 8:50. C'est la durée de fonctionnement de l'ordinateur.

//load average: 0,08, 0,34, 0,31.
La charge est un indice de l'activité de l'ordinateur. Il y a trois valeurs :
la première correspond à la charge moyenne depuis 1 minute (0,08) ;
la seconde à la charge moyenne depuis 5 minutes (0,34) ;
la dernière à la charge moyenne depuis 15 minutes (0,31).
"tload" //obtenir un graphique de l'évolution de la charge en console

//La liste des connectés (aussi accessible via who)
USER : le nom de l'utilisateur (son login) ;
TTY : le nom de la console dans laquelle se trouve l'utilisateur.
FROM : c'est l'adresse IP (ou le nom d'hôte) depuis laquelle il se connecte.
LOGIN@ : l'heure à laquelle cet utilisateur s'est connecté ;
IDLE : depuis combien de temps cet utilisateur est inactif
WHAT : la commande qu'il est en train d'exécuter en ce moment.

//ps & top : lister les processus
-->//ps : liste statique des processus
PID : c'est le numéro d'identification du processus.
TTY : c'est le nom de la console depuis laquelle a été lancé le processus.
TIME : la durée d'exécution du processus.
CMD : le programme qui a généré ce processus.
//ps -ef : lister tous les processus
//ps -ejH : afficher les processus en arbre
//ps -u UTILISATEUR : lister les processus lancés par un utilisateur
-->//top : liste dynamique des processus
//q : ferme top ;
//h : affiche l'aide, et donc la liste des touches utilisables.
//B : met en gras certains éléments.
//f : ajoute ou supprime des colonnes dans la liste.
//F : change la colonne selon laquelle les processus sont triés.
//u : filtre en fonction de l'utilisateur que vous voulez.
//k : tue un processus, c'est-à-dire arrête ce processus. Ne vous inquiétez pas,
//s : change l'intervalle de temps entre chaque rafraîchissement de la liste (par défaut,3 secondes).

//Ctrl + C & kill : arrêter un processus
kill : tuer un processus
kill 32678//
kill -9 //, vous demandez à Linux de tuer le processus sans lui laisser le temps de s'arrêter proprement
killall : tuer plusieurs processus//killall attend le nom du processus à tuer

//halt & reboot : arrêter et redémarrer l'ordinateur

//"&" & nohup : lancer un processus en arrière-plan
//& : lancer un processus en arrière-plan
Le symbole & s'appelle le « et commercial » ou encore l'« esperluette ».
//nohup : détacher le processus de la console

//Ctrl + Z, jobs, bg & fg : passer un processus en arrière-plan
//Ctrl + Z : mettre en pause l'exécution du programme(combiner avec la commande suivant)
//bg : passer le processus en arrière-plan (background)
//jobs : connaître les processus qui tournent en arrière-plan
//fg : reprendre un processus au premier plan (foreground)
$ fg %2//reprendre le find qui était le job n° 2 :

//screen : plusieurs consoles en une//pour quitter Ctrl + D ou exit
Ctrl + a puis ? : afficher l'aide
Ctrl + a puis c : créer une nouvelle « fenêtre ».
Ctrl + a puis w : afficher la liste des « fenêtres » actuellement ouvertes.
En bas de l'écran vous verrez par exemple apparaître : 0-$ bash 1\*$ bash.
Ctrl + a puis A : renommer la fenêtre actuelle.
Ctrl + a puis n : passer à la fenêtre suivante (next).
Ctrl + a puis p : passer à la fenêtre précédente (previous).
Ctrl + a puis Ctrl + a : revenir à la dernière fenêtre utilisée.
Ctrl + a puis un chiffre de 0 à 9 : passer à la fenêtre n° X.
Ctrl + a puis " : choisir la fenêtre dans laquelle on veut aller.
Ctrl + a puis k : fermer la fenêtre actuelle (kill).
//Ctrl + a puis S : découper screen en plusieurs parties (split)
Ctrl + a puis S coupe l'écran en deux pour afficher deux consoles à la fois (split).
Pour passer d'une fenêtre à une autre, faites Ctrl + a puis Tab.
Une fois le curseur placé dans la fenêtre du bas, vous pouvez soit créer une nouvelle fenêtre
(Ctrl + a puis c) soit appeler une autre fenêtre que vous avez déjà ouverte (avec Ctrl + a puis un chiffre).
Il est possible de répéter l'opération plusieurs fois pour couper en trois, quatre, ou plus
fermer une fenêtre que vous avez splittée, il faudra taper Ctrl + a puis X
Ctrl + a puis d : détacher screen
Ctrl + a puis d détache screen et vous permet de retrouver l'invit de comand «normale» sans arrêter screen
//screen -r
… pour retrouver votre session screen dans l'état où vous l'avez laissée.

//exécuter un programme a une heure différé
date
Le "+%H" est le format de date. %H signifie « le numéro de l'heure actuelle »
les heure ("+%H") les minutes (%M) et les secondes (%S) et pour les années %Y
//regler l'heure
Il faut préciser les informations sous la forme suivante "MMDDhhmmYYYY".pas obligatoire de préciser l'année
MM : mois ;
DD : jour ;
hh : heure ;
mm : minutes ;
YYYY : année.
//at : exécuter une commande plus tard
Il faut indiquer heure exécuter votre commande, sous la forme HH:MM :
at 14:17
warning: commands will be executed using /bin/sh
at> touch fichier.txt
at> <EOT> CTRL+d
job 5 at Mon Nov 10 14:17:00 2010
at 14:17 tomorrow//pour exécuter la commande demain
at 14:17 11/15/10//pour l'exécuter a une date précise mois/jour/année
at now +5 minutes
Les mots-clés utilisables sont les suivants :
minutes ;
hours (heures) ;
days (jours) ;
weeks (semaines) ;
months (mois) ;
years (années)
"atq" : permet d'afficher la liste des jobs en attente avec leur numeroté
"atqrm 13" : supprimer le job n° 13
NB//enchaîner plusieurs commandes à la suite en les séparant par des points-virgules
touch fichier.txt; rm fichier.txt
//sleep faire un pause
touch fichier.txt; sleep 10; rm fichier.txt//10 seconde par défaut
Il est aussi possible d'utiliser d'autres symboles pour changer l'unité :
m : minutes ;
h : heures ;
d : jours.

//crontab : exécuter une commande régulièrement
crontab est en fait une commande qui permet de lire et de modifier un fichier appelé la « crontab ».
Ce fichier contient la liste des programmes que vous souhaitez exécuter régulièrement,
et à quelle heure vous souhaitez qu'ils soient exécutés.
//Il y a trois paramètres différents à connaître, pas plus :
// m h dom mon dow command
-e : modifier la crontab ;
-l : afficher la crontab actuelle ;
-r : supprimer votre crontab. Attention, la suppression est immédiate et sans confirmation !
m : minutes (0 - 59) ;
h : heures (0 - 23) ;
dom (day of month ) : jour du mois (1 - 31) ;
mon (month) : mois (1 - 12) ;
dow (day of week ) : jour de la semaine (0 - 6, 0 étant le dimanche) ;
command : c'est la commande à exécuter.
47 15 \* \* _ touch /home/mateo21/fichier.txt//Chaque 15 h 47, la commande indiquée à la fin sera exécutée.
//exemple de commande
47 _ \* \* _ commande Toutes les heures à 47 minutes exactement.> & Donc à 00 h 47, 01 h 47, 02 h 47, etc.
0 0 _ _ 1 commande Tous les lundis à minuit (dans la nuit de dimanche à lundi).
0 4 1 _ _ commande Tous les premiers du mois à 4 h du matin.
0 4 _ 12 _ commande Tous les jours du mois de décembre à 4 h du matin.
0 _ 4 12 \* commande Toutes les heures les 4 décembre.

- - - - - commande Toutes les minutes !
          //Pour chaque champ, on a le droit à différentes notations :
          5 (un nombre) : exécuté lorsque le champ prend la valeur 5 ;
- : exécuté tout le temps (toutes les valeurs sont bonnes) ;
  3,5,10 : exécuté lorsque le champ prend la valeur 3, 5 ou 10. Ne pas mettre d'espace après la virgule ;
  3-7 : exécuté pour les valeurs 3 à 7 ;
  _/3 : exécuté tous les multiples de 3 (par exemple à 0 h, 3 h, 6 h, 9 h…).
  //autre exemple
  30 5 1-15 _ _ commande À 5 h 30 du matin du 1er au 15 de chaque mois.
  0 0 _ _ 1,3,4 commande À minuit le lundi, le mercredi et le jeudi.
  0 _/2 \* \* _ commande Toutes les 2 heures (00 h 00, 02 h 00, 04 h 00…)
  _/10 \* \* \* 1-5 commande Toutes les 10 minutes du lundi au vendredi.

//Archiver et compresser

//tar : assembler des fichiers dans une archive
, les gzip et bzip2 ne permettent de compresser qu'un seul fichier à la fois.
Comment faire alors si vous voulez compresser une dizaine de fichiers ?
Sous Linux, on a depuis longtemps pris l'habitude de procéder en deux étapes :
--->réunir les fichiers dans un seul gros fichier appelé archive. On utilise pour cela le programme tar ;
--->compresser le gros fichier ainsi obtenu à l'aide de gzip ou de bzip2.

//-cvf : créer une archive tar
Nous allons maintenant créer une archive tar
//tar -cvf nom_archive.tar nom_dossier/
-c : signifie créer une archive tar ;
-v : signifie afficher le détail des opérations ;
-f : signifie assembler l'archive dans un fichier.
//-tf : afficher le contenu de l'archive sans l'extraire
//-rvf : ajouter un fichier
//-xvf : extraire les fichiers de l'archive
//gzip : c'est le plus connu et le plus utilisé ;
gzip tutoriels.tar
Pour décompresser l'archive ensuite, il suffit d'utiliser "gunzip" ://gunzip tutoriels.tar.gz
//bzip2 : il est un peu moins fréquemment utilisé. Il compresse mieux mais plus lentement que gzip.
bzip2 tutoriels.tar
bunzip2 tutoriels.tar.bz2
//À noter qu'il existe aussi le vieux programme compress. Il n'est cependant plus vraiment utilisé
"tar -zcvf" : //archiver et compresser en gzip
tar -zcvf tutoriels.tar.gz tutoriels/
tar -zxvf tutoriels.tar.gz//pour decompresser
tar -jcvf :// archiver et compresser en bzip2
tar -jcvf tutoriels.tar.bz2 tutoriels/
tar -jxvf tutoriels.tar.bz2 tutoriels//pour decompresser
Vous pouvez toujours analyser le contenu de l'archive avant de la décompresser. Avec -ztf, vous regarderez
à l'intérieur d'une archive « gzippée » et avec -jtf, vous regarderez à l'intérieur d'une archive « bzippée-deux ».
zcat, zmore & zless :// afficher directement un fichier compressé
Parfois, on compresse non pas une archive tar mais directement un fichier.
//gzip l-heritage.tuto
zcat : équivalent de cat, capable de lire un fichier compressé (gzippé).
zmore : équivalent de more, capable de lire un fichier compressé (gzippé).
zless : équivalent de less, capable de lire un fichier compressé (gzippé).
unzip : décompresser un .zip//unzip archive.zip
Pour voir le contenu d'une archive zip sans l'extraire, utilisez -l ://unzip -l tutoriels.zip
zip -r tutoriels.zip tutoriels///permet de compresser un fichier zip
unrar : décompresser un .rar
unrar e tutoriels.rar//permet d'extraire
$ unrar l tutoriels.rar//permet de lister les fichier avant de les decompresser

//la connection sécurisé a distance avec ssh
//Transformer sa machine en serveur

sudo apt-get install openssh-server//installation

Normalement, le serveur SSH sera lancé à chaque démarrage. Si ce n'est pas le cas, vous pouvez
le lancer à tout moment avec la commande suivante ://sudo /etc/init.d/ssh start
Et vous pouvez l'arrêter avec cette commande ://sudo /etc/init.d/ssh stop
Logiquement, vous ne devriez pas avoir besoin de configurer quoi que ce soit, mais sachez au besoin
que le fichier de configuration se trouve dans" /etc/ssh/ssh_config". Il faudra recharger SSH avec
la commande "sudo /etc/init.d/ssh reload" pour que les changements soient pris en compte.
//Se connecter via SSH à partir d'une machine Linux
Ouvrez une console sur le second PC et utilisez la commande ssh comme ceci ://ssh login@ip
Il faut remplacer login par votre login (mateo21, dans mon cas) et ip par l'adresse IP de votre ordinateur.

//Si le serveur tourne sur un autre port, il faudra préciser le numéro de ce port comme ceci :
ssh mateo21@87.112.13.165 -p 12451 (si le serveur fonctionne sur le port 12451 au lieu du port 22).
Pour vous déconnecter, tapez logout ou son équivalent : la combinaison de touches Ctrl + D.

//Se connecter via SSH à partir d'une machine Windows

//Authentification par clé depuis Linux
//Opérations sur la machine du client
Il faut sur la machine du client taper la commande suivante pour générer une paire de clés publique / privée :
"ssh-keygen -t rsa"//on peut mettre dsa si on veut l'utiliser a la place de rsa

Ensuite, on vous demande une passphrase qui va servir à chiffrer la clé privée pour une meilleure sécurité.

- soit vous tapez Entrée directement sans rien écrire, et la clé ne sera pas chiffrée sur votre machine ;
- soit vous tapez un mot de passe de votre choix, et la clé sera chiffrée.
  //Envoyer la clé publique au serveur
  -vous pouvez déjà vous rendre dans le dossier .ssh, pour commencer :
  -Les trois fichiers sont :
  id_rsa ://votre clé privée, qui doit rester secrète. Elle est chiffrée si vous avez rentré une passphrase ;
  id_rsa.pub ://la clé publique que vous pouvez communiquer à qui vous voulez, et que vous devez envoyer au serveur ;
  known_hosts : //c'est la liste des fingerprint que votre PC de client tient à jour. Ça lui permet de se souvenir de
  //l'identité des serveurs et de vous avertir si, un jour, votre serveur est remplacé par un autre
  -L'opération consiste à envoyer la clé publique (id_rsa.pub) au serveur et à l'ajouter à son
  fichier authorized_keys (clés autorisées). Le serveur y garde une liste des clés qu'il autorise à se connecter.
  -Le plus simple est d'utiliser la commande spéciale ssh-copy-id.//ssh-copy-id -i id_rsa.pub login@ip
  -Maintenant, connectez-vous au serveur comme vous le faisiez auparavant ://ssh login@ip
  //L'agent SSH
  L''agent SSH est un programme qui tourne en arrière-plan en mémoire.
  Il retient les clés privées pendant toute la durée de votre session.
  Tout ce que vous avez à faire est de lancer le programme ssh-add sur le PC du client :
  Il va automatiquement chercher votre clé privée. Pour la déchiffrer, il vous demande la passphrase. Entrez-la.

pour lancer l'agent ssh
ssh-agent /bin/bash
Prérequis : Le paquet openssh-askpass doit être installé. Cela peut être vérifié en tapant rpm -q openssh-askpass.

//monter un serveur de fichier sous linux
un serveur est un logiciel qui fournit un service à d’autres logiciels
//wget : téléchargement de fichiers
Il suffit d'indiquer l’adresse HTTP ou FTP d'un fichier à télécharger
"wget http://cdimage.debian.org/debian-cd"
//Reprendre un téléchargement arrêté
$ wget -c http://cdimage.debian.org/debian-cd/4.0_r5/i386/iso-cd/ debian-40r5-i386-businesscard.iso
--background//Lancer un téléchargement en tâche de fond
scp //: copier des fichiers sur le réseau
"scp fichier_origine copie_destination"
"scp image.png mateo21@85.123.10.201:/home/mateo21/images/"
//Copier un fichier d'un autre ordinateur vers le vôtre
scp mateo21@85.123.10.201:image.png copie_image_sur_mon_pc.png
scp mateo21@85.123.10.201:image.png .//copier un fichier depuis serveur sur mon ordinateur
si le port est different de 22//scp -P 16296 mateo21@85.123.10.201:image.png .

//ftp & sftp : transférer des fichiers
Le FTP (File Transfer Protocol) est un protocole permettant d échanger des fichiers sur le réseau.
On l utilise en général dans deux cas.
Pour télécharger un fichier depuis un serveur FTP public. En général, les navigateurs web font cela de manière
automatique et transparente lorsque vous cliquez sur un lien de téléchargement.
La connexion se fait alors en mode anonyme.
Pour transférer des fichiers vers un serveur FTP privé (et éventuellement en télécharger aussi).
Lorsque l'on prend un hébergement pour son site web, l'hébergeur nous donne en général des
accès FTP pour aller y déposer les fichiers du site.
La connexion se fait donc en mode authentifié.
//Connexion à un serveur FTP
ftp ftp.debian.org
le login à utiliser est toujours "anonymous".
//Le transfert de fichiers
put envoie un fichier vers le serveur
get télécharge un fichier depuis le serveur.
"get README""//Vous pouvez par exemple récupérer le fichier README en écrivant
il suffit de faire précéder les commandes d'un point d'exclamation pour
qu'elles s'exécutent chez vous et non sur le serveur FTP.// !cd !ls
//Les autres commandes
Pour quitter:"Ctrl + D" ou "bye","exit" et "quit"
//sftp : un FTP sécurisé
rsync : //synchroniser des fichiers pour une sauvegarde
//Sauvegarder dans un autre dossier du même ordinateur
rsync -arv Images/ backups/
-a : conserve toutes les informations sur les fichiers, comme les droits (chmod), la date de modification, etc.
-r : sauvegarde aussi tous les sous-dossiers qui se trouvent dans le dossier à sauvegarder
-v : mode verbeux, affiche des informations détaillées sur la copie en cours.
rsync -arv --delete Images/ backups/ //pour supprimer les fichier qui ne sont pas dans mon repertoire
--backup//$ rsync -arv --delete --backup --backup-dir=/home/mateo21/backups_supprimes Images/ backups/
//Sauvegarder sur un autre ordinateur
$ rsync -arv --delete --backup --backup-dir=/home/mateo21/fichiers_supprimes Images/ mateo21@IP_du_serveur:mes_backups/
$ rsync -arv --delete --backup --backup-dir=/home/mateo21/fichiers_supprimes Images/ mateo21@IP_du_serveur:mes_backups/ -e "ssh -p 12473"

//Analyser le réseau et filtrer le trafic avec un pare-feu
//host & whois : qui êtes-vous ?
host//Convertir une IP en nom d'hôte et inversement
sudo nano /etc/hosts//pour modifier la listes des correspondance ip nom de domaine
whois :// tout savoir sur un nom de domaine
//ifconfig & netstat : gérer et analyser le trafic réseau

"ifconfig interface etat"//ifconfig eth0 down ou up
"interface" par le nom de l interface que vous voulez modifier (eth0, wlan0…) ;
"etat" par up ou down selon si vous voulez activer ou désactiver l interface.
netstat :// statistiques sur le réseau
netstat -uta :// lister toutes les connexions ouvertes
-u : afficher les connexions UDP ;
-t : afficher les connexions TCP ;
-a : afficher toutes les connexions quel que soit leur état.
-n :afficher les numéros des ports
-l :vous permet de filtrer les connexions à l état LISTEN
De nombreux états sont possibles ; en voici quelques-uns à connaître :

ESTABLISHED : la connexion a été établie avec l ordinateur distant ;

TIME_WAIT:la conexion atend le traitement de tous les paquet encore sur le réseau avant de start la fermeture ;
CLOSE_WAIT:le serveur distan a arêté la conexion de lui-m (maybe parcqu vous ête resté inactif trop longtemps?) ;
CLOSED : la connexion n est pas utilisée ;
CLOSING : la fermeture de la connexion est entamée mais toutes les données n ont pas encore été envoyées ;
LISTEN : à l écoute des connexions entrantes.
netstat -lt : //liste des connexions en état d'écoute
netstat -s : statistiques résumées

//iptables : le pare-feu de référence
iptables -L : afficher les règles
iptables -F <-- Attention ! Réinitialise toutes les règles iptables !
//Ajouter et supprimer des règles
Voici les principales commandes à connaître.
-A chain : ajoute une règle en fin de liste pour la chain indiquée (INPUT ou OUTPUT, par exemple).
-D chain rulenum : supprime la règle n° rulenum pour la chain indiquée.
-I chain rulenum : insère une règle au milieu de la liste à la position indiquée par rulenum.
Si vous n'indiquez pas de position rulenum, la règle sera insérée en premier, tout en haut dans la liste.
-R chain rulenum : remplace la règle n° rulenum dans la chain indiquée.
-L : liste les règles (nous l'avons déjà vu).
-F chain : vide toutes les règles de la chain indiquée. Cela revient à supprimer toutes les règles
une par une pour cette chain.
-P chain regle : modifie la règle par défaut pour la chain. Cela permet de dire, par exemple,
que par défaut tous les ports sont fermés, sauf ceux que l on a indiqués dans les règles.
"iptables -A (chain) -p (protocole) --dport (port) -j (décision)""
Remplacez chain par la section qui vous intéresse (INPUT ou OUTPUT), protocole par le nom du protocole
à filtrer (TCP, UDP, ICMP…) et enfin décision par la décision à prendre : ACCEPT pour accepter le paquet,
REJECT pour le rejeter ou bien DROP pour l ignorer complètement.
iptables -A INPUT -p tcp --dport ssh -j ACCEPT// pour le web (80).
iptables -A INPUT -p tcp --dport imap2 -j ACCEPT//pour les mails, etc.
Autoriser les pings

# iptables -A INPUT -p icmp -j ACCEPT

NB//Si vous ne précisez pas de port (en omettant la section dport), tous les ports seront acceptés !
//Autoriser les connexions locales et déjà ouvertes

# iptables -A INPUT -i lo -j ACCEPT

# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

Refuser toutes les autres connexions par défaut

# iptables -P INPUT DROP

//COMPILER UN PROGRAMMES DEPUIS LES SOURCES
NB//Notez que le programme alien est capable de convertir un .rpm en .deb au besoin
Quand il n'y a pas d'autre solution : la compilation
Si le programme que vous recherchez n'est pas dans les dépôts (apt-get) et que vous ne parvenez pas non
plus à trouver de .deb prêt à l'emploi sur le web, vous allez devoir le compiler depuis ses sources

Pour compiler des programmes, il faut installer les outils de compilation. le paquet "build-essential" 1. télécharger les sources du programme sur le web (souvent archivées au format .tar.gz) ; 2. décompresser l archive (tar zxvf archive.tar.gz) ; 3. exécuter ./configure et résoudre les problèmes ; 4. exécuter make pour compiler ; 5. exécuter sudo make install pour installer le programme.
//exemple
tar zxvf htop-0.8.3.tar.gz
cd htop-0.8.3
./configure //configure est un programme qui analyse votre ordinateur et qui vérifie si tous les outils
// nécessaires à la compilation du logiciel que vous souhaitez installer sont bien présents
s il y a des packet manquant il faut alors aller sur internet chercher le nom du packet manquant
sudo apt-get install libncurses5-dev//c'etait notre packet manquant
Il suffit maintenant de lancer la compilation à l’aide d’une commande toute simple : 'make'
sudo make install//pour l'installatin
sudo make uninstall//pour désinstaller,exécuter cette commande depuis le répertoire où vous l'avez compilé :

Emacs//VIM l'editeur de texte du programmeur
Vimtutor :// le programme qui vous apprend à utiliser Vim !
Mode interactif : //c'est le mode par défaut par lequel vous commencez.
Mode insertion : //Pour entrer dans ce mode appuyer sur la touche i(insertion). Pour sortir "Echap".
Mode commande ://pour activer ce mode appuyer sur la touche deux points « : »
//etape d'utilisation de vim
i : insérer du texte
h,j,k,l : //se déplacer dans tous les sens
0et$ : //se déplacer en début et fin de ligne
w :// se déplacer de mot en mot
:w :// enregistrer le fichier
:q : quitter
vim nous interdit de quitter sans enregistrer les modification toutefois pour force la fermeture //:q!
x : effacer des lettres
dd : supprimer une ligne//2dd
dw(3dw) : supprimer un mot(rm 3 mots)//il faut se placer au debut du mot
d0,// vous supprimez du curseur jusqu'au début de la ligne.
d$,// vous supprimez du curseur jusqu'à la fin de la ligne.
yy : copier une ligne en mémoire//yd,y$,y0
p : coller
r : //remplacer une lettre
R : // vous basculerez cette fois dans le mode remplacement
u : annuler les modifications
Pour répéter un changement (= annuler une annulation), appuyez sur "Ctrl + R".
G : sauter à la ligne n° X
Pour sauter à la dernière ligne, tapez simplement "G".
Pour revenir à la première ligne, tapez "gg".
/ ou ? : rechercher un mot
pour passer d une occurrences a une autre appuyez sur "n". Pour rechercher en arrière, sur "N"(Maj + n)
:s // rechercher et remplacer du texte
:s/ancien/nouveau //: remplace la première occurrence de la ligne où se trouve le curseur ;
:s/ancien/nouveau/g //: remplace toutes les occurrences de la ligne où se trouve le curseur ;
:#,#s/ancien/nouveau/g// : remplace toutes les occurrences dans les lignes n° # à # du fichier ;
:%s/ancien/nouveau/g //: remplace toutes les occurrences dans tout le fichier.
:r : fusion de fichiers//:r autrefichier
//Le découpage d'écran (split)
Vim possède une fonctionnalité pratique : il permet de découper l'écran et d'ouvrir plusieurs fichiers
:sp ou :sp autrefichier// : découper l'écran horizontalement
:vsp : découper l écran verticalement
Ctrl + w puis Ctrl + w :// navigue de viewport en viewport. Répétez l'opération plusieurs fois pour accéder
Ctrl + w puis j :// déplace pour aller au viewport juste en dessous. fonctionne avec les touches h,j,k et l
Ctrl + w puis + :// agrandit le viewport actuel.
Ctrl + w puis - :// réduit le viewport actuel.
Ctrl + w puis = :// égalise à nouveau la taille des viewports.
Ctrl + w puis r :// échange la position des viewports. Fonctionne avec « R » pour échanger en sens inverse.
Ctrl + w puis q :// ferme le viewport actuel.

//Comparer des fichiers

diff : Comparaison ligne par ligne de deux fichiers texte.
cmp : Comparaison octet par octet de deux fichiers.

/LA COMMANDE SED
Bonjour,

Ceci est un fichier de test.
Ici la ligne numéro 4.

# ceci pourrait être un commentaire
Ici la ligne numéro 7.

Au revoir
On peut écrire le script directement dans la ligne de commande, avec l'option sed -e . On séparera les commandes
avec des point-virgules.
C'est la façon "uniligne", souvent très pratique.
On peut passer à sed un fichier externe (par exemple myscript.sed) contenant le script, avec sed -f script-file .
Cela assure une meilleure lisibilité pour les gros scripts, et permet aussi de réutiliser un script.

sed '' test.txt//Vous pouvez voir que sed lancé avec un script vide renvoie simplement le contenu du fichier.
$ sed '4,7 d' test.txt//Cette commande va effacer toutes les lignes comprises entre la ligne 4 et la ligne 7.
sed '/^#/ d' test.txt supprimera toutes les lignes commençant par une dièse
sed '/^Bonjour/,/^Au revoir/d' test.txt supprimera toutes les lignes comprises entre 'Bonjour' et 'Au revoir', donc tout le fichier.
sed -i 's/mot_original/nouveau_mot/' file.txt//permet de remplacer le premier mot trouver dans le text par un otre mot
sed -i 's/mot_original/nouveau_mot/' file.txt// permet de remplacer tous les occurences

---

Chroot : changement de dossier racine
La commande chroot permet de changer le répertoire racine vers un nouvel emplacement.

---

    	L'outil systemctl permet de configurer les services qui sont lancés au démarrage.

Activer un service au démarrage: "systemctl enable nom_du_service.service"
exemple: # systemctl enable sshd.service
Désactiver un service au démarrage : "systemctl disable nom_du_service.service"
Statut d''un service : # systemctl is-active nom_du_service.service ou systemctl status nom_du_service.service
lister tous les services actives :systemctl list-units --type=service
Demarrer un service :"systemctl start nom_du_service.service"
Redémarrer un service:"systemctl restart nom_du_service.service"
Créer un service simple

Il y a peut être mieux, mais j'utilise ceci et cela fonctionne.

Je n'ai testé que des services "simples" qui exécutent une commande au démarrage. Cela permet d'éviter de tout mettre dans le rc.local.

Voici comment créer un service, avec une commande :

Créer le fichier /etc/systemd/system/mon-service.service

Code BASH :
[Unit]
Description=Je dis ici à quoi sert le service
ConditionPathExists=/usr/sbin/commande
[Service]
Type=forking
ExecStart=/bin/sh -c 'commande'
TimeoutSec=0
StandardOutput=tty
RemainAfterExit=yes
SysVStartPriority=99
[Install]
WantedBy=multi-user.target

Ensuite, rendre exécutable ce service :

Code BASH :
chmod a+x /etc/systemd/system/mon-service.service

On recharge systemd

Code BASH :
systemctl --system daemon-reload

On tente de démarrer le service et on constate que ça marche bien :

Code BASH :
systemctl start mon-service.service

On peut ajouter ce service au démarrage si on le souhaite :

Code BASH :
systemctl enable mon-service.service

---
