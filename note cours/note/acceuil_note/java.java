//------------------ITERATION SUR UN ENSEMBLE DE VALEUR:
for(type val:NomTab){
	System.out.println(val);
}
//------------------TABLEAU MULTIDIMENSIONNELS
int [][] tab = new int[nbre_de_ligne][nbre_de_colonne];
//-------------------TABLEAU DYNAMIQUE
import java.util.ArrayList;
ArrayList<type> tab =ArrayList<type>();
tab.add();//ajouter un element a notre tableau
tab.get();//recuperer un element du tableau
tab.set();//permet de modifier un element du tableau
tab.clear();//effacer tous les element du tableau 
tab.remove();//effacer un element a un indice donne
tab.isEmpty();//verifier si un tableau est vide ou non
tab.indexOf() , tab.contains()
//----------LES FORMATS
%e//ecrire un float en puissance
%g//cherche le meilleur format entre puissance ou nbre a virgule
%a//pour hexadecimal
%%//permet d'afficher "%"
//-----------ASTUCES & TRUCS
ctrl+shift+F//presenter le code
thread.sleep(5000)//faire une pause de 5000ms = 5 seconde
// LES MODIFICATEUR D ACCES
public// acces au interieur de la classe, a l'interieur des autre classe du meme package,a l'interieur des autre package
private// acces au interieur de la classe uniquement
protected//acces au interieur de la classe a l'interieur des  classe filles 
default(modificateur friendly)//acces au interieur de la classe, a l'interieur des autre classe du meme package,

// LES BOITES DE DIALOGUES
JOptionPane.showInputDialog("quel est ton nom ");
JOptionPane.showMessageDialog("permet d'afficher");
//le mot cle "static"
on a pas besoin de creer un instance de la classe pour appeler une variable ou methode static
//-------SURCHARGE DE METHODE
cela consiste a creer des methodes de meme nom mais avec des paramètres différents 
le nombre de parametre donne sert a identifié la methode
//-------les EXCEPTIONS
throw new IllegalArgumentException("l'age doit etre superieur a 15ans");
try {
		P1.setAge(11);
		}catch(IllegalArgumentException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();//permet d'afficher plus d'info sur l'erreur
		}
"throws" NombreHabitantException nous indique que si une erreur est capturée, celle-ci sera traitée en tant qu'objet de
la classe NombreHabitantException, ce qui nous renseigne sur le type de l'erreur en question. Elle indique aussi à la JVM
que le constructeur de notre objet Ville est potentiellement dangereuxet qu'il faudra gérer les exceptions possibles.
// pour lancer plusieur exception
throw new NombreHabitantException(pNbre);
try {
v = new Ville("Re", 12000, "France");
}/
/Gestion de plusieurs exceptions différentes
catch (NombreHabitantException | NomVilleException e2){
System.out.println(e2.getMessage());
}f
inally{
if(v == null)
v = new Ville();
}
//LES IMPORTATIONS STATIQUES
exemple : import static java.lang.Math.abs;

//l'HERITAGE
class Capitale extends Ville {
}
//POLYMORPHISME
java utilise la resolution dynamique des liens (appelle la methode qui se trouve dans la classe a droite 
c est a dire celui qui a un new devant)par contre pour la resolution static des liens on utilise la methode
de la superclass'

//redefinition de méthode
elle consite a redefinir une methode de la classe parent au niveau des classe fille sans changer 
la signature de la methode.
//classe et methode abstraite
 une classe abstraite est une classe qu'on on ne peut pas instancier
 abstract public double aire();//methode abstraite pas de corp doit etre creer forcément  par les classe filles(sinon ils doivent etre declarer abstraite )
 abstract public class forme{}//classe abstraite
 NB//en java une classe ne peut etre heriter deux fois 
 //covarience  d'une variable
 @Override//permet de dire que la methode a ete redefini 
//le mot clé "super" et "this"
super() permet d appeler le constructeur de la classe mère
"super." permet d acceder au methode et propriété de la classe mère
this(nom,cote)//;permet d'evité de repeter 
DRY (don't repeat yourself)
//coversion 
String.valueOf(value);
Integer.valueOf(value);
//toString de la classe Objet la methode suivant est automatiqu appeler lorsqu'affiche une objet
@Override
	public String toString() {
		return String.format("compte bancaire de %s.Solde actuel : %d CFA.",nomProprietaire,solde);
	}
pour donner un nombre de parametre variable on utilise ()
public void additionner (double... n)
//---------interface
tous les methodes d une interfaces sont abstraites
une classe implemente une interface
//----diamond problem
une classe peut implementer pluisieurs interfaces mais une classe ne peut pas implementer +ieur class
//bloc d'initialisation d'instance :c'est ce qui s'exécute dabort lorqu'on créé une instance
{
	System.out.println("je m'execute dabort")
}
//bloc d'initialisation statique://il est appiler une seule fois
static{

}
les classes internes
pour creer une nvlle instance d'un classe interne B (qui est dans A) dans un autre classe 
on crée dabort une instance de A puis on cree une instance de B a partir de A 
A a = new a(); a.new B()
Au niveau d'une classe interne static on ne pourra acceder au méthode et attribut declarer static
une classe defini avec le mot clé final ne peut pas etre heriter

//regle important 
Si on a un constructeur d'une classe parent sans parametre  si la classe fille cree une instance le constructeur de la 
classe mere est automatiquement appeler 
Par contre si le constructeur d'une classe parent a des  parametre  si la classe fille cree une instance le constructeur de la 
classe mere doit etre appeler et passer le parametre
//HashMap
HashMap<K,V> map = new HashMap<>();
map.put("key","valuess");
map.get("key");
map.remove("key");
map.isEmpty();
map.clear();
map.size();
//iteration sur les HashMap hasNext(),next()
Iterator<> iterator = tab.iterator();
iterator.hasNext()//verifie s'il y a une valeur suivant
Iterator<String> iterator = map.values().iterator();
Iterator<String> iterator = map.keySet().iterator();
while(iterator.hasNext()){
	System.out.println(iterator.next());
}
//Listiteration

//LES ENUMERATIONS
		//declaration d'une énumeration
public enum Volume{//peut etre defini comme une classe
	LOW(10),MEDIUM(50),HIGH(100);
	private int value;
	Volume(int value){//constructeur est toujours privé
		this.value=value
	}
	public String toString(){
		return String.valueOf(value);
	}
}
Volume.values()//renvoi un tableau contenant l'ensemble de nos valeurs

//GESTION DES FICHIER
Path path =Paths.get("doc/test.txt);
path.getNameCount()//donne le nbre de partie de notre chemain
path.getName(int);
path.getRoot()// donne la racine
path.getRoot(int start,int fin )
path.subpath()
path.getParent()
path.toAbsolutePath();
path.toRealPath();le fichier doit exister
path.toRealPath(path.toRealPath(linkOption.NOFOLLOW_LINKS))
//copie et suppression de fichier
Path source =Paths.get("test.txt);
Path destination =Paths.get("test_copie.txt);
Files.copy(source,destination,StandardCopyOption.REPLACE_EXISTING);
Path dossier =Paths.get("nice");
Files.createDirectory(dossier)
Files.createDirectory(dossier)
//deplacer un fichier
Files.move(source,dossierNice.resolve("tes.txt"),)
//lire le contenu d'un fichier
Files.readAllLines(path, Charset.forName("ISO-8859-1"));
Files.readAllLines(path, StandardCharset.ISO-8859-1);
Files.readAllLines(path, Charset.defaultCharset())
Files.write(path,texte.getBytes(), StandardOpenOption.CREATE,StandardOpenOption.WRITE,StandardOpenOption.APPEND )
//lire le contenue d'un fichier en utilisant avec Scanner
String filename = "/home/seck/code/fic.txt";
File file =new File(filename);
Scanner in =new Scanner(file);
while(in.hasnewtLine()){
	String line =in.nextLine();
	System.out.println(line);
}
in.close;

StringBuilder sb = new StringBuilder()
sb.append("chaine de caractère")
//les exeptions 
pour sa propre exeptions 
creer la une classe qui porte le nom de l'exeptions qui extends de la classe Exception
checkExeption // qui doive forcément etre gerer sinon on peut pas executer notre code 
RuntimeException// on peut executer notre code sans etre obligé de lever l'exception
try catch finally
System.err.println()//pour afficher un message d'erreur

//UTILISATION DE FILEREADER
File file = new File("test.txt");
FileReader fr = new FileReader(file);
			BufferedReader br = new BufferedReader(fr);
			String line =br.readLine();
			System.out.println(line);
			while(line=BufferedReader.readLine() =! null)

//le try-with-ressources
les classe qui implemente l'interface AutoCloseable on peut 

FILEWRITER
%n //permet de faire un retour a la ligne 
File file = new File("test1.txt");
		try(BufferedWriter br = new BufferedWriter(new FileWriter(file)) ) {
					br.write("c'est mon premier ligne");
					br.newLine();
					br.write("c'est mon second ligne");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
		}
//SERIALISER UN OBJET
pour rendre une classe serialisable il faut qu'il implémente "Serializable"
pour ne pas serialier un attribut il faut: le declarer avec transient
:private transient int id
les attribut static et les constructeur ne sont pas serialisable
permet de transformer un objet en un sequence d'octet
FileOutputStream fos =new FileOutputStream("student.ser");
ObjetOutputStream oos =new ObjetOutputStream(fos);
oos.writeObject(honore);
oos.writeObject(moobjet);
//DESERIALISER UN OBJET
try(ObjectInputStream oos = new ObjectInputStream(new FileInputStream("donne.ser"))) {
			
			Etudiant etu1 = (Etudiant)(oos.readObject());
			Etudiant etu2 = (Etudiant)oos.readObject();
			System.out.println(etu1);
			System.out.println(etu2);

//donner un paramètre tableau a un arraylist :
			ArrayList<Student> studentList =new ArrayList<>(Array.asList(students))

//GENERICITe
pour generer une généricite il faut a notre nom de classe le type de cette forme <A>
public class Special <A> {
	private A attribut;
	public Special(A attribut) {
		this.attribut=attribut;
		// TODO Auto-generated constructor stub
	}//par la suite a peut etre remplacer sans par n'importe quel type ou interface

//GENERICITE ET IMPLEMENTATION convariance
NB//une fois defini on ne peut pas changer le type d'un generate
ArrayList<?> //ArrayList de n'importe quoi
le point d interrogation est appeler un wilcard
il ferme notre arratList en ecriture donc on ne pourra que lire des element dans notre ArrayList mais 
pas d'y ajouter des element 
arraylist<Animal> animaux=new ArrayList<Animal>();
arraylist<Chat> chats=new ArrayList<Chat>();
lister(animaux);
lister(chat);
public static void lister(ArrayList<?> animaux){//pour dire que notre methode prend en paramètre un arraylist de n'importe quoi
	for (Objet animal : animaux ) {
		System.out.println(animal);
	}
}
ArrayList<? extends Animal>//pour dire que la seule le type animal et les classe qui herite de animal sont accepter
pour une interface aussi on utilise cette meme syntaxe

//LES COLLECTIONS ( A LIRE ET A COMPRENDRE COUTE QUE COUTE)
une collection est objet qui représente un ensemble d'objet
pour trier des élément d'une collection on peut utiliser Collections.sort()
si notre collection a un type non défini alors il nous faudra Implementer l'interface Comparable<> et redifinir la methode compareTo
public int compareTo(Etudiant te) {
		// TODO Auto-generated method stub
		return this.prenom.compareTo(te.getPrenom()) ;
	}

Collections.sort(tab,new prenonComparator());
pour utiliser cette expression il dabort creer la classe prenonComparator et implemente l'interface comparator et redifinir la methode compare

TreeSet<String> musique = new TreeSet<>();//tous les element sont ordoner 
LinkedList//on l'utilise pour les tableaux auquel on veut inserer des élément au milieu 
Array.sort(montab_entier)//permet de trier un tableau d'intier
la classe String
boolean	matches​(String regex)	
Indique si cette chaîne correspond ou non à l' expression régulière donnée .
String[]	split​(String regex)	
Divise cette chaîne en fonction des correspondances de l' expression régulière donnée .
String[]	split​(String regex, int limit)	
Divise cette chaîne en fonction des correspondances de l' expression régulière donnée .
public static  Chaîne  join ( CharSequence  delimiter, CharSequence ... éléments)
Retourne une nouvelle chaîne composée de copies de la CharSequence elementsjointure avec une copie de la spécifiée delimiter.
Par exemple,

     String message = String.join("-", "Java", "is", "cool");
isBlank
public boolean isBlank ()
Renvoie truesi la chaîne est vide ou ne contient que des white spacepoints de code, sinon false.
     // message returned is: "Java-is-cool"
//COUR OPENCLASSROOM
jshell

//connexion base de donne-java
package test10;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class test {
	static Connection connection;
	static Statement st;
	static ResultSet result;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection("jdbc:mysql://localhost/java_tuto","root","toor");
			st=connection.createStatement();//StatementLes objets vous permettent d'exécuter des requêtes 
			//SQL de base et d'extraire les résultats via la ResultSetclasse, décrite plus loin.
			//retourne un entier représentant le nombre de lignes affectées par la requête réalisée
			int line_affect = st.executeUpdate("INSERT INTO users(nom,age) VALUES('sene',18);" );
			
			
			result=st.executeQuery("SELECT *FROM users");
			
			while(result.next()) {
				System.out.println(" nom "+result.getString("nom")+" age "+result.getInt("age"));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
		    if ( result != null ) {
		        try {
		            /* On commence par fermer le ResultSet */
		            result.close();
		        } catch ( Exception ignore ) {
		        }
		        	result = null;
		    }
		    if ( st != null ) {
		        try {
		            /* Puis on ferme le Statement */
		            st.close();
		        } catch ( Exception ignore ) {
		        }
		        	st = null;
		    }
		    if ( connection != null ) {
		        try {
		            /* Et enfin on ferme la connection */
		            connection.close();
		        } catch ( Exception ignore ) {
		        }
		    		connection = null;
		    }

		}
	}

}

Si vous ne savez pas à l'avance si l'instruction SQL sera un SELECTou un UPDATE/ INSERT, vous pouvez utiliser 
la execute(String SQL) méthode. Cette méthode retourne true si la requête SQL était une SELECTou fausse si
 elle était UPDATE, INSERTou DELETEdéclaration





 public  ObjectOutputStream saveStudentsMarks (String numCarte, double notes[]) {
       
        try {
           
            if(!new File("./masterpro1/allnotes/").exists()){
            new File("./masterpro1/allnotes/").mkdirs();
            }
             
            File fic=new File("./masterpro1/allnotes/"+numCarte);
            fic.createNewFile();
            FileOutputStream fos =new FileOutputStream(fic);
            ObjectOutputStream oos=new ObjectOutputStream(fos);
            oos.writeObject(notes);   
            return oos;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }


         public  String  showMarks (String numCarte){
       String str=null;
      
            ObjectInputStream oos = new ObjectInputStream(new FileInputStream("./masterpro1/allnotes/"+numCarte));
            double notes[]=(double[]) oos.readObject();
 
	public static void main(String[] args) {

		Thread t = new Thread() {

	public void run() {

		System.out.println("Mon traitement");

	}

	};

	t.start();

}