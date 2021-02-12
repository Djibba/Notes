//-------------- LES TYPES EN PYTHON
# -*- coding: utf-8 -*-
#coding:utf-8
 "#!/usr/bin/env python3.5"  #executer un script python

#executer du code qui marche a la fois pour python 2 et 3 il faut faire les imports suivants
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

from builtins import *

from future import standard_library
standard_library.install_aliases()

 user_name = input('What is your name ?')#recuperer du texte dans l'entre standard
# commentaire en python special (.__doc__ pour l'afficher dans une class)
"""
Pour connaitre le type d'une
 variable, vous pouvez utiliser 
 la fonction " type() "
"""
# declaration VARIABLE------------
x, y, z = "Orange", "Banana", "Cherry" <=>x="Orange" y="Banana" z="Cherry"
x = 1 # int
y = 2.8 # float
z = 1j # complex
pour supprimer une variable del(mon_var)
print(chiffre_1, '-', chiffre_2, '->', result, sep = '', end = '.')
# Random Number -------------------
import random
print(random.randrange(1,10))

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
Les tuples servent à créer des structures dont le nombre d'éléments ne bouge pas. On dit qu’ils sont immuables
car leur structure ne peut pas changer. On ne peut ajouter ou supprimer un élément.
>>> ("Ecoutez-moi", "Monsieur Shakespeare", "nous avons beau être ou ne pas être", "nous sommes !")

Dictionnaires
Un dictionnaire est un ensemble de valeurs auxquelles vous pouvez accéder grâce d’autres objets (des chaînes de caractère par exemple !)
>>> english_french_dict = {
... "un": "one",
... "deux": "two",
... "trois": "three"
... }

>>> my_dictionary = {'key': 'value'}
Accéder à une valeur se fait de la même manière que pour une liste mais au lieu d’indiquer sa position (0, 1, 2, …) vous utiliserez sa clé.
>>> my_dictionary['key']
>>> program['quotes']
['Ecoutez-moi, Monsieur Shakespeare, beau être ou ne pas être, nous sommes !', 'On doit pouvoir choisir entre s'écouter parler et se faire entendre.']
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
# Example
def my_function(country = "Norway"):
  print("I am from " + country)
my_function("India")
my_function()
#Arguments nommés
def maximum(nbre1 = 0, nbre2 = 100) :
     return max(nbre1, nbre2)



# Utiliser une bibliothèque standard / tierce déjà installée--------------------------------------------------
import os
print(os.name)
Python rend possible d'importer seulement une partie d'une bibliothèque (une seule classe/fonction).
Pour cela, Python utilise toujours l'instruction import, mais précédée de l'instruction from.
Plus précisément, il faut faire "from nom_lib import nom_fonction"

il existe plusieurs façon d'installer des bibliothèques tierces, mais pip est une des plus pratique.
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

#les fichiers 
	#Voici la syntaxe pour lire un fichier
	>>> fichier = open("data.txt", "r")
	#Les types d'ouverture
	r, pour une ouverture en lecture (READ).
	w, pour une ouverture en écriture (WRITE), à chaque ouverture le contenu du fichier est écrasé. Si le fichier n'existe pas python le crée.
	a, pour une ouverture en mode ajout à la fin du fichier (APPEND). Si le fichier n'existe pas python le crée.
	b, pour une ouverture en mode binaire.
	t, pour une ouverture en mode texte.
	x, crée un nouveau fichier et l'ouvre pour écriture
	#Fermeture d'un fichier
	>>> fichier.close()
	#Lire le contenu d'un fichier
	fichier = open("data.txt", "r")
	print fichier.read()
	#Ecrire dans un fichier
	fichier = open("data.txt", "a")
	fichier.write("Bonjour monde")
	#Le mot clé with
	Il existe une autre syntaxe plus courte qui permet de s'emanciper du problème de fermeture du fichier: le mot clé with .
	with open("data.txt", "r") as fichier:
		print fichier.read()

	#pickle(binary file)
	import pickle
	#write
	filename = 'dogs'
	outfile = open(filename,'wb')
	pickle.dump(dogs_dict,outfile)
	outfile.close()
	#read
	infile = open(filename,'rb')
	new_dict = pickle.load(infile)
	infile.close()

#time module
import time
print("Before the sleep statement")
time.sleep(5)# 5 seconde
print("After the sleep statement")

#yield( permet de renvoyer pluisieur retour dans une fonction par exemple )
# defining the function that will have some yield statement
		def yieldStatement():
		   yield 'Statement 1'
		   yield 'Statement 2'
		   yield 'Statement 3'

		# getting the statements
		statements = yieldStatement()
		# for each statements that are yielded will be printed
		for s in statements:
		   print(s)
		#output
	"""	Statement 1
		Statement 2
		Statement 3  """

#parseargument
		# import the necessary packages
		import argparse
		 
		# construct the argument parse and parse the arguments
		ap = argparse.ArgumentParser()
		ap.add_argument("-n", "--name", required=True,
			help="name of the user")
		args = vars(ap.parse_args())

    #PROGAMMATION ORIENTE OBJET
#creation,methode et instanciation d'une classe
class Agent:
    def Say_hello(self,name):
    	return"Et bien le bonjour " +name

agent1 = Agent()
print(agent1.Say_hello("saliou"))

#constructeur et attribue
class Agent:
    def Say_hello(self,name):
    	return"Et bien le bonjour " +name
    def __init__(self,agreable):
        self.agreableness=agreable#le mot cle self permet de creer la variable comme attribut de class
    def information(cls,info): #cls =methode de classe
    	#corp de la methode
    information=classmethod(change_info)#defini la methode de class

agent1 = Agent(5)
print(agent1.agreableness)YYY
#property(<getter>, <setter>, <deleter>,<helper>)
creer les methodes _getattr(self),setattr()#mettre un "_" devant l' attr appliquer a un accesseur
#culture generale
Ces deux underscores sont utilisés assez souvent ! Ils sont appelés dunders.
#nombre paramètre variable pour une fonction(dans l'exemple suivant cities est une liste)
def cities(country, *cities):
def list_songs(**songs):#dans ce cas song est un dictionnaire
