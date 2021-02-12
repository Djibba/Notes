	public boolean regionMatches (int toffset,String  autre,int ooffset,int len)
Teste si deux régions de chaîne sont égales.
toffset = "l'index ou on commence a compter dans la chaine de caractère qui appel la méthode dans 
l'exemple qui suit str1"
String  autre//la chaine a comparer
int ooffset// l'index ou on commence la comparaison dans la chine donner en argument
int len // la longueur de chaine a comparer entre les deux chaine de caractère
			//EXEMPLE
String str1="saliou seck"
str1.regionMatches(8,"seck",1,3)//renvoi true
