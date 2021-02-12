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

////////////////////////// couche application
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

// PROTCOLE TCP=Transfer Control Protocol & UDP=User Datagramm Protocol :FIABILITE
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
    ☼ Protocole RIP (Routing Information Protocol)+
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
VLSM:variable length subnet mask  != CIDR:classless inter-domain routing
fortinet          cisco               cisco meraki
Palo Allo         fortiswitch         cisco aironet
Juniper           hpe                 ruclus
checkPoint        huawei              aruba     ubicbity

ip defaukt getaway : pour doner une passerelle par defaut a un switch
apt-get install synaptic
creer un serveur dhcp sur le switch en utilisant le premier pull d'adresse 

#------------------helper
int vlan 10

#CONFIGURATION DE BASE D'UN ROUTEUR
R1(config)#hostname name 
R1(config)#enable secret seck
R1(config)#line console 0 
R1(config-line)#password seck
R1(config-line)#login
R1(config)#line vty 0 4
R1(config-line)#password seck
R1(config-line)#login
R1(config)#banner motd #acces interdit au etranger#
R1(config)#interface type number
R1(config-if)#ip address address mask
R1(config-if)#description description
R1(config-if)#no shutdown
R1#copy running-config startup-config
R1#show running-config
R1#show ip route
R1#show ip interface brief
R1#show ip interfaces


#ROUTAGE STATIC
R1(config)#ip route 10.2.1.0 255.255.255.252 10.1.1.2
R1(config)#exit
#ROUTAGE STATIQUE PAR DÉFAUT
R1(config)#ip route 0.0.0.0 0.0.0.0 10.1.1.2
R1(config)#exit

#TABLE DE ROUTAGE 
R1#show ip route

#RIP
R1#(config)#router rip -> activation du processus RIP
R1#(config-router)#version 2 -> utilisation de la version 2 de RIP
R1#(config-router)#no auto-summary -> désactivation de l’agrégation de routes
R1#(config-router)#network 192.168.3.0 -> déclaration d’un réseau
R1#(config-router)#network 10.1.1.0
R1#(config-router)#network 10.1.2.0
R1#(config-router)#exit

R1#(config)#ip route 192.168.5.0 255.255.255.0 10.1.4.2 -> mise en place d’une route statique
R1#(config)#router rip -> activation du protocole rip
R1#(config-router)#redistribute static -> on redistribue la route statique via RIP

R1#(config)#ip default-network 10.1.4.1 -> mise en place d’une passerelle par défaut
R1#(config)#router rip -> on rentre dans le processus rip
R1#(config-router)#default-information originate -> diffusion de la route par défaut dans rip.
R1#debug ip rip -> permet de voir le debug du protocole RIP (utile en cas incident ou de mauvaise manipulation)
R1#show ip protocols


#VLAN
#configurer un vlan 
SWITCH1#vlan database 
SWITCH1#show vlan-switch
SWITCH1(vlan)#vlan 30 name Users
SWITCH1(vlan)#show
SWITCH1(config)#int f1/1
SWITCH1(config-if)#switchport access vlan 30     
SWITCH1(config-if)#no shutdown 
SWITCH1(config)#int vlan x
SWITCH1(config)#ip add 192.168.2.3 255.255.255.0
SWITCH1(config)#no shutdown

#configuration du serveur dhcp 
SWITCH1(config)#service dhcp
SWITCH1(config)#ip dhcp excluded-address 192.168.0.1 192.168.0.10
SWITCH1(config)#ip dhcp pool LAN1
SWITCH1(dhcp-config)#default-router 192.168.0.1
SWITCH1(dhcp-config)#dns-server 8.8.8.8
SWITCH1(dhcp-config)#network 192.168.0.0 255.255.255.0
SWITCH1(dhcp-config)#lease <jours> <heures> <minutes>
SWITCH1(dhcp-config)#exit
#CONFIG WITH RANGE 
SWITCH1(config)#ip dhcp pool man
SWITCH1(dhcp-config)#default-router 192.168.0.1
SWITCH1(dhcp-config)#class rangeIT
SWITCH1(config-dhcp-pool-class)#add range 192.168.10.6 192.168.10.10
SWITCH1(config-dhcp-pool-class)#exit

DHCP#show ip dhcp binding   #pour les hote qui ont recu un ip
DHCP#sh ip dhcp pool LAN1   #pour voir les information d'utilisation d'un pool


#configuation de microcore (/etc/network/interfaces)
sudo ifconfig eth0 192.168.1.2 netmask 255.255.255.0
sudo route add default gw 192.168.1.1

/etc/network/interfaces
auto lo
iface lo inet loopback
#the primary network interface
allow-hotplug eth0
auto eth0
iface eth0 inet static 
	address 192.168.1.2
	gateway 192.168.1.1
#ask ip to dhcp server
VPCS[2]> ip dhcp #recuperer un ip  pour vpc
window>ipconfig /renew
router(config)ip address dhcp 
#recuperer un ip 
SWITCH1(config)#int vlan x
SWITCH1(config-if)#ip helper-address [ip server-dhcp]

#effacer une configuration existante
Erase start
Del vlan.dat
Reload


class rangeIt
add range 192.168.10.6 192.168.10.10

ISE
Cisco Inter-Switch Link (ISL) est un protocole propriétaire de Cisco qui permet de transférer des trames ethernet
avec leur numéro de VLAN entre deux commutateurs ethernet ou entre un commutateur et un routeur. Ce protocole a 
précédé le standard IEEE 802.1Q (dot1q).
VTP = vlan trunking protocole
HRSP
Le client est simplement un programme qui se connecte à un service pour l'utiliser
Le rôle de la couche 4 est donc de gérer les connexions applicatives.

L'adresse MAC identifie la carte réseau en couche 2, et l'adresse IP identifie l'adresse de notre machine au sein 
d'un réseau, en couche 3.

//UDP
UDP : Port Source -->Port Destination -->Longueur totale -->Checksum -->Données à envoyer
4 informations pour l'en-tête UDP. Chacune faisant 2 octets, cela nous fait un en-tête de seulement 8 octets !
Pour le checksum, ou CRC, le principe est le même que pour la couche 2 : s'assurer que les données reçues sont bien 
les mêmes que celles qui ont été transmises.
on utilise aussi UDP pour transporter deux protocoles majeurs d'Internet que sont le DNS et le SNMP

//TCP
le principe de TCP est d'acquitter chaque octet d'information reçue.
Les drapeaux ne sont rien d'autre que des bits qui peuvent prendre la valeur 0 ou 1. Ainsi, il y aura dans l'en-tête 
TCP des bits qui vont indiquer quel est le type du message TCP envoyé.
Port Source -->Port Destination -->??? Flags ??? -->Checksum ??? -->Données à envoyer
Wireshark est un programme qui permet d'écouter ce qui passe sur le réseau et qu'on appelle communément un sniffer .

//NAT et port forwarding
La NAT dynamique associe n adresses privées à une seule adresse publique. Ainsi, on peut connecter n machines en 
n'utilisant qu'une seule adresse publique. On économise donc des adresses.
En NAT statique, on fixe une adresse publique pour chaque adresse privée. On n'économise donc... rien du tout !
Le port forwarding consiste à rediriger un port de notre routeur vers un port donné sur une machine locale.

Un ver est un virus qui se réplique automatiquement à travers les réseaux comme Internet, en accédant à des 
applications vulnérables sur les machines, à travers les ports qui sont accessibles.

La pile TCP/IP est en fait l'implémentation du modèle OSI dans notre système d'exploitation

quand on passe d'un réseau à un autre, les adresses MAC changent dans l'en-tête Ethernet (couche 2) ;
quand on passe d'un réseau à un autre, rien ne change dans les en-têtes de couches 3 et 4, IP et TCP, sauf s'il y a de la NAT ;
dans le cas de la NAT, on change aussi les adresses IP source et ports source.

////RESUME revision
L'architecture de réseau sans frontières de Cisco regroupe plusieurs innovations et critères de conception. 
Elle permet ainsi aux organisations de connecter toute personne, en tout lieu, à tout instant et sur tout
 périphérique, de façon sécurisée, fiable et transparente.

Les protocoles de couches 2 : 
  CDP
  VTP
  DTP
  STP
  DHCP
  HSRP
  MPLS

CVSS score 8.0 <= criticité <= 10 
           6.0 <= Elevé <= 7.9
           4.0 <= Moyen <= 5.9 
lemondeinformatique.com
exploitdb.com
hackthebox
ec council

Les protocoles cisco CDP et DTP
masque generique inverse du mask de sous reseau