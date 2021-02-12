1.La fonction main(). Comme je l'ai dit c'est le point d'entrée de notre application.
Elle appelle la fonction launch() qui lancera le reste du programme.
C'est la seule instruction que doit contenir la fonction main().

2.La fonction start(). Cette fonction est déclenchée par la fonction launch(),
 elle prend en argument un objet de type Stage. Vous vous souvenez... c'est le théâtre qui contiendra
tout ce qui constitue l'application : la scène, les acteurs, etc... Pour l'instant la fonction start()
 ne fait que rendre visible l'objet Stage, c'est-à-dire la fenêtre de notre application.

 Maintenant qu'on a créé notre théâtre on va pouvoir lui ajouter une scène,
  pour cela on va effectuer trois actions :

1.On crée le groupe root dont j'ai parlé plus haut, celui qui contiendra tous les objets graphiques
2.On crée l'objet Scene qui contiendra le groupe root.
3.On ajoute l'objet Scene à l'objet Stage
@Override
    public void start(Stage primaryStage) {
        Group root = new Group();
        Scene scene = new Scene(root, 800, 600, Color.LIGHTBLUE);
        primaryStage.setScene(scene);

        primaryStage.setVisible(true);
    }

1.On déclare et on construit notre objet de type Circle
2.On règle les paramètres de cet objet comme on le souhaite (sa couleur, sa taille, etc...)
3.On ajoute notre objet au groupe root de notre objet Scene.
 Circle cercle = new Circle();
        cercle.setCenterX(300);//réglage de la position, de la taille et de la couleur du cercle
        cercle.setCenterY(200);
        cercle.setRadius(100);
        cercle.setFill(Color.YELLOW);
        cercle.setStroke(Color.ORANGE);//réglage de la couleur de la bordure et de son épaisseur
        cercle.setStrokeWidth(5);
        
        root.getChildren().add(cercle);//on ajoute le cercle au groupe root
        primaryStage.setVisible(true);

NB 	 //Retenez bien la fonction groupe.getChildren().add(objet), c'est grâce à elle que l'on peut ajouter
    //un nœud graphique à un groupe quelconque. Nous l'utiliseront très souvent 