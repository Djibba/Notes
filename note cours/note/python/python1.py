//-------------- LES TYPES EN PYTHON
# -*- coding: utf-8 -*-
 "#!/usr/bin/env python3.5"  #executer un script python
#culture generale
Ces deux underscores sont utilisés assez souvent ! Ils sont appelés dunders.
#executer du code qui marche a la fois pour python 2 et 3 il faut faire les imports suivants
 from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

from builtins import *

from future import standard_library
standard_library.install_aliases()

 user_name = input('What is your name ?')#recuperer du texte dans l'entre standard
# commentaire en python
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
get()	Returns the value of the specified key if 2 value were given it return it return the second value by default if the key doesn't exist 
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
        self.agreableness=agreable

agent1 = Agent(5)
print(agent1.agreableness)




#-----------------------DATABASE CONNEXION
#Installation PyMySQL
pip install PyMySQL
#creation d'un module de connexion qu'on pourra appeler a chaque fois qu'on veux se connecter
*********************************************************************************************
import pymysql.cursors  
 
# La fonction renvoie une connexion.
def getConnection():
     
    # Vous pouvez changer les arguments de la connexion.
    connection = pymysql.connect(host='192.168.5.129',
                                 user='root',
                                 password='1234',                             
                                 db='simplehr',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection
*********************************************************************************************
L'exemple ci- dessous requête la table Employee, Pythonutilise  %s comme un "bouche- trou" (placeholder)
pour le paramètre, qui ne est indépendant du type de paramètre. Par exemple:

	sql1 = "Insert into Department (Dept_Id, Dept_No, Dept_Name) values (%s, %s, %s) " 
	sql2 = "Select * from Employee Where Dept_Id = %s "



#database connection 
connection = myconnutils.getConnection()
print ("Connect successful!")

*********************************************************************************************
# Example Python program to insert rows into a MySQL database table

# import the mysql client for python
import pymysql

# Create a connection object
dbServerName    = "127.0.0.1"
dbUser          = "root"
dbPassword      = ""
dbName          = "test"
charSet         = "utf8mb4"

connectionObject   = pymysql.connect(host=dbServerName, user=dbUser, password=dbPassword,
                                     db=dbName, charset=charSet)

try:
    # Create a cursor object
    cursorObject            = connectionObject.cursor()                                     

    # SQL string to create a MySQL table
    sqlCreateTableCommand   = "CREATE TABLE Employee(id int(11) AUTO_INCREMENT PRIMARY KEY, LastName varchar(32), FirstName varchar(32), DepartmentCode int)"

    # Execute the sqlQuery
    cursorObject.execute(sqlCreateTableCommand)

    # List the tables using SQL command
    sqlShowTablesCommand    = "show tables"   

    # Execute the SQL command
    cursorObject.execute(sqlShowTablesCommand)

    #Fetch all the rows - from the command output
    rows                = cursorObject.fetchall()
    for row in rows:
        print(row)

    # Insert rows into the MySQL Table
    insertStatement = "INSERT INTO Employee (id, LastName, FirstName, DepartmentCode) VALUES (1,\"Albert\",\"Einstein\",10)"   
    cursorObject.execute(insertStatement)
    
    # Get the primary key value of the last inserted row
    print("Primary key id of the last inserted row:")
    print(cursorObject.lastrowid)

    # SQL Query to retrive the rows
    sqlQuery    = "select * from Employee"   

    #Fetch all the rows - for the SQL Query
    cursorObject.execute(sqlQuery)
    rows = cursorObject.fetchall()

    for row in rows:
        print(row)

except Exception as e:
    print("Exeception occured:{}".format(e))

finally:
    connectionObject.close()
*********************************************************************************************
try :     
    cursore = connection.cursor()          
    requete = "INSERT INTO enseignant (idEnseignant, nom, prenom, login, pwd) VALUES (9, 'saliou', 'Seck', 'seck', 'toor')"            
    cursore.execute(requete)     

except Exception as e:
    print("Exeception occured:{}".format(e))
finally:
    connectionObject.close()




GRANT ALL PRIVILEGES ON *.* TO 'seck'@'%' IDENTIFIED BY 'ckk';