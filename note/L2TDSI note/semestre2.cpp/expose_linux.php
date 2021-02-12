Une fois que notre serveur DHCP reçoit le DHCPDISCOVER, il va renvoyer une proposition, c'est un DHCPOFFER. Il va proposer une adresse IP,
 un masque ainsi qu'une passerelle par défaut et parfois un serveur DNS.
Le client (votre machine) répond par un DHCPREQUEST. Celui-ci est aussi envoyé en broadcast et sert à prévenir quelle offre est acceptée. 
Le serveur DHCP dont l'offre a été acceptée valide la demande et envoie un DHCPACK qui valide l'allocation du bail.
Toutefois, lors d'un renouvellement, notre machine ne va pas refaire toute la procédure en commençant par un DHCPDISCOVER. 
On repart directement du DHCPREQUEST. Les serveurs DHCP conservent en mémoire les adresses qu'ils ont distribuées, associées 
aux adresses MAC. Ainsi, vous constatez que vous conservez parfois très longtemps la même adresse IP, même si votre bail a sûrement été renouvelé plusieurs fois.

Sous Debian, le serveur dhcp le plus couramment utilisé est isc-dhcp-server, mais il en existe plusieurs comme dhcp3-server ou le célèbre dhcpd.

Mise en place d'un serveur DHCP
Installation et configuration.
Nous allons commencer par l'installer.
"apt-get install isc-dhcp-server"
Ce serveur est géré par deux fichiers de configuration :
/etc/default/isc-dhcp-server
/etc/dhcp/dhcpd.conf

//dns
dns cache : accelere les requetes 







///////////**********-------------      VAGRANT     ------------***************/////////////

Pour creer un projet : vagrant init "nom_projet" "lien de telechargement de notre boxe"

"vagrant up"    :permet de demarrer notre box il verifie l'existence du nom dans nos machines si cette derniere
 n'existe pas alors il utilise le lien donné précedement pour telecharger le boxe 

 						# Démarrage d’une box
		"vagrant up <nom_de_la_box>"						
						# Arrêt d’une machine en fonctionnement
		"vagrant halt <nom_de_la_box>"
						# Listing des boxes
		"vagrant box list"
						# Redémarrage d’une box (équivaut à un vagrant halt puis un vagrant up)
		"vagrant reload <nom_de_la_box>"
						# Connexion en SSH à une box
		"vagrant ssh <nom_de_la_box>"
						# Suppression d’une box
		"vagrant destroy <nom_de_la_box>"

SYSTEME DE PROVISIONNING
-chef
-berkshelf
 vagrant plugin install vagrant-berkshelf
 vagrant plugin install vagrant-omnibus
 vagrant plugin install vagrant-hostmanager




 introduction
 



 ANSIBLE
 idempotence
 pas d'agent
 python yaml
 modules
 expect

 appliquer un playbook 
 ansible-playbook -i hosts playbook.yml

 -----------------------------------Les modules de base communs incluent:

command- Exécute une commande sur un noeud distant
script- Exécute un script local sur un nœud distant après l'avoir transféré
shell- Exécuter des commandes dans les nœuds
mysql_db- Ajouter ou supprimer des bases de données MySQL d'un hôte distant
mysql_user- Ajoute ou supprime un utilisateur d'une base de données MySQL
postgresql_db- Ajouter ou supprimer des bases de données PostgreSQL d'un hôte distant
postgresql_user- Ajoute ou supprime des utilisateurs (rôles) d'une base de données PostgreSQL
fetch- Récupère un fichier depuis des nœuds distants
template- Modèles un fichier sur un serveur distant
yum- Gère les paquets avec le gestionnaire de paquets yum
apt- Gère apt-packages
git- Déployer des logiciels (ou des fichiers) à partir de git checkouts
service- Gérer les services


 ANSIBLE-VAGRANT
 dans vagrantfile
---------------------------------------------------
Vagrant.configure("2") do |config|

  #
  # Run Ansible from the Vagrant Host
  #
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
  end

end
---------------------------------------------------

config.vm.box = "ubuntu/bionic64"
config.vm.define Vagrant-Ansible-Docker
config.ssh.forward_agent = true
Signifie que l’on va utiliser la Vagrant Box ubuntu/bionic64 4 et que la VM s’appellera Vagrant-Ansible-Docker.
On active également le SSH agent forwarding pour que la machine puisse cloner les dépôts GITLAB.

config.vm.provider "virtualbox" do |v|
end
S’assure que Vagrant va utiliser Virtual Box comme provider




//DOCUMENTATION 
Vagrant.require_version ">= 1.3.5", "< 1.4.0"
Vagrant.require_version ">= 1.3.5"
//permet de forcer les utilisateur a utiliser une version specific de vagrant

--------------------------Loop Over VM Definitions
If you want to apply a slightly different configuration to many multi-machine machines, you can use a loop to do this. For example, if you wanted to create three machines:

(1..3).each do |i|
  config.vm.define "node-#{i}" do |node|
    node.vm.provision "shell",
      inline: "echo hello from node #{i}"
  end
end

----------------------------Config namespace: config.vm

The settings within config.vm modify the configuration of the machine that Vagrant manages
-------------------------------------Running Provisioners
Provisioners are run in three cases: the initial 'vagrant up', 'vagrant provision', and 'vagrant reload --provision'.
A --no-provision flag can be passed to up and reload if you do not want to run provisioners.
 Likewise, you can pass --provision to force provisioning.

The --provision-with flag can be used if you only want to run a specific provisioner 
if you have multiple provisioners specified. For example, if you have a shell and Puppet 
	provisioner and only want to run the shell one, you can do vagrant provision --provision-with shell.
	 The arguments to --provision-with can be the provisioner type (such as "shell") or
	  the provisioner name (such as "bootstrap" from above).

----------------------------Run Once, Always or Never
Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: "echo hello",
    run: "always"   ///<--------------------------------------------
end

----------------------------Inline Scripts
Perhaps the easiest way to get started is with an inline script. An inline script is a script that is given to Vagrant directly within the Vagrantfile. An example is best:

# example1

Vagrant.configure("2") do |config|
  config.vm.provision "shell",
    inline: "echo Hello, World"
end

# example2

$script = <<-SCRIPT
echo I am provisioning...
date > /etc/vagrant_provisioned_at
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: $script
end

-----------------------------External Script
The shell provisioner can also take an option specifying a path to a shell script on the host machine. Vagrant will then upload this script into the guest and execute it. An example:

Vagrant.configure("2") do |config|
  config.vm.provision "shell", path: "script.sh"
  # config.vm.provision "shell", path: "https://example.com/provisioner.sh"
end

-----------------------------ansible local
Simplest Configuration
To run Ansible from your Vagrant guest, the basic Vagrantfile configuration looks like:

Vagrant.configure("2") do |config|
  # Run Ansible from the Vagrant VM
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "playbook.yml"
  end
end

-----------------------------Defining Multiple Machines
Multiple machines are defined within the same project Vagrantfile using the config.vm.define method call. This configuration directive is a little funny, because it creates a Vagrant configuration within a configuration. An example shows this best:

Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: "echo Hello"

  config.vm.define "web" do |web|
    web.vm.box = "apache"
  end

  config.vm.define "db" do |db|
    db.vm.box = "mysql"
  end
end

-------------------------------

Une fois qu'un fournisseur est installé, vous n'avez plus besoin de modifier votre fichier Vagrantfile, mais vagrant upavec le fournisseur approprié, Vagrant se chargera du reste:

$ vagrant up --provider=vmware_fusion

# installation de lamp:https://github.com/geerlingguy/ansible-vagrant-examples/tree/master/lamp
--------------------------------------------------------------------------------------------

src
La source du rôle et un attribut requis. Spécifiez un rôle à partir de Galaxy en utilisant le format namespace.nom_role ou indiquez une URL vers un référentiel au sein d'un GDS basé sur git.
scm
Si le src est une URL, spécifiez le SCM. Seuls git ou hg sont supportés. La valeur par défaut est git .
version:
La version du rôle à télécharger. Indiquez une valeur de balise, un hachage de validation ou un nom de branche. Valeurs par défaut à maîtriser .
prénom:
Téléchargez le rôle sous un nom spécifique. Par défaut, le nom de Galaxy est téléchargé lors du téléchargement à partir de Galaxy ou le nom du référentiel, lorsque src est une URL.
L'exemple suivant fournit un guide pour l' inscription des rôles dans un requirements.yml fichier:

# from galaxy
- src: yatesr.timezone

# from GitHub
- src: https://github.com/bennojoy/nginx

# from GitHub, overriding the name and specifying a specific tag
- src: https://github.com/bennojoy/nginx
  version: master
  name: nginx_role

# from a webserver, where the role is packaged in a tar.gz
- src: https://some.webserver.example.com/files/master.tar.gz
  name: http-role

# from Bitbucket
- src: git+http://bitbucket.org/willthames/git-ansible-galaxy
  version: v1.4

# from Bitbucket, alternative syntax and caveats
- src: http://bitbucket.org/willthames/hg-ansible-galaxy
  scm: hg

# from GitLab or other git-based scm
- src: git@gitlab.company.com:mygroup/ansible-base.git
  scm: git
  version: "0.1"  # quoted, so YAML doesn't parse this as a floating-point value
  -----------------------------------------------------------------------------

  