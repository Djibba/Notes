// APPRENDRE LES BASES DE DONNEES AVEC JAVA

 					// Chargement du driver
 /* Chargement du driver JDBC pour MySQL */
try {
    Class.forName( "com.mysql.jdbc.Driver" );
} catch ( ClassNotFoundException e ) {
    /* Gérer les éventuelles erreurs ici. */
}

					// Connexion a la base de DONNEES
/* Connexion à la base de données */
String url = "jdbc:mysql://localhost:3306/nom_bdd";
String utilisateur = "java";
String motDePasse = "SdZ_eE";
Connection connexion = null;
try {
    connexion = DriverManager.getConnection( url, utilisateur, motDePasse );

    /* Ici, nous placerons nos requêtes vers la BDD */
    /* ... */

} catch ( SQLException e ) {
    /* Gérer les éventuelles erreurs ici */
} finally {
    if ( connexion != null )
        try {
            /* Fermeture de la connexion */
            connexion.close();
        } catch ( SQLException ignore ) {
            /* Si une erreur survient lors de la fermeture, il suffit de l'ignorer. */
        }
}

https://openclassrooms.com/fr/courses/626954-creez-votre-application-web-avec-java-ee/624392-communiquez-avec-votre-bdd#/id/r-2136272

				// Création d'une requête
/* Création de l'objet gérant les requêtes */
Statement statement = connexion.createStatement();
Une fois l'objetStatementinitialisé, il devient alors possible d'exécuter une requête. Pour ce faire, celui-ci met à votre
disposition toute une série de méthodes, notamment les deux suivantes :
"executeQuery()": cette méthode est dédiée à la lecture de données via une requête de typeSELECT;
"executeUpdate()": cette méthode est réservée à l'exécution de requêtes ayant un effet sur la base de données 
(écriture ou suppression), typiquement les requêtes de typeINSERT,UPDATE,DELETE, etc.

				// Exécution d'une requête de lecture
En parcourant la documentation de la méthodeexecuteQuery(), nous apprenons qu'elle retourne un objet de type ResultSet contenant
 le résultat de la requête. Voici donc un exemple effectuant unSELECTsur notre table d'utilisateurs :
/* Exécution d'une requête de lecture */
ResultSet resultat = statement.executeQuery( "SELECT id, email, mot_de_passe, nom  FROM Utilisateur;" );

//Exécution d'une requête d'écriture
En parcourant cette fois la documentation de la méthode executeUpdate(), nous apprenons qu'elle retourne un entier représentant
 le nombre de lignes affectées par la requête réalisée. Si par exemple vous réalisez une insertion de données via unINSERT,
  cette méthode retournera 0 en cas d'échec et 1 en cas de succès. Si vous réalisez une mise à jour via unUPDATE, cette méthode
   retournera le nombre de lignes mises à jour. Idem en cas d'une suppression via unDELETE, etc.
Je vous propose ici un exemple effectuant unINSERTsur notre table d'utilisateurs :

/* Exécution d'une requête d'écriture */
int statut = statement.executeUpdate( "INSERT INTO Utilisateur (email, mot_de_passe, nom, date_inscription) VALUES ('jmarc@mail.fr', MD5('lavieestbelle78'), 'jean-marc', NOW());" );

				//Accès aux résultats de la requête
Retour d'une requête de lecture
Je vous l'ai déjà soufflé, l'exécution d'une requête de lecture via la méthodestatement.executeQuery()retourne un objet de 
typeResultSet. Vous pouvez le voir comme un tableau, qui contient les éventuelles données retournées par la base de données 
sous forme de lignes. Pour accéder à ces lignes de données, vous avez à votre disposition un curseur, que vous pouvez déplacer
 de ligne en ligne. Notez bien qu'il ne s'agit pas d'un curseur au sens base de données du terme, mais bien d'un curseur propre
  à l'objetResultSet. Voyons cela dans un exemple, puis commentons :

/* Exécution d'une requête de lecture */
ResultSet resultat = statement.executeQuery( "SELECT id, email, mot_de_passe, nom  FROM Utilisateur;" );

/* Récupération des données du résultat de la requête de lecture */
while ( resultat.next() ) {
    int idUtilisateur = resultat.getInt( "id" );
    String emailUtilisateur = resultat.getString( "email" );
    String motDePasseUtilisateur = resultat.getString( "mot_de_passe" );
    String nomUtilisateur = resultat.getString( "nom" );

    /* Traiter ici les valeurs récupérées. */
}

				//Retour d'une requête d'écriture
Lorsque vous effectuez une modification sur une table de votre base de données via la méthodestatement.executeUpdate(), 
celle-ci renvoie des informations différentes selon le type de la requête effectuée :

l'exécution d'un INSERT renvoie 0 en cas d'échec de la requête d'insertion, et 1 en cas de succès ;

l'exécution d'un UPDATE ou d'unDELETErenvoie le nombre de lignes respectivement mises à jour ou supprimées ;

l'exécution d'un CREATE, ou de toute autre requête ne retournant rien, renvoie 0.

Voici par exemple comment récupérer le statut d'une requête d'insertion de données :

/* Exécution d'une requête d'écriture */
int statut = statement.executeUpdate( "INSERT INTO Utilisateur (email, mot_de_passe, nom, date_inscription) VALUES ('jmarc@mail.fr', MD5('lavieestbelle78'), 'jean-marc', NOW());" );


					//Liberation des ressources disposition recomander 
Connection connexion = null;
Statement statement = null;
ResultSet resultat = null;
try {
    /* 
     * Ouverture de la connexion, initialisation d'un Statement, initialisation d'un ResultSet, etc.
     */
} catch ( SQLException e ) {
    /* Traiter les erreurs éventuelles ici. */
} finally {
    if ( resultat != null ) {
        try {
            /* On commence par fermer le ResultSet */
            resultat.close();
        } catch ( SQLException ignore ) {
        }
    }
    if ( statement != null ) {
        try {
            /* Puis on ferme le Statement */
            statement.close();
        } catch ( SQLException ignore ) {
        }
    }
    if ( connexion != null ) {
        try {
            /* Et enfin on ferme la connexion */
            connexion.close();
        } catch ( SQLException ignore ) {
        }
    }
}






						// exemple COMPLET APPLICATION

public List<String> executerTests( HttpServletRequest request ) {
    /* Chargement du driver JDBC pour MySQL */
    try {
        messages.add( "Chargement du driver..." );
        Class.forName( "com.mysql.jdbc.Driver" );
        messages.add( "Driver chargé !" );
    } catch ( ClassNotFoundException e ) {
        messages.add( "Erreur lors du chargement : le driver n'a pas été trouvé dans le classpath ! <br/>"
                + e.getMessage() );
    }

    /* Connexion à la base de données */
    String url = "jdbc:mysql://localhost:3306/bdd_sdzee";
    String utilisateur = "java";
    String motDePasse = "SdZ_eE";
    Connection connexion = null;
    Statement statement = null;
    ResultSet resultat = null;
    try {
        messages.add( "Connexion à la base de données..." );
        connexion = DriverManager.getConnection( url, utilisateur, motDePasse );
        messages.add( "Connexion réussie !" );

        /* Création de l'objet gérant les requêtes */
        statement = connexion.createStatement();
        messages.add( "Objet requête créé !" );

        /* Exécution d'une requête de lecture */
        resultat = statement.executeQuery( "SELECT id, email, mot_de_passe, nom FROM Utilisateur;" );
        messages.add( "Requête \"SELECT id, email, mot_de_passe, nom FROM Utilisateur;\" effectuée !" );
 
        /* Récupération des données du résultat de la requête de lecture */
        while ( resultat.next() ) {
            int idUtilisateur = resultat.getInt( "id" );
            String emailUtilisateur = resultat.getString( "email" );
            String motDePasseUtilisateur = resultat.getString( "mot_de_passe" );
            String nomUtilisateur = resultat.getString( "nom" );
            /* Formatage des données pour affichage dans la JSP finale. */
            messages.add( "Données retournées par la requête : id = " + idUtilisateur + ", email = " + emailUtilisateur
                    + ", motdepasse = "
                    + motDePasseUtilisateur + ", nom = " + nomUtilisateur + "." );
        }
    } catch ( SQLException e ) {
        messages.add( "Erreur lors de la connexion : <br/>"
                + e.getMessage() );
    } finally {
        messages.add( "Fermeture de l'objet ResultSet." );
        if ( resultat != null ) {
            try {
                resultat.close();
            } catch ( SQLException ignore ) {
            }
        }
        messages.add( "Fermeture de l'objet Statement." );
        if ( statement != null ) {
            try {
                statement.close();
            } catch ( SQLException ignore ) {
            }
        }
        messages.add( "Fermeture de l'objet Connection." );
        if ( connexion != null ) {
            try {
                connexion.close();
            } catch ( SQLException ignore ) {
            }
        }
    }

    return messages;
}




                    // LES REQUETES PREPARER

-l'utilisation dePreparedStatementpeut permettre de pré-compiler une requête SQL ;
-une requête SQL ainsi créée peut être paramétrée, c'est-à-dire contenir des trous
 ou jokers qui ne seront comblés que lors de son exécution ;
-une requête SQL ainsi créée est protégée contre les injections SQL, et contre d'éventuelles
 erreurs sur les types des paramètres.

                    // Comment préparer ses requêtes ?
Vous n'allez pas être dépaysés, le fonctionnement est assez semblable à celui d'unStatementclassique.

Initialisation de l'objet
La première différence se situe là où, auparavant, nous effectuions cette initialisation :

/* Création de l'objet gérant les requêtes */
Statement statement = connexion.createStatement();
Nous allons désormais directement préciser la requête SQL dans cette nouvelle initialisation :

/* Création de l'objet gérant la requête préparée définie */
PreparedStatement preparedStatement = connexion.prepareStatement( "SELECT id, email, mot_de_passe, nom FROM Utilisateur;" );

                    //Procedure avec les requetes préparer
/* Création de l'objet gérant les requêtes préparées */
preparedStatement = connexion.prepareStatement( "INSERT INTO Utilisateur (email, mot_de_passe, nom, date_inscription) VALUES(?, MD5(?), ?, NOW());" );

/* Récupération des paramètres d'URL saisis par l'utilisateur */
String paramEmail = request.getParameter( "email" );
String paramMotDePasse = request.getParameter( "motdepasse" );
String paramNom = request.getParameter( "nom" );

/*
 * Remplissage des paramètres de la requête grâce aux méthodes
 * setXXX() mises à disposition par l'objet PreparedStatement.
 */
preparedStatement.setString( 1, paramEmail );
preparedStatement.setString( 2, paramMotDePasse );
preparedStatement.setString( 3, paramNom );
//une méthodepreparedStatement.setInt()pour définir un entier ;
//une méthodepreparedStatement.setBoolean()pour définir un booléen ;
...

/* Exécution de la requête */
int statut = preparedStatement.executeUpdate();







APPLICATION


 /* Connexion à la base de données */
        String url="jdbc:mysql://localhost:3306/gestionCompte";
        String user="root";
        String password="";
        Connection connection=null;
        PreparedStatement preparedStatement=null;
        
        try {
            connection=DriverManager.getConnection(url, user, password);
            preparedStatement=connection.prepareStatement("INSERT INTO compte(prenom,nom,solde,decouvert,numCompte,dateInscription) "
                    + "VALUES(?,?,?,?,?,NOW()");
            /* Récupération des informations saisies par l'utilisateur */
            String paramPrenom=jtfPrenom.getText();
            String paramNom=jtfNom.getText();
            String paramSolde=jtfSolde.getText();
            String paramDecouvert=jtfDecouvert.getText();
            String paramNumCompte=jtf.getText();
            
            /*
 * Remplissage des paramètres de la requête grâce aux méthodes
 * setXXX() mises à disposition par l'objet PreparedStatement.
 */
            preparedStatement.setString(1,paramPrenom );
            preparedStatement.setString(2,paramNom );
            preparedStatement.setString(3,paramSolde);
            preparedStatement.setString(4,paramDecouvert );
            
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }finally{
            if(connection!=null){
                try {
                     /* Fermeture de la connexion */
                    connection.close();
                } catch (SQLException ignore) {
                    /* Si une erreur survient lors de la fermeture on l'ignore*/
                }
            }
            
            
        }
        
    }










      try {

        /* Création de l'objet gérant les requêtes */
        statement = connection.obtenirconnection().createStatement();

        /* Exécution d'une requête de lecture */
        resultat = statement.executeQuery( "SELECT * FROM compte;" );
       
 
        /* Récupération des données du résultat de la requête de lecture */
        while ( resultat.next() ) {
            int idUtilisateur = resultat.getInt( "id" );
            String emailUtilisateur = resultat.getString( "email" );
            String motDePasseUtilisateur = resultat.getString( "mot_de_passe" );
            String nomUtilisateur = resultat.getString( "nom" );
            /* Formatage des données pour affichage dans la JSP finale. */
           
        }
    } catch ( SQLException e ) {
       
    } finally {
      
        if ( resultat != null ) {
            try {
                resultat.close();
            } catch ( SQLException ignore ) {
            }
        }
        
        if ( statement != null ) {
            try {
                statement.close();
            } catch ( SQLException ignore ) {
            }
        }
    }


    create table compte(
     id int primary key auto_increment,
     Prenom varchar(25) not null,
     Nom varchar(25) not null,
     solde varchar(25) not null,
     decouvert varchar(25) not null,
     Numcompte varchar(25) not null,
     dateInscription datetime not null);