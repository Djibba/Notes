 /* Connexion à la base de données */
 public void Connexion_bdd {
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