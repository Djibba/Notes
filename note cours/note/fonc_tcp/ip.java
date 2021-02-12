Le modèle OSI est une norme qui préconise comment les ordinateurs devraient communiquer entre eux.

										Cartes d'identité des couches du modèle OSI
La couche 1 ou couche physique :
			Nom : physique.
			Rôle : offrir un support de transmission pour la communication.
			Rôle secondaire : RAS.
			Matériel associé : le hub, ou concentrateur en français.
La couche 2 ou couche liaison :
			Nom : liaison de données.
			Rôle : connecter les machines entre elles sur un réseau local.
			Rôle secondaire : détecter les erreurs de transmission.
			Matériel associé : le switch, ou commutateur.
La couche 3 ou couche réseau :
			Nom : réseau.
			Rôle : interconnecter les réseaux entre eux.
			Rôle secondaire : fragmenter les paquets.
			Matériel associé : le routeur.
La couche 4 ou couche transport :
			Nom : transport.
			Rôle : gérer les connexions applicatives.
			Rôle secondaire : garantir la connexion.
			Matériel associé : RAS.
La couche 5 ou couche session : on s'en fiche !
			Oui, vous m'avez bien lu, au-delà de la couche 4, on s'en fiche ! Bon, j'exagère un poil, mais pas tant que ça.
			La raison est simple : le modèle OSI est un modèle théorique. Le modèle sur lequel s'appuie Internet aujourd'hui est le modèle
			TCP/IP. Or, ce modèle n'utilise pas les couches 5 et 6, donc... on s'en fiche !
			Bon, je crois que vous avez compris ! Par contre, la couche 7 existe bien. Et c'est pour elle que nous mettons tout cela en place, le
			grand manitou, le patron, l'application !
La couche 7 ou couche application :
			Nom : application.
			Rôle : RAS.
			Rôle secondaire : RAS.
			Matériel associé : le proxy.

Le modèle OSI ajoute deuxrègles plus générales entre les couches :
    --->chaque couche est indépendante ;//chaque couche peut etre changer sans impact sur les autres
    --->chaque couche ne peut communiquer qu avec une couche adjacente//, on parcourt le modèle OSI de haut en bas, 
    //en traversant toutes les couches.
//COUCHE 1
    //MATERIELS ET CABLE
Le nom scientifique donné au "câble coaxial" est donc le "10B2" ou "10B5"
le 10 //indique le débit en Mbps (mégabits par seconde) ;
le B //indique la façon de coder les 0 et les 1, soit ici la bande de Base ;
le dernier chiffre //indique la taille maximale du réseau, exprimée en mètres et divisée par 100.
//paire torsadée
 on l'appelle aussi le 10BT, ou 100BT ou 1000BT, selon le débit utilisé (10 Mbps, 100 Mbps, 1000 Mbps) le T étant là pour «
torsadé », ou twisted en anglais. On ajoute parfois un x derrière, pour dire que le réseau est commuté
NB //Et ne confondez pas le câble à paires torsadées avec les prises de ce câble, RJ45 ! Ne me parlez donc pas de câble RJ45,cela n'existe pas !
-----> pour relier deux machines directement entre elles, il faut un câble croisé.
Ah bon ? Pourtant je connecte mon ordinateur sur ma box et j'utilise un câble droit ! Il peut y avoir deux raisons à cela :
// la prise femelle sur la boxa déjà ses connexions transmission et réception inversées ;
// les prises femelles de ma box et de mon ordinateur sont capables de s'adapter et d'inverser les connexions de
// transmission et réception si besoin.

//----LE HUB (concentrateur en francais)
Mais pour pouvoir relier plusieurs machines entre elles sur un réseau, il faut utiliser un matériel de connexion. Et pour la couche
1, il s'agit du hub (ou concentrateur en français). Le hub est une machine composée de plusieurs prises RJ45 femelles et qui a
 pour rôle de relier les machines entre elles (voir la figure suivante).
// Seulement, le hub a un fonctionnement particulier. Imaginez qu'il y ait 5 machines branchées au hub, les machines A, B, C, D et E.
// Si A veut parler à C, elle va envoyer l'information au hub. Mais lui ne sait pas lire ! Il va donc envoyer l'information à toutes les
// machines en se disant qu'il y en aura bien une dans le tas qui sera la bonne !
// Les machines B, D et E vont voir que l'information n'est pas pour elles et vont la jeter, alors que la machine C va pouvoir la lire !
// (on voit tout de suite qu'un hub n'est pas top pour la confidentialité des données...).

 //----FIBRE OPTIQUE
Avec la fibre optique, nous transportons des 0 et des 1, non plus avec de l'électricité mais avec de la lumière !
Le nom scientifique de la fibre est communément le 1000BF. Du gigabit avec le F pour... Fibre 

//LA TOPOLOGIE RESAU Les 3 topologies
En réseau, la topologie est la manière selon laquelle on branche les machines entre elles.
Il y a trois topologies principales :
    --->la topologie en bus ;
    --->la topologie en anneau ;
    --->la topologie en étoile.

 // le CSMA/CD :
		On écoute en permanence sur le bus pour savoir si quelqu'un parle ou s'il y a une collision.
		On ne peut parler que quand le bus est libre.
		Si jamais on parle, mais qu'une collision survient (parce que quelqu'un a eu la même idée que nous) on doit se taire.
		On attend un temps aléatoire.
		On reparle.
		Si jamais il y a une collision, on revient à l'étape 4, sinon, c'est bon !

// COUCHE 2 :Faire communiquer les machines entre elles
//-------ADDRESS MAC
L'adresse MAC est l'adresse d'une carte réseau.
Elle est unique au monde pour chaque carte.
Elle est codée sur 6 octets (soit 48 bits).
L'adresse de broadcast est une adresse universelle qui identifie n'importe quelle carte réseau.
//-----À quoi sert un protocole ?
L'objectif des réseaux est de pouvoir s'échanger des informations. Étant donné que nous discutons
entre des machines très différentes, qui elles-mêmes ont des systèmes d'exploitation très différents
(Windows, Mac OS, Linux, etc.), nous devons créer un langage de communication commun pour se comprendre. C'est le protocole.
//La trame est le message envoyé sur le réseau, en couche 2.
//------Qu'est-ce que le CRC ?
Le CRC est une valeur mathématique qui est représentative des données envoyées.
En gros cela veut dire que c'est un nombre qui sera différent pour chaque message.
Imaginons qu'une machine A envoie un message à une machine B.
Lors de l'envoi, A calcule le CRC (une valeur X) et le met à la fin de la trame.
B reçoit le message et fait le même calcul que A avec la trame reçue (une valeur Y).
B compare la valeur qu'elle a calculée (Y) avec la valeur que A avait calculée et mise à la fin de la trame (X).
Si elles sont égales, bingo ! La trame envoyée par A est bien identique à la trame reçue par B.
Si elles sont différentes, gloups ! Il y a eu une erreur lors de la transmission. La trame reçue par B 
n'est apparemment pas la même que celle envoyée par A. Il y a eu un problème quelque part, mais nous l'avons détecté !
//Nous savons donc maintenant tout de la trame Ethernet ! Récapitulons un peu, en observant 
Adresse MAC 25---->Adresse MAC 23 (source)------>Protocole de couche 3------->Données à envoyer------>CRC
//Une application sur la machine A veut envoyer des données à une autre application sur une machine B.
Le message parcourt les couches du modèle OSI de haut en bas.
La couche 3 indique à la couche 2 quel protocole a été utilisé.
La couche 2 peut alors former la trame et l'envoyer sur le réseau.
La machine B reçoit la trame et regarde l'adresse MAC de destination.
C'est elle ! elle lit donc la suite de la trame.
Grâce à l'information sur le protocole de couche 3 utilisé, elle peut envoyer les données correctement à la couche 3.
Le message remonte les couches du modèle OSI et arrive à l'application sur la machine B.
//RECAPITULATION COUCHE 2
on sait maintenant que le rôle principal de la couche 2 est de connecter les machines sur un réseau local ;
elle permet aussi de détecter les erreurs ;
le protocole utilisé en couche 2 est le protocole Ethernet ;
les cartes réseau ont une adresse qui est l'adresse MAC ;
l'adresse MAC est codée sur 6 octets, soit 48 bits ;
chaque adresse MAC est unique au monde ;
il existe une adresse particulière, l'adresse de broadcast qui permet de parler à tout le monde, ff:ff:ff:ff:ff:ff ;

//Un matériel, le commutateur
Le commutateur est un matériel qui va pouvoir nous permettre de relier plusieurs machines entre elles.
On l'appelle aussi switch en anglais. Ce terme étant très souvent utilisé en français, nous pourrons donc utiliser les deux.
//ENVOI DE DONNE
Quand la machine 23 voudra envoyer une trame à la machine 25, 
le switch lira l'adresse destination et saura alors vers quel port renvoyer la trame :
//mise à jour de la table CAM
trame envoyée de 23 à 25
La trame arrive au switch.
Il lit l'adresse MAC source et voit l'adresse MAC de la machine 23.
Vu que la trame vient du port 1, il met en relation le port 1 et l'adresse MAC de la machine 23 dans sa table CAM.
Il met à jour sa table CAM.
//Le TTL veut dire Time To Live en anglais, soit Durée De Vie. Il représente donc une durée.

---->Le fait d'abandonner le CSMA/CD porte un nom. On dit que la carte réseau fonctionne en full duplex.
---->À l'inverse, quand on fait du CSMA/CD sur un hub ou un câble coaxial, la carte réseau fonctionne en half duplex.
//recapitulation switch
on peut dire que la commutation a apporté un gain gigantesque aux réseaux :
Les conversations sont isolées, ce qui apporte un gain en sécurité.
On peut recevoir en même temps que l'on envoie des données, ce qui double théoriquement le débit.
Chaque machine peut parler quand elle le souhaite et n'a pas à attendre que le réseau soit libre, on gagne encore en débit.
//LES VLAN
Un VLAN est la capacité de séparer des ports d'un switch dans des réseaux différents.
Un VLAN permet donc d'isoler certains ports d'un switch par rapport aux autres, comme si l'on coupait le switch en deux.

//un peu de pratique
Vous venez de créer ce que l'on appelle une boucle de commutation et ceci est très grave !

Cette boucle est grave, car elle offre deux chemins possibles pour atteindre une destination.
Dans le cas de l'envoi d'une trame vers une machine, le switch empruntera ces deux chemins et 
la trame arrivera à destination deux fois. Pas de quoi fouetter un tchat !
Néanmoins, cela devient très gênant dans le cas d'un broadcast !
En effet, notre broadcast va être envoyé sur les deux chemins puis, arrivé au prochain switch, 
il va être renvoyé par les deux chemins possibles puis, arrivé au prochain switch, renvoyé par les deux chemins possibles, etc.

//couche 3 : Le rôle de la couche 3 est donc d'interconnecter les réseaux.
La commande traceroute permet d'indiquer par quelles machines nous passons pour aller d'un point à un autre sur
Internet(tracert).
//masque de sous reseau
Dans un masque en binaire, il doit y avoir les 1 à gauche et les 0 à droite.
On ne peut pas mélanger les 1 et les 0.
Par exemple, ce masque est correct: 11111111.1111100000000000.00000000.
Mais celui-ci est incorrect: 11111111.11100011.00000000.00000000.

La première adresse du réseau est celle dont tous les bits de la partie machine sont à 0 ; la dernière adresse
du réseau est celle dont tous les bits de la partie machine sont à 1.
//calcule  de nbre de machine dans un reseau
vu que la partie machine est définie par le masque, le nombre de machines disponibles dans un réseau est directement
dépendant du masque !
La relation est même encore plus explicite : "nombre de machines dans un réseau" = 2^(Nombre de 0 dans le masque)
//exemple d'application
Premier exemple
 on donne donc le couple :
192.168.0.15/255.255.255.240
Comment allons-nous procéder ?
Comme auparavant, nous allons calculer la première et la dernière adresse du réseau ainsi défini.
 Ensuite, nous regarderons
simplement si l'adresse donnée est l'une des deuxou pas.
192.168.0.15 -> 11000000.10101000.00000000.00001111
255.255.255.240 -> 11111111.11111111.11111111.11110000
Je fixe la partie réseau dans l adresse : '11000000.10101000.00000000.0000'1111
Et je fais varier les bits de la partie machine en mettant tout à 0, puis tout à 1
'11000000.10101000.00000000.0000'0000' -> 192.168.0.0
'11000000.10101000.00000000.0000'1111 -> 192.168.0.15
Nous avons donc trouvé 192.168.0.0 comme adresse de réseau et 192.168.0.15 comme adresse de broadcast. 
L'adresse donnée dans l'exercice, 192.168.0.15, est donc l'adresse de broadcast !

NB//Une adresse de broadcast est toujours impaire ; une adresse de réseau est toujours paire.
//---------------DECOUPAGE D UNE PLAGE D ADDRESS
Découpage avec la méthode magique
Qu'est-ce que la méthode magique ?
La méthode magique est une méthode qui va nous permettre de calculer très facilement
des plages d'adresses réseau, et bien plus encore !
//Pour utiliser la méthode magique, nous allons devoir utiliser le nombre magique...
Le nombre magique est simplement un calcul fait à partir de l'octet significatif du masque.
 Il est égal à 256 - octet significatif .Par exemple, si l'on choisit le masque 255.224.0.0,on voit vite que
 l octet significatif (celui où la séparation a lieu) est 224.Notre nombre magique vaut donc 256 - 224 = 32.
 Allons-y pour les multiples de 32 : 0, 32, 64, 96, 128, 160, 192, 224, 256.
 //Et maintenant, nous allons simplement appliquer les deuxrègles suivantes :
La première adresse du réseau sera le multiple du nombre magique, inférieur ou 
égal à l'octet correspondant dans l'adresse.
La dernière adresse du réseau sera le multiple suivant, moins 1.

//exemple d'application de la methode magique
Prenons un nouvel exemple : 10.45.185.24/255.255.248.0
Le nombre magique vaut : 256 - 248 = 8 ; l'octet significatif du masque est le troisième, ce qui correspond à 185 dans l'adresse.
Nous devons donc trouver le multiple de 8 strictement inférieur à 185... Pas la peine de commencer à 0 !
8 * 10 = 80, on est en dessous de 185.
8 * 20 = 160, on est en dessous, mais on se rapproche.
Commençons donc à 160 :
160, 168, 176, 184, 192... STOP ! On est au-dessus de 185.
Le multiple strictement inférieur est 184, celui du dessus moins un vaut 191. Ce qui nous donne pour la première adresse
10.45.184.0, et pour la dernière 10.45.191.255.
Facile, non ?

//Un exemple concret de decoupage
//enoncé
Vous avez en charge le réseau d'une petite entité d'une entreprise.
 L'administrateur général vous laisse à disposition le réseau :192.168.160.0/255.255.224.0.
Vous avez dans votre entité trois catégories de personnel :550 techniciens ;130 commerciaux;10 directeurs.
Il vous faut donc découper la plage d'origine en trois sous-réseaux pour chacune de ces populations
//Étape 1: Calcul de la plage d'origine
1. Le nombre magique vaut: 256 - 224 = 32.
2. L'octet significatif de l'adresse vaut 160, qui est un multiple de 32 ! Ce sera donc la première adresse,
 la dernière étant 160 + 32 - 1 = 191.
3. La première adresse est 192.168.160.0 et la dernière est 192.168.191.255.
//Étape 2: Calcul des masques
La formule est : nb adresses = 2nb de 0 dans le masque.
Pour les techniciens, qui sont 550, le réseau devra contenir 1024 adresses (la puissance de 2 supérieure) soit 210.
Le masque contiendra donc 10 bits à 0, soit : 11111111.11111111.11111100.00000000.
Soit en décimal : 255.255.252.0.
Nous pouvons faire pareil pour les commerciaux: 130 < 28. Le masque est donc : 255.255.255.0.
Et pour les directeurs, nous trouvons : 10 < 24.Le masque est donc : 255.255.255.240.
//Étape 3: Calcul des plages
Nous allons commencer par les techniciens. Notre plage de départ démarre en 192.168.160.0. 
Eh bien nous allons commencer la plage des techniciens à cette adresse, et allons trouver 
l''adresse de fin grâce au masque.Calculons le nombre magique : 256 - 252 = 4.
Le prochain multiple de 4 après 160 est 164 - 1 = 163.
La dernière adresse pour les techniciens est donc 192.168.163.255.
Pour les commerciaux, nous allons donc démarrer à l'adresse juste après pour ne pas empiéter 
sur la plage des techniciens, soit 192.168.164.0.
Nous allons nous passer du nombre magique pour les commerciaux, car la coupure se fait parfaitement 
entre deuxoctets sur le masque. L'adresse de fin est donc facilement calculée à 192.168.164.255.
Nous démarrons après pour les directeurs, à l adresse 192.168.165.0. Le nombre magique vaut 256 - 240 = 16
La dernière adresse est donc 192.168.165.15 !
//resultat
Tech: 192.168.160.0/255.255.252.0, soit les adresses allant de 192.168.160.0 à 192.168.163.255.
Comm: 192.168.164.0/255.255.255.0, soit les adresses allant de 192.168.164.0 à 192.168.164.255.
Dirs: 192.168.165.0/255.255.255.240, soit les adresses allant de 192.168.165.0 à 192.168.165.15.

//----------------LE ROUTAGE

//PROTOCOLE IP
Pour le protocole IP, le message s'appelle un datagramme ou un paquet.
Au passage par la couche 4, on ajoutera l'en-tête de couche 4, puis celui de couche 3
 en passant par la couche 3, et ainsi desuite.
Ce mécanisme s appelle "l encapsulation", car on encapsule un message dans un autre
//trame
Adrs MAC DST ->Adrs MAC SRC ->Prtocol de couch 3-> en-tête de couch 3-> en-tête de couche 4-> Donné à envoyer ->CRC
//datagrame ou packet
???-> Adresse IP SRC (source) ->Adresse IP DST (destination) ->Données à envoyer
//pourquoi commencé par l'address ip source
Quand un message arrive sur une machine, il remonte les couches du modèle OSI de la couche 1 à la couche 7.
 Il passe donc par 
 la couche 2 qui lit l'adresse MAC de destination :
si c'est bien celle de la carte réseau, il lit le reste de la trame, puis transmet
 les données (le datagramme en fait !) à lacouche 3 ;
si ce n'est pas celle de la carte réseau, il jette la trame à la poubelle.
Donc si le message arrive à la couche 3, cela veut obligatoirement dire que la machine sait déjà
 que le message lui est destiné,puisque l'adresse MAC de destination est la sienne.
 Elle n'a donc pas la nécessité de savoir immédiatement si l'adresse IP de
destination est la sienne, puisqu elle sait déjà que le datagramme est pour elle.
//Le routeur
Le routeur est un matériel de couche 3 qui relie plusieurs réseaux.
un routeur est une machine possédant plusieurs interfaces ;
chaque interface d'un routeur est connectée à un réseau, le routeur relie ainsi plusieurs réseaux entre eux ;
toute machine ayant plusieurs interfaces peut jouer le rôle de routeur, même le vieux PC de mamie ;
un routeur se différencie d'une simple machine, car il accepte de relayer des paquets qui ne lui sont pas destinés ;
un routeur aiguille les paquets grâce à sa table de routage ;
la table de routage indique quelle passerelle utiliser pour joindre un réseau.
Il est important de bien comprendre et retenir ce qui précède, car le routage est la base du fonctionnement d'Internet !
Si l'on reprend le dernier point, la table de routage indique quelle passerelle utiliser pour joindre un réseau.
//mise en place de la table de routage
Maintenant, essayons d'écrire la table de routage du routeur 1.

Pour cela, je vais vous donner une méthode qui s'appliquera toujours et qui fonctionnera pour tous les cas :
indiquer les réseaux auxquels ma machine est connectée ;
indiquer la route par défaut ;
indiquer tous les autres réseaux que je ne peux pas encore joindre avec les deux étapes précédentes.
//tp linux
ifconfig etho 192.168.1.2 netmask 255.255.255.0//permet de changer d'address ip et de masque
ifconfig etho:0 192.168.11.2 netmask 255.255.255.0//creer une interface virtuel et y ajouter le reseau.11.0
echo 1 > /proc/sys/net/ipv4/ip_forward//permet a notre machine sous unix de se comporter comme un routeur
route -n//regarder notre table de routage
route add default gw 192.168.10.254//ajouter la route par défaut a notre table 
tcpdump -i eth0 icmp//permet de surveiller le trafic reseau sur la machine
//Pour créer une route qui ne soit pas une route par défaut, donc pour un réseau spécifique, la syntaxe est :
route add -net 192.168.10.0 netmask 255.255.255.0 gw 192.168.11.254
//Et pour enlever une route :
route del -net 192.168.10.0 netmask 255.255.255.0

//Le protocole ARP
nous pouvons envoyer un message à l'adresse de broadcast en demandant "est-ce que 192.168.0.254 peut
 m'envoyer son adresse MAC ?"
Grâce à l'adresse de broadcast ce message sera envoyé à tout le monde, et donc 192.168.0.254 le 
recevra et pourra nous renvoyer son adresse MAC.
C'est ce que l'on appelle une requête ARP ou aussi un broadcast ARP.
# arp -an//La table ARP va donc associer adresse IP et adresse MAC correspondante.
//scapy.
code pour la machine qui attaque // ./arpcachepoison.py 192.168.0.1 192.168.0.3

//le protocole ICMP
Son rôle est de contrôler les erreurs de transmission, et d'aider au débogage réseau.
//Il y a globalement deux rôles principaux pour le protocole ICMP :
ICMP sert à indiquer automatiquement des erreurs quand elles surviennent ;
ICMP peut fournir des outils pour étudier un problème réseau.
Nous avons vu le premier type de message automatique, le type 3, mais il y en a d'autres, 
voici les plus utilisés :
type 5, ICMP redirect, indique qu'il y a un chemin plus court vers la destination ;
type 11, TTL exceeded, indique que la durée de vie du paquet a expiré.

exemple d''attaque//cache poisonning 

Partie 3 : Communiquer entre applications
netstat -an.// Le résultat étant un peu un fouillis, je vous propose, sous Linux, d'utiliser l'option -antp
On peut donc en déduire qu'un service est un programme qui est en écoute sur une machine. On peut alors appeler cette
machine un serveur
//Eh bien en couche 4, l'adresse utilisée est le port
Le port 80 est le port utilisé pour les serveurs web.
le port 22 est le port normalement réservé pour un serveur ssh.
mail 25,imap 143,proxy 8080,https 443,ftp 20/21,dns 53

//protocole TCP
TCP est de la première catégorie, c'est un protocole extrêmement fiable. 
Chaque paquet envoyé doit être acquitté par le receveur, qui en réémettra un autre s'il ne reçoit pas
 d'accusé de réception. On dit alors que c'est un protocole connecté. 
 //protocole UDP
 UDP, lui, est un protocole rapide, mais peu fiable. Les paquets sont envoyés dès que possible, mais 
 on se fiche de savoir s'ils ont été reçus ou pas. On dit qu'UDP est un protocole non-connecté.
 datagramme UDP :
Port Source--->Port Destination--->Longueur totale--->Checksum--->Données à envoyer
Pour le checksum, ou CRC, le principe est le même que pour la couche 2 : s'assurer que
 les données reçues sont bien les mêmes que celles qui ont été transmises.
 //VoIP (Voice Over Internet Protocol) ou ToIP (Telephony Over IP).
 //Mais on utilise aussi UDP pour transporter deux protocoles majeurs d'Internet que sont le DNS et le SNMP.

 //le protocole TCP
 le premier SYN pour la demande de connexion de A vers B et le ACK
dans la réponse pour acquitter la demande de connexion de A vers B ; en rouge le SYN pour la 
demande de connexion de B vers A et l'acquittement ACK dans le dernier paquet.
L'établissement de la connexion TCP s'est donc fait par l'échange de trois paquets.
 C''est pour cela qu'on l'appelle Three Way Handshake ou poignée de main tripartite
 le flag ACK sera positionné sur tous les paquets, pour acquitter la réception des paquets
précédents.
//le segment TCP
Port Source-> Port Destination-> ???-> Flags-> ??? ->Checksum ->??? -> Données à envoyer 
Si deux machines A et B ont établi une connexion TCP et qu après quelques échanges la machine A
 se rend compte qu'il y a une incohérence dans la connexion, elle va envoyer un paquet contenant
  le flag "RST" pour indiquer l incohérence et demander à la machine B de clore la connexion.
Donc pour une fois, la connexion ne sera pas terminée par la séquence FIN+ACK, FIN+ACK, ACK.
De la même façon, si j envoie un paquet "SYN" sur le port d une machine qui est fermé, celle-ci
 doit me répondre "RST" pour me signifier que le port demandé n'est pas en écoute.
//Les flags PSH et URG peuvent être positionnés pour indiquer que le paquet doit être traité en priorité
 //par la machine destinataire

//La NAT et le port forwarding
//pourquoi le NAT
parce que il y a une pinurie d address IP
//La RFC 1918
Ce document dit en gros que si vous voulez créer un réseau local, vous devez utiliser
 des adresses réservées pour un réseau privé parmi les suivantes:
10.0.0.0/8		-		172.16.0.0/12		-		192.168.0.0/16
//Fonctionnement de la NAT

Il existe deux types de NAT différents, la NAT dynamique et la NAT statique.
adresse IP source, qui est privée, puisse être remplacée par une adresse publique. C'est le principe de la NAT !
La NAT dynamique associe n adresses privées à une seule adresse publique. Ainsi, on peut connecter n machines 
en n'utilisant qu'une seule adresse publique. On économise donc des adresses.
En NAT statique, on fixe une adresse publique pour chaque adresse privée. On n'économise donc... rien du tout !
				//Table NAT
@IP SRC,  |  @IP DST,     | port SRC,|port DST 		|	@IP SRC,     |@IP DST,       |port SRC,         |port DST
----------------------------------------------------------------------------------------------------------------
192.168.0.1, |217.70.184.38, |10277,   |80			|	82.238.22.47,| 217.70.184.38,| 10277, 		   |80
//La NAT dynamique récapitulée
Nous avons vu que la NAT dynamique permettait à des machines connectées sur un réseau local à adressage privé 
d'accéder à Internet en utilisant l'adresse IP publique du routeur qui fait la liaison entre le réseau interne
 et Internet.Ainsi, on économise beaucoup d'adresses IP, car on n'utilise qu'une seule adresse publique pour 
 toutes les machines qui sont sur le réseau privé.
Mais y a-t-il une limite au nombre de machines sur le réseau privé ?Théoriquement, oui.
Étant donné que la box ne peut allouer que 65535 ports, s'ils sont tous utilisés,
 la box ne peut pas accepter de nouvelle connexion.
 //le port forwarding
 Le port forwarding consiste à rediriger un port de notre routeur vers un port donné sur une machine locale.
 Table de port forwarding

@IP externe 82.238.22.47	 Port externe TCP 80		@IP interne 192.168.0.1		  Port interne TCP 80

La pile TCP/IP est en fait l'implémentation du modèle OSI dans notre système d'exploitation 
Ce n'est rien de plus qu'un programme qui effectue les calculs et les requêtes pour fabriquer 
les éléments des en-têtes de chacun des protocoles des couches du modèle OSI.

//Le service DHCP
//Mise en place d'un serveur DHCP sur debian
# apt-get install isc-dhcp-server//pour installer le serveur 
			//Ce serveur est géré par deux fichiers de configuration :
/etc/default/isc-dhcp-server
/etc/dhcp/dhcpd.conf

//Le service DNS
Par exemple, si l'on cherche l'adresse des serveurs DNS du domaine reseau.fr :
Code : Console
# host -t ns reseau.fr
FQDN :// Fully Qualified Domain Name
//Trucs et astuces !
Si jamais vous administrez un réseau, et que vous possédez le domaine mondomaine.com, vous pouvez
 vous amuser à ajouter dans votre  serveur DNS une machine qui s'appellera www.siteduzero.fr.mondomaine.com.
Ainsi, dès qu'une personne qui utilise votre serveur DNS demande www.siteduzero.fr en oubliant de mettre 
le . à la fin, elle sera envoyée vers votre la machine www.siteduzero.fr.mondomaine.com. !

//La gestion internationale des noms de domaine
Même si le système DNS n'est pas indispensable au fonctionnement d'Internet, il en est un élément incontournable. 
Le système de noms de domaine est géré par un organisme américain appelé l'ICANN. Celui-ci dépend directement du 
Département du Commerce des États-Unis. L'ICANN est responsable de la gestion des 13 serveurs DNS qui gèrent 
la racine du DNS. Ces 13 serveurs connaissent les adr IP des serveurs DNS gérant les TLD (les .fr, .com; org, etc.)
//CONFIGURATION DE BIND
Un alias est une association entre un nom de machine et un autre nom de machine, alors que le DNS a l'habitude
 de faire la liaison entre un nom de machine et une adresse IP
 	//Installation de Bind9
# apt-get install bind9
//Une zone se déclare de cette façon :
zone "reseau.fr" {
                type master;
                file "/etc/bind/db.reseau.fr";
                allow-transfer { 192.168.0.2; };
        };
  Vous pouvez vérifier la syntaxe du fichier named.conf grâce à la commandenamed-checkconf /etc/bind/named.conf
Configuration de la zone du serveur master
On édite donc le fichier /etc/bind/db.reseau.fr. Afin d'avoir une configuration "basique", vous pouvez faire
une copie de /etc/bind/db.local.
cp /etc/bind/db.local /etc/bind/db.reseau.fr
vim /etc/bind/db.reseau.fr


//LE SERVICE WEB
//Mise en place et configuration
Installation d Apache
# apt-get install apache2
apt-get install libapache2-mod-php7.2 php5-mysql
Notre serveur étant installé, nous allons vérifier qu il est bien en écoute :
# netstat -antp | grep apache2
//Configuration d'Apache2
pour installer un module, vous avez deux choix :

l'installer avec la commande apt-get install nom_module ;
récupérer les fichiers .conf et .load et les mettre dans le répertoire mods-available,
 puis créer des liens vers ces fichiers dans mods-enabled.
 DocumentRoot /var/www/
Le DocumentRoot est très important. C'est ce qui va indiquer au serveur Apache2 où vont se situer les pages de notre
 site web. Dans notre cas, comme dans la majorité des cas, la racine de notre site web se situera dans /var/www/.
 # /etc/init.d/apache2 restart//relancer le service apache2
 //Ajouter des types à Apache2
 AddType text/html .tutu
//Utilisation des virtualhosts
 modifier notre fichier hosts  dans /etc. pour y ajouter des associations //192.168.0.1   www.toto.com
//Configuration des virtualhosts.
Comme on l'a vu précédemment, les virtualhosts se configurent dans sites-available/.
Nous allons donc créer deux nouveaux fichiers pour nos deux virtualhosts. 
Pour cela, nous allons simplement copier le fichier default, et modifier le contenu des fichiers copiés.
# cd /etc/apache2/sites-available/
# cp default www.toto.com
# cp default www.tutu.com
Ensuite, nous allons simplement modifier trois choses et ajouter :
une directive ServerName pour indiquer le nom de notre virtualhost ;
le DocumentRoot qui précise où se situent nos pages ;
et enfin la balise Directory pour y indiquer notre nouveau chemin.

<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName www.toto.com
        
        DocumentRoot /var/www/toto.com/
        <Directory />
                Options FollowSymLinks
                AllowOverride all 
        </Directory>
        <Directory /var/www/toto.com/>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride all 
                Order allow,deny
                allow from all
        </Directory>

        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
        <Directory "/usr/lib/cgi-bin">
                AllowOverride None
                Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
                Order allow,deny
                Allow from all
        </Directory>

        ErrorLog /var/log/apache2/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog /var/log/apache2/access.log combined

    Alias /doc/ "/usr/share/doc/"
    <Directory "/usr/share/doc/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order deny,allow
        Deny from all
        Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>

</VirtualHost>

Nous faisons de même pour tutu.com.

Il nous reste encore à activer ces virtualhosts dans sites-enabled/.

# cd /etc/apache2/sites-enabled/
# ln -s ../sites-available/www.toto.com .
# ln -s ../sites-available/www.tutu.com .
Le . indique le répertoire courant. Donc ici, nous allons créer un lien dans le répertoire courant
 qui pointera vers le fichier toto.com. Notre lien s appellera donc sites-enabled/toto.com.
Nos virtualhosts sont prêts, il ne nous reste plus qu'à créer les répertoires et pages de nos sites :
mkdir /var/www/toto.com/
# touch /var/www/toto.com/index.html

//Une page pour tous !