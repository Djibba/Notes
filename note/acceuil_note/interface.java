public Composant() {
		JButton bouton = new JButton("monBouton");
		add(bouton);
		JCheckBox checkB = new JCheckBox("box");
		add(checkB);
		JRadioButton jrb = new JRadioButton("Jaune");
		add(jrb);
		JRadioButton jrb1 = new JRadioButton("Orange");
		add(jrb1);
		ButtonGroup gp = new ButtonGroup();
		gp.add(jrb);
		gp.add(jrb1);
		JLabel lab =new JLabel("prenom");
		add(lab);
		JTextField prenom = new JTextField("saliou",10);
		add(prenom);
		String[] couleur = {"vert","jaune","rouge","bleu","orange","marron","violet"};
		JList<String> liste = new JList<String>(couleur);
		add(liste);
		JComboBox<String> comb = new JComboBox<String>(couleur);
		add(comb);

		//LES LAYOUTS
		bt.setBounds = permet de positionner un boutons a pixel prés
	}

	