//-------------- LES TYPES EN PYTHON
# -*- coding: utf-8 -*-
 "#!/usr/bin/env python3.5"  #executer un script python
 conda init
#culture generale
Ces deux underscores sont utilisés assez souvent ! Ils sont appelés dunders.
#executer du code qui marche a la fois pour python 2 et 3 il faut faire les imports suivants
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

Nous avons donc vu que lorsque l'on regroupe des fonctions dans un fichier on crée un ensemble de fonctions 
que l'on nomme " module ".Lorsque l'on cherche à regrouper des modules, on parle de package .
#to create a package 
Dans ce dossier, créons le fichier suivant: __init__.py , cela indique à python qu'il s'agit d'un package . 
Ce fichier peut être vide, seule sa présence est importante.
from package.module import fonction

from builtins import *

from future import standard_library
standard_library.install_aliases()

 user_name = input('What is your name ?')#recuperer du texte dans l'entre standard                  
# commentaire en python
"""ceci represente le doc string il sera affiché lorsqu'on fera appel a la methode help """
#Pour connaitre le type d'une variable, vous pouvez utiliser la fonction " type() "

# declaration VARIABLE------------
x, y, z = "Orange", "Banana", "Cherry" <=>x="Orange" y="Banana" z="Cherry"
x = 1 # int
y = 2.8 # float
z = 1j # complex
pour supprimer une variable del(mon_var)
print(chiffre_1, '-', chiffre_2, '->', result, sep = '', end = '.')
print(b, end = " " )//le chaine end permet de remplacer le retour a la ligne par un space dans notre cas
# Random Number -------------------
import random
print(random.randrange(1,10)) #for int value
myList = [2, 109, False, 10, "Lorem", 482, "Ipsum"]
random.choice(myList)#retourne une valeur aleatoire de la liste
random.shuffle(myList)#pour melanger la list
#Generate a randomly selected element from range(start, stop, step)
random.randrange(start, stop[, step])

# Multiline Strings--------------------
You can assign a multiline string to a variable by using three quotes:
# Strings--------------------------
Examples
Substring. Get the characters from position 2 to position 5 (not included):
b = "Hello, World!"
print(b[2:5])
		The strip() method removes any whitespace from the beginning or the end:
		The len() method returns the length of a string:
		The lower() method returns the string in lower case:
		The upper() method returns the string in upper case:
		The replace() method replaces a string with another string:
		The split() method splits the string into substrings if it finds instances of the separator:
# String Format---------------
As we learned in the Python Variables chapter, we cannot combine strings and numbers like this:
exemple:
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
print('Les {prod} coûtent {prix} € !'.format(prix = price, prod = product))
print('Les {prod} coûtent {prix:.1f} € !'.format(prod = product, prix = price))




Nombres (integers and floats)
Il existe deux grands types de nombres en Python : les entiers (integers) et les décimaux (floats)

# Listes----------------------------------------------
Une liste contient une succession de plusieurs objets. Comme une todo list !
>>> thislist = ["apple", "banana", "cherry"]
for x in thislist:
if "apple" in thislist:
thislist.append("orange")
thislist.insert(1, "orange")
thislist.remove("banana")
thislist.pop() #The pop() method removes the specified index, (or the last item if index is not specified):
del thislistdel
del thislist[0]
#How to Remove Duplicates From a Python List
		---------------------------------------
		mylist = ["a", "b", "a", "c", "c"]
		mylist = list(dict.fromkeys(mylist))
		print(mylist)
		---------------------------------------
quote = "Ecoutez-moi, Monsieur Shakespeare, nous avons beau être ou ne pas être, nous sommes !"
quote_2 = "On doit pouvoir choisir entre s'écouter parler et se faire entendre."
all_quotes = [quote, quote_2]
#list comprehensions
list_variable = [x for x in iterable]
		#exemple
					---------------------------------------
					numbers = [1, 2, 3, 4]
					squares = [n**2 for n in numbers]
					print(squares)  # Output: [1, 4, 9, 16]
					---------------------------------------
					list_a = [1, 2, 3, 4]
					list_b = [2, 3, 4, 5]
					common_num = [a for a in list_a for b in list_b if a == b]
					print(common_num) # Output: [2, 3, 4]
					---------------------------------------#boucle imbriqué
					my_list = [x * y for x in [20, 40, 60] for y in [2, 4, 6]]
					print(my_list)					
					[40, 80, 120, 80, 160, 240, 120, 240, 360]#Output
					---------------------------------------

					list_a = [1, 2, 3]
					list_b = [2, 7]
					different_num = [(a, b) for a in list_a for b in list_b if a != b]
					print(different_num) # Output: [(1, 2), (1, 7), (2, 7), (3, 2), (3, 7)]
					---------------------------------------
					list_a = ["Hello", "World", "In", "Python"]
					small_list_a = [str.lower() for str in list_a]
					print(small_list_a) # Output: ['hello', 'world', 'in', 'python']
					---------------------------------------
					list_a = [1, 2, 3]
					square_cube_list = [ [a**2, a**3] for a in list_a]
					print(square_cube_list) # Output: [[1, 1], [4, 8], [9, 27]]
					---------------------------------------

Tuples
Les tuples servent à créer des structures dont le nombre d'éléments ne bouge pas. On dit qu’ils sont immuables car leur structure ne peut pas changer. On ne peut ajouter ou supprimer un élément.
>>> ("Ecoutez-moi", "Monsieur Shakespeare", "nous avons beau être ou ne pas être", "nous sommes !")

Dictionnaires
Un dictionnaire est un ensemble de valeurs auxquelles vous pouvez accéder grâce d’autres objets (des chaînes de caractère par exemple !)
>>> english_french_dict = {
... "un": "one",
... "deux": "two",
... "trois": "three"
... }

>>> my_dictionary = {'key': 'value'}
Vous pouvez également stocker des éléments listes, comme ceci :

>>> program = {"quotes": ["Ecoutez-moi, Monsieur Shakespeare, nous avons beau être ou ne pas être, nous sommes !", "On doit pouvoir choisir entre s'écouter parler et se faire entendre."], "characters": ["alvin et les Chipmunks", "Babar", "betty boop", "calimero", "casper", "le chat potté", "Kirikou"]}
Accéder à une valeur se fait de la même manière que pour une liste mais au lieu d’indiquer sa position (0, 1, 2, …) vous utiliserez sa clé.

>>> my_dictionary['key']
>>> program['quotes']
['Ecoutez-moi, Monsieur Shakespeare, nous avons beau être ou ne pas être, nous sommes !', 'On doit pouvoir choisir entre s'écouter parler et se faire entendre.']
for x, y in thisdict.items():
  print(x, y)
  Dictionary Methods
Python has a set of built-in methods that you can use on dictionaries.

Method	Description
clear()	Removes all the elements from the dictionary
copy()	Returns a copy of the dictionary
fromkeys()	Returns a dictionary with the specified keys and values
get()	Returns the value of the specified key
items()	Returns a list containing the a tuple for each key value pair
keys()	Returns a list containing the dictionary's keys
pop()	Removes the element with the specified key
popitem()	Removes the last inserted key-value pair
setdefault()	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
update()	Updates the dictionary with the specified key-value pairs
values()	Returns a list of all the values in the dictionary
-------LA METHODE type() PERMET DE SAVOIR LE TYPE D UNE VARIABLE-------

# Les slices
sequence[indice_debut : indice_fin]
chaine = "Python is amazing"
>>> chaine[1 :2]
'y'

for x, y in thisdict.items():
  print(x, y)

#Le full slicing
liste = ['Paris', 'Rabbat', 'Abidjan']
2 >>> liste1 = liste #liste et liste1 sont maintenant identiques. Modifier liste1

#split et join
>>> chaine = "Salut les amis"
 >>> chaine.split()
 ['Salut', 'les', 'amis']
 >>> liste = ['Salut', 'Monsieur']
 >>> ' '.join(liste)
 'Salut Monsieur'


# function-------------------------------------
Default Parameter Value
The following example shows how to use a default parameter value.
If we call the function without parameter, it uses the default value:

def nom(*args ,**arg):#signifie que la fonction peut avoir une infinité d'argument nommé(**arg) et non nommé(*arg)
# Example
def my_function(country = "Norway"):
  print("I am from " + country)
my_function("India")
my_function()
#Arguments nommés
def maximum(nbre1 = 0, nbre2 = 100) :
     return max(nbre1, nbre2)

def info(object, spacing=10, collapse=1):
spacing et collapse sont optionnels car ils ont des valeurs par défaut définies. object est obligatoire car
 il n’a pas de valeur par défaut. Si info est appelé avec un seul argument, spacing prend pour valeur 10 et
  collapse la valeur 1. Si info est appelé avec deux arguments, collapse prend encore pour valeur 1.

#lamda expression
>>> downbytwo=lambda e:e-2
>>> downbytwo(1)#output -1
>>> (lambda e:e-2)(1)#output -1
>>> (lambda :print("Hello"))()#output hello 
>>> o=lambda x=1,y=2,z=3:x+y+z
>>> o(2,3)#output 8




# Utiliser une bibliothèque standard / tierce déjà installée--------------------------------------------------
import os
print(os.name)
Python rend possible d'importer seulement une partie d'une bibliothèque (une seule classe/fonction).
Pour cela, Python utilise toujours l'instruction import, mais précédée de l'instruction from.
Plus précisément, il faut faire "from nom_lib import nom_fonction"

l existe plusieurs façon d'installer des bibliothèques tierces, mais pip est une des plus pratique.
Pip est un gestionnaire de paquets, càd un programme permettant d'ajouter, retirer, mettre à jour,
 etc. des librairies utilisées dans un projet.
 # installation - uninstall -upgrade
 sudo pip3 install son_nom
 sudo pip3 uninstall son_nom
 sudo pip3 install son_nom --upgrade
 # Importer un fichier
 On utilise donc le mot clé import et le nom du fichier à importer sans le .py à la fin.

 		#VIRTUALENV
 #installatiion
 $ pip install virtualenv
 #Créez un environnement virtuel pour un projet:
 virtualenv venv(«venv» est la convention générale utilisée dans le monde entier. Comme il est ignorés par le fichier (.gitignore '))
#activer
$ source venv/bin/activate #linux
$ venv\Scripts\activate #window
#installer des packet en utilisant la commande pip
pip install requests
#si on termine le travail on desactive l'environnement
deactivate
#To delete a virtual environment, just delete its folder. (In this case, it would be 
rm -rf venv

#json file
def read_values_from_json(key):
    values = []
    with open("characters.json") as f:
        data = json.load(f)
        for entry in data:
            values.append(entry["character"])
    return values 

#parseargument

#fonction native en python
str.capitalize()
str.count(string)#La méthode count compte le nombre d'occurences du String
eval#The eval() function evaluates the specified expression, if the expression is a legal Python stment, it'll be executed.
x = 'print(55)'
eval(x)#output 55
>>> v = 101
>>> eval('v+1')output 102
str.find(string)#La méthode find trouvel'indice la première occurence de la recherche demandée.
help(element)#Cette fonction vous retourne des informations sur l'utilisation de l'élément qui vous intéresse.
hex#Convertit un nombre en valeur hexadécimale.
str.isalnum()#Retoune True si tous les caractères sont alphanumériques et qu'il y a au moins un caractère. Sinon False.
str.isalpha()
str.isdigit()
str.islower()
str.join(liste) #La méthode join transforme une liste en chaine de caractères.
reverse()#La méthode reverse inverse l'ordre d'une liste.
str.split(séparateur)#La méthode split transforme une chaine de caractères en liste.
str.title()#Transforme la chaine dans un format title.


#------------------------EXCEPTION
try:
    pass 
except:
    pass
finally:
    print("Execution")
#Le mot-clé else
Dans un bloctry,elseva permettre d'exécuter une action si aucune erreur ne survient dans le bloc.
try:
    resultat = numerateur / denominateur
except NameError:
    print("La variable numerateur ou denominateur n'a pas été définie.")
else:
    print("Le résultat obtenu est", resultat)
#Les assertions
annee = input("Saisissez une année supérieure à 0 :")
try:
    annee = int(annee) # Conversion de l'année
    assert annee > 0
except ValueError:
    print("Vous n'avez pas saisi un nombre.")
except AssertionError:
    print("L'année saisie est inférieure ou égale à 0.")
#LEVER UNE EXCEPTION


   #----------------------------------PROGAMMATION ORIENTE OBJET
#creation,methode et instanciation d'une classe
class Agent:
	NombreAgent=0
    def Say_hello(self,name):
    	return"Et bien le bonjour " +name
    def getNbreAgent(cls,NombreAgent):#cls :methode de classe
    	Agent.NombreAgent=NombreAgent
    getNbreAgent=classmethod(getNbreAgent)#definition de la methode de class

    def Message():
    	print("je suis un agent")
    Message=staticmethod(Message )

agent1 = Agent()
print(agent1.Say_hello("saliou"))

#constructeur et attribue
class Agent:
	NombreAgent=0 #attribut de classe
    def Say_hello(self,name):
    	return"Et bien le bonjour " +name
    def __init__(self,agreable):
        self.agreableness=agreable

agent1 = Agent(5)
print(agent1.agreableness)

agent1.prenom ='saliou'#creer un attribue de agent

#getter and setter
def get_age(self): 
     print("getter method called") 
     return self._age
def set_age(self, a): 
    print("setter method called") 
    self._age = a 
def ge(self): 
    del self._age 
age = property(get_age, set_age, del_age, "ce texte s'affiche lorsque la fonction help est appelé")
#------------------------------------------------------------
 @property
     def age(self): 
         print("getter method called") 
         return self._age 
       
     # a setter function 
     @age.setter 
     def age(self, a): 
         self._age = a 

La fonction dir()#La fonction dir vous donne un aperçu des méthodes de l'objet:

L attribut spécial __dict__ #Cet attribut spécial vous donne les valeurs des attributs de l'instance:
>>> ma_voiture.__dict__
{'nom': 'Ferrari'}


#HERITAGE

class VoitureSport(Voiture):#VoitureSport herite de voiture donc peut utiliser tous ses methode et attribut
r	def __init__(self):
		self.nom = "Ferrari"

#Les classes singleton
une classe dite singleton est une classe qui ne peut être instanciée qu'une fois.
#-----------------LES DECORATEUR
Un décorateur est une fonction qui modifie le comportement d'autres fonctions.


>>> def mon_decorateur(fonction):
...     """Premier exemple de décorateur"""
...     print("Notre décorateur est appelé avec en paramètre la fonction {0}".format(fonction))
...     return fonction
...
>>> @mon_decorateur
... def salut():
...     """Fonction modifiée par notre décorateur"""
...     print("Salut !")
...
Notre décorateur est appelé avec en paramètre la fonction <function salut at 0x00BA5198>
>>>

#--------------------------------------------------------------------------
# Exemple avec décorateur
@decorateur
def fonction(...):
    ...
#--------------------------------------------------------------------------
# Exemple équivalent, sans décorateur
def fonction(...):
    ...

fonction = decorateur(fonction)
#--------------------------------------------------------------------------

def mon_decorateur(fonction):
    """Notre décorateur : il va afficher un message avant l'appel de la
    fonction définie"""
    
    def fonction_modifiee():
        """Fonction que l'on va renvoyer. Il s'agit en fait d'une version
        un peu modifiée de notre fonction originellement définie. On se
        contente d'afficher un avertissement avant d'exécuter notre fonction
        originellement définie"""
        
        print("Attention ! On appelle {0}".format(fonction))
        return fonction()
    return fonction_modifiee

@mon_decorateur
def salut():
    print("Salut !")
#--------------------------------------------------------------------------
def obsolete(fonction_origine):
    """Décorateur levant une exception pour noter que la fonction_origine
    est obsolète"""
    
    def fonction_modifiee():
        raise RuntimeError("la fonction {0} est obsolète !".format(fonction_origine))
    return fonction_modifiee
#--------------------------------------------------------------------------

#LES DECORATEURS AVEC PARAMETRE
@controler_temps(2.5) # 2,5 secondes maximum pour la fonction ci-dessous
#---------------------------------------------
@decorateur(parametre)#1er façon
def fonction(...):
    ...
#---------------------------------------------
def fonction(...): #2eme façon
    ...

fonction = decorateur(parametre)(fonction)
#---------------------------------------------

#Tenir compte des paramètres de notre fonction
...
        def fonction_modifiee(*parametres_non_nommes, **parametres_nommes):
            """Fonction renvoyée par notre décorateur. Elle se charge
            de calculer le temps mis par la fonction à s'exécuter"""
            
            tps_avant = time.time() # avant d'exécuter la fonction
            ret = fonction_a_executer(*parametres_non_nommes, **parametres_nommes)
            tps_apres = time.time()
            tps_execution = tps_apres - tps_avant
            if tps_execution >= nb_secs:
                print("La fonction {0} a mis {1} pour s'exécuter".format( \
                        fonction_a_executer, tps_execution))
            return ret

#Des décorateurs s'appliquant aux définitions de classes
>>> def decorateur(classe):
...     print("Définition de la classe {0}".format(classe))
...     return classe
...
>>> @decorateur
... class Test:
...     pass
...
Définition de la classe <class '__main__.Test'>
>>>

#exemple avec les classes singletons
def singleton(classe_definie):
    instances = {} # Dictionnaire de nos instances singletons
    def get_instance():
        if classe_definie not in instances:
            # On crée notre premier objet de classe_definie
            instances[classe_definie] = classe_definie()
        return instances[classe_definie]
    return get_instance

#Un itérateur c'est quoi?
Un itérateur est une sorte de curseur qui a pour mission de se déplacer dans une séquence d'objets
class MonIter():
    
    current=0

    def __init__(self,stop):
        self.stop=stop

    def __iter__(self) :
        return self

    def next(self) :
        self.current+= 1
        
        if self.current>self.stop:
            raise StopIteration

        if self.current == 5:
            print("Quoi déjà 5eme tour?")

        return self.current

#Les générateurs
Les générateurs permettent de créer plus facilement des itérateurs.
def generateur(n):
    for i in range(n):
        if i == 5:
            print "Quoi déjà 5eme tour?"
        yield i+1


#---------------------les expressions regulieres
chat*# Cela signifie que notre lettretpourra se retrouver 0, 1, 2, … fois dans notre chaîne
* = 0, 1 ou plus #abc* = 'ab','abc','abcc','abcccccc'
+ = 1 ou plus #abc+ = 'abc','abcc','abccc'
? = 0 ou 1 #abc? = 'ab','abc'
E{4}: #signifie 4 fois la lettre E majuscule ;
E{2,4}:# signifie de 2 à 4 fois la lettre E majuscule ;
E{,5}: #signifie de 0 à 5 fois la lettre E majuscule ;
E{8,}: #signifie 8 fois minimum la lettre E majuscule.
#les classe de caractere
[A-Za-z0-9]
[abcd]
[A-Z]{5}.
>>> import re #regular expression



#from php
#Guitare#i//permet d'ignoré la casse
Le symbole OU //c'est la barre verticale « | ». #guitare|piano#

//Début et fin de chaîne
^ (accent circonflexe) : indique le début d une chaîne ;"#^Bonjour#"
$ (dollar) : indique la fin d une chaîne."#zéro$#"

//les classes de caractères
	//Des classes simples
"#gr[ioa]s#"//Entre crochets, c'est ce qu'on appelle une classe de caractères. Cela signifie qu'une des lettres à l'intérieur peut convenir.
[a-zA-Z0-9]
#[a-z]# //Cette phrase contient une lettre  VRAI
#[A-Z0-9]# //cette phrase ne comporte ni majuscule ni chiffre FAUX
#^[0-9]#  //Je vis au 21e siècle  FAUX
#<h[1-6]>#	//<h1>Une balise de titre HTML</h1>  VRAI
NEGATION //#[^0-9]#
signifie que vous voulez que votre chaîne comporte au moins un caractère qui ne soit pas un chiffre.
//Les quantificateurs
Les symboles les plus courants
Vous devez retenir trois symboles :

?(point d interrogation) :// la lettre est facultative. Elle peut y être 0 ou 1 fois.
Ainsi,"#a?#"// reconnaît 0 ou 1 « a » ;
+(signe plus) : la lettre est obligatoire. Elle peut apparaître 1 ou plusieurs fois.
Ainsi,"#a+#"//reconnaît « a », « aa », « aaa », « aaaa », etc. ;
*(étoile) : //la lettre est facultative. Elle peut apparaître 0, 1 ou plusieurs fois.
Ainsi,"#a*#"//reconnaît « a », « aa », « aaa », « aaaa », etc. Mais s'il n'y a pas de « a », ça fonctionne aussi !
//pour repeter pluisieur caractère
#Ay(ay)*#
Ce code reconnaîtra « Ay », « Ayay », « Ayayay », « Ayayayay »
La regex #Ay(ay|oy)*# renverra par exemple vrai pour « Ayayayoyayayayoyoyoyoyayoy » ! C'est le « ay » OU le « oy » répété plusieurs fois, tout simplement !

//etre plus preci grace aux accolates
Il y a trois façons d'utiliser les accolades.

{3} : si on met juste un nombre, cela veut dire que la lettre (ou le groupe de lettres s'il est entre parenthèses) doit être répétée 3 fois exactement.
#a{3}#fonctionne donc pour la chaîne « aaa ».

{3,5} : ici, on a plusieurs possibilités. On peut avoir la lettre de 3 à 5 fois.
#a{3,5}#fonctionne pour « aaa », « aaaa », « aaaaa ».

{3,} : si vous mettez une virgule, mais pas de 2e nombre, ça veut dire qu il peut y en avoir jusqu à l infini. Ici, cela signifie « 3 fois ou plus ».
#a{3,}#fonctionne pour « aaa », « aaaa », « aaaaa », « aaaaaa », etc. Je ne vais pas tous les écrire, ça serait un peu long.
NB
?revient à écrire {0,1} ;
+revient à écrire {1,} ;
*revient à écrire {0,}.
#Quoi \?#
Ici, l antislash sert à dire que le point d'interrogation juste après n'est pas un symbole spécial, mais bel et bien une lettre comme une autre !
// a l'interieur des crochete les meta caractère ne marche pas donc initule de les echapper sauf le " - ] #"
#[a-z?+*{}]#

//LES RACCOURCIS
\d  //Indique un chiffre.Ça revient exactement à taper[0-9]
\D  //Indique ce qui n'est PAS un chiffre.Ça revient à taper[^0-9]
\w  //Indique un caractère alphanumérique ou un tiret de soulignement.Cela correspond à[a-zA-Z0-9_]
\W  //Indique ce qui n'est PAS un mot.Si vous avez suivi, ça revient à taper[^a-zA-Z0-9_]
\t  //Indique une tabulation
\n  //Indique une nouvelle ligne
\r  //Indique un retour chariot
\s  //Indique un espace blanc
\S  //Indique ce qui n'est PAS un espace blanc (\t \n \r)
.  //Indique n'importe quel caractère.Il autorise donc tout !
//NB
Pour le point, il existe une exception : il indique tout sauf les entrées (\n).
Pour faire en sorte que le point indique tout, même les entrées, vous devrez utiliser l'option « s » de PCRE. Exemple :
#[0-9]-.#s

Vous avez juste besoin de retenir ce qui suit pour faire une regex POSIX :

il n'y a pas de délimiteur ni d'options. Votre regex n'est donc pas entourée de dièses ;

il n'y a pas de classes abrégées comme on l'a vu plus haut, donc pas de\d, etc. En revanche, vous pouvez toujours utiliser le point pour dire : « n'importe quel caractère ».

#ECHAPER L'ENSEMBLE DES ENTISLASH D'UNE CHAINE
en plaçant unravant le délimiteur qui ouvre notre chaîne, tous les caractères anti-slash qu'elle contient sont échappés.
>>> r'\n'output "\\n"
#LE MODULE "re" 
#re.search() 
 si l'expression est trouvée dans la chaîne, un objet de la classe_sre.SRE_Matchest renvoyé. 
 Si l'expression n'est pas trouvée, la fonction renvoieNone
 if re.match(expression, chaine) is not None:
    # Si l'expression est dans la chaîne
    # Ou alors, plus intuitivement
if re.match(expression, chaine):

#Remplacer une expression(fonction sub)
elle prend trois paramètres et renvoi la chaine modifié :
l'expression à rechercher ;
par quoi remplacer cette expression ;
la chaîne d'origine.
#exemple
>>> re.sub(r"(ab)", r" \1 ", "abcdef")
' ab cdef'#On se contente ici de remplacer'ab'par' ab '.
#Donner des noms à nos groupes
>>> print(re.sub(r"id=(?P<id>[0-9]+)", r"id[\g<id>]", texte))

#Des expressions compilées
chn_mdp = r"^[A-Za-z0-9]{6,}$"
exp_mdp = re.compile(chn_mdp)
mot_de_passe = ""
while exp_mdp.search(mot_de_passe) is None:
    mot_de_passe = input("Tapez votre mot de passe : ")
#----
>>> mails = ["olivier@mailbidon.com", "olivier@mailbidon.ca", "8@mailbidon.com", "@mailbidon.com", "olivier@mailbidon"]
>>> regex = re.compile(r"^[a-z0-9._-]+@[a-z0-9._-]+\.[(com|fr)]+"
>>> for mail in mails:
...     if regex.match(mail) is not None:
...             print "Ce mail : %s est valide" % mail   
...     else:
...             print "Erreur ce mail : %s est non valide" % mail  

