.show(): affiche le(s) élément(s) sélectionné(s).
    .hide(): masque le(s) élément(s) sélectionné(s).
    .toggle(): affiche ou masque le(s) élément(s) sélectionné(s) en fonction de son / leur état actuel.
    .fadeIn(): fait apparaître en fondu le(s) élément(s) sélectionné(s).
    .fadeOut(): fait disparaître en fondu le(s) élément(s) sélectionné(s).
    .fadeTo(): amène progressivement le(s) élément(s) sélectionné(s) à une opacité donnée.
    .slideUp(): masque le(s) élément(s) sélectionné(s) avec un défilement vers le haut.
    .slideDown(): masque le(s) élément(s) sélectionné(s) avec un défilement vers le bas.
    .slideToggle(): affiche ou masque le(s) élément(s) sélectionné(s) avec un défilement en fonction de son / leur état actuel.
    .html(): remplace le contenu HTML de la page
    .text(): remplace le texte de la page
    .replaceWith(): remplace le(s) élément(s) sélectionné(s) entièrement, pas juste le texte ou le HTML à l 'intérieur
    .remove(): supprime les éléments de la page
    .before(): insère du contenu avant le(s) élément(s) sélectionné(s)
    .after(): insère du contenu après le(s) élément(s) sélectionné(s)
    .prepend(): insère du contenu à l 'intérieur du/des élément(s) sélectionné(s) (après la balise HTML ouvrante)
    .append(): insère du contenu à l 'intérieur du/des élément(s) sélectionné(s) (avant la balise HTML fermante)
    .attr(): définit un attribut et sa valeur ou simplement récupère sa valeur
    .removeAttr(): supprime un attribut, RIP
    .addClass(): ajoute une nouvelle classe à / aux élément(s) sélectionné(s)(sans remplacer sa classe actuelle)
    .removeClass(): supprime une classe du / des élément(s) sélectionné(s)
    .css(): mon préféré.Récupère ou définit les propriétés CSS d 'un élément, même plusieurs propriétés à la fois.
    .find(): trouve un / des élément(s) correspondant au paramètre dans la sélection actuelle
    .parent(): accède au parent direct d 'un/des élément(s) ou à ses parents si on utilise .parents()
    .children(): accède aux enfants de(s) élément(s)
    .height(): hauteur d 'un cadre sans les marges intérieures, extérieurs ni les bords
    .width(): largeur d 'un cadre sans les marges intérieures, extérieurs ni les bords
    .innerHeight(): hauteur en comptant les marges intérieures
    .innerWidth(): largeur en comptant les marges intérieures
    .outerHeight(): hauteur en comptant les marges intérieures et les bords
    .outerWidth(): largeur en comptant les marges intérieures et les bords
    .outerHeight(true): même méthode que ci - dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.
    .outerWidth(true): même méthode que ci - dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.

Le positionnement des éléments peut être géré grâce à deux méthodes:

    .offset(): définit les coordonnées d 'un élément relativement au coin en haut à gauche de l'
objet document
    .position(): définit les coordonnées d 'un élément relativement à son parent direct