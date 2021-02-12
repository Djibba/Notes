Ralfconcentrateur hub: // recois de l'information sur un port et le diffuse sur les autre port
commutateur ou switch // qui permet de separer les communications pour eviter le risque de collision
 Un routeur  //est un élément intermédiaire dans un réseau informatique assurant le routage des paquets. 
// Son rôle est de faire transiter des paquets d'une interface réseau vers une autre, au mieux, selon un ensemble de règles
le routage //détermination d'un chemin permettant de relier les 2 machines distantes;
// SELECTION DES DIFERRENT MODE IOS
Les commandes "enable" et "disable" permettent d  aller et venir entre le mode d exécution utilisateur et le mode d exécution privilégié de la CLI. 
//LES COMMANDES PACKET  TRACERS
 la commande "show" affiche des informations sur le périphérique.
 //aide contextuelle
 Par exemple, entrez : sh? //pour obtenir la liste des commandes qui commencent par les caractères sh.
 //Pour passer au mode de configuration global
 "configure"

 pour déterminer les options, les mots-clés ou les arguments disponibles pour une commande donnée.
 // À la suite d'une commande, entrez un espace suivi d'un ? pour savoir ce qui peut ou doit être saisi. 
 Une commande show très répandue est la commande "show interfaces". Elle affiche des statistiques relatives à toutes les interfaces du périphérique.
 exemple:  Switch# "show interfaces fastethernet 0/1"
 "show version" //Cette commande affiche des informations sur la version d'IOS actuelle ainsi que des renseignements sur le matériel et le périphérique. 

 //CONFIGURATION DES NOMS D'HOTE
  Switch(config)# "hostname s1" 
  // Sécurisation de l'accès au mode d'exécution privilégié
 Switch(config)# enable secret "mypassword"
  // sécuriser le port de console des périphériques réseau 
		Switch(config)# line console 0
		Switch(config-line)# password cisco
		Switch(config-line)# login 
//Mot de passe VTY
		Switch(config)# line vty 0 15
		Switch(config-line)# password cisco
		Switch(config-line)# login 

//-------------------------CHIFFRER LES PASSWORD
 La commande "service password-encryption" applique un chiffrement simple à tous les mots de passe non chiffrés.
 Si vous exécutez la commande "show running-config" ou "show startup-config" avant la commande "service password-encryption", 
 les mots de passe non chiffrés sont visibles dans les informations fournies par le périphérique sur sa configuration

//-----------------------Messages de bannière
La création de bannières est un processus simple, à condition de respecter un minimum de règles dans leur rédaction.
Si vous utilisez une bannière,abstenez-vous de souhaiter la bienvenue à l'utilisateur accédant au routeur.
Votre bannière doit préciser que seul le personnel autorisé a le droit d'accéder au périphérique.Enfin, la bannière peut contenir
des informations sur les arrêts programmés du système et d autres renseignements concernant tous les utilisateurs du réseau.
La syntaxe permettant de configurer un message du jour, en mode de configuration globale, est :
Switch(config)# "banner motd # le message #" 

//configurer un switch

"interface vlan 1"// Utilisé pour accéder au mode de configuration d interface à partir du mode de configuration globale

"ip address 192.168.10.2 255.255.255.0" //- Configure l adresse IP et le masque de sous-réseau pour 
//le commutateur (ce n'est que l'une des nombreuses combinaisons possibles d adresse IP et de masque de sous-réseau)

"no shutdown" // Active l'interface par voie administrative

//les commandes utiles sous Linux pour accéder aux informations réseau.
Pour afficher son adresse IP, c'est la commande ifconfig.

portail captif
ETHERNET 
les sous couhes LLC(logical link control) et MAC
		LLC
-gère la communication entre la couche supérieure et la couche inférieure
-Prend les données du protocole réseau et ajoute des
informations de contrôle pour faciliter la remise du paquet à sa
destination

	MAC
Deux rôles essentiels :
• Encapsulation des données
Delimitation des trames
adressage
detection des erreur
• Contrôle d'accès au support

/////////////////////////// couche application
// roles
  ► Suivi des conversations individuelles
Chacune de ces applications communique avec une ou plusieurs applications sur un ou plusieurs hôtes distants.
La couche transport est chargée de garantir ces multiples conversations et d'en effectuer le suivi.
  ►Segmentation des données et reconstitution des segments
  ►Identification des applications 
Pour que les flux de données atteignent les applications auxquelles ils sont destinés, la couche transport
doit identifier l'application cible (Figure 3). Pour cela, la couche transport affecte un identificateur à
chaque application. Cet identificateur est appelé numéro de port. Chaque processus logiciel ayant besoin 
d'accéder au réseau se voit affecter un numéro de port unique sur son hôte. La couche transport utilise
des ports pour identifier l'application ou le service.

// PROTCOLE TCP & UDP :FIABILITE
Le protocole TCP est un protocole de couche transport fiable et complet, qui garantit que toutes les données
arrivent à destination. En revanche, le protocole UDP est un protocole de couche transport très simple 
qui ne permet pas de garantir la fiabilité.

// TCP
Avec le protocole TCP, les trois fonctions de fiabilité de base sont :

    -le suivi des segments de données transmis ;
    -les accusés de réception des données ;
    -la retransmission des données n'ayant pas fait l'objet d'un accusé de réception.
    -les données sont transmis dans l'ordre

 // UDP

    -Sans connexion – Pas d'établissement de session.
    -Acheminement non fiable :Les segments perdus ne sont pas renvoyés
    -Aucune reconstitution ordonnée des données :les données sont reconstituées selon l'ordre de réception.
    -Aucun contrôle de flux – Pas de gestion de l encombrement .

    //protocole utilisant le protocole UDP

    ☼ Système de noms de domaine (DNS)
    ☼ SNMP (Simple Network Management Protocol)
    ☼ Protocole DHCP (Dynamic Host Configuration Protocol)
    ☼ Protocole RIP (Routing Information Protocol)
    ☼ TFTP (Trivial File Transfer Protocol)
    ☼ Téléphonie IP ou voix sur IP (VoIP)
    ☼ Jeux en ligne


 // NOTION DE SOCKET
La combinaison du numéro de port de la couche transport et de l'adresse IP de la couche réseau de l'hôte 
suffit à identifier de manière unique un processus d'application particulier exécuté sur un périphérique
hôte individuel. Cette combinaison est appelée un socket. Une paire de sockets, composée des adresses IP
et numéros de port source et de destination, est également unique et identifie la conversation spécifique
entre les deux hôtes.

// LA COMMANDE netstat (pour avoir des informations sur la connexion)