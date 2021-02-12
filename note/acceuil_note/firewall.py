Un firewall permet de sécuriser un réseau d’un autre réseau, il doit donc être placé entre deux réseaux.

Le passage par le firewall doit être obligatoire.

Un firewall peut être physique (matériel) ou logique (logiciel).

Un firewall ne protège pas contre les virus.

Un firewall peut soit se baser sur les adresses IP ainsi que les ports, soit sur les applications.

Un firewall ne protège pas votre réseau d’une personne à l’intérieur du réseau.

Un firewall ne se configure pas tout seul, mais demande une étude préalable.


Une politique de sécurité est une suite de règles vous permettant d’établir ce que les utilisateurs de votre réseau
peuvent ou ne peuvent pas faire.

La politique de sécurité est une tâche à faire avec l’ensemble des services de l’entreprise.

La meilleure façon de procéder est d’interdire tout et de permettre seulement ce qui a été autorisé par la politique 
de sécurité.

Fonctionnement de DPI (Deep Packet Inspector): le constructeur du DPI analyse les attaques. Cette analyse lui permet 
d'etablir une emprunte pour chaque type de trafic qu'il enregistre dans sa base de données qui est dans le firewall
Le firewall analyse les trafic et les comparent avec les trafics que le firewall connait. Inconvenient mise à jours 
régulier de la base de données

Si la politique de sécurité est mal définie, la configuration du firewall ne pourra pas être correcte.

Fonctionnement de iptable:
SI le paquet est à destination du firewall

        ALORS il passe par la chaîne INPUT

        SI il n’est pas rejeté

        ALORS il est transmis au processus destinataire

SINON SI le paquet est destiné à un autre terminal

        ALORS il passe par la chaîne FORWARD

        SI il n’est rejeté

        ALORS il est transmis au terminal destinataire
        
ACLs (Access control list)

fail2ban est une application qui analyse les logs de divers services (SSH, Apache, FTP…) en cherchant des 
correspondances entre des motifs définis dans ses filtres et les entrées des logs. Lorsqu'une correspondance est 
trouvée une ou plusieurs actions sont exécutées. Typiquement, fail2ban cherche des tentatives répétées de connexions 
infructueuses dans les fichiers journaux et procède à un bannissement en ajoutant une règle au pare-feu iptables ou 
nftables pour bannir l'adresse IP de la source.

SMTP (Simple Mail Transfert Protocol)
C'est le protocole qui permet à vos utilisateurs d'envoyer et recevoir des mails. Il est donc fort probable que vous
soyez amené à devoir l’ouvrir. les différents ports qu’il utilise (25, 465, 587).

DNSBL (Domain Name System Blacklists). Il s’agit de liste de nom de domaine reconnue comme spammeur

Dans une architecture DMZ :

        La DMZ est accessible depuis Internet.
        Le LAN n’est pas accessible depuis Internet.
        Le LAN peut ou non avoir accès à Internet.
        Le LAN peut ou non avoir accès à la DMZ.
        La DMZ n’a pas accès au LAN.

Dans le cas d’une architecture WEB, seuls les ports concernés doivent être ouverts. Les autres ports restent fermés
Un proxy web vous permet de filtrer le trafic HTTP.

Un proxy cache vous permet de stocker les sites web dans le proxy et ainsi d’augmenter la rapidité d’accès aux sites.

Pour rediriger le trafic HTTP du LAN vers le proxy, il faut créer une redirection de port et associer une règle firewall.

Pour filtrer le trafic, vous pouvez vous aider d’une liste noire créée par d’autres.

Un VPN est un réseau privé virtuel.

Il permet de créer un lien entre deux réseaux LAN distants.

Un VPN host-to-lan se crée entre un PC et un réseau LAN.

Un VPN lan-to-lan se crée entre deux LAN.

Pour créer un VPN, on envoie les paquets au travers d'un tunnel.

Un tunnel permet, grâce à plusieurs protocoles :

L'authentification

l'intégrité des données

La sécurité des données


IPsec vous permet de faire quatre choses importantes :

Il crypte les données : Ce qui veut dire qu’elles sont chiffrées avant de voyager sur le réseau.

Il décrypte les données : Ce qui veut dire que seul le destinataire peut les déchiffrer.

Il signe les données : Ce qui veut dire que vous pouvez être sur de la personne qui vous les a envoyées.

Il vérifie les données : Ce qui veut dire qu’il est capable de vous assurer qu’elles n’ont pas été modifiées entre l’envoi et la réception.



IPsec est donc l’association de plusieurs protocoles permettant de répondre à ces besoins :

Pour la sécurité les données et l’intégrité des données, il utilise le protocole Encapsulating Security Payload(ESP).

Enfin, pour gérer la négociation entre les deux routeurs (PC ou firewall), IPsec utilise le protocole Internet Key Exchange.






