# class Maclasse:
#     x=23
#     y=x+5
#     def __init__(self):
#         self.z=42

#     def affiche(self):
#         print("y = {} et z = {}".format(Maclasse.y,self.z))
# classe =Maclasse()
# classe.affiche()        

#EXO3
# class Vecteur2D:
#     def __init__(self,x=0,y=0):
#         self.x=x
#         self.y=y
#     def afficher(cls,vec):
#         print("x = {} et y = {}".format(vec.x,vec.y))
#     def addition(cls,a,b):
#         vect=Vecteur2D()
#         vect.x = a.x + b.x
#         vect.y = a.y + b.y
#         return(vect)  
#     addition=classmethod(addition)  
#     afficher=classmethod(afficher)
# vect1= Vecteur2D(2,3)
# vect2= Vecteur2D(4,5)
# sommeVect = Vecteur2D.addition(vect1,vect2)
# Vecteur2D.afficher(sommeVect)

#EXO3
# class Rectangle:
#     def __init__(self,longeur,largeur):
#         self.longeur=longeur
#         self.largeur=largeur
#         self.nom="rectangle"
#     def afficher(self):
#         print("c'est un {} ".format(self.nom))
#     def surface(self):
#         return self.longeur*self.largeur
# class Carre(Rectangle):
#     def __init__(self):
#         self.nom="carré"
# rect=Rectangle(9,6)
# carre=Carre()
# rect.afficher()
# carre.afficher()

#EXO2 cours 8
class Point:
    def __init__(self, x=0.0, y=0.0):
        self.x=x
        self.y=y
        sefl.nom="point"
class Segment:
    def __init__(self, x1, y1, x2, y2):
        self.x1=x1
        self.y1=y1
        self.x2=x2
        self.y2=y2
        self.origin=Point()
        self.extrem=Point()
        self.nom="point"
    def afficher():

