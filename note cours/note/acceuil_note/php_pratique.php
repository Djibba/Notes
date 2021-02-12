<?php 
extract($_POST);// Cette fonction crée les variables dont les noms sont les index de ce tableau, et leur affecte la valeur associée. Pour chaque paire clé/valeur, extract() crée une variable, avec les paramètres flags et prefix.

 ?>
 //pour acceder a son projet en utilisant le port 
 -se deplace dans le dossier du projet et faire "php -S localhost:8000" 
 !empty($_POST['name'])//cette methode teste dabort si la variable existe avant de tester s'il est vide ou pas
 is_already_in_use('pseudo',$pseudo,'users')//permet de verifier si pseudo est deja sur notre table
 filter_var($email,FILTER_VALIDATE_EMAIL)< 3)
 mb_strlen($pseudo)
 is_already_in_use('pseudo',$pseudo,'users')//verifie si le pseudo est deja dans notre table
 ob_start()//tout ce qu'on met aprés ne sera affiché
 ob_get_clean();// pour recuperer ce que on a garder