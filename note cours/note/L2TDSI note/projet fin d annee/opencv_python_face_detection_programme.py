# Comme tous les systèmes de reconnaissance de visage, le didacticiel impliquera deux scripts python . 
# L'un est un programme Trainer qui analysera un ensemble de photos d'une personne donnée et créera un jeu de données (fichier YML).
# Le deuxième programme est le programme de reconnaissancequi détecte un visage et utilise ensuite ce fichier YML
# pour le reconnaître et mentionner le nom de la personne. Les deux programmes dont nous allons parler ici
# sont destinés à Raspberry Pi (Linux), mais fonctionnent également sur des ordinateurs Windows avec de très légères modifications. 

 avant de pouvoir encoder desvisages dans des images, nous devons d'abord lesdétecter. Nos méthodes de détection à deux visages incluent 
 le porc   ou le cnn  . Ces deux drapeaux sont les seuls qui travaillent pour - la détection - méthode  .
Remarque:  le Raspberry Pi n'est pas capable d'exécuter la méthode de détection CNN. Si vous souhaitez exécuter la méthode de détection CNN,
vous devez utiliser un calcul capable, idéalement avec un GPU si vous travaillez avec un jeu de données volumineux. Sinon, utilisez la  
 méthode de détection de visage de porc .