//le servelet.
Que fait-il lorsqu'une requête lui parvient ?'
Nous savons déjà qu'il la transmet à un autre élément, que nous avons jusqu'à présent qualifié de conteneur : il s'agit en réalité
d'un conteneur de servlets,également nommé conteneur web (voir la figure suivante). Celui-ci va alors créer deux nouveaux objets :
--HttpServletRequest : cet objet contient la requête HTTP, et donne accès à toutes ses informations, telles que les en-têtes (headers) et le corps de la requête.
--HttpServletResponse : cet objet initialise la réponse HTTP qui sera renvoyée au client, et permet de la personnaliser, en initialisant
 par exemple les en-têtes et le corps (nous verrons comment par la suite).
 //*****DEFINITION 
 Une servlet est en réalité une simple classe Java, qui a la particularité de permettre le traitement de requêtes et la personnalisation de réponses. 
 Pour faire simple, dans la très grande majorité des cas une servlet n'est rien d'autre qu'une classe capable de recevoir une requête HTTP envoyée 
 depuis le navigateur de l'utilisateur, et de lui renvoyer une réponse HTTP. C'est tout ! :)
//a retenir 
Ce qu'il faut retenir pour le moment :
-->une servlet HTTP doit hériter de la classe abstraite HttpServlet ;
-->une servlet doit implémenter au moins une des méthodes doXXX(), afin d'être capable de traiter une requête entrante.
//Définition de la servlet
<servlet>
	<servlet-name>Test</servlet-name>
	<servlet-class>com.sdzee.servlets.Test</servlet-class>
		<description>Ma première servlet de test.</description>

	<init-param>
		<param-name>auteur</param-name> 
		<param-value>Seck</param-value> 
	</init-param>

	<load-on-startup>1</load-on-startup>
</servlet>
La balise responsable de la définition d'une servlet se nomme logiquement <servlet>, et les deux balises obligatoires de cette section sont très explicites :

<servlet-name> permet de donner un nom à une servlet.C'est ensuite via ce nom qu'on fera référence à la servlet en question.Ici,j'ai nommé notre servlet Test.

<servlet-class> sert à préciser le chemin de la classe de la servlet dans votre application. Ici, notre classe a bien pour nom Test et se situe bien dans 
le package com.sdzee.servlets.

<description> permet de décrire plus amplement le rôle de la servlet. Cette description n'a aucune utilité technique et n'est visible que dans ce fichier;

<init-param> permet de préciser des paramètres qui seront accessibles à la servlet lors de son chargement. Nous y reviendrons en détail plus tard dans ce cours ;

<load-on-startup> permet de forcer le chargement de la servlet dès le démarrage du serveur. Nous reviendrons sur cet aspect un peu plus loin dans ce chapitre.

<!-- Mapping de la servlet -->
Il faut ensuite faire correspondre notre servlet fraîchement déclarée à une URL, afin qu'elle soit joignable par les clients :

<servlet-mapping>
    <servlet-name>Test</servlet-name>
    <url-pattern>/toto</url-pattern>
</servlet-mapping>
La balise responsable de la définition du mapping se nomme logiquement <servlet-mapping>, et les deux balises obligatoires de cette section sont, là 
<servlet-name> permet de préciser le nom de la servlet à laquelle faire référence. Cette information doit correspondre avec le nom du servlet.
<url-pattern> permet de préciser la ou les URL relatives au travers desquelles la servlet sera accessible. Ici, ça sera /toto !
//reedefinition de la methode doGet
public class Test extends HttpServlet {
	public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
		response.setContentType("text/html");
	response.setCharacterEncoding( "UTF-8" );
	PrintWriter out = response.getWriter();
	out.println("<!DOCTYPE html>");
	out.println("<html>");
	out.println("<head>");
	out.println("<meta charset=\"utf-8\" />");
	out.println("<title>Test</title>");
	out.println("</head>");
	out.println("<body>");
	out.println("<p>Ceci est une page générée depuis une servlet.</p>");
	out.println("</body>");
	out.println("</html>");
	}
}


//------------------Servlet avec vue…
//definition
►Le langage JSP combine à la fois les technologies HTML, XML, servlet et JavaBeans (nous reviendrons sur ce terme plus tard, pour le moment retenez simplement que c'est un objet Java) en une seule solution permettant aux développeurs de créer des vues dynamiques.
►On peut résumer la technologie JSP en une technologie offrant les capacités dynamiques des servlets tout en permettant
  une approche naturelle pour la création de contenus statiques
//Introduction aux JSP
À quoi ressemble une page JSP ?

C'est un document qui, à première vue, ressemble beaucoup à une page HTML, mais qui en réalité en diffère par plusieurs aspects :

++ l'extension d'une telle page devient .jsp et non plus .html ;

++ une telle page peut contenir des balises HTML, mais également des balises JSP qui appellent de manière transparente du code Java ;

++ contrairement à une page HTML statique directement renvoyée au client, une page JSP est exécutée côté serveur, et génère alors une page renvoyée au client.

//Création de la vue
pour creer une vue on creer une page ".jsp" dans webContent
l'encodage par default est iso donc il nous faudra le changé a ajoutant la ligne  suivante au debut de la page jsp
<%@ page pageEncoding="UTF-8" %>
//bonne pratique deplacer les fichiers jsp dans WEB-INF pour qu'il ne puisse pas etre accessible directement par le client

//associer nos fichiers jsp a un servelet 
public void doGet( HttpServletRequest request, HttpServletResponse response )	throws ServletException, IOException {
	this.getServletContext().getRequestDispatcher( "/WEB-INF/test.jsp" ).forward( request, response );
}
//Analysons ce qui se passe :

►depuis notre instance de servlet (this), nous appelons la méthode getServletContext(). Celle-ci nous retourne alors un objet ServletContext, qui fait référence au contexte commun à toute l'application : celui-ci contient un ensemble de méthodes qui permettent à une servlet de communiquer avec le conteneur de servlet ;

►celle qui nous intéresse ici est la méthode permettant de manipuler une ressource, getRequestDispatcher(), que nous appliquons à notre page JSP.Elle retourne un objet RequestDispatcher, qui agit ici comme une enveloppe autour de notre page JSP. Vous pouvez considérer cet objet 
 comme la pierre angulaire de votre servlet : c'est grâce à lui que notre servlet est capable de faire suivre nos objets requête et réponse à une vue.
  Il est impératif d'y préciser le chemin complet vers la JSP, en commençant obligatoirement par un / (voir l'avertissement et la précision ci-dessous) ;

►nous utilisons enfin ce dispatcher pour réexpédier la paire requête/réponse HTTP vers notre page JSP via sa méthode forward().
La méthode forward() de l'objet RequestDispatcher permet depuis une servlet de rediriger la paire requête/réponse HTTP 
vers une autre servlet ou vers une page JSP

<!-------------------------------- TRANSMISSION DES DONNEES ---------------------------------->
<!-- creons une chaine de caractère pour le transmettre a notre vue -->
<!-- servlet file -->
public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
	String message = "Transmission de variables : OK !";
	request.setAttribute( "test", message );
	this.getServletContext().getRequestDispatcher( "/WEB-INF/test.jsp" ).forward( request, response );
}
<!-- jsp file -->
<p>
      <% 
      String attribut = (String) request.getAttribute("test");
      out.println( attribut );
      %>
</p>
<!-- NB -->
Remarquez à ce sujet la nécessité de convertir (cast) l'objet récupéré dans la JSP au type souhaité, la méthode getAttribute() renvoyant un objet global de type Object.


<!-- DONNÉES ISSUES DU CLIENT : LES PARAMÈTRES -->
<!-- URL avec deux paramètres nommés 'lang' et 'admin', et ayant pour valeur respectivement 'fr' et 'true' -->
/page.jsp?lang=fr&admin=true
<!-- NB -->
Il n'existe pas d'autre moyen de déclarer des paramètres dans une requête GET, ceux-ci doivent impérativement apparaître en clair dans l'URL demandée. À ce propos, souvenez-vous de ce dont je vous avais avertis lors de la présentation de cette méthode GET : la taille d'une URL étant limitée, la taille des données qu'il est ainsi possible d'envoyer est limitée également !
<!-- recuperer un parametre GET sur le serveur -->
String paramAuteur = request.getParameter( "auteur" );
<!-- difference entre parametre et attribue de requete -->
En résumé, les paramètres de requête sont propres au protocole HTTP et font partie intégrante de l'URL d'une requête, alors que les attributs sont des objets purement Java créés et gérés par le biais du conteneur.


<!-----------------------------Le JavaBean ----------------------------->
-le JavaBean. Souvent raccourci en "bean", un JavaBean désigne tout simplement un composant réutilisable.
-un bean est un simple objet Java qui suit certaines contraintes, et représente généralement des données du monde réel.
<!-- Les propriétés  -->: un bean est conçu pour être paramétrable. On appelle "propriétés" les champs non publics présents dans un bean. Qu'elles soient de type primitif ou objets, les propriétés permettent de paramétrer le bean, en y stockant des données.

<!-- La sérialisation --> : un bean est conçu pour pouvoir être persistant. La sérialisation est un processus qui permet de sauvegarder l'état d'un bean, et donne ainsi la possibilité de le restaurer par la suite. Ce mécanisme permet une persistance des données, voire de l'application elle-même.

<!-- La réutilisation  -->: un bean est un composant conçu pour être réutilisable. Ne contenant que des données ou du code métier, un tel composant n'a en effet pas de lien direct avec la couche de présentation, et peut également être distant de la couche d'accès aux données (nous verrons cela avec le modèle de conception DAO). C'est cette indépendance qui lui donne ce caractère réutilisable.

<!-- L'introspection --> : un bean est conçu pour être paramétrable de manière dynamique. L'introspection est un processus qui permet de connaître le contenu d'un composant (attributs, méthodes et événements) de manière dynamique, sans disposer de son code source. C'est ce processus, couplé à certaines règles de normalisation, qui rend possible une découverte et un paramétrage dynamique du bean !

<!-- Structure d'un bean -->
Un bean :

doit être une classe publique ;

doit avoir au moins un constructeur par défaut, public et sans paramètres. Java l'ajoutera de lui-même si aucun constructeur n'est explicité ;

peut implémenter l'interface Serializable, il devient ainsi persistant et son état peut être sauvegardé ;

ne doit pas avoir de champs publics ;

peut définir des propriétés (des champs non publics), qui doivent être accessibles via des méthodes publiques getter et setter, suivant des règles de nommage.

<!-- Exemple de Bean -->
<%
/* Cet objet est une classe publique */
public class MonBean{
	/* Cet objet ne possède aucun constructeur, Java lui assigne donc un constructeur par défaut public et sans paramètre.  */

	/* Les champs de l'objet ne sont pas publics (ce sont donc des propriétés) */
	private String proprieteNumero1;
	private int proprieteNumero2;

	/* Les propriétés de l'objet sont accessibles via des getters et setters publics */
	public String getProprieteNumero1() {
		return this.proprieteNumero1;
	}

	public int getProprieteNumero2() {
		return this.proprieteNumero2;
	}

	public void setProprieteNumero1( String proprieteNumero1 ) {
		this.proprieteNumero1 = proprieteNumero1;
	}

	public void setProprieteNumero2( int proprieteNumero2 ) {
		this.proprieteNumero2 = proprieteNumero2;
	}

	/* Cet objet suit donc bien la structure énoncée : c'est un bean ! */
}
%>
<!-- Configuration du projet sous Eclipse pour le build path des fichiers .class "WEB-INF/classes" -->
<%
/* Création du bean */
	Coyote premierBean = new Coyote();
	/* Initialisation de ses propriétés */
	premierBean.setNom( "Coyote" );
	premierBean.setPrenom( "Wile E." );
		
	/* Stockage du message et du bean dans l'objet request */
	request.setAttribute( "test", message );
	request.setAttribute( "coyote", premierBean );
	%>


<!---------------------------------JSP partie 2 ------------------------------->
<%-- Ceci est un commentaire JSP, non visible dans la page HTML finale.  --%>
<!-- balise de declatation pour declarer une variable dans une page jsp -->
<%! String chaine = "Salut les zéros.";  %>
<!-- Balises de scriptlet : pour inclure du code java -->

<!-- Balises d'expression-->
<%= "Bip bip !" %>

<!-- Les directives -->
Les directives JSP permettent :
-d'importer un package ;
-d'inclure d'autres pages JSP ;
-d'inclure des bibliothèques de balises (nous y reviendrons dans un prochain chapitre) ;
-de définir des propriétés et informations relatives à une page JSP.

Pour généraliser, elles contrôlent comment le conteneur de servlets va gérer votre JSP. Il en existe trois : taglib, page et include. Elles sont toujours comprises entre les balises <%@ et %>, et hormis la directive d'inclusion de page qui peut être placée n'importe où, elles sont à placer en tête de page JSP.

<!-- Directive taglib -->
<%@ taglib uri="maTagLib.tld" prefix="tagExemple" %>
<!-- Directive page -->
La directive page définit des informations relatives à la page JSP. Voici par exemple comment importer des classes Java 
<%@ page import="java.util.List, java.util.Date"  %>
<%@ page 
          language="..." 
          extends="..." 
          import="..." 
          session="true | false" 
          buffer="none | 8kb | sizekb" 
          autoFlush="true | false" 
          isThreadSafe="true | false" 
          isELIgnored ="true | false"
          info="..." 
          errorPage="..." 
          contentType="..." 
          pageEncoding="..."
          isErrorPage="true | false" 
%>
<%@ include file="uneAutreJSP.jsp" %>

<!-- Action standard include -->
<%-- L'inclusion dynamique d'une page fonctionne par URL relative : --%>
<jsp:include page="page.jsp" />

<%-- Son équivalent en code Java  est : --%>
<% request.getRequestDispatcher( "page.jsp" ).include( request, response ); %>

<%-- Et il est impossible d'inclure une page externe comme ci-dessous :  --%>
<jsp:include page="http://www.siteduzero.com" />

<!-- difference des directive include -->
<!-- Pour faire simple, les pages incluses via la balise <jsp:include ... /> doivent en quelque sorte être "indépendantes" ; elles ne peuvent pas dépendre les unes des autres et doivent pouvoir être compilées séparément. Ce n'est pas le cas des pages incluses via la directive <%@ include ... %> . -->

<!-- la portée des objets -->
Il existe au total quatre portées différentes dans une application :
+page (JSP seulement) : les objets dans cette portée sont uniquement accessibles dans la page JSP en question ;
+requête : les objets dans cette portée sont uniquement accessibles durant l'existence de la requête en cours ;
+session : les objets dans cette portée sont accessibles durant l'existence de la session en cours ;
+application : les objets dans cette portée sont accessibles durant toute l'existence de l'application.

-un objet de portée page n'est accessible que sur une page JSP donnée ;
-un objet de portée requête n'est accessible que durant le cheminement d'une requête dans l'application, et n'existe plus dès lors qu'une réponse est renvoyée au client ;
-un objet de portée session est accessible durant l'intégralité de la visite d'un client donné, à condition bien sûr que le temps d'inactivité défini par le conteneur ne soit pas dépassé durant cette visite ;
-un objet de portée application est accessible durant toute l'existence de l'application et par tous les clients.

<!-- L'action standard useBean -->
<%-- L'action suivante récupère un bean de type Coyote et nommé "coyote" dans
la portée requête s'il existe, ou en crée un sinon. --%>
<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote" scope="request" />

<%-- Elle a le même effet que le code Java suivant : --%>
<% 
com.sdzee.beans.Coyote coyote = (com.sdzee.beans.Coyote) request.getAttribute( "coyote" ); 
if ( coyote == null ){
    coyote = new com.sdzee.beans.Coyote();
    request.setAttribute( "coyote", coyote );
}
%>

Il est également possible de donner un corps à cette balise, qui ne sera exécuté que si le bean est créé :
<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote">
   <%-- Ici, vous pouvez placer ce que vous voulez : 
        définir des propriétés, créer d'autres objets, etc. --%>
   <p>Nouveau bean !</p>
</jsp:useBean>

<!----------------- L'action standard getProperty -->

<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote" />
<%-- L'action suivante affiche le contenu de la propriété 'prenom' du bean 'coyote' : --%>
<jsp:getProperty name="coyote" property="prenom" />
<%-- Elle a le même effet que le code Java suivant : --%>
<%= coyote.getPrenom() %>


<!------------------- L'action standard setProperty -->
<%-- L'action suivante associe une valeur à la propriété 'prenom' du bean 'coyote' : --%>
<jsp:setProperty name="coyote" property="prenom" value="Wile E." />
<%-- Elle a le même effet que le code Java suivant : --%>
<% coyote.setPrenom("Wile E."); %>

<%-- L'action suivante associe directement la valeur récupérée
depuis le paramètre de la requête nommé ici 'prenomCoyote' à la propriété 'prenom' : --%>
<jsp:setProperty name="coyote" property="prenom" param="prenomCoyote"/>
<%-- Elle a le même effet que le code Java suivant : --%>
<% coyote.setPrenom( request.getParameter("prenomCoyote") ); %>

<%-- L'action suivante associe directement la valeur récupérée
depuis le paramètre de la requête nommé ici 'prenom' à la propriété de même nom : --%>
<jsp:setProperty name="coyote" property="prenom" />
<%-- Elle a le même effet que le code Java suivant : --%>
<% coyote.setPrenom( request.getParameter("prenom") ); %>

<%-- L'action suivante associe automatiquement la valeur récupérée
depuis chaque paramètre de la requête à la propriété de même nom : --%>
<jsp:setProperty name="coyote" property="*" />
<%-- Elle a le même effet que le code Java suivant : --%> 
<% coyote.setNom( request.getParameter("nom") ); %>
<% coyote.setPrenom( request.getParameter("prenom") ); %>
<% coyote.setGenius( Boolean.valueOf( request.getParameter("genius") ) ); %>


<!-------------- L'action standard forward -->

<%-- Le forwarding vers une page de l'application fonctionne par URL relative : --%>
<jsp:forward page="/page.jsp" />
<%-- Son équivalent en code Java  est : --%>
<% request.getRequestDispatcher( "/page.jsp" ).forward( request, response ); %>
<%-- Et il est impossible de rediriger vers un site externe comme ci-dessous :  --%>
<jsp:forward page="http://www.siteduzero.com" />


<!-- ------------------------- LA TECHNOLOGIE JSP 2/2 ----------------->

<!-- Expression Language -->
les expressions EL permettent via une syntaxe très épurée d'effectuer des tests basiques sur des expressions, et de 
manipuler simplement des objets et attributs dans une page, et cela sans nécessiter l'utilisation de code ni de script Java

${ expression }

<!-- La réalisation de tests -->
${ true && true } <br /> <!-- Affiche true -->
${ 'hip' gt 'hit' } <br /> 
${ 'a' < 'b' && 'hip' gt 'hit' } <br />
<!-- Vérifications si vide ou null -->
${ empty 'test' } <!-- La chaîne testée n'est pas vide, le résultat est false -->
<!-- Conditions ternaires -->
${ true ? 'vrai' : 'faux' } <!-- Le booléen testé vaut true, vrai est affiché -->
${ 'a' > 'b' ? 'oui'  : 'non' } <!-- Le résultat de la comparaison vaut false, non est affiché -->
${ empty 'test' ? 'vide' : 'non  vide'  } <!-- La chaîne testée n'est pas vide, non vide est affiché -->


<!----------- La manipulation d'objets-->
<!-- Des beans -->
${ bean.propriete }

${ coyote.prenom }
Coyote bean = (Coyote) pageContext.findAttribute( "coyote" );
if ( bean != null ) {
    String prenom = bean.getPrenom();
    if ( prenom != null ) {
        out.print( prenom );
    }
}

<!-- les expressions EL sont protégées contre un éventuel retour null : -->
<!-- La scriptlet suivante affiche "null" si la propriété "prenom" n'a pas été initialisée, 
et provoque une erreur à la compilation si l'objet "coyote" n'a pas été initialisé : -->
<%= coyote.getPrenom() %>

<!-- L'action suivante affiche "null" si la propriété "prenom" n'a pas été initialisée, 
et provoque une erreur à l'exécution si l'objet "coyote" n'a pas été initialisé : -->
<jsp:getProperty name="coyote" property="prenom" />

<!-- L'expression EL suivante n'affiche rien si la propriété "prenom" n'a pas été initialisée,
et n'affiche rien si l'objet "coyote" n'a pas été initialisé : -->
${ coyote.prenom }

<!-- LES COLLECTION -->
 <% 
    	/* Création d'une liste de légumes et insertion de quatre éléments */
    	java.util.List<String> legumes = new java.util.ArrayList<String>();
        legumes.add( "poireau" );
        legumes.add( "haricot" );
        request.setAttribute( "legumes" , legumes );
        %>
        <!-- Les quatre syntaxes suivantes retournent le deuxième élément de la liste de légumes  -->
        ${ legumes.get(1) }<br />
        ${ legumes[1] }<br />
        ${ legumes['1'] }<br />
        ${ legumes["1"] }<br />

<!-- -------------- BONNE PRATIQUE----------- -->
Une pratique efficace veut que l'on réserve la notation avec l'opérateur point pour l'accès aux propriétés d'un bean, et que l'on utilise les crochets pour accéder aux contenus d'une Map. Ainsi en lisant le code d'une page JSP, il devient très simple de savoir si l'objet manipulé dans une expression EL est un bean ou une Map.

<!-- :Désactiver l'évaluation des expressions EL -->
<!-- Avec la directive page -->
La directive suivante désactive l'évaluation des EL dans une page JSP :
<%@ page isELIgnored ="true" %>
<!-- Avec le fichier web.xml -->
<jsp-config>
    <jsp-property-group>
        <url-pattern>*.jsp</url-pattern>
        <el-ignored>true</el-ignored>
    </jsp-property-group>
</jsp-config>

<!-- la maniere de declarer son appli si on a une version de tomcat qui utilise un api servlet de version 2.5  -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app 
 xmlns="http://java.sun.com/xml/ns/javaee"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
 version="2.5">
    ...
</web-app>


#------------------LES OBJETS IMPLICITES----------------------
le conteneur met à votre disposition toute une série d'objets implicites, tous accessibles directement depuis vos pages JSP. En voici la liste :

Identifiant:pageContext
Type de l'objet: pageContext
Description
Il fournit des informations utiles relatives au contexte d'exécution. Entre autres, il permet d'accéder aux attributs présents dans les différentes portées de l'application. Il contient également une référence vers tous les objets implicites suivants.

Identifiant: application
Type de l'objet: ServletContext
Il permet depuis une page JSP d'obtenir ou de modifier des informations relatives à l'application dans laquelle elle est exécutée.

Identifiant :session
Type de l'objet: HttpSession: 
Il représente une session associée à un client. Il est utilisé pour lire ou placer des objets dans la session de l'utilisateur courant.

Identifiant : request
Type de l'objet: HttpServletRequest
Il représente la requête faite par le client. Il est généralement utilisé pour accéder aux paramètres et aux attributs de la requête, ainsi qu'à ses en-têtes.

Identifiant: response
Type de l'objet: HttpServletResponse
Il représente la réponse qui va être envoyée au client. Il est généralement utilisé pour définir le Content-Type de la réponse, lui ajouter des en-têtes ou encore pour rediriger le client.

Identifiant : exception
Type de l'objet: Throwable
Il est uniquement disponible dans les pages d'erreur JSP. Il représente l'exception qui a conduit à la page d'erreur en question.

Identifiant : out
Type de l'objet: JspWriter
Il représente le contenu de la réponse qui va être envoyée au client. Il est utilisé pour écrire dans le corps de la réponse.

Identifiant : config
Type de l'objet: ServletConfig
Il permet depuis une page JSP d'obtenir les éventuels paramètres d'initialisation disponibles.

Identifiant : page
Type de l'objet: objet this
Il est l'équivalent de la référence this et représente la page JSP courante. Il est déconseillé de l'utiliser, pour des raisons de dégradation des performances notamment.


<!-- -----------LES OBJETS DE LA TECHNOLOGIE EL------------- -->

pageContext
Objet contenant des informations sur
l'environnement du serveur.

pageScope
Une Map qui associe les noms et valeurs des attributs
ayant pour portée la page.

requestScope
Une Map  qui associe les noms et valeurs des attributs
ayant pour portée la requête.

sessionScope
Une Map  qui associe les noms et valeurs des attributs
ayant pour portée la session.

applicationScope
Une Map  qui associe les noms et valeurs des attributs
ayant pour portée l'application.

param
Une Map qui associe les noms et valeurs des paramètres
de la requête.

paramValues
Une Map  qui associe les noms et multiples valeurs ** des paramètres
de la requête sous forme de tableaux de String.

header
Une Map qui associe les noms et valeurs des paramètres
des en-têtes HTTP.

headerValues
Une Map  qui associe les noms et multiples valeurs ** des paramètres
des en-têtes HTTP sous forme de tableaux de String.

cookie
Une Map qui associe les noms et instances des cookies.

initParam
Une Map qui associe les données contenues dans les
champs <param-name> et <param-value> de
la section <init-param> du fichier web.xml.

<!-- --------------------------------------------------------------- -->

<!-- recuperer un parametre(mot cle : param) --> 
${ param.langue }