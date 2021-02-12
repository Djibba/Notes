// Sélecteurs d'attributs
['nom*="valeur"']

Éléments qui possèdent un attributnomqui contient (partiellement ou totalement) la valeur spécifiée.

['nom~="valeur"']

Éléments qui possèdent un attributnomqui contient la valeur spécifiée, délimité par des espaces.

['nom$="valeur"']

Éléments qui possèdent un attributnomqui se termine par la valeur spécifiée.

['nom!="valeur"']

Éléments qui ne possèdent pas l'attributnom, ou qui possèdent un attributnomdifférent de la valeur spécifiée.

['nom^="valeur"']

Éléments qui possèdent un attributnomqui commence par la valeur spécifiée.


// Sélecteurs hiérarchiques
('p > e')

Élémentsedirectement descendants d'élémentsp

('p + e')

Élémentsedirectement précédés d'un élémentp

('p ~ e')

Élémentseprécédés d'un élémentp

:empty

Éléments qui n'ont pas d'enfant

:first-child

Premier enfant

:first

Premier élément

:last-child

Dernier enfant

:last

Le dernier élément de la sélection

:nth-child()

Élément qui est l'énième enfant de son parent

:only-child

Éléments qui sont enfants uniques de leur parent


// Pseudo-sélecteurs d'éléments sélectionnés
:even

Éléments pairs

:odd

Éléments impairs

:eq()

Élément dont l'index est spécifié

:gt()

Éléments dont l'index est supérieur à (greater than) l'index spécifié

:lt()

Éléments dont l'index est inférieur à (lower than) l'index spécifié


// Sélecteurs d'éléments particuliers
:header

Tous les titres<h1>à<h6>

:hidden

Éléments cachés

:visible

Éléments visibles

:not()

Éléments qui ne correspondent pas au sélecteur spécifié


//Pseudo-sélecteurs spécifiques aux formulaires
:input

Tous les éléments de typeinput,textarea,selectetbutton

:button

Éléments de typebutton

:checkbox

Éléments de typecheckbox

:checked

Éléments qui sont cochés

:radio

Éléments de typeradio

:reset

Éléments de typereset

:image

Tous les boutons de typeimage

:submit

Éléments de typesubmit

:text

Éléments de typetext

:password

Éléments de typepassword

:selected

Éléments sélectionnés

:focus

Sélectionne l'élément s'il a le focus

:enabled

Éléments validés



// Sélecteurs utilisés dans les tableaux
:first

Premier élément

:last

Dernier élément

:eq()

Élément dont l'index est spécifié

:gt()

Éléments dont l'index est supérieur à l'index spécifié

:lt()

Éléments dont l'index est inférieur à l'index spécifié

:even

Éléments d'index pair

:odd

Éléments d'index impair

:empty

Éléments qui n'ont pas d'enfant

:not()

Éléments qui ne correspondent pas au sélecteur spécifié