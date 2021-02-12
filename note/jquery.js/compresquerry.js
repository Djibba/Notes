/ *!
 * Bibliothèque JavaScript jQuery v3.3.1
 * https://jquery.com/
 *
 * Comprend Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation et autres contributeurs
 * Publié sous licence MIT
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17: 24Z
 * /
(fonction (globale, usine) {

	"use strict";

	if (typeof module === "objet" && typeof module.exports === "objet") {

		// Pour les environnements CommonJS et similaires à ceux où une `fenêtre` appropriée
		// est présent, lance la fabrique et récupère jQuery.
		// Pour les environnements qui n'ont pas de `window` avec un` document`
		// (comme Node.js), expose une fabrique sous la forme module.exports.
		// Cela accentue le besoin de créer une vraie `fenêtre`.
		// Par exemple, var jQuery = require ("jquery") (window);
		// Voir ticket # 14549 pour plus d'informations.
		module.exports = global.document?
			usine (globale, vraie):
			fonction (w) {
				si (! w.document) {
					jeter une nouvelle erreur ("jQuery nécessite une fenêtre avec un document");
				}
				retour usine (w);
			};
	} autre {
		usine (globale);
	}

// passe ceci si la fenêtre n'est pas encore définie
}) (typeof window! == "undefined"? window: cette fonction (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// déclenche des exceptions lorsque du code non strict (par exemple, ASP.NET 4.5) accède au mode strict
// arguments.callee.caller (trac-13335). Mais à partir de jQuery 3.0 (2016), le mode strict devrait être commun
// suffit que toutes ces tentatives soient gardées dans un bloc try.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = fonction isFunction (obj) {

      // Assistance: Chrome <= 57, Firefox <= 52
      // Dans certains navigateurs, typeof renvoie "function" pour les éléments HTML <object>
      // (c'est-à-dire `typeof document.createElement (" objet ") ===" fonction "`).
      // Nous ne voulons pas classer * aucun * nœud DOM en tant que fonction.
      return typeof obj === "fonction" && typeof obj.nodeType! == "numéro";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preserveScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	fonction DOMEval (code, doc, noeud) {
		doc = doc || document;

		var i,
			script = doc.createElement ("script");

		script.text = code;
		si (noeud) {
			pour (i dans preserveScriptAttributes) {
				si (noeud [i]) {
					script [i] = noeud [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


fonction toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Support: Android <= 2.3 seulement (fonctionnal RegExp)
	retour typeof obj === "objet" || typeof obj === "fonction"?
		class2type [toString.call (obj)] || "objet" :
		typeof obj;
}
/ * symbole global * /
// Définir ce global dans .eslintrc.json créerait un danger d’utiliser le global
// non surveillé ailleurs, il semble plus sûr de définir global uniquement pour ce module



var
	version = "3.3.1",

	// Définir une copie locale de jQuery
	jQuery = fonction (sélecteur, contexte) {

		// L'objet jQuery est en réalité juste le constructeur init 'amélioré'
		// Need init si jQuery est appelé (permettez simplement qu'une erreur soit renvoyée si elle n'est pas incluse)
		renvoie le nouveau jQuery.fn.init (sélecteur, contexte);
	},

	// Support: Android <= 4.0 uniquement
	// Assurez-vous de couper la nomenclature et le NBSP
	rtrim = / ^ [\ s \ uFef \ xA0] + | [\ s \ uFFE \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// La version actuelle de jQuery utilisée
	jquery: version,

	constructeur: jQuery,

	// La longueur par défaut d'un objet jQuery est 0
	longueur: 0

	toArray: function () {
		retourne slice.call (this);
	},

	// Obtient le Nième élément du jeu d'éléments correspondants OU
	// Récupère l'ensemble des éléments correspondants sous forme de tableau propre
	get: function (num) {

		// Retourne tous les éléments d'un tableau propre
		si (num == null) {
			retourne slice.call (this);
		}

		// Renvoie uniquement le seul élément de l'ensemble
		renvoyer num <0? this [num + this.length]: this [num];
	},

	// Prend un tableau d'éléments et le pousse sur la pile
	// (retourne le nouvel ensemble d'éléments correspondant)
	pushStack: fonction (elems) {

		// Construire un nouveau jeu d'éléments correspondant à jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Ajoute l'ancien objet à la pile (comme référence)
		ret.prevObject = this;

		// Retourne le jeu d'éléments nouvellement formé
		retour ret;
	},

	// Exécute un rappel pour chaque élément du jeu correspondant.
	chacun: fonction (rappel) {
		retourne jQuery.each (this, callback);
	},

	map: fonction (rappel) {
		retourne this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	tranche: fonction () {
		return this.pushStack (slice.apply (this, arguments));
	},

	premier: function () {
		renvoyer this.eq (0);
	},

	dernier: function () {
		retourne this.eq (-1);
	},

	eq: fonction (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	fin: fonction () {
		renvoyer this.prevObject || this.constructor ();
	},

	// Pour usage interne uniquement.
	// se comporte comme une méthode Array, pas comme une méthode jQuery.
	poussez, poussez,
	trier: arr.sort,
	épissure: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	options var, nom, src, copie, copyIsArray, clone,
		target = arguments [0] || {},
		i = 1,
		longueur = arguments.length,
		profond = faux;

	// Gérer une situation de copie profonde
	if (typeof target === "boolean") {
		profond = cible;

		// Ignore le booléen et la cible
		target = arguments [i] || {};
		i ++;
	}

	// Gère le cas quand la cible est une chaîne ou quelque chose (possible en copie profonde)
	if (typeof target! == "object" &&! isFunction (target)) {
		cible = {};
	}

	// Étendre jQuery lui-même si un seul argument est passé
	si (i === longueur) {
		cible = ceci;
		je--;
	}

	pour (; i <longueur; i ++) {

		// Ne traite que des valeurs non nulles / indéfinies
		if ((options = arguments [i])! = null) {

			// Étendre l'objet de base
			pour (nom dans les options) {
				src = cible [nom];
				copy = options [nom];

				// Empêche la boucle sans fin
				if (cible === copie) {
					continuer;
				}

				// Recurse si nous fusionnons des objets simples ou des tableaux
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy))))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray (src)? src: [];

					} autre {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Ne déplace jamais les objets originaux, clone-les
					target [name] = jQuery.extend (deep, clone, copy);

				// N'apporte pas de valeurs indéfinies
				} sinon si (copie! == non définie) {
					cible [nom] = copier;
				}
			}
		}
	}

	// retourne l'objet modifié
	cible de retour;
};

jQuery.extend ({

	// Unique pour chaque copie de jQuery sur la page
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Suppose que jQuery est prêt sans le module ready
	isReady: true,

	erreur: fonction (msg) {
		jeter une nouvelle erreur (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Détecte les négatifs évidents
		// Utilisez toString au lieu de jQuery.type pour intercepter des objets hôtes
		if (! obj || toString.call (obj)! == "[objet Objet]") {
			retourne faux;
		}

		proto = getProto (obj);

		// Les objets sans prototype (par exemple, `Object.create (null)`) sont simples
		si (! proto) {
			retourne vrai;
		}

		// Les objets avec prototype sont clairs si et seulement s'ils ont été construits par une fonction globale
		Ctor = hasOwn.call (proto, "constructeur") && proto.constructor;
		return typeof Ctor === "fonction" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {

		/ * eslint-disable no-inutilisé-vars * /
		// Voir https://github.com/eslint/eslint/issues/6125
		nom var;

		pour (nom dans obj) {
			retourne faux;
		}
		retourne vrai;
	},

	// évalue un script dans un contexte global
	globalEval: fonction (code) {
		DOMEval (code);
	},

	chaque fonction: (obj, callback) {
		var longueur, i = 0;

		if (isArrayLike (obj)) {
			longueur = longueur d'objet;
			pour (; i <longueur; i ++) {
				if (callback.call (obj [i], i, obj [i]) === faux) {
					Pause;
				}
			}
		} autre {
			pour (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === faux) {
					Pause;
				}
			}
		}

		retour obj;
	},

	// Support: Android <= 4.0 uniquement
	trim: fonction (texte) {
		retourne le texte == null?
			"":
			(text + "") .replace (rtrim, "");
	},

	// résultats est pour usage interne seulement
	makeArray: fonction (arr, résultats) {
		var ret = résultats || [];

		si (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "chaîne"?
					[arr]: arr
				)
			} autre {
				push.call (ret, arr);
			}
		}

		retour ret;
	},

	inArray: fonction (elem, arr, i) {
		retour arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
	// push.apply (_, arraylike) jette sur un ancien WebKit
	fusion: fonction (premier, deuxième) {
		var len = + second.length,
			j = 0,
			i = première.longueur;

		pour (; j <len; j ++) {
			premier [i ++] = deuxième [j];
		}

		première longueur = i;

		revenez le premier;
	},

	grep: fonction (elems, callback, invert) {
		var callbackInverse,
			correspond à = [],
			i = 0,
			longueur = elems.length,
			callbackExpect =! invert;

		// Parcourez le tableau en ne sauvegardant que les éléments
		// qui passe la fonction validateur
		pour (; i <longueur; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		matchs de retour;
	},

	// arg est réservé à l'usage interne
	map: fonction (elems, callback, arg) {
		var longueur, valeur,
			i = 0,
			ret = [];

		// Parcourt le tableau en traduisant chacun des éléments en leurs nouvelles valeurs
		if (isArrayLike (elems)) {
			longueur = elems.length;
			pour (; i <longueur; i ++) {
				valeur = rappel (elems [i], i, arg);

				if (valeur! = null) {
					ret.push (valeur);
				}
			}

		// passe en revue toutes les clés de l'objet,
		} autre {
			pour (i in elems) {
				valeur = rappel (elems [i], i, arg);

				if (valeur! = null) {
					ret.push (valeur);
				}
			}
		}

		// Aplatit les tableaux imbriqués
		retour concat.apply ([], ret);
	},

	// Un compteur global GUID pour les objets
	guid: 1,

	// jQuery.support n'est pas utilisé dans Core, mais d'autres projets attachent leur
	// propriétés à lui donc il doit exister.
	support: support
});

if (typeof Symbol === "fonction") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Remplir la carte class2type
jQuery.each ("Boolean Number String Function Array Date RegExp Object Error Symbol" .split (""),
fonction (i, nom) {
	class2type ["[objet" + nom + "]"] = nom.toLowerCase ();
});

fonction isArrayLike (obj) {

	// Support: réel iOS 8.2 uniquement (non reproductible dans le simulateur)
	// contrôle `in` utilisé pour éviter les erreurs JIT (gh-2145)
	// hasOwn n'est pas utilisé ici en raison de faux négatifs
	// concernant la longueur de la liste de noeuds dans IE
	var longueur = !! obj && "longueur" dans obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		retourne faux;
	}

	type de retour === "tableau" || longueur === 0 ||
		typeof longueur === "nombre" && longueur> 0 && (longueur - 1) dans obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation et autres contributeurs
 * Publié sous licence MIT
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 * /
(fonction (fenêtre) {

var i,
	soutien,
	Expr,
	getText,
	isXML,
	tokenize,
	compiler,
	sélectionner,
	le plus extérieurContext,
	sortInput,
	hasDuplicate,

	// Local vars document
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	allumettes,
	contient

	// Données spécifiques à l'instance
	expando = "grésillement" + 1 * nouvelle date (),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = function (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		retourne 0;
	},

	// méthodes d'instance
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Utilise un index épuré, car il est plus rapide que natif
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = fonction (liste, elem) {
		var i = 0,
			len = list.length;
		pour (; i <len; i ++) {
			if (liste [i] === elem) {
				retourne i;
			}
		}
		return -1;
	},

	booleans = "vérifié | sélectionné | asynchrone | autofocus | lecture automatique | contrôles | différer | désactivé | caché | ismap | boucle | multiple | ouvert | en lecture seule | obligatoire | scoped",

	// Expressions régulières

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifiant = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// sélecteurs d'attributs: http://www.w3.org/TR/selectors/#attribute-selectors
	attributs = "\\ [" + espace + "* (" + identifiant + ") (?:" + espace +
		// Opérateur (capture 2)
		"* ([* ^ $ |! ~]? =)" + espaces +
		// "Les valeurs d'attribut doivent être des identifiants CSS [capture 5] ou des chaînes de caractères [capture 3 ou capture 4]"
		"* (?: '((?: \\\\. | [^ \\\\' ')) *)' | \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identifiant + ")) |)" + espaces +
		"* \\]",

	pseudos = ":(" + identifiant + ") (?: \\ ((" +
		// Pour réduire le nombre de sélecteurs ayant besoin de tokenize dans le pré-filtre, préférez les arguments:
		// 1. cité (capture 3; capture 4 ou capture 5)
		"('((:: \\\\. | [^ \\\\' ')) *)' | \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (capture 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + attributs + ") *) |" +
		// 3. autre chose (capture 2)
		". *" +
		") \\) |)",

	// espaces blancs de fin et de début et de fin, en capturant certains caractères non-blancs précédant ces derniers
	rwhitespace = new RegExp (espaces + "+", "g"),
	rtrim = new RegExp ("^" + espace + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espace + + ", $ "),

	rcomma = new RegExp ("^" + espace + "*," + espace + "*"),
	recombinateurs = new RegExp ("^" + espace + "* ([> + ~] |" + espace + ")" + espace + + "*"),

	rattributeQuotes = new RegExp ("=" + espaces + "* ([^ \\] '\"] *?) "+ espaces +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identifiant + "$"),

	matchExpr = {
		"ID": new RegExp ("^ # (" + identifier + ")"),
		"CLASS": new RegExp ("^ \\. (" + Identifier + ")"),
		"TAG": new RegExp ("^ (" + identifiant + "| [*])"),
		"ATTR": nouvelle RegExp ("^" + attributs),
		"PSEUDO": nouveau RegExp ("^" + pseudos),
		"CHILD": new RegExp ("^ :( seulement | premier | dernier | nième | dernier-dernier) - (enfant | de type) (?: \\ (" + espace +
			"* (pair | impair | (([+ -] |) (\\ d *) n |)" + espace + "* (?: ([+ -] |)" + espace +
			"* (\\ d +) |))" + espaces + "* \\) |)", "i"),
		"bool": new RegExp ("^ (?:" + booleans + ") $", "i"),
		// À utiliser dans les bibliothèques implémentant .is ()
		// Nous l'utilisons pour la correspondance POS dans `select`
		"needsContext": new RegExp ("^" + espace + "* [> + ~] |: (pair | impair | eq | gt | lt | nth | premier | dernier) (?: \\ (" +
			espace blanc + "* ((?: - \\ d)? \\ d *)" + espace blanc + "* \\) |) (? = [^ -] | $)", "i")
	},

	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [natif \ w /,

	// Sélecteurs ID, TAG ou CLASS facilement analysables / récupérables
	rquickExpr = /^(?:#([\w-]+ )|(\w+)|\.([\w-]+))$$,

	rsibling = / [+ ~] /,

	// échappe aux CSS
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espaces + "? | (" + espaces + ") |.)", "ig"),
	funescape = function (_, échappé, échappéWhitespace) {
		var high = "0x" + échappé - 0x10000;
		// NaN signifie non-codepoint
		// Support: Firefox <24
		// Solution de contournement interprétation numérique erronée de + "0x"
		retour haut! == haut || échappéWhitespace?
			échappé :
			élevé <0?
				// point de code BMP
				String.fromCharCode (high + 0x10000):
				// Point de code du plan supplémentaire (paire de substitution)
				String.fromCharCode (high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	},

	// sérialisation de chaîne / identifiant CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL devient U + FFFD REMPLACEMENT CHARACTER
			si (ch === "\ 0") {
				retourne "\ uFFFD";
			}

			// Les caractères de contrôle et les nombres (en fonction de la position) sont échappés en tant que points de code
			return ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// D'autres caractères ASCII potentiellement spéciaux sont protégés par une barre oblique inverse
		retourne "\\" + ch;
	},

	// Utilisé pour les iframes
	// Voir setDocument ()
	// La suppression du wrapper de la fonction provoque une "autorisation refusée"
	// erreur dans IE
	unloadHandler = function () {
		setDocument ();
	},

	disabledAncestor = addCombinator (
		fonction (elem) {
			return elem.disabled === true && ("formulaire" dans elem || "label" dans elem);
		},
		{dir: "parentNode", next: "legend"}
	)

// Optimiser pour push.apply (_, NodeList)
essayer {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	)
	// Support: Android <4.0
	// Détecter l'échec silencieux push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {apply: arr.length?

		// Effet slice si possible
		fonction (cible, els) {
			push_native.apply (cible, slice.call (els));
		}:

		// Support: IE <9
		// Sinon, ajoute directement
		fonction (cible, els) {
			var j = target.length,
				i = 0;
			// Ne peut pas faire confiance à NodeList.length
			while ((cible [j ++] = els [i ++])) {}
			longueur cible = j - 1;
		}
	};
}

fonction Sizzle (sélecteur, contexte, résultats, graine) {
	var m, i, elem, nid, match, groupes, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType par défaut à 9, puisque context est par défaut document
		nodeType = contexte? context.nodeType: 9;

	résultats = résultats || [];

	// retour anticipé des appels avec sélecteur ou contexte non valide
	if (typeof selector! == "chaîne" ||! sélecteur ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		renvoyer les résultats;
	}

	// Essayer de raccourcir les opérations de recherche (par opposition aux filtres) dans les documents HTML
	si (! graine) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (context);
		}
		context = context || document;

		si (documentIsHTML) {

			// Si le sélecteur est suffisamment simple, essayez d'utiliser une méthode DOM "get * By *"
			// (sauf le contexte DocumentFragment, où les méthodes n'existent pas)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector)))) {

				// sélecteur d'identifiant
				if ((m = match [1])) {

					// contexte du document
					if (nodeType === 9) {
						if ((elem = context.getElementById (m)))) {

							// Support: IE, Opera, Webkit
							// TODO: identifier les versions
							// getElementById peut faire correspondre les éléments par leur nom plutôt que par leur ID
							if (elem.id === m) {
								résultats.push (elem);
								renvoyer les résultats;
							}
						} autre {
							renvoyer les résultats;
						}

					// contexte d'élément
					} autre {

						// Support: IE, Opera, Webkit
						// TODO: identifier les versions
						// getElementById peut faire correspondre les éléments par leur nom plutôt que par leur ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contient (contexte, elem) &&
							elem.id === m) {

							résultats.push (elem);
							renvoyer les résultats;
						}
					}

				// Sélecteur de type
				} sinon si (correspond [2]) {
					push.apply (résultats, context.getElementsByTagName (sélecteur));
					renvoyer les résultats;

				// sélecteur de classe
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (résultats, context.getElementsByClassName (m));
					renvoyer les résultats;
				}
			}

			// Profitez de querySelectorAll
			si (support.qsa &&
				! compilerCache [sélecteur + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (sélecteur)))) {

				if (nodeType! == 1) {
					newContext = context;
					newSelector = sélecteur;

				// qSA regarde en dehors du contexte de l'élément, ce qui n'est pas ce que nous voulons
				// Merci à Andrew Dupont pour cette technique de contournement
				// Support: IE <= 8
				// Exclure des éléments d'objet
				} else if (context.nodeName.toLowerCase ()! == "object") {

					// Capture l'ID de contexte, en le définissant d'abord si nécessaire
					if ((nid = context.getAttribute ("id")))) {
						nid = nid.replace (rcssescape, fcssescape);
					} autre {
						context.setAttribute ("id", (nid = expando));
					}

					// Préfixe tous les sélecteurs de la liste
					groupes = tokenize (sélecteur);
					i = groupes.longueur;
					alors que je-- ) {
						groupes [i] = "#" + nid + "" + sélecteur (groupes [i]);
					}
					newSelector = groups.join (",");

					// Développer le contexte pour les sélecteurs frères
					newContext = rsibling.test (sélecteur) && testContext (context.parentNode) ||
						le contexte;
				}

				if (newSelector) {
					essayer {
						push.apply (résultats,
							newContext.querySelectorAll (newSelector)
						)
						renvoyer les résultats;
					} catch (qsaError) {
					} enfin {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Tous les autres
	renvoyer select (selector.replace (rtrim, "$ 1"), contexte, résultats, valeur de départ);
}

/ **
 * Créer des caches clé-valeur de taille limitée
 * @returns {fonction (chaîne, objet)} renvoie les données de l'objet après l'avoir stocké sur lui-même avec
 * nom de la propriété de la chaîne (suffixe d'espace) et (si le cache est plus grand que Expr.cacheLength)
 * supprimer l'entrée la plus ancienne
 * /
fonction createCache () {
	var keys = [];

	cache de fonction (clé, valeur) {
		// Utilisez (clé + "") pour éviter les collisions avec les propriétés du prototype natif (voir le problème n ° 157).
		if (keys.push (key + "")> Expr.cacheLength) {
			// conserve uniquement les entrées les plus récentes
			supprimer le cache [keys.shift ()];
		}
		return (cache [clé + ""] = valeur);
	}
	retourner la cache;
}

/ **
 * Marquer une fonction pour une utilisation spéciale par Sizzle
 * @param {Fonction} fn La fonction à marquer
 * /
fonction markFunction (fn) {
	fn [expando] = true;
	return fn;
}

/ **
 * Prise en charge des tests à l'aide d'un élément
 * @param {Fonction} fn A transmis l'élément créé et retourne un résultat booléen
 * /
fonction assert (fn) {
	var el = document.createElement ("fieldset");

	essayer {
		retourne !! fn (el);
	} catch (e) {
		retourne faux;
	} enfin {
		// Supprimer de son parent par défaut
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// libère de la mémoire dans IE
		el = null;
	}
}

/ **
 * Ajoute le même gestionnaire pour tous les attrs spécifiés
 * @param {String} attrs Liste d'attributs séparés par des tuyaux
 * @param {Function} handler La méthode qui sera appliquée
 * /
fonction addHandle (attrs, gestionnaire) {
	var arr = attrs.split ("|"),
		i = arr.length;

	alors que je-- ) {
		Expr.attrHandle [arr [i]] = gestionnaire;
	}
}

/ **
 * Vérifie l'ordre des documents de deux frères et sœurs
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Retourne moins que 0 si a précède b, plus grand que 0 si a suit b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Utiliser IE sourceIndex si disponible sur les deux nœuds
	si (diff) {
		return diff;
	}

	// Vérifie si b suit a
	si (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				return -1;
			}
		}
	}

	retourner un? 1: -1;
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour les types d'entrée
 * type @param {String}
 * /
fonction createInputPseudo (type) {
	fonction de retour (elem) {
		nom var = elem.nodeName.toLowerCase ();
		nom de retour === "entrée" && elem.type === type;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos des boutons
 * type @param {String}
 * /
fonction createButtonPseudo (type) {
	fonction de retour (elem) {
		nom var = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "bouton") && elem.type === type;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour: enabled /: disabled
 * @param {Boolean} disabled true pour: disabled; false pour: activé
 * /
function createDisabledPseudo (désactivé) {

	// connu: désactivé faux positifs: fieldset [disabled]> légende: n-de-type (n + 2): peut-désactiver
	fonction de retour (elem) {

		// Seuls certains éléments peuvent correspondre: activé ou désactivé
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("form" in elem) {

			// Vérifier la désactivation héritée sur les éléments pertinents non désactivés:
			// * éléments listés associés à un formulaire dans un groupe de champs désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * éléments d'option dans un groupe optionnel désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Tous ces éléments ont une propriété "form".
			if (elem.parentNode && elem.disabled === false) {

				// Les éléments d'option sont reportés à un groupe optionnel parent s'il est présent
				if ("label" in elem) {
					if ("label" dans elem.parentNode) {
						return elem.parentNode.disabled === désactivé;
					} autre {
						return elem.disabled === désactivé;
					}
				}

				// Support: IE 6 - 11
				// Utilisez la propriété de raccourci isDisabled pour rechercher les ancêtres d'ensembles de champs désactivés.
				return elem.isDisabled === désactivé ||

					// S'il n'y a pas isDisabled, vérifiez manuellement
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === désactivé;
			}

			return elem.disabled === désactivé;

		// Essayez de vaincre les éléments qui ne peuvent pas être désactivés avant de faire confiance à la propriété désactivée.
		// Certaines victimes se font prendre dans notre réseau (label, légende, menu, piste), mais il ne faut pas
		// existent même sur eux, et encore moins ont une valeur booléenne.
		} else if ("label" dans elem) {
			return elem.disabled === désactivé;
		}

		// Les éléments restants ne sont ni activés ni désactivés
		retourne faux;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour les positions
 * @param {Fonction} fn
 * /
fonction createPositionalPseudo (fn) {
	retourne markFunction (function (argument) {
		argument = + argument;
		retourne markFunction (fonction (graine, correspond)) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Correspond aux éléments trouvés dans les index spécifiés
			alors que je-- ) {
				if (seed [(j = matchIndexes [i])])) {
					graine [j] =! (correspond à [j] = graine [j]);
				}
			}
		});
	});
}

/ **
 * Vérifie la validité d'un nœud en tant que contexte Sizzle
 * @param {Element | Object =} contexte
 * @returns {Element | Object | Boolean} Nœud d'entrée, s'il est acceptable, sinon valeur falsy
 * /
fonction testContext (context) {
	return context && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exposer les supports de support pour plus de commodité
support = Sizzle.support = {};

/ **
 * Détecte les nœuds XML
 * @param {Element | Object} elem Un élément ou un document
 * @returns {Boolean} True iff elem est un noeud XML non HTML.
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement est vérifié pour les cas où il n'existe pas encore
	// (comme charger des iframes dans IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	renvoyer documentElement? documentElement.nodeName! == "HTML": false;
};

/ **
 * Définit les variables liées au document une fois en fonction du document actuel
 * @param {Element | Object} [doc] Elément ou objet de document à utiliser pour définir le document.
 * @returns {Object} Renvoie le document actuel.
 * /
setDocument = Sizzle.setDocument = fonction (noeud) {
	var hasCompare, subWindow,
		doc = noeud? node.ownerDocument || noeud: preferredDoc;

	// retourne tôt si le document est invalide ou déjà sélectionné
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		document de retour;
	}

	// Mise à jour des variables globales
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (document);

	// Support: IE 9-11, Edge
	// L'accès aux documents iframe après le déchargement génère des erreurs "autorisation refusée" (jQuery # 13936)
	if (preferredDoc! == document &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Support: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Support: IE 9 - 10 seulement
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/* Les attributs
	-------------------------------------------------- -------------------- * /

	// Support: IE <8
	// Vérifier que getAttribute renvoie réellement les attributs et non les propriétés
	// (sauf les booléens IE8)
	support.attributes = assert (fonction (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) By *
	-------------------------------------------------- -------------------- * /

	// Vérifie si getElementsByTagName ("*") ne renvoie que des éléments
	support.getElementsByTagName = assert (fonction (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Support: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Support: IE <10
	// Vérifie si getElementById renvoie les éléments par leur nom
	// Les méthodes getElementById cassées ne récupèrent pas les noms définis par programme,
	// utilise donc un test giratoire getElementsByName
	support.getById = assert (fonction (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// filtre d'ID et recherche
	if (support.getById) {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = fonction (id, contexte) {
			if (typeof context.getElementById! == "indéfini" && documentIsHTML) {
				var elem = context.getElementById (id);
				retourner elem? [elem]: [];
			}
		};
	} autre {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				var node = type of elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 uniquement
		// getElementById n'est pas fiable en tant que raccourci de recherche
		Expr.find ["ID"] = fonction (id, contexte) {
			if (typeof context.getElementById! == "indéfini" && documentIsHTML) {
				noeud var, i, elems,
					elem = context.getElementById (id);

				si (elem) {

					// Vérifier l'attribut id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Revenir sur getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				revenir [];
			}
		};
	}

	// Tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		fonction (tag, contexte) {
			if (typeof context.getElementsByTagName! == "indéfini") {
				return context.getElementsByTagName (tag);

			// Les noeuds DocumentFragment n'ont pas gEBTN
			} sinon si (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		fonction (tag, contexte) {
			var elem
				tmp = [],
				i = 0,
				// Heureusement, un gEBTN (brisé) apparaît également sur les nœuds DocumentFragment
				results = context.getElementsByTagName (tag);

			// Filtre les commentaires possibles
			if (tag === "*") {
				while ((elem = résultats [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				tmp de retour;
			}
			renvoyer les résultats;
		};

	// classe
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "indéfini" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Support de QSA et matchesSelector

	// matchesSelector (: active) signale false quand true (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) signale false quand true (Chrome 21)
	// Nous autorisons cela à cause d'un bogue dans IE8 / 9 qui génère une erreur
	// chaque fois que l'accès à `document.activeElement` est effectué sur un iframe
	// Ainsi, nous permettons à: focus de passer tout le temps à travers QSA pour éviter l'erreur IE
	// Voir https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll)))) {
		// Construire une regex QSA
		// Stratégie de Regex adoptée par Diego Perini
		assert (fonction (el) {
			// Select est défini pour vider la chaîne volontairement
			// Ceci est pour tester le traitement par IE de pas explicitement
			// définition d'un attribut de contenu booléen,
			// puisque sa présence devrait suffire
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </ option> </ select>";

			// Support: IE8, Opera 11-12.16
			// Rien ne doit être sélectionné lorsque des chaînes vides suivent ^ = ou $ = ou * =
			// L'attribut test doit être inconnu dans Opera mais "sûr" pour WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[[msallowcapture ^ = '']]"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espaces + "* (?: '' | \" \ ")");
			}

			// Support: IE8
			// Les attributs booléens et "valeur" ne sont pas traités correctement
			if (! el.querySelectorAll ("[sélectionné]"). longueur) {
				rbuggyQSA.push ("\\ [" + espace + "* (?: valeur |" + booleans + ")");
			}

			// Assistance: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: coché doit renvoyer les éléments d'option sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (! el.querySelectorAll (": vérifié"). longueur) {
				rbuggyQSA.push (": vérifié");
			}

			// Assistance: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Le sélecteur sur la page # selector # id siiner-combinator selector` échoue
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		assert (fonction (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </ select>";

			// Assistance: applications natives Windows 8
			// Les attributs de type et de nom sont restreints lors de l'affectation .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("type", "caché");
			el.appendChild (entrée) .setAttribute ("name", "D");

			// Support: IE8
			// Impose la casse de l'attribut name
			if (el.querySelectorAll ("[nom = d]"). longueur) {
				rbuggyQSA.push ("nom" + espace + + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: activé /: éléments désactivés et masqués (les éléments masqués sont toujours activés)
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": activé", ": désactivé");
			}

			// Support: IE9-11 +
			// IE: le sélecteur disabled ne récupère pas les enfants des champs désactivés
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": activé", ": désactivé");
			}

			// Opera 10-11 ne crée pas de pseudos invalides post-virgule
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((correspond = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector))))) {

		assert (fonction (el) {
			// Vérifie s'il est possible de faire des correspondancesSelector
			// sur un noeud déconnecté (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Cela devrait échouer avec une exception
			// Gecko ne commet pas d'erreur, renvoie false à la place
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contient
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// L'élément en contient un autre
	// volontairement exclusif
	// Comme dans, un élément ne se contient pas
	contient = hasCompare || rnative.test (docElem.contains)?
		fonction (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			retourne un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		fonction (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						retourne vrai;
					}
				}
			}
			retourne faux;
		};

	/ * Tri
	-------------------------------------------------- -------------------- * /

	// Tri des commandes de documents
	sortOrder = hasCompare?
	fonction (a, b) {

		// Indicateur de suppression des doublons
		si (a === b) {
			hasDuplicate = true;
			retourne 0;
		}

		// Tri sur l'existence de la méthode si une seule entrée a compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparer) {
			retourne la comparaison;
		}

		// Calcule la position si les deux entrées appartiennent au même document
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Sinon on sait qu'ils sont déconnectés
			1;

		// Noeuds déconnectés
		si (comparer & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === comparez)) {

			// Choisissez le premier élément lié à notre document préféré
			if (a === document || a.ownerDocument === preferredDoc && contient (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contient (preferredDoc, b)) {
				retourne 1;
			}

			// Maintenir l'ordre original
			retourner sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		retourner comparer & 4? -1: 1;
	}:
	fonction (a, b) {
		// quitte tôt si les nœuds sont identiques
		si (a === b) {
			hasDuplicate = true;
			retourne 0;
		}

		var cur,
			i = 0,
			aup = un.parentNode,
			bup = b.parentNode,
			ap = [a],
			pb = [b];

		// Les noeuds sans parent sont des documents ou sont déconnectés
		si (! aup ||! bup) {
			renvoyer un document ===? -1 :
				b === document? 1 :
				aup? -1 :
				bup? 1 :
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si les nœuds sont frères, nous pouvons faire une vérification rapide
		} sinon si (aup === bup) {
			retour fratrie Check (a, b);
		}

		// Sinon, nous avons besoin de la liste complète de leurs ancêtres pour la comparaison
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Descendre l'arbre à la recherche d'un écart
		tandis que (ap [i] === bp [i]) {
			i ++;
		}

		retourner je?
			// Vérifie si les nœuds ont un ancêtre commun
			siblingCheck (ap [i], bp [i]):

			// Sinon, les noeuds de notre document sont triés en premier
			ap [i] === preferredDoc? -1 :
			bp [i] === preferredDoc? 1 :
			0;
	};

	document de retour;
};

Sizzle.matches = function (expr, elements) {
	retourne Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = fonction (elem, expr) {
	// Définir les vars de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Assurez-vous que les sélecteurs d'attributs sont cités
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		! compilerCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		essayer {
			var ret = matches.call (elem, expr);

			// Matchselector de IE 9 renvoie false sur les nœuds déconnectés
			if (ret || support.disconnectedMatch ||
					// On dit aussi que les noeuds déconnectés sont dans un document
					// fragment dans IE 9
					elem.document && elem.document.nodeType! == 11) {
				retour ret;
			}
		} catch (e) {}
	}

	retourne Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (contexte, elem) {
	// Définir les vars de document si nécessaire
	if ((context.ownerDocument || context)! == document) {
		setDocument (context);
	}
	retour contient (contexte, elem);
};

Sizzle.attr = fonction (elem, name) {
	// Définir les vars de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Ne vous laissez pas berner par les propriétés Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML):
			indéfini;

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (name):
			(val = elem.getAttributeNode (name)) && val.specified?
				valeur.val:
				nul;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Error ("Erreur de syntaxe, expression non reconnue:" + msg);
};

/ **
 * Tri de documents et élimination des doublons
 * résultats @param {ArrayLike}
 * /
Sizzle.uniqueSort = fonction (résultats) {
	var elem
		doublons = [],
		j = 0,
		i = 0;

	// Sauf si nous * savons *, nous pouvons détecter les doublons, assumer leur présence
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	si (hasDuplicate) {
		while ((elem = résultats [i ++])) {
			if (elem === résultats [i]) {
				j = doublons.push (i);
			}
		}
		tandis que (j--) {
			résultats.splice (doublons [j], 1);
		}
	}

	// Effacer l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	renvoyer les résultats;
};

/ **
 * Fonction utilitaire permettant de récupérer la valeur textuelle d'un tableau de noeuds DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	noeud var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Si aucun type de noeud, cela devrait être un tableau
		while ((node ​​= elem [i ++])) {
			// Ne traverse pas les nœuds de commentaires
			ret + = getText (noeud);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Utiliser textContent pour les éléments
		// Utilisation de innerText supprimée pour assurer la cohérence des nouvelles lignes (jQuery # 11153)
		if (typeof elem.textContent === "chaîne") {
			return elem.textContent;
		} autre {
			// Traverse ses enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// Ne pas inclure de nœud de commentaire ou d'instruction de traitement

	retour ret;
};

Expr = Sizzle.selectors = {

	// Peut être ajusté par l'utilisateur
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	trouver: {},

	parent: {
		">": {dir: "parentNode", d'abord: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", premier: vrai},
		"~": {dir: "previousSibling"}
	},

	preFilter: {
		"ATTR": fonction (correspondance) {
			match [1] = match [1] .replace (runescape, funescape);

			// Déplace la valeur donnée pour qu'elle corresponde [3] entre guillemets ou non
			match [3] = (match [3] || match [4] || match [5] || "") .remplacer (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			retour match.slice (0, 4);
		},

		"ENFANT": fonction (match) {
			/ * correspond à matchExpr ["ENFANT"]
				1 type (seulement | nième | ...)
				2 quoi (enfant | de type)
				3 arguments (pair | impair | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 composant xn de l'argument xn + y ([+ -]? \ D * n |)
				5 signe de xn-composant
				6 x de composant xn
				7 signe de composante y
				8 ans de composant y
			* /
			match [1] = match [1] .toLowerCase ();

			if (correspond à [1] .slice (0, 3) === "nth") {
				// nth- * nécessite un argument
				si (! match [3]) {
					Sizzle.error (match [0]);
				}

				// paramètres x et y numériques pour Expr.filter.CHILD
				// rappelez-vous que false / true convertit respectivement en 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "même" || match [3] === " impair "));
				match [5] = + ((match [7] + match [8]) || match [3] === "impair");

			// autres types interdisent les arguments
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			revanche;
		},

		"PSEUDO": fonction (correspondance) {
			excès var,
				uncoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				return null;
			}

			// Accepte les arguments cités tels quels
			si (correspond [3]) {
				match [2] = match [4] || match [5] || "";

			// Supprime les caractères en excès des arguments sans guillemet
			} else if (non cité && rpseudo.test (non cité) &&
				// Récupère l'excès de tokenize (récursivement)
				(excès = tokenize (non cité, true)) &&
				// avance à la prochaine parenthèse fermante
				(excès = uncote.indexOf (")", uncote.length - un excès) - uncote.longueur)) {

				// l'excès est un index négatif
				match [0] = match [0] .slice (0, excès);
				match [2] = slice unquoted (0, excès);
			}

			// Renvoie uniquement les captures nécessaires à la méthode de pseudo-filtre (type et argument)
			retour match.slice (0, 3);
		}
	},

	filtre: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			Renvoie nodeNameSelector === "*"?
				function () {retourne vrai; }:
				fonction (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			motif de retour ||
				(modèle = new RegExp ("(^ |" + espaces + ")" "+ nom de classe +" ("+ espaces +" | $) ")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "chaîne" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("classe") || "");
				});
		},

		"ATTR": fonction (nom, opérateur, contrôle) {
			fonction de retour (elem) {
				var result = Sizzle.attr (elem, name);

				if (résultat == null) {
					opérateur de retour === "! =";
				}
				si (! opérateur) {
					retourne vrai;
				}

				résultat + = "";

				opérateur de retour === "="? résultat === vérifier:
					opérateur === "! ="? résultat! == vérifier:
					opérateur === "^ ="? check && result.indexOf (check) === 0:
					opérateur === "* ="? check && result.indexOf (check)> -1:
					opérateur === "$ ="? check && result.slice (-check.length) === check:
					opérateur === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					opérateur === "| ="? résultat === vérifier || result.slice (0, check.length + 1) === check + "-":
					faux;
			};
		},

		"ENFANT": fonction (type, quoi, argument, premier, dernier) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "dernier",
				ofType = what === "of-type";

			retourne en premier === 1 && last === 0?

				// Raccourci pour: nth - * (n)
				fonction (elem) {
					return !! elem.parentNode;
				}:

				fonction (elem, context, xml) {
					cache var, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == en avant? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = faux;

					si (parent) {

						//: (first | last | only) - (enfant | de type)
						si (simple) {
							while (dir) {
								noeud = elem;
								while ((node ​​= node [dir])) {
									si (de type?
										node.nodeName.toLowerCase () === nom:
										node.nodeType === 1) {

										retourne faux;
									}
								}
								// Inverser la direction pour: only- * (si ce n'est déjà fait)
								start = dir = type === "seulement" &&! start && "nextSibling";
							}
							retourne vrai;
						}

						commencer = [en avant? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) stocke les données de cache sur `parent`
						if (forward && useCache) {

							// Cherche `elem` à partir d'un index mis en cache précédemment

							// ... d'une manière conviviale avec gzip
							noeud = parent;
							outerCache = noeud [expando] || (node ​​[expando] = {});

							// Support: IE <9 seulement
							// Défendre contre les attractions clonées (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && noeud && noeud [dir] ||

								// retour à la recherche de `elem` depuis le début
								(diff = nodeIndex = 0) || start.pop ())) {

								// Une fois trouvé, cache les index sur `parent` et rompt
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									Pause;
								}
							}

						} autre {
							// Utilise l'index de l'élément précédemment mis en cache s'il est disponible
							if (useCache) {
								// ... d'une manière conviviale avec gzip
								noeud = elem;
								outerCache = noeud [expando] || (node ​​[expando] = {});

								// Support: IE <9 seulement
								// Défendre contre les attractions clonées (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// ou: nième-dernier-enfant (...) ou: nième (-last)? - de type (...)
							si (diff === faux) {
								// Utilise la même boucle que ci-dessus pour chercher `elem` depuis le début
								while ((node ​​= ++ nodeIndex && noeud && noeud [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									si ((deType?
										node.nodeName.toLowerCase () === nom:
										node.nodeType === 1) &&
										++ diff) {

										// Cache l'index de chaque élément rencontré
										if (useCache) {
											outerCache = noeud [expando] || (node ​​[expando] = {});

											// Support: IE <9 seulement
											// Défendre contre les attractions clonées (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (noeud === elem) {
											Pause;
										}
									}
								}
							}
						}

						// Incorporer le décalage, puis vérifier par rapport à la taille du cycle
						diff - = dernier;
						retourne diff === premier || (diff% first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": function (pseudo, argument) {
			// les noms de pseudo-classes sont insensibles à la casse
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Donne la priorité à la casse si des pseudos personnalisés sont ajoutés avec des lettres majuscules
			// Rappelez-vous que setFilters hérite de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo non pris en charge:" + pseudo);

			// L'utilisateur peut utiliser createPseudo pour indiquer que
			// les arguments sont nécessaires pour créer la fonction de filtrage
			// tout comme Sizzle
			if (fn [expando]) {
				retourne fn (argument);
			}

			// Mais conserve le support des anciennes signatures
			si (longueur fn> 1) {
				args = [pseudo, pseudo, "", argument];
				renvoyer Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (fonction (graine, correspond)) {
						var idx,
							apparié = fn (graine, argument),
							i = matched.length;
						alors que je-- ) {
							idx = indexOf (graine, correspondante [i]);
							seed [idx] =! (correspond à [idx] = correspondant [i]);
						}
					}):
					fonction (elem) {
						retourne fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Pseudos potentiellement complexes
		"not": markFunction (fonction (sélecteur) {
			// Coupe le sélecteur passé à compiler
			// pour éviter de traiter le début et la fin
			// espaces en tant que combinateurs
			var input = [],
				résultats = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			retour matcher [expando]?
				markFunction (fonction (graine, correspondances, contexte, xml) {
					var elem
						unmatched = matcher (seed, null, xml, []),
						i = graine.longueur;

					// Correspond aux éléments sans correspondance de `matcher`
					alors que je-- ) {
						if ((elem = inégalé [i])) {
							graine [i] =! (correspond à [i] = elem);
						}
					}
				}):
				fonction (elem, context, xml) {
					entrée [0] = elem;
					matcher (input, null, xml, résultats);
					// Ne conserve pas l'élément (numéro 299)
					entrée [0] = null;
					return! results.pop ();
				};
		}),

		"a": markFunction (fonction (sélecteur) {
			fonction de retour (elem) {
				renvoyer Sizzle (sélecteur, elem) .length> 0;
			};
		}),

		"contient": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			fonction de retour (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "si un élément est représenté par un sélecteur: lang ()
		// est basé uniquement sur la valeur de langue de l'élément
		// étant égal à l'identifiant C,
		// ou commençant par l'identifiant C immédiatement suivi de "-".
		// La correspondance de C avec la valeur de langue de l'élément est effectuée sans distinction de casse.
		// L'identifiant C ne doit pas obligatoirement être un nom de langue valide. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// la valeur de langue doit être un identifiant valide
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang non supporté:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			fonction de retour (elem) {
				var elemLang;
				faire {
					si ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retourne faux;
			};
		}),

		// Divers
		"cible": fonction (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			return elem === docElem;
		},

		"focus": fonction (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propriétés booléennes
		"enabled": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"vérifié": function (elem) {
			// En CSS3,: coché devrait renvoyer les éléments cochés et sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		},

		"sélectionné": function (elem) {
			// Accéder à cette propriété rend selected-by-default
			// les options dans Safari fonctionnent correctement
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contenu
		"empty": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: empty est annulé par l'élément (1) ou les nœuds de contenu (texte: 3; cdata: 4; entité ref: 5),
			// mais pas par d'autres (commentaire: 8; instruction de traitement: 7; etc.)
			// nodeType <6 fonctionne car les attributs (2) n'apparaissent pas comme des enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retourne faux;
				}
			}
			retourne vrai;
		},

		"parent": function (elem) {
			return! Expr.pseudos ["empty"] (elem);
		},

		// types d'élément / d'entrée
		"en-tête": function (elem) {
			return rheader.test (elem.nodeName);
		},

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		},

		"bouton": function (elem) {
			nom var = elem.nodeName.toLowerCase ();
			renvoyer le nom === "entrée" && elem.type === "bouton" || nom === "bouton";
		},

		"text": function (elem) {
			var attr;
			retourne elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Support: IE <8
				// Les nouvelles valeurs d'attribut HTML5 (par exemple, "search") apparaissent avec elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		},

		// Position dans la collection
		"premier": createPositionalPseudo (function () {
			return [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			retour [longueur - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argument) {
			retourne [argument <0? argument + longueur: argument];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"odd": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? argument + longueur: argument;
			pour (; --i> = 0;) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? argument + longueur: argument;
			pour (; ++ i <longueur;) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Ajout de pseudos de type de saisie / type de saisie
pour (i dans {radio: true, case à cocher: true, fichier: true, mot de passe: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
pour (i dans {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API facile pour créer de nouveaux setFilters
fonction setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = fonction (sélecteur, parseOnly) {
	var apparié, match, jetons, type,
		soFar, groupes, pré-filtres,
		cached = tokenCache [sélecteur + ""];

	si (en cache) {
		retourne parseOnly? 0: cached.slice (0);
	}

	soFar = sélecteur;
	groupes = [];
	preFilters = Expr.preFilter;

	tandis que (soFar) {

		// Virgule et premier passage
		if (! matched || (match = rcomma.exec (soFar)))) {
			si (correspond) {
				// Ne consommez pas les virgules de trait comme étant valides
				soFar = soFar.slice (match [0] .length) || jusque là;
			}
			groupes.push ((jetons = []));
		}

		apparié = faux;

		// combinateurs
		if ((match = rcombinators.exec (soFar)))) {
			apparié = match.shift ();
			tokens.push ({
				valeur: apparié,
				// Jette les combinateurs descendants dans l'espace
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// filtres
		pour (tapez Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				apparié = match.shift ();
				tokens.push ({
					valeur: apparié,
					type: type,
					matchs: match
				});
				soFar = soFar.slice (matched.length);
			}
		}

		si (! correspondait) {
			Pause;
		}
	}

	// Retourne la longueur de l'excédent invalide
	// si nous sommes en train d'analyser
	// Sinon, génère une erreur ou retourne des jetons
	retourne parseOnly?
		soFar.length:
		jusque là ?
			Sizzle.error (selector):
			// Cache les jetons
			tokenCache (sélecteur, groupes) .slice (0);
};

fonction toSelector (jetons) {
	var i = 0,
		len = tokens.length,
		sélecteur = "";
	pour (; i <len; i ++) {
		sélecteur + = jetons [i] .value;
	}
	sélecteur de retour;
}

fonction addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		clé = sauter || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	retour combinator.first?
		// Vérifier avec l'ancêtre le plus proche / l'élément précédent
		fonction (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					retourne matcher (elem, context, xml);
				}
			}
			retourne faux;
		}:

		// Vérifie tous les éléments ancêtres / précédents
		fonction (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Nous ne pouvons pas définir de données arbitraires sur des nœuds XML, ils ne bénéficient donc pas de la mise en cache de combinateurs
			si (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							retourne vrai;
						}
					}
				}
			} autre {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Support: IE <9 seulement
						// Défendre contre les attractions clonées (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [clé]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Assigne à newCache pour que les résultats se propagent dans les éléments précédents
							return (newCache [2] = oldCache [2]);
						} autre {
							// Réutilise newcache pour que les résultats se propagent dans les éléments précédents
							uniqueCache [clé] = newCache;

							// Une correspondance signifie que nous avons terminé. un échec signifie que nous devons continuer à vérifier
							if ((newCache [2] = matcher (elem, context, xml)))) {
								retourne vrai;
							}
						}
					}
				}
			}
			retourne faux;
		};
}

fonction elementMatcher (matchers) {
	renvoyer matchers.length> 1?
		fonction (elem, context, xml) {
			var i = matchers.length;
			alors que je-- ) {
				if (! matchers [i] (elem, context, xml)) {
					retourne faux;
				}
			}
			retourne vrai;
		}:
		correspondants [0];
}

function multipleContexts (sélecteur, contextes, résultats) {
	var i = 0,
		len = contexts.length;
	pour (; i <len; i ++) {
		Sizzle (sélecteur, contextes [i], résultats);
	}
	renvoyer les résultats;
}

fonction condenser (incomparable, carte, filtre, contexte, xml) {
	var elem
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mappé = carte! = null;

	pour (; i <len; i ++) {
		if ((elem = inégalé [i])) {
			if (! filtre || filtre (elem, contexte, xml)) {
				newUnmatched.push (elem);
				si (mappé) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

fonction setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	retourne markFunction (fonction (graine, résultats, contexte, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			préexistant = résultats.longueur,

			// Récupère les éléments initiaux de la graine ou du contexte
			elems = graine || multipleContexts (sélecteur || "*", context.nodeType? [context]: context, []),

			// Prefilter pour obtenir une entrée de correspondance, en préservant une carte pour la synchronisation des résultats de départ
			matcherIn = preFilter && (seed ||! sélecteur)?
				condenser (elems, preMap, preFilter, context, xml):
				elems,

			matcherOut = matcher?
				// Si nous avons un postFinder, une graine filtrée, ou un postFilter non-graine ou des résultats préexistants,
				postFinder || (seed? preFilter: pré-existant || postFilter)?

					// ... le traitement intermédiaire est nécessaire
					[]:

					// ... sinon utiliser directement les résultats
					résultats :
				matcherIn;

		// Trouver des correspondances primaires
		si (matcher) {
			matcher (matcherIn, matcherOut, contexte, xml);
		}

		// Appliquer postFilter
		if (postFilter) {
			temp = condenser (matcherOut, postMap);
			postFilter (temp, [], contexte, xml);

			// Dissocier les éléments défaillants en les replaçant dans matcherIn
			i = temp.length;
			alors que je-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		si (graine) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtient le dernier matcherOut en condensant cet intermédiaire dans les contextes postFinder
					temp = [];
					i = matcherOut.length;
					alors que je-- ) {
						if ((elem = matcherOut [i])) {
							// Restaure matcherIn puisque elem n'est pas encore un match final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Déplace les éléments correspondants de la graine aux résultats pour les maintenir synchronisés
				i = matcherOut.length;
				alors que je-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						graine [temp] =! (résultats [temp] = elem);
					}
				}
			}

		// Ajoute des éléments aux résultats, via postFinder si défini
		} autre {
			matcherOut = condenser (
				matcherOut === résultats?
					matcherOut.splice (préexistant, matcherOut.length):
					matcherOut
			)
			if (postFinder) {
				postFinder (null, résultats, matcherOut, xml);
			} autre {
				push.apply (résultats, matcherOut);
			}
		}
	});
}

fonction matcherFromTokens (jetons) {
	var checkContext, matcher, j,
		len = tokens.length,
		LeadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = LeadingRelative || Expr.relative [""],
		i = leaderRelative? dix,

		// L'assistant de création garantit que les éléments sont accessibles à partir d'un ou plusieurs contextes de niveau supérieur.
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			retourne indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [fonction (elem, context, xml) {
			var ret = (! LeadingRelative && (xml || contexte! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Évitez de vous accrocher à un élément (numéro 299)
			checkContext = null;
			retour ret;
		}];

	pour (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type]))) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} autre {
			matcher = Expr.filter [jetons [i] .type] .apply (null, jetons [i] .matches);

			// Retour spécial après avoir vu un joueur de position
			if (matcher [expando]) {
				// Trouver le prochain opérateur relatif (le cas échéant) pour une manipulation correcte
				j = ++ i;
				pour (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						Pause;
					}
				}
				retourne setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si le jeton précédent était un combinateur descendant, insérez un élément * implicite
						tokens.slice (0, i - 1) .concat ({valeur: jetons [i - 2] .type === "??" ":" "})
					) .replace (rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (jetons)
				)
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

fonction matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (valeur de départ, contexte, XML, résultats, le plus à l'extérieur) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Nous devons toujours avoir des éléments de base ou un contexte le plus externe
				elems = graine || byElement && Expr.find ["TAG"] ("*", le plus à l'extérieur),
				// Utilise integer dirruns si et seulement si c'est l'adaptateur le plus externe
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			si (le plus à l'extérieur) {
				outermostContext = context === document || contexte || le plus à l'extérieur;
			}

			// Ajoute des éléments en passant directement elementMatchers aux résultats
			// Assistance: IE <9, Safari
			// Tolérer les propriétés NodeList (IE: "length"; Safari: <nombre>) correspondant aux éléments par id
			pour (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, contexte || document, xml)) {
							résultats.push (elem);
							Pause;
						}
					}
					si (le plus à l'extérieur) {
						dirruns = dirrunsUnique;
					}
				}

				// Suivre les éléments sans correspondance pour les filtres définis
				if (bySet) {
					// Ils auront passé tous les matchs possibles
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Allonge le tableau pour chaque élément, mis en correspondance ou non
					si (graine) {
						inégalée.push (elem);
					}
				}
			}

			// `i` est maintenant le nombre d'éléments visités ci-dessus et l'ajoute à` matchedCount`
			// rend le dernier non négatif.
			matchedCount + = i;

			// Appliquer les filtres définis aux éléments sans correspondance
			// NOTE: Ceci peut être ignoré s'il n'y a pas d'éléments non appariés (c'est-à-dire `matchedCount`
			// est égal à `i`), sauf si nous n'avons pas visité les éléments _any_ dans la boucle ci-dessus, car nous avons
			// aucun élément correspondant ni aucune graine.
			// Incrémenter une chaîne initiale "0" `i` permet à` i` de rester une chaîne uniquement dans cette
			// cas, ce qui donnera un "00" `matchedCount` différent de` i` mais est aussi
			// numériquement zéro.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (unmatched, setMatched, context, xml);
				}

				si (graine) {
					// Réintègre les correspondances d'éléments pour éliminer le besoin de trier
					if (matchedCount> 0) {
						alors que je-- ) {
							if (! (sans correspondance [i] || setMatched [i]))) {
								setMatched [i] = pop.call (résultats);
							}
						}
					}

					// Ignorer les valeurs d'espace réservé pour l'index pour obtenir uniquement les correspondances réelles
					setMatched = condense (setMatched);
				}

				// Ajoute des résultats aux résultats
				push.apply (résultats, setMatched);

				// Les matchs définis sans pépins succédant à plusieurs interlocuteurs retenus stipulent le tri
				if (le plus externe &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (résultats);
				}
			}

			// Ignorer la manipulation des globals par des correspondants imbriqués
			si (le plus à l'extérieur) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retour inégalé;
		};

	retourner bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (sélecteur, correspondance / * à usage interne uniquement * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [sélecteur + ""];

	si (! mis en cache) {
		// Génère une fonction de fonctions récursives pouvant être utilisée pour vérifier chaque élément
		si (! match) {
			match = tokenize (sélecteur);
		}
		i = match.length;
		alors que je-- ) {
			cached = matcherFromTokens (match [i]);
			if (mis en cache [expando]) {
				setMatchers.push (mis en cache);
			} autre {
				elementMatchers.push (mis en cache);
			}
		}

		// Cache la fonction compilée
		cached = compilerCache (sélecteur, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Enregistrer le sélecteur et la tokenisation
		cached.selector = selector;
	}
	retour en cache;
};

/ **
 * Une fonction de sélection de bas niveau qui fonctionne avec la compilation de Sizzle
 * fonctions de sélection
 * @param {String | Function} selector Un sélecteur ou un fichier pré-compilé
 * fonction de sélecteur construite avec Sizzle.compile
 * @param {Element} contexte
 * @param {Array} [résultats]
 * @param {Array} [seed] Un ensemble d'éléments à comparer
 * /
select = Sizzle.select = fonction (sélecteur, contexte, résultats, graine) {
	var i, jetons, jeton, type, trouver,
		compilé = sélecteur typeof === "fonction" & sélecteur,
		match =! seed && tokenize ((selector = compiled.selector || sélecteur));

	résultats = résultats || [];

	// Essayez de minimiser les opérations s'il n'y a qu'un seul sélecteur dans la liste et pas de valeur de départ
	// (ce dernier nous garantit le contexte)
	if (match.length === 1) {

		// Réduit le contexte si le sélecteur composé principal est un ID
		jetons = correspondance [0] = correspondance [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			si (! contexte) {
				renvoyer les résultats;

			// Les correspondants pré-compilés vérifieront toujours l'ascendance, alors augmentez d'un niveau
			} sinon si (compilé) {
				context = context.parentNode;
			}

			sélecteur = sélecteur.slice (tokens.shift (). valeur.longueur);
		}

		// Récupère un ensemble de semences pour une correspondance de droite à gauche
		i = matchExpr ["needsContext"]. test (sélecteur)? 0: jetons.longueur;
		alors que je-- ) {
			jeton = jetons [i];

			// Abandonne si on frappe un combinateur
			if (Expr.relative [(type = token.type)])) {
				Pause;
			}
			if ((find = Expr.find [type])) {
				// Search, contexte élargi pour les principaux combinateurs frères
				si ((graine = trouver (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (jetons [0] .type) && testContext (context.parentNode) || le contexte
				))) {

					// Si la graine est vide ou qu'il ne reste plus de jetons, nous pouvons revenir plus tôt
					jetons.plice (i, 1);
					sélecteur = seed.length && toSelector (jetons);
					si (! sélecteur) {
						push.apply (résultats, graine);
						renvoyer les résultats;
					}

					Pause;
				}
			}
		}
	}

	// Compile et exécute une fonction de filtrage si aucune n'est fournie
	// Fournit `match` pour éviter la réutilisation si nous avons modifié le sélecteur ci-dessus
	(compilé || compile (sélecteur, correspondance)) (
		la graine,
		le contexte,
		! documentIsHTML,
		résultats,
		! context || rsibling.test (sélecteur) && testContext (context.parentNode) || le contexte
	)
	renvoyer les résultats;
};

// missions ponctuelles

// stabilité de tri
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Assistance: Chrome 14-35 +
// Assume toujours les doublons s'ils ne sont pas passés à la fonction de comparaison
support.detectDuplicates = !! hasDuplicate;

// Initialiser avec le document par défaut
setDocument ();

// Support: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corrigé dans Chrome 27)
// Les nœuds détachés se suivent * de manière confuse
support.sortDetached = assert (fonction (el) {
	// Doit retourner 1, mais retourne 4 (suivant)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Support: IE <8
// Empêche l'attribut / la propriété "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
si (! assert (fonction (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("type | href | height | width", fonction (elem, name, isXML) {
		si (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Support: IE <9
// Utilise defaultValue à la place de getAttribute ("value")
if (! support.attributes ||! assert (fonction (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("valeur", "");
	return el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("value", fonction (elem, name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Support: IE <9
// Utilise getAttributeNode pour extraire des booléens lorsque getAttribute ment
si (! assert (fonction (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booléens, fonction (elem, name, isXML) {
		var val;
		si (! isXML) {
			renvoyer elem [nom] === vrai? name.toLowerCase ():
					(val = elem.getAttributeNode (name)) && val.specified?
					valeur.val:
				nul;
		}
	});
}

retournez Sizzle;

})( la fenêtre );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsolète
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = fonction (elem, dir, jusqu'à) {
	var apparié = [],
		tronqué = jusqu'à ce que! == undefined;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (jusqu'à)) {
				Pause;
			}
			matched.push (elem);
		}
	}
	retour apparié;
};


var siblings = function (n, elem) {
	var apparié = [];

	pour (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	retour apparié;
};


var rneedsContext = jQuery.expr.match.needsContext;



fonction nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implémente la fonctionnalité identique pour filter et not
fonction winnow (éléments, qualificatif, pas) {
	if (isFunction (qualificatif)) {
		retourne jQuery.grep (éléments, fonction (elem, i) {
			return !! qualifier.call (elem, i, elem)! == pas;
		});
	}

	// élément unique
	if (qualifier.nodeType) {
		retourne jQuery.grep (elements, function (elem) {
			return (elem === qualifier)! == pas;
		});
	}

	// Nombre d'éléments (jQuery, arguments, Array)
	if (typeof qualifier! == "chaîne") {
		retourne jQuery.grep (elements, function (elem) {
			return (indexOf.call (qualificatif, elem)> -1)! == pas;
		});
	}

	// Filtré directement pour les sélecteurs simples et complexes
	renvoyer jQuery.filter (qualificateur, éléments, pas);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si non ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		renvoyer jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	retourne jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	trouver: fonction (sélecteur) {
		var i, ret,
			len = this.length,
			soi = ceci;

		if (typeof selector! == "string") {
			retourne this.pushStack (jQuery (selector) .filter (function () {
				pour (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						retourne vrai;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		pour (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		retourne len> 1? jQuery.uniqueSort (ret): ret;
	},
	filtre: fonction (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], false));
	},
	non: fonction (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], true));
	},
	is: fonction (sélecteur) {
		retour !! winnow (
			ce,

			// S'il s'agit d'un sélecteur de position / relatif, vérifiez l'appartenance au jeu renvoyé.
			// donc $ ("p: premier"). is ("p: dernier") ne retournera pas vrai pour un document avec deux "p".
			typeof selector === "string" && rneedsContext.test (sélecteur)?
				jQuery (sélecteur):
				sélecteur || []
			faux
		).longueur;
	}
});


// Initialise un objet jQuery


// Une référence centrale à la racine jQuery (document)
var rootjQuery,

	// Un moyen simple de vérifier les chaînes HTML
	// Priorise #id sur <tag> pour éviter XSS via location.hash (# 9521)
	// Reconnaissance HTML stricte (# 11290: doit commencer par <)
	// Raccourci simple #id case pour la vitesse
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = fonction (sélecteur, contexte, racine) {
		var match, elem;

		// HANDLE: $ (""), $ (null), $ (indéfini), $ (false)
		si (! sélecteur) {
			retournez ceci;
		}

		// Méthode init () accepte un autre rootjQuery
		// donc migrate peut supporter jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Gère les chaînes HTML
		if (typeof selector === "string") {
			si (sélecteur [0] === "<" &&
				sélecteur [selector.length - 1] === ">" &&
				sélecteur.longueur> = 3) {

				// Supposons que les chaînes qui commencent et se terminent par <> soient du code HTML et ignorent la vérification de l'expression régulière
				match = [null, sélecteur, null];

			} autre {
				match = rquickExpr.exec (sélecteur);
			}

			// correspond au code HTML ou s'assure qu'aucun contexte n'est spécifié pour #id
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					context = instance de jQuery? contexte [0]: contexte;

					// L'option pour exécuter les scripts est vraie pour les back-compat
					// Laisse intentionnellement l'erreur être levée si parseHTML n'est pas présent
					jQuery.merge (this, jQuery.parseHTML (
						match [1],
						context && context.nodeType? context.ownerDocument || contexte: document,
						vrai
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						pour (match dans le contexte) {

							// Les propriétés du contexte sont appelées méthodes si possible
							if (isFunction (this [match])) {
								this [match] (context [match]);

							// ... et autrement défini comme attributs
							} autre {
								this.attr (match, context [match]);
							}
						}
					}

					retournez ceci;

				// HANDLE: $ (# id)
				} autre {
					elem = document.getElementById (match [2]);

					si (elem) {

						// Injecte l'élément directement dans l'objet jQuery
						this [0] = elem;
						this.length = 1;
					}
					retournez ceci;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexte || root) .find (sélecteur);

			// HANDLE: $ (expr, contexte)
			// (ce qui équivaut à: $ (context) .find (expr)
			} autre {
				renvoyer this.constructor (context) .find (sélecteur);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			ce [0] = sélecteur;
			this.length = 1;
			retournez ceci;

		// HANDLE: $ (fonction)
		// raccourci pour document prêt
		} else if (isFunction (sélecteur)) {
			retourne root.ready! == non défini?
				root.ready (sélecteur):

				// Exécuter immédiatement si ready n'est pas présent
				sélecteur (jQuery);
		}

		return jQuery.makeArray (sélecteur, ceci);
	};

// Donne à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialise la référence centrale
rootjQuery = jQuery (document);


var rparentsprev = / ^ (?: parents | prev (?: Jusqu'au | Tous)) /,

	// Méthodes garantissant la production d'un ensemble unique lors du démarrage d'un ensemble unique
	garantieUnique = {
		les enfants: vrai
		contenu: vrai,
		next: true,
		prev: true
	};

jQuery.fn.extend ({
	a: fonction (cible) {
		var cibles = jQuery (target, this),
			l = cibles.longueur;

		retourne this.filter (function () {
			var i = 0;
			pour (; i <l; i ++) {
				if (jQuery.contains (this, cibles [i]))) {
					retourne vrai;
				}
			}
		});
	},

	le plus proche: fonction (sélecteurs, contexte) {
		var cur,
			i = 0,
			l = ceci.longueur,
			apparié = [],
			cibles = typeof selectors! == "chaîne" && jQuery (sélecteurs);

		// Les sélecteurs de position ne correspondent jamais, car il n'y a pas de contexte _selection_
		if (! rneedsContext.test (sélecteurs)) {
			pour (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == contexte; cur = cur.parentNode) {

					// Toujours ignorer les fragments de document
					if (cur.nodeType <11 && (cibles?
						target.index (cur)> -1:

						// Ne pas passer les non-éléments à Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectors))) {

						matched.push (cur);
						Pause;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (matched): matched);
	},

	// Détermine la position d'un élément dans l'ensemble
	index: fonction (elem) {

		// Pas d'argument, retourne l'index dans le parent
		si (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Index dans le sélecteur
		if (typeof elem === "chaîne") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// Localiser la position de l'élément souhaité
		retourne indexOf.call (this,

			// S'il reçoit un objet jQuery, le premier élément est utilisé
			elem.jquery? elem [0]: elem
		)
	},

	add: fonction (sélecteur, contexte) {
		retourne this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (sélecteur, contexte))
			)
		)
	},

	addBack: fonction (sélecteur) {
		renvoyer this.add (sélecteur == null?
			this.prevObject: this.prevObject.filter (sélecteur)
		)
	}
});

fonction frère (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	retour cur;
}

jQuery.each ({
	parent: fonction (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? parent: null;
	},
	parents: fonction (elem) {
		return dir (elem, "parentNode");
	},
	parents Jusqu'à la fonction (elem, i, jusqu'à) {
		return dir (elem, "parentNode", jusqu'à);
	},
	next: function (elem) {
		retour frère (elem, "nextSibling");
	},
	prev: function (elem) {
		retour frère (elem, "previousSibling");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, jusqu'à) {
		retour dir (elem, "nextSibling", jusqu'à);
	},
	prevUntil: function (elem, i, jusqu'à) {
		retour dir (elem, "previousSibling", jusqu'à);
	},
	frères et soeurs: function (elem) {
		retour des frères et soeurs ((elem.parentNode || {}) .firstChild, elem);
	},
	enfants: fonction (elem) {
		retour des frères et soeurs (elem.firstChild);
	},
	contenu: function (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 uniquement, iOS 7 uniquement, navigateur Android <= 4.3 uniquement
        // Traite l'élément template comme un élément standard dans les navigateurs qui
        // ne le supporte pas.
        if (nodeName (elem, "template")) {
            elem = elem.content || elem;
        }

        return jQuery.merge ([], elem.childNodes);
	}
}, fonction (nom, fn) {
	jQuery.fn [nom] = fonction (jusqu'à, sélecteur) {
		var matched = jQuery.map (this, fn, jusqu'à);

		if (name.slice (-5)! == "Until") {
			sélecteur = jusqu'à;
		}

		if (sélecteur && typeof sélecteur === "chaîne") {
			apparié = jQuery.filter (sélecteur, apparié);
		}

		if (this.length> 1) {

			// Supprimer les doublons
			if (! guaranteeUnique [nom]) {
				jQuery.uniqueSort (correspondant);
			}

			// ordre inverse pour les parents * et les dérivés précédents
			if (rparentsprev.test (nom)) {
				apparié.reverse ();
			}
		}

		renvoyer this.pushStack (correspondant);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir les options au format String en celles au format Object
fonction createOptions (options) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], fonction (_, indicateur) {
		objet [drapeau] = vrai;
	});
	retourne un objet;
}

/ *
 * Créez une liste de rappel en utilisant les paramètres suivants:
 *
 * options: une liste optionnelle d’options séparées par des espaces qui changera la
 * la liste de rappel se comporte ou un objet d'option plus traditionnel
 *
 * Par défaut, une liste de rappel agit comme une liste de rappel d’événement et peut être
 * "tiré" plusieurs fois.
 *
 * Options possibles:
 *
 * une fois: s'assurera que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * memory: gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après le renvoi immédiat de la liste avec le dernier "mémorisé"
 * valeurs (comme un différé)
 *
 * unique: garantira qu'un rappel ne peut être ajouté qu'une seule fois (aucun doublon dans la liste)
 *
 * stopOnFalse: interrompre les appels lorsqu'un rappel renvoie false
 *
 * /
jQuery.Callbacks = function (options) {

	// Convertit les options de String en format à Object si nécessaire
	// (nous archivons d'abord dans le cache)
	options = typeof options === "chaîne"?
		createOptions (options):
		jQuery.extend ({}, options);

	var // Indicateur pour savoir si la liste est en cours de déclenchement
		cuisson,

		// Dernière valeur de tir pour les listes non oubliables
		Mémoire,

		// Indicateur pour savoir si la liste a déjà été déclenchée
		mis à la porte,

		// drapeau pour empêcher le tir
		fermé à clef,

		// Liste de rappel actuelle
		list = [],

		// File d'attente de données d'exécution pour des listes répétables
		queue = [],

		// Index du rappel en cours d'activation (modifié par ajout / suppression si nécessaire)
		firingIndex = -1,

		// Rappels au feu
		feu = fonction () {

			// Appliquer un seul tir
			verrouillé = verrouillé || options.once;

			// Exécuter des callbacks pour toutes les exécutions en attente,
			// respect des remplacements firingIndex et des modifications d'exécution
			tiré = tirant = vrai;
			for (; queue.length; firingIndex = -1) {
				mémoire = queue.shift ();
				while (++ firingIndex <list.length) {

					// Exécuter le rappel et vérifier la fin anticipée
					if (list [firingIndex] .apply (mémoire [0], mémoire [1]) = == false &&
						options.stopOnFalse) {

						// Aller à la fin et oublier les données pour que .add ne se déclenche pas
						firingIndex = list.length;
						mémoire = faux;
					}
				}
			}

			// Oublie les données si on en a fini
			si (! options.memory) {
				mémoire = faux;
			}

			tir = faux;

			// Nettoie si nous avons fini de tirer pour de bon
			si (verrouillé) {

				// Garder une liste vide si nous avons des données pour les prochains appels d'ajout
				si (mémoire) {
					liste = [];

				// Sinon, cet objet est dépensé
				} autre {
					list = "";
				}
			}
		},

		// objet Callbacks réels
		self = {

			// Ajouter un rappel ou une collection de rappels à la liste
			ajouter: function () {
				si (liste) {

					// Si nous avons la mémoire d'une exécution passée, nous devrions tirer après avoir ajouté
					if (mémoire &&! tirant) {
						firingIndex = list.length - 1;
						queue.push (mémoire);
					}

					(fonction add (args) {
						jQuery.each (arguments, fonction (_, arguments) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "chaîne") {

								// Inspecter récursivement
								ajouter (arg);
							}
						});
					} )( arguments );

					if (mémoire &&! tirant) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Supprimer un rappel de la liste
			remove: function () {
				jQuery.each (arguments, fonction (_, arg) {
					indice var;
					while ((index = jQuery.inArray (arg, liste, index))>> -1) {
						list.splice (index, 1);

						// Gérer les index de tir
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				retournez ceci;
			},

			// Vérifie si un rappel donné est dans la liste.
			// Si aucun argument n'est fourni, indique si des rappels sont attachés à la liste.
			a: fonction (fn) {
				retourner fn?
					jQuery.inArray (fn, list)> -1:
					liste.longueur> 0;
			},

			// Supprimer tous les rappels de la liste
			vide: function () {
				si (liste) {
					liste = [];
				}
				retournez ceci;
			},

			// Désactive .fire et .add
			// Abandonne les exécutions en cours / en attente
			// Effacer tous les rappels et toutes les valeurs
			désactiver: function () {
				verrouillé = file d'attente = [];
				liste = mémoire = "";
				retournez ceci;
			},
			désactivé: function () {
				return! list;
			},

			// Désactive .fire
			// Désactive également .add sauf si nous avons de la mémoire (car cela n'aurait aucun effet)
			// Abandonne les exécutions en attente
			verrouiller: fonction () {
				verrouillé = file d'attente = [];
				si (! mémoire &&! tirant) {
					liste = mémoire = "";
				}
				retournez ceci;
			},
			verrouillé: function () {
				retour !! verrouillé;
			},

			// Appelle tous les callbacks avec le contexte et les arguments donnés
			fireWith: fonction (contexte, arguments) {
				si (! verrouillé) {
					args = args || [];
					args = [contexte, args.slice? args.slice (): args];
					queue.push (args);
					si (! tirant) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Appelle tous les callbacks avec les arguments donnés
			feu: fonction () {
				self.fireWith (this, arguments);
				retournez ceci;
			},

			// Pour savoir si les rappels ont déjà été appelés au moins une fois
			tiré: function () {
				retour !! viré
			}
		};

	retourner soi-même;
};


fonction Identité (v) {
	retourner v;
}
fonction Thrower (ex) {
	lancer ex;
}

function adoptValue (valeur, résoudre, rejeter, noValue) {
	méthode var;

	essayer {

		// Vérifier d'abord l'aspect de la promesse pour privilégier le comportement synchrone
		if (valeur && isFunction ((method = valeur.promise)))) {
			method.call (valeur) .done (résolution) .fail (rejeter);

		// Autres alorsables
		} else if (valeur && isFunction ((method = valeur.then)))) {
			method.call (valeur, résoudre, rejeter);

		// Autres non-thenables
		} autre {

			// Contrôlez les arguments `resol` en laissant Array # slice transtyper le booléen` noValue` en entier:
			// * false: [valeur] .slice (0) => resol (valeur)
			// * true: [valeur] .slice (1) => resol ()
			resolve.apply (undefined, [valeur] .slice (noValue));
		}

	// Pour Promises / A +, convertit les exceptions en rejets
	// Depuis jQuery.when ne déballe pas thenables, nous pouvons ignorer les vérifications supplémentaires apparaissant dans
	// Deferred # then pour supprimer conditionnellement le rejet.
	} capture (valeur) {

		// Support: Android 4.0 uniquement
		// Les fonctions en mode strict appelées sans .call / .apply obtiennent le contexte d'objet global
		rejeter.apply (indéfini, [valeur]);
	}
}

jQuery.extend ({

	Différé: function (func) {
		var tuples = [

				// action, ajouter un auditeur, rappels,
				// ... .then handlers, index d'argument, [état final]
				["notify", "progress", jQuery.Callbacks ("mémoire"),
					jQuery.Callbacks ("memory"), 2],
				["résoudre", "fait", jQuery.Callbacks ("une fois en mémoire"),
					jQuery.Callbacks ("une fois en mémoire"), 0, "résolu"],
				["rejette", "échoue", jQuery.Callbacks ("une fois en mémoire"),
					jQuery.Callbacks ("une fois en mémoire"), 1, "rejeté"
			],
			state = "en attente",
			promesse = {
				fonction d'état() {
					état de retour;
				},
				toujours: function () {
					deferred.done (arguments) .fail (arguments);
					retournez ceci;
				},
				"catch": function (fn) {
					retour promis.then (null, fn);
				},

				// Garder le tuyau pour le dos-compat
				pipe: fonction (/ * fnDone, fnFail, fnProgress * /) {
					var fns = arguments;

					retourne jQuery.Deferred (function (newDefer) {
						jQuery.each (tuples, fonction (i, tuple) {

							// Mappe des n-uplets (progrès, terminé, échec) en arguments (terminé, échec, progrès)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {lie à newDefer ou newDefer.notify})
							// deferred.done (function () {lie à newDefer ou newDefer.resolve})
							// deferred.fail (function () {lie à newDefer ou newDefer.reject})
							différé [tuple [1]] (function () {
								var retourné = fn && fn.apply (this, arguments);
								if (retourné && isFunction (retourné.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} autre {
									newDefer [tuple [0] + "With"] (
										ce,
										fn? [retourné]: arguments
									)
								}
							});
						});
						fns = null;
					} ).promettre();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					résolution de la fonction (profondeur, différé, gestionnaire, spécial) {
						fonction de retour () {
							var que = cela,
								args = arguments,
								mightThrow = function () {
									var revint alors;

									// Support: Promises / A + section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorer les tentatives de résolution double
									si (profondeur <profondeur max.) {
										revenir;
									}

									return = handler.apply (that, args);

									// Support: Promises / A + section 2.3.1
									// https://promisesaplus.com/#point-48
									if (retourné === deferred.promise ()) {
										jetez un nouveau TypeError ("résolution automatique puis");
									}

									// Support: Promises / sections A + 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Récupère `then` une seule fois
									then = retourné &&

										// Support: Promises / A + section 2.3.4
										// https://promisesaplus.com/#point-64
										// Ne vérifie que les objets et les fonctions
										(typeof retourné === "objet" ||
											typeof retourné === "fonction") &&
										retourné.

									// Gérer un thenable retourné
									if (isFunction (then)) {

										// Processeurs spéciaux (notifier) ​​il suffit d'attendre la résolution
										si (spécial) {
											then.call (
												revenu,
												résoudre (maxDepth, différé, identité, spécial),
												résoudre (maxDepth, différé, Thrower, spécial)
											)

										// Les processeurs normaux (résoudre) accrochent également en cours
										} autre {

											// ... et ignorer les anciennes valeurs de résolution
											maxDepth ++;

											then.call (
												revenu,
												résoudre (maxDepth, différé, identité, spécial),
												résoudre (maxDepth, différé, Thrower, spécial),
												résoudre (maxDepth, différé, identité,
													deferred.notifyWith)
											)
										}

									// Gère toutes les autres valeurs retournées
									} autre {

										// Seuls les gestionnaires de substitution transmettent le contexte
										// et valeurs multiples (comportement non-spec)
										if (gestionnaire! == Identity) {
											cela = non défini;
											args = [retourné];
										}

										// Traite la ou les valeurs
										// Le processus par défaut est résolu
										(special || deferred.resolveWith) (that, args);
									}
								},

								// Uniquement les processeurs normaux (résoudre) interceptent et rejettent les exceptions
								processus = spécial?
									mightThrow:
									une fonction() {
										essayer {
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Support: Promises / A + section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorer les exceptions post-résolution
											si (profondeur + 1> = profondeur maximale) {

												// Seuls les gestionnaires de substitution transmettent le contexte
												// et valeurs multiples (comportement non-spec)
												if (gestionnaire! == Thrower) {
													cela = non défini;
													args = [e];
												}

												deferred.rejectWith (que, arguments);
											}
										}
									};

							// Support: Promises / A + section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-résoudre les promesses d'esquiver immédiatement le faux rejet
							// erreurs suivantes
							si (profondeur) {
								processus();
							} autre {

								// Appelez un hook optionnel pour enregistrer la pile, en cas d'exception
								// puisqu'il est autrement perdu lorsque l'exécution devient asynchrone
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (processus);
							}
						};
					}

					retourne jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuples [0] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onProgress)?
									onProgress:
									Identité,
								newDefer.notifyWith
							)
						)

						// accomplies_handlers.add (...)
						tuples [1] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identité
							)
						)

						// rejeté_handlers.add (...)
						tuples [2] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Lanceur
							)
						)
					} ).promettre();
				},

				// Obtenir une promesse pour ce différé
				// Si obj est fourni, l'aspect de la promesse est ajouté à l'objet
				promesse: fonction (obj) {
					return obj! = null? jQuery.extend (obj, promise): promesse;
				}
			},
			différé = {};

		// Ajout de méthodes spécifiques à la liste
		jQuery.each (tuples, fonction (i, tuple) {
			var liste = tuple [2],
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promesse [tuple [1]] = list.add;

			// Etat de la poignée
			if (stateString) {
				list.add (
					une fonction() {

						// state = "résolu" (c'est-à-dire rempli)
						// state = "rejeté"
						state = stateString;
					},

					// denied_callbacks.disable
					// satisfilled_callbacks.disable
					tuples [3 - i] [2] .disable,

					// denied_handlers.disable
					// accomplies_handlers.disable
					tuples [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuples [0] [2] .lock,

					// progress_handlers.lock
					tuples [0] [3] .lock
				)
			}

			// progress_handlers.fire
			// accomplies_handlers.fire
			// rejetés_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			différé [tuple [0]] = fonction () {
				différé [tuple [0] + "avec"] (this === différé? undefined: this, arguments);
				retournez ceci;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			différé [tuple [0] + "avec"] = list.fireWith;
		});

		// Faire une promesse différée
		promesse.promise (reportée);

		// appel donné func le cas échéant
		si (func) {
			func.call (différé, différé);
		}

		// Terminé!
		retour différé;
	},

	// Assistant différé
	quand: function (singleValue) {
		var

			// nombre de subordonnés inachevés
			restant = arguments.length,

			// nombre d'arguments non traités
			i = restant,

			// données d'exécution subordonnées
			resolContexts = Tableau (i),
			resolValues ​​= slice.call (arguments),

			// le maître différé
			master = jQuery.Deferred (),

			// fabrique de rappel subordonnée
			updateFunc = function (i) {
				fonction de retour (valeur) {
					resolutionContexts [i] = this;
					resolValues ​​[i] = arguments.length> 1? slice.call (arguments): valeur;
					si (! (- restant)) {
						master.resolveWith (resolvContexts, resolValues);
					}
				};
			};

		// Les arguments simples et vides sont adoptés comme Promise.resolve
		si (restant <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restant );

			// Utilise .then () pour décompresser les objets secondaires (cf. gh-3000)
			if (master.state () === "en attente" ||
				isFunction (resolValues ​​[i] && resolValues ​​[i] .then)) {

				renvoyer master.then ();
			}
		}

		// Plusieurs arguments sont agrégés comme les éléments du tableau Promise.all
		alors que je-- ) {
			adoptValue (resolValues ​​[i], updateFunc (i), master.reject);
		}

		renvoyer master.promise ();
	}
});


// Cela indique généralement une erreur du programmeur pendant le développement,
// préviens à leur sujet dès que possible plutôt que de les avaler par défaut.
var rerrorNames = / ^ (Eval | Internal | Range | Référence | Syntaxe | Type | URI) Erreur $ /;

jQuery.Deferred.exceptionHook = fonction (erreur, pile) {

	// Support: IE 8 - 9 seulement
	// La console existe lorsque les outils de développement sont ouverts, ce qui peut arriver à tout moment
	if (window.console && window.console.warn && erreur && rerrorNames.test (error.name)) {
		window.console.warn ("exception jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		erreur de lancer;
	});
};




// Le différé utilisé sur le DOM prêt
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.alors (fn)

		// Wrap jQuery.readyException dans une fonction afin que la recherche
		// se produit au moment de la gestion des erreurs au lieu du rappel
		// enregistrement.
		.catch (fonction (erreur) {
			jQuery.readyException (error);
		});

	retournez ceci;
};

jQuery.extend ({

	// Le DOM est-il prêt à être utilisé? Réglé sur true une fois que cela se produit.
	isReady: false,

	// Un compteur pour suivre le nombre d'éléments à attendre avant
	// l'événement ready est déclenché. Voir n ° 6781
	prêtAttendre: 1,

	// Gère quand le DOM est prêt
	prêt: fonction (attendez) {

		// Abandonne s'il y a des suspensions en attente ou si nous sommes déjà prêts
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			revenir;
		}

		// Rappelez-vous que le DOM est prêt
		jQuery.isReady = true;

		// Si un événement DOM Ready normal est déclenché, décrémentez et attendez si besoin est
		if (attendez! == true && --jQuery.readyWait> 0) {
			revenir;
		}

		// S'il y a des fonctions liées, à exécuter
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// Le gestionnaire d'événement ready et la méthode d'auto-nettoyage
fonction terminée () {
	document.removeEventListener ("DOMContentLoaded", terminé);
	window.removeEventListener ("load", terminé);
	jQuery.ready ();
}

// Attrape les cas où $ (document) .ready () est appelé
// après l'événement de navigateur a déjà eu lieu.
// Support: IE <= 9 - 10 seulement
// L'ancien IE signale parfois "interactif" trop tôt
if (document.readyState === "complete" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// le manipule de manière asynchrone pour permettre aux scripts de se préparer au retard
	window.setTimeout (jQuery.ready);

} autre {

	// Utiliser le rappel d'événement pratique
	document.addEventListener ("DOMContentLoaded", terminé);

	// Un repli sur window.onload, qui fonctionnera toujours
	window.addEventListener ("load", terminé);
}




// Méthode multifonctionnelle pour obtenir et définir les valeurs d'une collection
// La valeur / s peut éventuellement être exécutée s'il s'agit d'une fonction
var access = function (elems, fn, clé, valeur, chaînable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = clé == null;

	// Définit de nombreuses valeurs
	if (toType (key) === "object") {
		chainable = true;
		pour (i en clé) {
			accès (elems, fn, i, clé [i], true, emptyGet, raw);
		}

	// Définit une valeur
	} else if (valeur! == non définie) {
		chainable = true;

		if (! isFunction (valeur)) {
			brut = vrai;
		}

		si (en vrac) {

			// Les opérations en bloc sont exécutées sur l'ensemble
			si (brut) {
				fn.call (elems, value);
				fn = null;

			// ... sauf lors de l'exécution des valeurs de fonction
			} autre {
				en vrac = fn;
				fn = fonction (elem, clé, valeur) {
					return bulk.call (jQuery (elem), valeur);
				};
			}
		}

		si (fn) {
			pour (; i <len; i ++) {
				fn (
					elems [i], clé, brut?
					valeur :
					value.call (elems [i], i, fn (elems [i], clé))
				)
			}
		}
	}

	si (chaînable) {
		renvoyer les elems;
	}

	// Obtient
	si (en vrac) {
		retourne fn.call (elems);
	}

	retourner len? fn (elems [0], clé): emptyGet;
};


// Correspond à la chaîne en pointillés pour caméliser
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Utilisé par camelCase comme callback pour replace ()
fonction fcamelCase (tout, lettre) {
	return letter.toUpperCase ();
}

// Converti en pointillé en camelCase; utilisé par les modules css et data
// Assistance: IE <= 9 - 11, Edge 12 - 15
// Microsoft a oublié de bosse son préfixe de vendeur (# 9572)
fonction camelCase (chaîne) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = fonction (propriétaire) {

	// Accepte seulement:
	// - Noeud
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objet
	// - Tout
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




fonction Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: fonction (propriétaire) {

		// Vérifier si l'objet propriétaire a déjà un cache
		valeur var = propriétaire [this.expando];

		// Si non, en créer un
		si (! valeur) {
			valeur = {};

			// Nous pouvons accepter les données pour les nœuds non-éléments dans les navigateurs modernes,
			// mais nous ne devrions pas, voir # 8335.
			// retourne toujours un objet vide.
			if (acceptData (propriétaire)) {

				// S'il s'agit d'un noeud peu susceptible d'être enchaîné ou bouclé
				// utilise une affectation simple
				if (owner.nodeType) {
					propriétaire [this.expando] = valeur;

				// sinon le sécuriser dans une propriété non énumérable
				// configurable doit être true pour permettre à la propriété d'être
				// supprimé lorsque les données sont supprimées
				} autre {
					Object.defineProperty (propriétaire, this.expando, {
						valeur: valeur,
						configurable: true
					});
				}
			}
		}

		valeur de retour;
	},
	set: fonction (propriétaire, données, valeur) {
		var prop,
			cache = this.cache (propriétaire);

		// Handle: [propriétaire, clé, valeur] args
		// Toujours utiliser la clé camelCase (gh-2257)
		if (typeof data === "chaîne") {
			cache [camelCase (data)] = valeur;

		// Handle: [propriétaire, {propriétés}] args
		} autre {

			// Copie les propriétés une par une dans l'objet cache
			pour (prop dans les données) {
				cache [camelCase (prop)] = data [prop];
			}
		}
		retourner la cache ;
	},
	get: fonction (propriétaire, clé) {
		touche retour === non définie?
			this.cache (propriétaire):

			// Toujours utiliser la clé camelCase (gh-2257)
			propriétaire [this.expando] && propriétaire [this.expando] [camelCase (clé)];
	},
	access: fonction (propriétaire, clé, valeur) {

		// Dans les cas où:
		//
		// 1. Aucune clé n'a été spécifiée
		// 2. Une clé de chaîne a été spécifiée, mais aucune valeur fournie
		//
		// Prend le chemin "read" et permet à la méthode get de déterminer
		// quelle valeur renvoyer, respectivement soit:
		//
		// 1. L'objet de cache entier
		// 2. Les données stockées à la clé
		//
		if (clé === non défini ||
				((clé && typeof clé === "chaîne") && valeur === non définie)) {

			return this.get (propriétaire, clé);
		}

		// Lorsque la clé n'est pas une chaîne, ou à la fois une clé et une valeur
		// sont spécifiés, définis ou étendus (objets existants) avec:
		//
		// 1. Un objet de propriétés
		// 2. Une clé et une valeur
		//
		this.set (propriétaire, clé, valeur);

		// Le chemin "set" pouvant avoir deux points d'entrée possibles
		// retourne les données attendues en fonction du chemin emprunté [*]
		valeur de retour! == non défini? valeur: clé;
	},
	remove: fonction (propriétaire, clé) {
		var i,
			cache = propriétaire [this.expando];

		if (cache === non défini) {
			revenir;
		}

		if (key! == undefined) {

			// Supporte une chaîne de clés séparée par des espaces
			if (Array.isArray (key)) {

				// Si key est un tableau de clés ...
				// Nous définissons toujours les clés camelCase, alors supprimez-le.
				key = key.map (camelCase);
			} autre {
				clé = camelCase (clé);

				// Si une clé avec les espaces existe, utilisez-la.
				// Sinon, créer un tableau en faisant correspondre des espaces non blancs
				clé = clé en cache?
					[clé]:
					(key.match (rnothtmlwhite) || []);
			}

			i = clé.longueur;

			alors que je-- ) {
				supprimer le cache [clé [i]];
			}
		}

		// Supprime le expando s'il n'y a plus de données
		if (key === undefined || jQuery.isEmptyObject (cache)) {

			// Assistance: Chrome <= 35 - 45
			// Les performances de Webkit & Blink en pâtissent lors de la suppression de propriétés
			// depuis les noeuds DOM, définissez donc non défini à la place
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restreint)
			if (owner.nodeType) {
				propriétaire [this.expando] = undefined;
			} autre {
				supprimer le propriétaire [this.expando];
			}
		}
	},
	hasData: fonction (propriétaire) {
		var cache = propriétaire [this.expando];
		retour cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Résumé d'implémentation
//
// 1. Appliquer la compatibilité de surface et sémantique d'API avec la branche 1.9.x
// 2. Améliorer la maintenabilité du module en réduisant le stockage
// chemins vers un seul mécanisme.
// 3. Utilisez le même mécanisme unique pour prendre en charge les données "privées" et "utilisateur".
// 4. _Never_ exposer des données "privées" au code utilisateur (TODO: Drop _data, _removeData)
// 5. Évitez d'exposer les détails d'implémentation sur les objets utilisateur (par exemple, les propriétés expando)
// 6. Fournissez un chemin clair pour la mise à niveau de l'implémentation vers WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

fonction getData (data) {
	if (data === "true") {
		retourne vrai;
	}

	if (data === "false") {
		retourne faux;
	}

	if (data === "null") {
		return null;
	}

	// Convertit uniquement en nombre s'il ne change pas la chaîne
	if (data === + data + "") {
		return + data;
	}

	if (rbrace.test (data)) {
		retourne JSON.parse (data);
	}

	renvoyer des données;
}

fonction dataAttr (elem, key, data) {
	nom var;

	// Si rien n'a été trouvé en interne, essayez d'en récupérer
	// données de l'attribut HTML5 data- *
	if (data === non défini && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (name);

		if (typeof data === "chaîne") {
			essayer {
				data = getData (data);
			} catch (e) {}

			// Assurez-vous que nous avons défini les données afin qu'elles ne soient pas modifiées ultérieurement
			dataUser.set (elem, key, data);
		} autre {
			data = non défini;
		}
	}
	renvoyer des données;
}

jQuery.extend ({
	hasData: function (elem) {
		Renvoie dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	data: fonction (elem, name, data) {
		renvoyer dataUser.access (elem, name, data);
	},

	removeData: fonction (elem, name) {
		dataUser.remove (elem, name);
	},

	// TODO: Maintenant que tous les appels à _data et _removeData ont été remplacés
	// avec des appels directs aux méthodes dataPriv, celles-ci peuvent être obsolètes.
	_data: fonction (elem, name, data) {
		renvoyer dataPriv.access (elem, name, data);
	},

	_removeData: fonction (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	data: fonction (clé, valeur) {
		var i, nom, données,
			elem = this [0],
			attrs = elem && elem.attributes;

		// Obtient toutes les valeurs
		if (clé === non défini) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					alors que je-- ) {

						// Support: IE 11 uniquement
						// Les éléments attrs peuvent être nuls (# 14894)
						si (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, name, data [nom]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			renvoyer des données;
		}

		// Définit plusieurs valeurs
		if (typeof key === "object") {
			retourne this.each (function () {
				dataUser.set (this, clé);
			});
		}

		retourne l'accès (this, function (value) {
			données var;

			// L'objet jQuery appelant (éléments correspondants) n'est pas vide
			// (et a donc un élément apparaît à ce [0]) et le
			// Le paramètre `value` n'était pas indéfini. Un objet jQuery vide
			// aboutira à undefined pour elem = this [0] qui
			// lance une exception si une tentative de lecture d'un cache de données est effectuée.
			if (elem && valeur === non défini) {

				// Tentative d'obtenir des données du cache
				// La clé sera toujours camelCased in Data
				data = dataUser.get (elem, key);
				if (data! == non défini) {
					renvoyer des données;
				}

				// Tentative de "découverte" des données dans
				// données personnalisées HTML5 - * attrs
				data = dataAttr (elem, key);
				if (data! == non défini) {
					renvoyer des données;
				}

				// Nous avons vraiment essayé, mais les données n'existent pas.
				revenir;
			}

			// Définir les données ...
			this.each (function () {

				// nous stockons toujours la clé camelCased
				dataUser.set (this, clé, valeur);
			});
		}, null, valeur, arguments.length> 1, null, true);
	},

	removeData: fonction (clé) {
		retourne this.each (function () {
			dataUser.remove (this, clé);
		});
	}
});


jQuery.extend ({
	queue: fonction (elem, type, data) {
		file d'attente var;

		si (elem) {
			type = (type || "fx") + "file d'attente";
			queue = dataPriv.get (elem, type);

			// Accélère le retrait de la file d'attente en sortant rapidement s'il ne s'agit que d'une recherche
			si (données) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} autre {
					queue.push (données);
				}
			}
			file d'attente de retour || [];
		}
	},

	dequeue: function (elem, type) {
		type = type || "fx";

		file d'attente var = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			next = function () {
				jQuery.dequeue (elem, type);
			};

		// Si la file d'attente fx est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Ajouter une sentinelle de progression pour empêcher la file d'attente de fx d'être
			// automatiquement retiré de la file d'attente
			if (type === "fx") {
				queue.unshift ("inprogress");
			}

			// Efface la dernière fonction d'arrêt de la file d'attente
			supprimer les hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// non public - génère un objet queueHooks ou renvoie l'objet actuel
	_queueHooks: function (elem, type) {
		clé var = type + "queueHooks";
		retourne dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			vide: jQuery.Callbacks ("une fois en mémoire") .add (function () {
				dataPriv.remove (elem, [type + "file d'attente", clé]);
			})
		});
	}
});

jQuery.fn.extend ({
	file d'attente: fonction (type, données) {
		var setter = 2;

		if (typeof type! == "chaîne") {
			data = type;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (this [0], type);
		}

		renvoyer des données === non défini?
			ce :
			this.each (function () {
				file d'attente var = jQuery.queue (this, type, data);

				// Assure un hook pour cette file
				jQuery._queueHooks (this, type);

				if (tapez === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	},
	dequeue: function (type) {
		retourne this.each (function () {
			jQuery.dequeue (this, type);
		});
	},
	clearQueue: fonction (type) {
		return this.queue (type || "fx", []);
	},

	// Obtenir une promesse résolue quand les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse: fonction (type, obj) {
		var tmp,
			compte = 1,
			defer = jQuery.Deferred (),
			éléments = ceci,
			i = this.length,
			résoudre = fonction () {
				si (! (--count)) {
					defer.resolveWith (elements, [elements]);
				}
			};

		if (typeof type! == "chaîne") {
			obj = type;
			type = non défini;
		}
		type = type || "fx";

		alors que je-- ) {
			tmp = dataPriv.get (éléments [i], tapez + "queueHooks");
			if (tmp && tmp.empty) {
				compter ++;
				tmp.empty.add (résoudre);
			}
		}
		résoudre();
		retour différer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Haut", "Droite", "Bas", "Gauche"];

var isHiddenWithinTree = fonction (elem, el) {

		// isHiddenWithinTree peut être appelé à partir de jQuery # filter function;
		// dans ce cas, l'élément sera le deuxième argument
		elem = el || elem;

		// Le style en ligne l'emporte sur tous
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Sinon, vérifie le style calculé
			// Assistance: Firefox <= 43 - 45
			// Les éléments déconnectés peuvent avoir un affichage calculé: aucun, donc vérifiez d'abord que elem est
			// dans le document.
			jQuery.contains (elem.ownerDocument, elem) &&

			jQuery.css (elem, "display") === "aucun";
	};

var swap = function (elem, options, rappel, arguments) {
	var ret, nom,
		ancien = {};

	// Mémorise les anciennes valeurs et insère les nouvelles
	pour (nom dans les options) {
		ancien [nom] = elem.style [nom];
		elem.style [name] = options [name];
	}

	ret = callback.apply (elem, args || []);

	// Rétablir les anciennes valeurs
	pour (nom dans les options) {
		elem.style [name] = old [name];
	}

	retour ret;
};




fonction adjustCSS (elem, prop, valueParts, tween) {
	var ajusté, échelle,
		maxIterations = 20,
		currentValue = tween?
			une fonction() {
				renvoyer tween.cur ();
			}:
			une fonction() {
				retourne jQuery.css (elem, prop, "");
			},
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Le calcul de la valeur de départ est requis pour les inadéquations d'unités potentielles
		initialInUnit = (jQuery.cssNumber [prop] || unit! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unité) {

		// Support: Firefox <= 54
		// Réduit de moitié la valeur cible d'itération pour éviter les interférences provenant des limites supérieures de CSS (gh-2144)
		initiale = initiale / 2;

		// Unités de confiance déclarées par jQuery.css
		unité = unité || initialInUnit [3];

		// Itérativement approximatif à partir d'un point de départ différent de zéro
		initialInUnit = + initial || 1;

		tandis que (maxIterations--) {

			// Évalue et met à jour notre meilleure estimation (doubler suppose que zéro).
			// Terminer si l'échelle est égale ou croisée à 1 (rendant l'ancien * nouveau produit non positif).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Assurez-vous de mettre à jour les propriétés d'interpolation ultérieurement
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + initiale || 0;

		// Appliquer un décalage relatif (+ = / - =) si spécifié
		ajusté = valeurPièces [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		si (interpolé) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = ajusté;
		}
	}
	retour ajusté;
}


var defaultDisplayMap = {};

fonction getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [NomNoeud];

	si (afficher) {
		retourner l'affichage;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		display = "block";
	}
	defaultDisplayMap [NomNoeud] = display;

	retourner l'affichage;
}

fonction showHide (elements, show) {
	affichage var, elem,
		valeurs = [],
		indice = 0,
		longueur = éléments.longueur;

	// Déterminer une nouvelle valeur d'affichage pour les éléments devant être modifiés
	pour (; index <longueur; index ++) {
		elem = elements [index];
		si (! elem.style) {
			continuer;
		}

		display = elem.style.display;
		si (afficher) {

			// Puisque nous forçons la visibilité sur les éléments cachés en cascade, un effet immédiat (et lent)
			// check est requis dans cette première boucle sauf si nous avons une valeur d'affichage non vide (soit
			// inline ou sur le point d'être restauré)
			if (display === "none") {
				valeurs [index] = dataPriv.get (elem, "display") || nul;
				if (! values ​​[index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valeurs [index] = getDefaultDisplay (elem);
			}
		} autre {
			if (display! == "none") {
				valeurs [index] = "none";

				// Souviens-toi de ce que nous sommes en train d'écraser
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Définit l'affichage des éléments dans une seconde boucle pour éviter une refusion constante
	pour (index = 0; index <longueur; index ++) {
		if (valeurs [index]! = null) {
			éléments [index] .style.display = values ​​[index];
		}
	}

	éléments de retour;
}

jQuery.fn.extend ({
	show: function () {
		retourne showHide (this, true);
	},
	masquer: function () {
		retournez showHide (this);
	},
	bascule: fonction (état) {
		if (typeof state === "boolean") {
			état de retour? this.show (): this.hide ();
		}

		retourne this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} autre {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: case à cocher | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i);

var rscriptType = (/ ^ $ | ^ module $ | \ / (?: java | ecma) script / i);



// Nous devons fermer ces balises pour prendre en charge XHTML (# 13200)
var wrapMap = {

	// Support: IE <= 9 seulement
	option: [1, "<select multiple = 'multiple'>", "</ select>"],

	// Les analyseurs XHTML n'insèrent pas comme par magie des éléments dans le
	// de la même manière que les analyseurs de soupe de balises. Donc on ne peut pas raccourcir
	// ceci en omettant <tbody> ou d'autres éléments requis.
	thead: [1, "<table>", "</ table>"],
	col: [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
	td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default: [0, "", ""]
};

// Support: IE <= 9 seulement
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


fonction getAll (contexte, balise) {

	// Support: IE <= 9 - 11 seulement
	// utilise typeof pour éviter l'appel de la méthode zéro argument sur les objets hôte (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "indéfini") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (typeof context.querySelectorAll! == "indéfini") {
		ret = context.querySelectorAll (tag || "*");

	} autre {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (contexte, tag)) {
		retourne jQuery.merge ([context], ret);
	}

	retour ret;
}


// Marquer les scripts comme ayant déjà été évalués
fonction setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	pour (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		)
	}
}


var rhtml = / <| & #? \ w +; /;

fonction buildFragment (elems, contexte, scripts, sélection, ignoré) {
	var elem, tmp, balise, wrap, contient, j,
		fragment = context.createDocumentFragment (),
		nœuds = [],
		i = 0,
		l = elems.length;

	pour (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Ajout direct de noeuds
			if (toType (elem) === "objet") {

				// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply (_, arraylike) jette sur un ancien WebKit
				jQuery.merge (noeuds, elem.nodeType? [elem]: elem);

			// Convertir un fichier non-HTML en nœud de texte
			} sinon si (! rhtml.test (elem)) {
				nœuds.push (context.createTextNode (elem));

			// Convertir le HTML en nœuds DOM
			} autre {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// désérialiser une représentation standard
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Descend à travers les wrappers jusqu'au bon contenu
				j = enveloppe [0];
				tandis que (j--) {
					tmp = tmp.lastChild;
				}

				// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply (_, arraylike) jette sur un ancien WebKit
				jQuery.merge (noeuds, tmp.childNodes);

				// Mémoriser le conteneur de niveau supérieur
				tmp = fragment.firstChild;

				// Assurez-vous que les noeuds créés sont orphelins (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Retirer le wrapper du fragment
	fragment.textContent = "";

	i = 0;
	while ((elem = nœuds [i ++])) {

		// Ignore les éléments déjà présents dans la collection de contextes (trac-4087)
		if (selection && jQuery.inArray (elem, selection)> -1) {
			si (ignoré) {
				ignored.push (elem);
			}
			continuer;
		}

		contient = jQuery.contains (elem.ownerDocument, elem);

		// Ajouter au fragment
		tmp = getAll (fragment.appendChild (elem), "script");

		// Préserver l'historique d'évaluation du script
		si (contient) {
			setGlobalEval (tmp);
		}

		// Capture les exécutables
		si (scripts) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	retourner le fragment;
}


( une fonction() {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Support: Android 4.0 - 4.3 uniquement
	// Vérifier l'état perdu si le nom est défini (# 11217)
	// Assistance: applications Web Windows (WWA)
	// `name` et` type` doivent utiliser .setAttribute pour WWA (# 14901)
	input.setAttribute ("type", "radio");
	input.setAttribute ("vérifié", "vérifié");
	input.setAttribute ("nom", "t");

	div.appendChild (entrée);

	// Support: Android <= 4.1 uniquement
	// L'ancien WebKit ne clone pas l'état coché correctement dans les fragments
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Support: IE <= 11 seulement
	// Assurez-vous que textarea (et la case à cocher) defaultValue est correctement cloné
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ clé /,
	rmouseEvent = / ^ (?: souris | pointeur | menu contextuel | glisser | déposer) | cliquez /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

fonction returnTrue () {
	retourne vrai;
}

fonction returnFalse () {
	retourne faux;
}

// Support: IE <= 9 seulement
// Voir # 13393 pour plus d'informations
fonction safeActiveElement () {
	essayer {
		renvoyer document.activeElement;
	} catch (err) {}
}

fonction activée (elem, types, sélecteur, données, fn, un) {
	var origFn, type;

	// Les types peuvent être une carte de types / gestionnaires
	if (typeof types === "objet") {

		// (types-Object, sélecteur, données)
		if (typeof selector! == "string") {

			// (types-Object, data)
			data = data || sélecteur;
			sélecteur = non défini;
		}
		pour (tapez les types) {
			on (elem, type, sélecteur, données, types [type], un);
		}
		renvoyer elem;
	}

	if (data == null && fn == null) {

		// (types, fn)
		fn = sélecteur;
		data = sélecteur = non défini;
	} sinon si (fn == null) {
		if (typeof selector === "string") {

			// (types, sélecteur, fn)
			fn = données;
			data = non défini;
		} autre {

			// (types, data, fn)
			fn = données;
			données = sélecteur;
			sélecteur = non défini;
		}
	}
	si (fn === faux) {
		fn = returnFalse;
	} sinon si (! fn) {
		renvoyer elem;
	}

	si (un === 1) {
		origFn = fn;
		fn = fonction (événement) {

			// Peut utiliser un ensemble vide, puisque l'événement contient l'information
			jQuery (). off (événement);
			retourne origFn.apply (this, arguments);
		};

		// Utilisez le même guide pour que l'appelant puisse supprimer à l'aide d'origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	retourne elem.each (function () {
		jQuery.event.add (this, types, fn, data, selector);
	});
}

/ *
 * Fonctions d'assistance pour la gestion des événements - ne fait pas partie de l'interface publique.
 * Accessoires de la bibliothèque addEvent de Dean Edwards pour la plupart des idées.
 * /
jQuery.event = {

	global: {},

	add: fonction (elem, types, gestionnaire, données, sélecteur) {

		var handleObjIn, eventHandle, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.get (elem);

		// Ne pas attacher d'événements aux noeuds noData ou text / comment (mais autoriser les objets simples)
		si (! elemData) {
			revenir;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire.
		if (handler.handler) {
			handleObjIn = handler;
			gestionnaire = handleObjIn.handler;
			sélecteur = handleObjIn.selector;
		}

		// Assurez-vous que les sélecteurs non valides lèvent des exceptions lors de l'attachement
		// Evalue contre documentElement dans le cas ou elem est un noeud non-élément (par exemple, document)
		si (sélecteur) {
			jQuery.find.matchesSelector (documentElement, sélecteur);
		}

		// Assurez-vous que le gestionnaire a un identifiant unique, utilisé pour le rechercher / le supprimer ultérieurement
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Initie la structure d'événement et le gestionnaire principal de l'élément, s'il s'agit de la première
		if (! (events = elemData.events)) {
			événements = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Ignore le deuxième événement d'un jQuery.event.trigger () et
				// lorsqu'un événement est appelé après le déchargement d'une page
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments): undefined;
			};
		}

		// Gère plusieurs événements séparés par un espace
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Il doit y avoir un type, pas de gestionnaire de liens associé à un espace de noms uniquement
			si (! type) {
				continuer;
			}

			// Si event change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié.
			special = jQuery.event.special [type] || {};

			// Si le sélecteur est défini, détermine le type d'api d'événement spécial, sinon le type donné
			type = (sélecteur? special.delegateType: special.bindType) || type;

			// Mise à jour spéciale basée sur le type nouvellement réinitialisé
			special = jQuery.event.special [type] || {};

			// handleObj est transmis à tous les gestionnaires d'événements
			handleObj = jQuery.extend ({
				type: type,
				origType: origType,
				data: data,
				gestionnaire: gestionnaire,
				guid: handler.guid,
				sélecteur: sélecteur,
				needsContext: selector && jQuery.expr.match.needsContext.test (sélecteur),
				namespace: namespaces.join (".")
			}, handleObjIn);

			// Initie la file d'attente du gestionnaire d'événements si nous sommes le premier
			if (! (gestionnaires = événements [type])) {
				gestionnaires = événements [type] = [];
				handlers.delegateCount = 0;

				// N'utilisez addEventListener que si le gestionnaire d'événements spéciaux renvoie false
				si (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			si (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Ajouter à la liste des gestionnaires de l'élément, les délégués devant
			si (sélecteur) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} autre {
				handlers.push (handleObj);
			}

			// Garder une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global [type] = true;
		}

	},

	// Détache un événement ou un ensemble d'événements d'un élément
	remove: fonction (elem, types, gestionnaire, sélecteur, mappedTypes) {

		var j, origCount, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			revenir;
		}

		// Une fois pour chaque type.namespace dans les types; le type peut être omis
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Unbind tous les événements (sur cet espace de noms, si fourni) pour l'élément
			si (! type) {
				pour (tapez des événements) {
					jQuery.event.remove (elem, type + types [t], gestionnaire, sélecteur, true);
				}
				continuer;
			}

			special = jQuery.event.special [type] || {};
			type = (sélecteur? special.delegateType: special.bindType) || type;
			handlers = events [type] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Supprimer les événements correspondants
			origCount = j = handlers.length;
			tandis que (j--) {
				handleObj = gestionnaires [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						sélecteur === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Supprime le gestionnaire d'événements générique si nous supprimons quelque chose et qu'il n'y a plus de gestionnaires
			// (évite les risques de récursion sans fin lors de la suppression des gestionnaires d'événements spéciaux)
			if (origCount &&! handlers.length) {
				si (! special.teardown ||
					special.teardown.call (elem, espaces de noms, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				supprimer des événements [type];
			}
		}

		// Supprimer les données et le expando s'il n'est plus utilisé
		if (jQuery.isEmptyObject (events)) {
			dataPriv.remove (elem, "gérer les événements");
		}
	},

	dispatch: function (nativeEvent) {

		// Crée un jQuery.Event en écriture à partir de l'objet événement natif
		var event = jQuery.event.fix (nativeEvent);

		var i, j, ret, apparié, handleObj, handlerQueue,
			args = new Array (arguments.length),
			handlers = (dataPriv.get (this, "events") || {}) [event.type] || []
			special = jQuery.event.special [event.type] || {};

		// Utiliser le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args [0] = événement;

		pour (i = 1; i <arguments.length; i ++) {
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		// Appelez le hook preDispatch pour le type mappé et laissez-le vider si vous le souhaitez
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			revenir;
		}

		// Déterminer les gestionnaires
		handlerQueue = jQuery.event.handlers.call (this, événement, gestionnaires);

		// Exécuter les délégués en premier; ils peuvent vouloir arrêter la propagation sous nous
		i = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// L'événement déclenché doit soit 1) ne pas avoir d'espace de nom, ou 2) avoir un ou des espaces de nom
				// un sous-ensemble ou égal à ceux de l'événement lié (les deux ne peuvent avoir aucun espace de nom).
				if (! event.rnamespace || event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == non défini) {
						if ((event.result = ret)) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Appelez le hook postDispatch pour le type mappé
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	},

	gestionnaires: fonction (événement, gestionnaires) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Trouver des gestionnaires de délégué
		if (delegateCount &&

			// Support: IE <= 9
			// arbres d'instance SVG <use> en trou noir (trac-13180)
			cur.nodeType &&

			// Support: Firefox <= 42
			// Suppression des clics violant les spécifications indiquant un bouton de pointeur non principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 uniquement
			// ... mais pas les flèches "touches" des entrées radio pouvant contenir `button` -1 (gh-2343)
			! (event.type === "cliquez sur" && event.button> = 1)) {

			pour (; cur! == this; cur = cur.parentNode || this) {

				// Ne coche pas les non-éléments (# 13208)
				// Ne traite pas les clics sur les éléments désactivés (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "cliquez" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					pour (i = 0; i <delegateCount; i ++) {
						handleObj = gestionnaires [i];

						// Ne pas en conflit avec les propriétés Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === non défini) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, handlers: matchedHandlers});
					}
				}
			}
		}

		// Ajoute les gestionnaires restants (directement liés)
		cur = this;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, handlers: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp: fonction (nom, crochet) {
		Object.defineProperty (jQuery.Event.prototype, nom, {
			énumérable: true,
			configurable: true,

			get: isFunction (crochet)?
				une fonction() {
					if (this.originalEvent) {
							crochet de retour (this.originalEvent);
					}
				}:
				une fonction() {
					if (this.originalEvent) {
							renvoyer this.originalEvent [nom];
					}
				},

			set: fonction (valeur) {
				Object.defineProperty (this, name, {
					énumérable: true,
					configurable: true,
					accessible en écriture: vrai,
					valeur: valeur
				});
			}
		});
	},

	correctif: fonction (originalEvent) {
		renvoyer originalEvent [jQuery.expando]?
			originalEvent:
			new jQuery.Event (originalEvent);
	},

	spécial: {
		charge: {

			// Empêche les événements déclenchés image.load de se propager à window.load
			noBubble: true
		},
		concentrer: {

			// Si un événement natif est déclenché, la séquence de flou / focus est correcte
			déclencheur: function () {
				if (this! == safeActiveElement () && this.focus) {
					this.focus ();
					retourne faux;
				}
			},
			delegateType: "focusin"
		},
		flou: {
			déclencheur: function () {
				if (this === safeActiveElement () && this.blur) {
					this.blur ();
					retourne faux;
				}
			},
			delegateType: "focusout"
		},
		Cliquez sur: {

			// Pour la case à cocher, déclencher l'événement natif afin que l'état coché soit correct
			déclencheur: function () {
				if (this.type === "case à cocher" && this.click && nodeName (this, "input")) {
					this.click ();
					retourne faux;
				}
			},

			// Pour la cohérence entre les navigateurs, ne lancez pas de .click () natif sur les liens
			_default: function (event) {
				return nodeName (event.target, "a");
			}
		},

		avant le chargement: {
			postDispatch: fonction (événement) {

				// Support: Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = fonction (elem, type, handle) {

	// Ce "si" est nécessaire pour les objets simples
	if (elem.removeEventListener) {
		elem.removeEventListener (type, handle);
	}
};

jQuery.Event = function (src, props) {

	// Autoriser l'instanciation sans le mot clé 'new'
	if (! (cette instance de jQuery.Event)) {
		renvoyer new jQuery.Event (src, props);
	}

	// objet événement
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Les événements qui remontent dans le document peuvent avoir été marqués comme empêchés
		// par un gestionnaire plus bas dans l'arbre; refléter la valeur correcte.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === non défini &&

				// Support: Android <= 2.3 uniquement
				src.returnValue === false?
			returnTrue:
			returnFalse;

		// Créer les propriétés de la cible
		// Support: Safari <= 6 - 7 uniquement
		// La cible ne doit pas être un noeud de texte (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Type d'événement
	} autre {
		this.type = src;
	}

	// Place les propriétés fournies explicitement sur l'objet événement
	si (accessoires) {
		jQuery.extend (this, props);
	}

	// Crée un horodatage si l'événement entrant n'en a pas
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marque comme fixe
	this [jQuery.expando] = true;
};

// jQuery.Event est basé sur les événements DOM3 spécifiés par la liaison de langage ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructeur: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Inclut tous les accessoires d'événements courants, y compris les accessoires spécifiques à KeyEvent et MouseEvent
jQuery.each ({
	altKey: true,
	bulles: vrai,
	cancelable: true,
	changéTouches: vrai,
	ctrlKey: true,
	détail: vrai,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	vue: vrai,
	"char": vrai,
	charCode: true,
	clé: vrai,
	keyCode: true,
	bouton: vrai,
	boutons: vrai,
	clientX: true,
	clientY: vrai,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	type de pointeur: true,
	screenX: true,
	screenY: vrai,
	targetTouches: true,
	toElement: true,
	touche: vrai,

	qui: fonction (événement) {
		var button = event.button;

		// Ajoute lequel pour les événements clés
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode: event.keyCode;
		}

		// Ajoute lequel pour un clic: 1 === left; 2 === milieu; 3 === droit
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			si (bouton et 1) {
				retourne 1;
			}

			si (bouton et 2) {
				retourne 3;
			}

			si (bouton et 4) {
				retourne 2;
			}

			retourne 0;
		}

		événement de retour.
	}
}, jQuery.event.addProp);

// Créer des événements mouseenter / leave à l'aide des contrôles mouseover / out et event-time
// donc cette délégation d'événements fonctionne dans jQuery.
// Faites la même chose pour pointerenter / pointerleave et pointerover / pointerout
//
// Support: Safari 7 uniquement
// Safari envoie mouseenter trop souvent; voir:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// pour la description du bogue (il existait aussi dans les anciennes versions de Chrome).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointeur: "pointeur",
	pointeurleave: "pointeurout"
}, fonction (orig, correctif) {
	jQuery.event.special [orig] = {
		delegateType: correction,
		bindType: correction,

		handle: fonction (événement) {
			var ret,
				cible = ceci,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Pour mouseenter / leave, appelez le gestionnaire s'il est lié à l'extérieur de la cible.
			// NB: No relatedTarget si la souris est à gauche / est entrée dans la fenêtre du navigateur
			if (! related || (related! == target &&! jQuery.contains (target, related)))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (this, arguments);
				event.type = fix;
			}
			retour ret;
		}
	};
});

jQuery.fn.extend ({

	on: fonction (types, sélecteur, données, fn) {
		retourne sur (this, types, selector, data, fn);
	},
	un: fonction (types, sélecteur, données, fn) {
		retourne sur (this, types, selector, data, fn, 1);
	},
	off: fonction (types, sélecteur, fn) {
		var handleObj, tapez;
		if (types && types.preventDefault && types.handleObj) {

			// (événement) envoyé jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			)
			retournez ceci;
		}
		if (typeof types === "objet") {

			// (types-objet [, sélecteur])
			pour (tapez les types) {
				this.off (type, sélecteur, types [type]);
			}
			retournez ceci;
		}
		if (sélecteur === faux || typeof sélecteur === "fonction") {

			// (types [, fn])
			fn = sélecteur;
			sélecteur = non défini;
		}
		si (fn === faux) {
			fn = returnFalse;
		}
		retourne this.each (function () {
			jQuery.event.remove (this, types, fn, selector);
		});
	}
});


var

	/ * eslint-disable max-len * /

	// Voir https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <(?! zone | br | col | incorporer | hr | img | entrée | lien | méta | paramètre) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi,

	/ * eslint-enable * /

	// Support: IE <= 10 - 11, Edge 12 - 13 uniquement
	// Dans IE / Edge, les groupes de regex provoquent de graves ralentissements.
	// Voir https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <style | <lien / i,

	// vérifié = "vérifié" ou vérifié
	rchecked = /checked\s*(?:[&==||=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Préférer un tbody à sa table parent pour contenir de nouvelles lignes
fonction manipulationTarget (elem, content) {
	if (nodeName (elem, "table") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem;
	}

	renvoyer elem;
}

// Remplacer / restaurer l'attribut type des éléments de script pour une manipulation sécurisée du DOM
fonction disableScript (elem) {
	elem.type = (elem.getAttribute ("type")! == null) + "/" + elem.type;
	renvoyer elem;
}
function restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} autre {
		elem.removeAttribute ("type");
	}

	renvoyer elem;
}

fonction cloneCopyEvent (src, dest) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, événements;

	if (dest.nodeType! == 1) {
		revenir;
	}

	// 1. Copier des données privées: événements, gestionnaires, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.access (src);
		pdataCur = dataPriv.set (dest, pdataOld);
		événements = pdataOld.events;

		si (événements) {
			supprimer pdataCur.handle;
			pdataCur.events = {};

			pour (tapez des événements) {
				pour (i = 0, l = événements [type] .length; i <l; i ++) {
					jQuery.event.add (destination, type, événements [type] [i]);
				}
			}
		}
	}

	// 2. Copier les données utilisateur
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corrige les bugs IE, voir les tests de support
fonction fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// Ne réussit pas à conserver l'état coché d'une case à cocher ou d'un bouton radio cloné.
	if (nodeName === "input" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// Ne réussit pas à ramener l'option sélectionnée à l'état sélectionné par défaut lors du clonage des options
	} else if (nodeName === "input" ||| nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

fonction domManip (collection, args, callback, ignorée) {

	// Aplatit les tableaux imbriqués
	args = concat.apply ([], args);

	fragment var, d'abord, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		valeur = args [0],
		valueIsFunction = isFunction (valeur);

	// Nous ne pouvons pas cloner de fragments contenant des éléments cochés dans WebKit
	if (valueIsFunction ||
			(l> 1 && typeof value === "chaîne" &&
				! support.checkClone && rchecked.test (valeur)))) {
		retourne collection.each (fonction (index) {
			var self = collection.eq (index);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (self, args, callback, ignoré);
		});
	}

	si (l) {
		fragment = buildFragment (args, collection [0] .ownerDocument, false, collection, ignoré);
		first = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			fragment = premier;
		}

		// Requiert soit un nouveau contenu, soit un intérêt pour les éléments ignorés pour invoquer le rappel
		if (premier || ignoré) {
			scripts = jQuery.map (getAll (fragment, "script"), disableScript);
			hasScripts = scripts.length;

			// Utiliser le fragment d'origine pour le dernier élément
			// au lieu du premier car cela peut finir
			// être vidé de manière incorrecte dans certaines situations (# 8070).
			pour (; i <l; i ++) {
				noeud = fragment;

				if (i! == iNoClone) {
					noeud = jQuery.clone (noeud, vrai, vrai);

					// Conserver les références aux scripts clonés pour une restauration ultérieure
					si (hasScripts) {

						// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
						// push.apply (_, arraylike) jette sur un ancien WebKit
						jQuery.merge (scripts, getAll (noeud, "script"));
					}
				}

				callback.call (collection [i], noeud, i);
			}

			si (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Réactiver les scripts
				jQuery.map (scripts, restoreScript);

				// Évaluer les scripts exécutables lors de la première insertion de document
				pour (i = 0; i <hasScripts; i ++) {
					noeud = scripts [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (noeud, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "module") {

							// Dépendance AJAX facultative, mais n'exécutera pas de scripts si elle n'est pas présente
							if (jQuery._evalUrl) {
								jQuery._evalUrl (node.src);
							}
						} autre {
							DOMEval (node.textContent.replace (rcleanScript, ""), doc, node);
						}
					}
				}
			}
		}
	}

	ramasser la collection;
}

fonction remove (elem, selector, keepData) {
	noeud var,
		noeuds = sélecteur? jQuery.filter (sélecteur, elem): elem,
		i = 0;

	pour (; (noeud = noeuds [i])! = null; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (noeud));
		}

		if (node.parentNode) {
			if (keepData && jQuery.contains (node.ownerDocument, node)) {
				setGlobalEval (getAll (node, "script"));
			}
			node.parentNode.removeChild (nœud);
		}
	}

	renvoyer elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		return html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	},

	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = jQuery.contains (elem.ownerDocument, elem);

		// Résoudre les problèmes de clonage IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Nous évitons Sizzle ici pour des raisons de performances: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clone);
			srcElements = getAll (elem);

			pour (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copier les événements de l'original sur le clone
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clone);

				pour (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} autre {
				cloneCopyEvent (elem, clone);
			}
		}

		// Préserver l'historique d'évaluation du script
		destElements = getAll (clone, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// Retourne le jeu cloné
		retourner le clone;
	},

	cleanData: fonction (elems) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		pour (; (elem = elems [i])! == indéfini; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando]))) {
					if (data.events) {
						pour (tapez data.events) {
							if (spécial [type]) {
								jQuery.event.remove (elem, type);

							// Ceci est un raccourci pour éviter les frais généraux de jQuery.event.remove
							} autre {
								jQuery.removeEvent (elem, type, data.handle);
							}
						}
					}

					// Assistance: Chrome <= 35 - 45+
					// Affecter undefined au lieu d'utiliser delete, voir Data # remove
					elem [dataPriv.expando] = undefined;
				}
				if (elem [dataUser.expando]) {

					// Assistance: Chrome <= 35 - 45+
					// Affecter undefined au lieu d'utiliser delete, voir Data # remove
					elem [dataUser.expando] = undefined;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	détacher: fonction (sélecteur) {
		return remove (this, sélecteur, vrai);
	},

	remove: fonction (sélecteur) {
		return remove (this, sélecteur);
	},

	texte: fonction (valeur) {
		retourne l'accès (this, function (value) {
			valeur de retour === non définie?
				jQuery.text (this):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = valeur;
					}
				});
		}, null, valeur, arguments.length);
	},

	append: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.appendChild (elem);
			}
		});
	},

	prepend: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	avant: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	},

	après: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	vide: function () {
		var elem
			i = 0;

		pour (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// Prévenir les fuites de mémoire
				jQuery.cleanData (getAll (elem, false));

				// Supprimer tous les nœuds restants
				elem.textContent = "";
			}
		}

		retournez ceci;
	},

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? false: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		retourne this.map (function () {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	},

	html: fonction (valeur) {
		retourne l'accès (this, function (value) {
			var elem = this [0] || {},
				i = 0,
				l = this.length;

			if (valeur === non définie && elem.nodeType === 1) {
				retourner elem.innerHTML;
			}

			// Voir si nous pouvons prendre un raccourci et simplement utiliser innerHTML
			if (typeof value === "chaîne" &&! rnoInnerhtml.test (valeur) &&
				! wrapMap [(rtagName.exec (valeur) || ["", ""]) [1] .toLowerCase ()]) {

				valeur = jQuery.htmlPrefilter (valeur);

				essayer {
					pour (; i <l; i ++) {
						elem = this [i] || {};

						// Supprime les nœuds d'élément et évite les fuites de mémoire
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valeur;
						}
					}

					elem = 0;

				// Si l'utilisation de innerHTML lève une exception, utilisez la méthode de repli
				} catch (e) {}
			}

			si (elem) {
				this.empty (). append (valeur);
			}
		}, null, valeur, arguments.length);
	},

	replaceWith: function () {
		var ignored = [];

		// Apporte les modifications en remplaçant chaque élément de contexte non ignoré par le nouveau contenu
		retourne domManip (this, arguments, function (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (this, ignoré) <0) {
				jQuery.cleanData (getAll (this));
				si (parent) {
					parent.replaceChild (elem, this);
				}
			}

		// Forcer l'appel de rappel
		}, ignoré);
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend",
	insertAvant: "avant",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, fonction (nom, original) {
	jQuery.fn [nom] = fonction (sélecteur) {
		var elems,
			ret = [],
			insert = jQuery (sélecteur),
			last = insert.length - 1,
			i = 0;

		pour (; i <= last; i ++) {
			elems = i === dernier? this: this.clone (vrai);
			jQuery (insérez [i]) [original] (elems);

			// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
			// .get () parce que push.apply (_, arraylike) jette sur l'ancien WebKit
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Support: IE <= 11 seulement, Firefox <= 30 (# 15098, # 14150)
		// IE jette des éléments créés dans des popups
		// Pendant ce temps, FF jette sur les éléments du cadre via "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		si (! view ||! view.opener) {
			vue = fenêtre;
		}

		retournez view.getComputedStyle (elem);
	};

var rboxStyle = new RegExp (cssExpand.join ("|"), "i");



( une fonction() {

	// L'exécution des tests pixelPosition et boxSizingReliable nécessite une seule présentation.
	// donc ils sont exécutés en même temps pour sauvegarder le deuxième calcul.
	fonction computeStyleTests () {

		// Ceci est un singleton, nous ne devons l'exécuter qu'une seule fois
		si (! div) {
			revenir;
		}

		container.style.cssText = "position: absolute; left: -11111px; width: 60px;" +
			"margin-top: 1px; remplissage: 0; bordure: 0";
		div.style.cssText =
			"position: relative; affichage: bloc; taille de la boîte: bordure-boîte; débordement: défilement;" +
			"margin: auto; border: 1px; padding: 1px;" +
			"largeur: 60%; haut: 1%";
		documentElement.appendChild (conteneur) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Support: Android 4.0 - 4.3 uniquement, Firefox <= 3 - 44
		fiableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Assistance: Android 4.0 - 4.3 uniquement, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Certains styles reviennent avec des pourcentages, même s'ils ne devraient pas
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Support: IE 9 - 11 seulement
		// Détecter les fausses déclarations de dimensions de contenu pour la taille de la boîte: éléments de bordure
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Support: IE 9 uniquement
		// Détecter le débordement: défilement des pages (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolu";

		documentElement.removeChild (conteneur);

		// Nullify le div afin qu'il ne soit pas stocké dans la mémoire et
		// ce sera aussi un signe que les contrôles déjà effectués
		div = null;
	}

	function roundPixelMeasures (measure) {
		retourne Math.round (parseFloat (mesure));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		fiableMarginLeftVal,
		conteneur = document.createElement ("div"),
		div = document.createElement ("div");

	// Terminer tôt dans des environnements limités (sans navigateur)
	si (! div.style) {
		revenir;
	}

	// Support: IE <= 9 - 11 seulement
	// Le style de l'élément cloné affecte l'élément source cloné (# 8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend (support, {
		boxSizingReliable: function () {
			computeStyleTests ();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function () {
			computeStyleTests ();
			return pixelBoxStylesVal;
		},
		pixelPosition: function () {
			computeStyleTests ();
			return pixelPositionVal;
		},
		fiableMarginLeft: function () {
			computeStyleTests ();
			renvoyer fiableMarginLeftVal;
		},
		scrollboxSize: function () {
			computeStyleTests ();
			return scrollboxSizeVal;
		}
	});
}) ();


fonction curCSS (elem, name, calculé) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Récupérer le style avant de le calculer
		// corrige un problème avec l'obtention de mauvaises valeurs
		// sur des éléments détachés
		style = elem.style;

	calculé = calculé || getStyles (elem);

	// getPropertyValue est nécessaire pour:
	// .css ('filter') (uniquement pour IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	if (calculé) {
		ret = computed.getPropertyValue (name) || calculé [nom];

		if (ret === "" &&! jQuery.contains (elem.ownerDocument, elem)) {
			ret = jQuery.style (elem, name);
		}

		// Un hommage au "super bidouille de Dean Edwards"
		// Android Browser renvoie un pourcentage pour certaines valeurs,
		// mais largeur semble être fiable pixels.
		// Ceci est contre le projet de spécification CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (nom)) {

			// Mémoriser les valeurs d'origine
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Ajoute les nouvelles valeurs pour obtenir une valeur calculée
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revenir sur les valeurs modifiées
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	Retourner Ret! == Non défini?

		// Support: IE <= 9 - 11 seulement
		// IE renvoie la valeur zIndex sous forme d'entier.
		ret + "":
		ret;
}


fonction addGetHookIf (conditionFn, hookFn) {

	// Définit le crochet, nous vérifierons lors de la première exécution si c'est vraiment nécessaire.
	revenir {
		get: function () {
			si (conditionFn ()) {

				// Le crochet n'est pas nécessaire (ou il n'est pas possible de l'utiliser parce que
				// dépendance manquante), supprimez-le.
				supprimer this.get;
				revenir;
			}

			// crochet nécessaire; redéfinissez-le pour que le test de support ne soit pas exécuté à nouveau.
			return (this.get = hookFn) .apply (this, arguments);
		}
	};
}


var

	// permutable si l'affichage est nul ou commence par un tableau
	// sauf "table", "cellule-cellule" ou "légende-table"
	// Voir ici pour les valeurs d'affichage: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = / ^ - /,
	cssShow = {position: "absolute", visibilité: "hidden", display: "block"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style;

// retourne une propriété css mappée sur une propriété potentiellement préfixée par le vendeur
fonction vendorPropName (name) {

	// Raccourci pour les noms qui ne sont pas préfixés par le fournisseur
	if (nom dans emptyStyle) {
		renvoyer le nom;
	}

	// Vérifier les noms préfixés par le fournisseur
	var capName = nom [0] .toUpperCase () + nom.slice (1),
		i = cssPrefixes.length;

	alors que je-- ) {
		name = cssPrefixes [i] + capName;
		if (nom dans emptyStyle) {
			renvoyer le nom;
		}
	}
}

// Retourne une propriété mappée selon ce que jQuery.cssProps suggère ou
// une propriété préfixée par le vendeur.
fonction finalPropName (name) {
	var ret = jQuery.cssProps [nom];
	si (! ret) {
		ret = jQuery.cssProps [name] = vendorPropName (name) || prénom;
	}
	retour ret;
}

fonction setPositiveNumber (elem, value, soustract) {

	// Toutes les valeurs relatives (+/-) ont déjà été
	// normalisé à ce stade
	var correspond = rcssNum.exec (valeur);
	retourner les matchs?

		// Garde contre "soustraire" non défini, par exemple, lorsqu'il est utilisé comme dans cssHooks
		Math.max (0, correspond à [2] - (soustraire || 0)) + (correspond à [3] || "px"):
		valeur;
}

function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimension === "largeur"? dix,
		extra = 0,
		delta = 0;

	// Un ajustement peut ne pas être nécessaire
	if (box === (isBorderBox? "border": "content")) {
		retourne 0;
	}

	pour (; i <4; i + = 2) {

		// Les deux modèles de boîte excluent la marge
		si (case === "marge") {
			delta + = jQuery.css (elem, box + cssExpand [i], true, styles);
		}

		// Si nous arrivons ici avec un contenu-box, nous cherchons "padding" ou "border" ou "margin"
		if (! isBorderBox) {

			// Ajouter un rembourrage
			delta + = jQuery.css (elem, "padding" + cssExpand [i], true, styles);

			// Pour "bordure" ou "marge", ajouter une bordure
			if (box! == "padding") {
				delta + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);

			// Mais gardez-en une trace sinon
			} autre {
				extra + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}

		// Si nous arrivons ici avec une boîte à bordure (contenu + bourrage + bordure), nous cherchons "contenu" ou
		// "padding" ou "margin"
		} autre {

			// Pour "contenu", soustraire le remplissage
			if (box === "content") {
				delta - = jQuery.css (elem, "padding" + cssExpand [i], true, styles);
			}

			// Pour "contenu" ou "remplissage", soustraire la bordure
			si (case! == "marge") {
				delta - = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}
		}
	}

	// Prise en compte de la gouttière de défilement de la boîte de contenu positive lorsque demandé en fournissant computedVal
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight est une somme arrondie de contenu, de remplissage, de gouttière de défilement et de bordure
		// En supposant que la gouttière de défilement entier, soustrayez le reste et arrondissez au bas
		delta + = Math.max (0, Math.ceil (
			elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
			computedVal -
			delta -
			supplémentaire -
			0.5
		));
	}

	retour delta;
}

fonction getWidthOrHeight (elem, dimension, extra) {

	// Commence avec le style calculé
	var styles = getStyles (elem),
		val = curCSS (elem, dimension, styles),
		isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <= 54
	// Retourne une valeur confuse non pixel ou feint l'ignorance, selon le cas.
	if (rnumnonpx.test (val)) {
		si (! extra) {
			retour val;
		}
		val = "auto";
	}

	// Vérifier le style dans le cas d'un navigateur qui renvoie des valeurs non fiables
	// for getComputedStyle revient silencieusement au style fiable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		(support.boxSizingReliable () || val === elem.style [dimension]);

	// Revenir à offsetWidth / offsetHeight lorsque la valeur est "auto"
	// Ceci se produit pour des éléments en ligne sans paramètre explicite (gh-3571)
	// Support: Android <= 4.1 - 4.3 uniquement
	// Utilise également offsetWidth / offsetHeight pour les dimensions en ligne mal déclarées (gh-3602)
	if (val === "auto" ||
		! parseFloat (val) && jQuery.css (elem, "display", false, styles) === "inline") {

		val = elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)];

		// offsetWidth / offsetHeight fournit des valeurs de bordure
		valueIsBorderBox = true;
	}

	// Normalize "" et auto
	val = parseFloat (val) || 0;

	// Ajuster pour le modèle de boîte de l'élément
	retour (val +
		boxModelAdjustment (
			elem,
			dimension,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			modes,

			// Fournit la taille calculée actuelle pour demander le calcul de gouttière de défilement (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend ({

	// Ajouter dans les crochets de propriété de style pour remplacer la valeur par défaut
	// comportement d'obtention et de définition d'une propriété de style
	cssHooks: {
		opacité: {
			get: function (elem, calculé) {
				if (calculé) {

					// On devrait toujours avoir un chiffre en retour de l'opacité
					var ret = curCSS (elem, "opacity");
					Retourner Ret === ""? "1": ret;
				}
			}
		}
	},

	// N'ajoute pas automatiquement "px" à ces propriétés éventuellement sans unité
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": vrai,
		"flexShrink": vrai,
		"fontWeight": true,
		"lineHeight": true,
		"opacité": vrai,
		"order": vrai,
		"orphelins": vrai,
		"veuves": vrai,
		"zIndex": true,
		"zoom": true
	},

	// Ajouter les propriétés dont vous souhaitez corriger les noms auparavant
	// réglage ou obtention de la valeur
	cssProps: {},

	// Récupère et définit la propriété de style sur un nœud DOM
	style: fonction (elem, nom, valeur, extra) {

		// Ne pas définir de styles sur les nœuds de texte et de commentaire
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			revenir;
		}

		// Assurez-vous que nous travaillons avec le bon nom
		var ret, type, crochets,
			origName = camelCase (nom),
			isCustomProp = rcustomProp.test (nom),
			style = elem.style;

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne
		// veut interroger la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Accroche la version préfixée, puis la version non préfixée
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Vérifie si nous définissons une valeur
		if (valeur! == non définie) {
			type = typeof valeur;

			// Convertit "+ =" ou "- =" en nombres relatifs (# 7345)
			if (type === "chaîne" && (ret = rcssNum.exec (valeur)) && ret [1]) {
				valeur = adjustCSS (elem, name, ret);

				// Corrige le bug # 9237
				type = "nombre";
			}

			// Assurez-vous que les valeurs null et NaN ne sont pas définies (# 7116)
			if (valeur == null || valeur! == valeur) {
				revenir;
			}

			// Si un nombre a été passé, ajoutez l'unité (à l'exception de certaines propriétés CSS)
			if (tapez === "numéro") {
				valeur + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * props affecte les valeurs du clone d'origine
			if (! support.clearCloneStyle && valeur === "" && name.indexOf ("background") === 0) {
				style [nom] = "hériter";
			}

			// Si un hook a été fourni, utilisez cette valeur, sinon définissez simplement la valeur spécifiée
			if (! hooks ||! ("set" dans les crochets) ||
				(valeur = hooks.set (elem, value, extra))! == undefined) {

				if (isCustomProp) {
					style.setProperty (nom, valeur);
				} autre {
					style [nom] = valeur;
				}
			}

		} autre {

			// Si un hook a été fourni, récupère la valeur non calculée
			if (hooks && "get" dans les hooks &&
				(ret = hooks.get (elem, false, extra))! == undefined) {

				retour ret;
			}

			// Sinon, récupère la valeur de l'objet style
			style de retour [nom];
		}
	},

	css: fonction (elem, name, extra, styles) {
		var val, num, crochets,
			origName = camelCase (nom),
			isCustomProp = rcustomProp.test (nom);

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne
		// veut modifier la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Essayer le nom préfixé suivi du nom non préfixé
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Si un hook a été fourni, récupère la valeur calculée
		if (crochets && "get" dans les crochets) {
			val = hooks.get (elem, true, extra);
		}

		// Sinon, s'il existe un moyen d'obtenir la valeur calculée, utilisez-le
		if (val === non défini) {
			val = curCSS (elem, name, styles);
		}

		// Convertit "normal" en valeur calculée
		if (val === "normal" && nom dans cssNormalTransform) {
			val = cssNormalTransform [nom];
		}

		// Rendre numérique si forcé ou si un qualificatif a été fourni et val semble numérique
		if (extra === "" || extra) {
			num = parseFloat (val);
			renvoyer un supplément === true || isFinite (num)? num || 0: val;
		}

		retour val;
	}
});

jQuery.each (["hauteur", "largeur"], fonction (i, dimension) {
	jQuery.cssHooks [dimension] = {
		get: function (elem, calculé, extra) {
			if (calculé) {

				// Certains éléments peuvent avoir des informations de dimension si on leur montre de manière invisible
				// mais il doit avoir un style d'affichage actuel qui en profiterait
				return rdisplayswap.test (jQuery.css (elem, "display")) &&

					// Assistance: Safari 8+
					// Les colonnes de table dans Safari ont offsetWidth & zero non nul
					// getBoundingClientRect (). width sauf si l'affichage est modifié.
					// Support: IE <= 11 seulement
					// Exécution de getBoundingClientRect sur un noeud déconnecté
					// dans IE génère une erreur.
					(! elem.getClientRects (). length ||! elem.getBoundingClientRect (). width)?
						swap (elem, cssShow, function () {
							retourne getWidthOrHeight (elem, dimension, extra);
						}):
						getWidthOrHeight (elem, dimension, extra);
			}
		},

		set: fonction (elem, value, extra) {
			allumettes var,
				styles = getStyles (elem),
				isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box",
				soustract = extra && boxModelAdjustment (
					elem,
					dimension,
					supplémentaire,
					isBorderBox,
					modes
				)

			// Prendre en compte les dimensions non fiables de la bordure en comparant le décalage * au calcul et
			// simuler une zone de contenu pour obtenir une bordure et un rembourrage (gh-3699)
			if (isBorderBox && support.scrollboxSize () === styles.position) {
				soustraire - = Math.ceil (
					elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
					parseFloat (styles [dimension]) -
					boxModelAdjustment (elem, dimension, "border", false, styles) -
					0.5
				)
			}

			// Conversion en pixels si un ajustement de valeur est nécessaire
			if (soustraire && (correspond = rcssNum.exec (valeur)) &&
				(correspond à [3] || "px")! == "px") {

				elem.style [dimension] = valeur;
				valeur = jQuery.css (elem, dimension);
			}

			renvoyer setPositiveNumber (elem, valeur, soustraire);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	fonction (elem, calculée) {
		if (calculé) {
			return (parseFloat (curCSS (elem, "marginLeft"))) ||
				elem.getBoundingClientRect (). left -
					swap (elem, {marginLeft: 0}, function () {
						renvoyer elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
)

// Ces hooks sont utilisés par animate pour développer les propriétés
jQuery.each ({
	marge: "",
	Rembourrage: "",
	largeur de la bordure"
}, fonction (préfixe, suffixe) {
	jQuery.cssHooks [préfixe + suffixe] = {
		expand: fonction (valeur) {
			var i = 0,
				expansé = {},

				// Suppose un nombre unique s'il ne s'agit pas d'une chaîne
				parts = typeof value === "chaîne"? valeur.split (""): [valeur];

			pour (; i <4; i ++) {
				développé [préfixe + cssExpand [i] + suffixe] =
					parties [i] || parties [i - 2] || parties [0];
			}

			retour élargi;
		}
	};

	if (préfixe! == "marge") {
		jQuery.cssHooks [préfixe + suffixe] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: fonction (nom, valeur) {
		retourne l'accès (this, function (elem, name, value) {
			styles var, len,
				map = {},
				i = 0;

			if (Array.isArray (name)) {
				styles = getStyles (elem);
				len = name.length;

				pour (; i <len; i ++) {
					map [nom [i]] = jQuery.css (elem, nom [i], false, styles);
				}

				retourner la carte;
			}

			valeur de retour! == non défini?
				jQuery.style (elem, name, value):
				jQuery.css (elem, name);
		}, nom, valeur, arguments.length> 1);
	}
});


fonction Tween (elem, options, prop, fin, relâchement) {
	retourne le nouveau Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructeur: Tween,
	init: fonction (elem, options, prop, fin, assouplissement, unité) {
		this.elem = elem;
		this.prop = prop;
		this.easing = assouplissement || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur ();
		this.end = end;
		this.unit = unit || (jQuery.cssNumber [prop]? "": "px");
	},
	cur: function () {
		var hooks = Tween.propHooks [this.prop];

		retourne les crochets && hooks.get?
			hooks.get (this):
			Tween.propHooks._default.get (this);
	},
	exécuter: fonction (pourcentage) {
		var facilité,
			hooks = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				pour cent, this.options.duration * pour cent, 0, 1, this.options.duration
			)
		} autre {
			this.pos = eased = pourcent;
		}
		this.now = (this.end - this.start) * accéléré + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (ceci);
		} autre {
			Tween.propHooks._default.set (this);
		}
		retournez ceci;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_défaut: {
		get: fonction (interpolation) {
			résultat var;

			// Utiliser une propriété sur l'élément directement lorsqu'il ne s'agit pas d'un élément DOM,
			// ou lorsqu'il n'existe pas de propriété de style correspondante.
			if (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = null && tween.elem.style [tween.prop] == null) {
				renvoyer tween.elem [tween.prop];
			}

			// Passer une chaîne vide en tant que 3ème paramètre à .css sera automatiquement
			// tente un parseFloat et se replie sur une chaîne si l'analyse échoue.
			// Les valeurs simples telles que "10px" sont analysées dans Float;
			// les valeurs complexes telles que "rotation (1rad)" sont renvoyées telles quelles.
			résultat = jQuery.css (tween.elem, tween.prop, "");

			// Les chaînes vides, null, undefined et "auto" sont converties en 0.
			retour! result || résultat === "auto"? 0: résultat;
		},
		set: fonction (interpolation) {

			// Utilise step hook pour le dos compat.
			// Utilise cssHook s'il est là.
			// Utilise le style .style si disponible et utilise les propriétés simples, le cas échéant.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (tween);
			} else if (tween.elem.nodeType === 1 &&
				(tween.elem.style [jQuery.cssProps [tween.prop]]!! = null ||
					jQuery.cssHooks [tween.prop])) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} autre {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Support: IE <= 9 seulement
// approche basée sur la panique pour configurer des éléments sur des nœuds déconnectés
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: fonction (interpolation) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	linéaire: fonction (p) {
		retourne p;
	},
	swing: fonction (p) {
		retourne 0,5 - Math.cos (p * Math.PI) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Retour compat <1.8 point d'extension
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = / ^ (?: toggle | show | hide) $ /,
	rrun = / queueHooks $ /;

function schedule () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (calendrier);
		} autre {
			window.setTimeout (planning, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// Les animations créées de manière synchrone s'exécutent de manière synchrone
fonction createFxNow () {
	window.setTimeout (function () {
		fxNow = undefined;
	});
	return (fxNow = Date.now ());
}

// Générer des paramètres pour créer une animation standard
fonction genFx (type, includeWidth) {
	var qui,
		i = 0,
		attrs = {hauteur: type};

	// Si nous incluons width, step vaut 1 pour faire toutes les valeurs cssExpand,
	// sinon la valeur de l'étape est 2 pour passer à gauche et à droite
	includeWidth = includeWidth? dix;
	pour (; i <4; i + = 2 - includeWidth) {
		which = cssExpand [i];
		attrs ["marge" + qui] = attrs ["remplissage" + qui] = type;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = type;
	}

	renvoyer les attrs;
}

fonction createTween (valeur, prop, animation) {
	var tween,
		collection = (Animation.tweeners [prop] || []) .concat (Animation.tweeners ["*"]),
		indice = 0,
		longueur = collection.length;
	pour (; index <longueur; index ++) {
		if ((tween = collection [index] .call (animation, prop, valeur)))) {

			// nous en avons fini avec cette propriété
			retourne entre;
		}
	}
}

fonction defaultPrefilter (elem, props, opts) {
	var prop, valeur, bascule, crochets, oldfire, propTween, restoreDisplay, display,
		isBox = "width" dans les accessoires || "hauteur" dans les accessoires,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (elem, "fxshow");

	// Les animations de file d'attente sautent les hooks fx
	si (! opts.queue) {
		hooks = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function () {
				si (! hooks.unqueued) {
					oldfire ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {

			// Assure que le gestionnaire complet est appelé avant la fin.
			anim.always (function () {
				hooks.unqueued--;
				if (! jQuery.queue (elem, "fx") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Détecter afficher / masquer les animations
	pour (accessoire dans les accessoires) {
		valeur = props [prop];
		if (rfxtypes.test (valeur)) {
			supprimer les accessoires [prop];
			bascule = bascule || valeur === "bascule";
			if (valeur === (caché? "masquer": "montrer")) {

				// fait semblant d'être caché s'il s'agit d'un "spectacle" et
				// il y a encore des données d'un show / hide arrêté
				if (valeur === "show" && dataShow && dataShow [prop]! == non défini) {
					caché = vrai;

				// Ignore toutes les autres données d'affichage / masquage non-op
				} autre {
					continuer;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style (elem, prop);
		}
	}

	// Renflouer s'il s'agit d'un no-op comme .hide (). Hide ()
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		revenir;
	}

	// Restreindre les styles "débordement" et "affichage" pendant les animations de boîte
	if (isBox && elem.nodeType === 1) {

		// Assistance: IE <= 9 - 11, Edge 12 - 15
		// Enregistre les 3 attributs de dépassement car IE ne déduit pas le raccourci
		// from overflowX et overflowY et Edge, à la même valeur, ne font que refléter
		// la valeur overflowX ici.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Identifie un type d'affichage, préférant les anciennes données d'affichage / masquage à la cascade CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (elem, "display");
		}
		display = jQuery.css (elem, "display");
		if (display === "none") {
			if (restoreDisplay) {
				display = restoreDisplay;
			} autre {

				// Obtenir des valeurs non vides en forçant temporairement la visibilité
				showHide ([elem], vrai);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (elem, "display");
				showHide ([elem]);
			}
		}

		// Animer des éléments en ligne en tant que bloc en ligne
		if (display === "inline" || display === "inline-block" && restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "none") {

				// Restaure la valeur d'affichage d'origine à la fin des animations de masquage / masquage
				si (! propTween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						display = style.display;
						restoreDisplay = display === "aucun"? "" : afficher;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "caché";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// implémenter des animations de show / hide
	propTween = false;
	pour (prop en orig) {

		// Configuration générale afficher / masquer pour cette animation d'élément
		si (! propTween) {
			if (dataShow) {
				if ("hidden" dans dataShow) {
					hidden = dataShow.hidden;
				}
			} autre {
				dataShow = dataPriv.access (elem, "fxshow", {display: restoreDisplay});
			}

			// Store hidden / visible for toggle ainsi `.stop (). Toggle ()` "reverses"
			si (bascule) {
				dataShow.hidden =! hidden;
			}

			// Afficher les éléments avant de les animer
			si (caché) {
				showHide ([elem], vrai);
			}

			/ * eslint-disable no-loop-func * /

			anim.done (function () {

			/ * eslint-enable no-loop-func * /

				// La dernière étape d'une animation "masquée" masque l'élément
				si (! caché) {
					showHide ([elem]);
				}
				dataPriv.remove (elem, "fxshow");
				pour (prop en orig) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// Configuration par propriété
		propTween = createTween (hidden? dataShow [prop]: 0, prop, anim);
		si (! (prop dans dataShow)) {
			dataShow [prop] = propTween.start;
			si (caché) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

fonction propFilter (props, specialEasing) {
	index, nom, accélération, valeur, crochets;

	// camelCase, specialEasing et expand cssHook pass
	pour (index dans les accessoires) {
		name = camelCase (index);
		easing = specialEasing [nom];
		valeur = props [index];
		if (Array.isArray (valeur)) {
			assouplissement = valeur [1];
			valeur = props [index] = valeur [0];
		}

		si (index! == nom) {
			props [nom] = valeur;
			supprimer les accessoires [index];
		}

		hooks = jQuery.cssHooks [nom];
		if (hooks && "expand" dans les hooks) {
			valeur = hooks.expand (valeur);
			supprimer les accessoires [nom];

			// Pas tout à fait $ .extend, cela n'écrasera pas les clés existantes.
			// Réutilisation de 'index' car nous avons le "nom" correct
			pour (index en valeur) {
				si (! (index dans les accessoires)) {
					props [index] = valeur [index];
					specialEasing [index] = atténuation;
				}
			}
		} autre {
			specialEasing [nom] = atténuation;
		}
	}
}

fonction Animation (elem, propriétés, options) {
	résultat var,
		arrêté,
		indice = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred (). always (function () {

			// Ne correspond pas à elem dans le sélecteur animé:
			supprimez tick.elem;
		}),
		tick = fonction () {
			si (arrêté) {
				retourne faux;
			}
			var currentTime = fxNow || createFxNow (),
				restant = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Support: Android 2.3 uniquement
				// Un bug de crash archaïque ne nous permet pas d'utiliser `1 - (0.5 || 0)` (# 12497)
				temp = restant / animation.duration || 0
				pourcentage = 1 - temp,
				indice = 0,
				longueur = animation.tweens.length;

			pour (; index <longueur; index ++) {
				animation.tweens [index] .run (pourcentage);
			}

			deferred.notifyWith (elem, [animation, pourcent, restant]);

			// S'il y a plus à faire, céder
			si (pourcentage <1 && longueur) {
				retour restant;
			}

			// S'il s'agissait d'une animation vide, synthétiser une notification de progression finale
			si (! longueur) {
				deferred.notifyWith (elem, [animation, 1, 0]);
			}

			// Résoudre l'animation et rapporter sa conclusion
			deferred.resolveWith (elem, [animation]);
			retourne faux;
		},
		animation = deferred.promise ({
			elem: elem,
			props: jQuery.extend ({}, propriétés),
			opts: jQuery.extend (true, {
				specialEasing: {},
				Accélération: jQuery.easing._default
			}, options),
			originalProperties: propriétés,
			originalOptions: options,
			heure de début: fxNow || createFxNow (),
			durée: options.duration,
			tweens: [],
			createTween: fonction (prop, fin) {
				var tween = jQuery.Tween (elem, animation.opts, prop, end,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (interpolation);
				retourne entre;
			},
			stop: function (gotoEnd) {
				var index = 0,

					// Si nous allons à la fin, nous voulons exécuter tous les tweens
					// sinon on saute cette partie
					longueur = gotoEnd? animation.tweens.length: 0;
				si (arrêté) {
					retournez ceci;
				}
				arrêté = vrai;
				pour (; index <longueur; index ++) {
					animation.tweens [index] .run (1);
				}

				// Résoudre quand nous avons joué la dernière image; sinon, rejette
				si (gotoEnd) {
					deferred.notifyWith (elem, [animation, 1, 0]);
					deferred.resolveWith (elem, [animation, gotoEnd]);
				} autre {
					deferred.rejectWith (elem, [animation, gotoEnd]);
				}
				retournez ceci;
			}
		}),
		props = animation.props;

	propFilter (props, animation.opts.specialEasing);

	pour (; index <longueur; index ++) {
		resultat = Animation.prefilters [index] .call (animation, elem, props, animation.opts);
		si (résultat) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (result);
			}
			retourne le résultat;
		}
	}

	jQuery.map (props, createTween, animation);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (elem, animation);
	}

	// Attacher des callbacks depuis les options
	animation
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		. toujours (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (tick, {
			elem: elem,
			anim: animation,
			file d'attente: animation.opts.queue
		})
	)

	retourner l'animation;
}

jQuery.Animation = jQuery.extend (Animation, {

	tweeners: {
		"*": [fonction (prop, valeur) {
			var tween = this.createTween (prop, valeur);
			adjustCSS (tween.elem, prop, rcssNum.exec (valeur), tween);
			retourne entre;
		}]
	},

	tweener: fonction (accessoires, rappel) {
		if (isFunction (props)) {
			callback = props;
			props = ["*"];
		} autre {
			props = props.match (rnothtmlwhite);
		}

		var prop,
			indice = 0,
			length = props.length;

		pour (; index <longueur; index ++) {
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift (rappel);
		}
	},

	préfiltres: [defaultPrefilter],

	préfiltre: fonction (rappel, préfixe) {
		si (préfixe) {
			Animation.prefilters.unshift (rappel);
		} autre {
			Animation.prefilters.push (rappel);
		}
	}
});

jQuery.speed = fonction (vitesse, atténuation, fn) {
	var opt = vitesse && typeof vitesse === "objet"? jQuery.extend ({}, vitesse): {
		complète: fn || ! fn && easing ||
			isFunction (vitesse) && vitesse,
		durée: vitesse,
		assouplissement: fn && assouplissement || assouplissement &&! isFunction (assouplissement) && assouplissement
	};

	// Va à la fin si fx est éteint
	if (jQuery.fx.off) {
		opt.duration = 0;

	} autre {
		if (typeof opt.duration! == "numéro") {
			if (opt.duration dans jQuery.fx.speeds) {
				opt.duration = jQuery.fx.speeds [opt.duration];

			} autre {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true / undefined / null -> "fx"
	if (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// faire la queue
	opt.old = opt.complete;

	opt.complete = function () {
		if (isFunction (opt.old)) {
			opt.old.call (this);
		}

		si (opt.queue) {
			jQuery.dequeue (this, opt.queue);
		}
	};

	retour opt;
};

jQuery.fn.extend ({
	fadeTo: fonction (vitesse, relâchement, rappel) {

		// Afficher tous les éléments cachés après avoir défini l'opacité sur 0
		Renvoie this.filter (isHiddenWithinTree) .css ("opacity", 0) .show ()

			// Animer à la valeur spécifiée
			.end (). animate ({opacity: to}, rapidité, accélération, rappel);
	},
	animate: fonction (prop, vitesse, relâchement, rappel) {
		var empty = jQuery.isEmptyObject (prop),
			optall = jQuery.speed (vitesse, accélération, rappel),
			doAnimation = function () {

				// Opère sur une copie de l'accessoire afin que l'assouplissement par propriété ne soit pas perdu
				var anim = Animation (this, jQuery.extend ({}, prop), optall);

				// Des animations vides ou une finition sont résolues immédiatement
				if (vide || dataPriv.get (this, "finish")) {
					anim.stop (true);
				}
			};
			doAnimation.finish = doAnimation;

		retour vide || optall.queue === false?
			this.each (doAnimation):
			this.queue (optall.queue, doAnimation);
	},
	stop: fonction (type, clearQueue, gotoEnd) {
		var stopQueue = fonction (crochets) {
			var stop = hooks.stop;
			supprimer les hooks.stop;
			stop (gotoEnd);
		};

		if (typeof type! == "chaîne") {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = non défini;
		}
		if (clearQueue && type! == false) {
			this.queue (tapez || "fx", []);
		}

		retourne this.each (function () {
			var dequeue = true,
				index = type! = null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get (this);

			si (index) {
				if (data [index] && data [index] .stop) {
					stopQueue (data [index]);
				}
			} autre {
				pour (index dans les données) {
					if (data [index] && data [index] .stop && rrun.test (index)) {
						stopQueue (data [index]);
					}
				}
			}

			pour (index = timers.length; index--;) {
				if (timers [index] .elem === this &&
					(type == null || timers [index] .queue === type)) {

					timers [index] .anim.stop (gotoEnd);
					dequeue = false;
					timers.splice (index, 1);
				}
			}

			// Commence le suivant dans la file d'attente si la dernière étape n'a pas été forcée.
			// Les timers appellent actuellement leurs rappels complets, qui
			// sera retiré de la file d'attente, mais seulement s'ils étaient gotoEnd.
			if (dequeue ||! gotoEnd) {
				jQuery.dequeue (this, type);
			}
		});
	},
	finish: fonction (type) {
		si (tapez! == faux) {
			type = type || "fx";
		}
		retourne this.each (function () {
			index var,
				data = dataPriv.get (this),
				file d'attente = data [type + "file d'attente"],
				hooks = data [type + "queueHooks"],
				timers = jQuery.timers,
				longueur = file d'attente? queue.longueur: 0;

			// Activer l'indicateur de finition sur les données privées
			data.finish = true;

			// Vide d'abord la file d'attente
			jQuery.queue (this, tapez, []);

			if (hooks && hooks.stop) {
				hooks.stop.call (this, true);
			}

			// Rechercher les animations actives et les terminer
			pour (index = timers.length; index--;) {
				if (timers [index] .elem === this && timers [index] .queue === type) {
					timers [index] .anim.stop (true);
					timers.splice (index, 1);
				}
			}

			// Rechercher les animations dans l'ancienne file et les terminer
			pour (index = 0; index <longueur; index ++) {
				if (queue [index] && queue [index] .finish) {
					queue [index] .finish.call (this);
				}
			}

			// Désactive le drapeau de finition
			supprimer data.finish;
		});
	}
});

jQuery.each (["bascule", "show", "masquer"], fonction (i, nom) {
	var cssFn = jQuery.fn [nom];
	jQuery.fn [nom] = fonction (vitesse, accélération, rappel) {
		vitesse de retour == null || typeof speed === "boolean"?
			cssFn.apply (this, arguments):
			this.animate (genFx (nom, vrai), vitesse, atténuation, rappel);
	};
});

// Générer des raccourcis pour des animations personnalisées
jQuery.each ({
	slideDown: genFx ("show"),
	slideUp: genFx ("masquer"),
	slideToggle: genFx ("bascule"),
	fadeIn: {opacity: "show"},
	fadeOut: {opacity: "hide"},
	fadeToggle: {opacity: "toggle"}
}, fonction (nom, accessoires) {
	jQuery.fn [nom] = fonction (vitesse, accélération, rappel) {
		renvoyer this.animate (accessoires, vitesse, atténuation, rappel);
	};
});

jQuery.timers = [];
jQuery.fx.tick = function () {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now ();

	pour (; i <timers.length; i ++) {
		minuterie = minuteries [i];

		// lance le chronomètre et le supprime en toute sécurité une fois l'opération terminée (permet un retrait externe)
		if (! timer () && timers [i] === timer) {
			timers.splice (i--, 1);
		}
	}

	si (! timers.length) {
		jQuery.fx.stop ();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function (timer) {
	jQuery.timers.push (minuterie);
	jQuery.fx.start ();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
	if (inProgress) {
		revenir;
	}

	inProgress = true;
	programme();
};

jQuery.fx.stop = function () {
	inProgress = null;
};

jQuery.fx.speeds = {
	lente: 600,
	rapide: 200

	// vitesse par défaut
	_default: 400
};


// Basé sur le plugin de Clint Helfers, avec permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = fonction (heure, type) {
	time = jQuery.fx? jQuery.fx.speeds [heure] || temps temps;
	type = type || "fx";

	retourne this.queue (type, fonction (next, hooks) {
		var timeout = window.setTimeout (next, time);
		hooks.stop = function () {
			window.clearTimeout (délai d'attente);
		};
	});
};


( une fonction() {
	var input = document.createElement ("input"),
		select = document.createElement ("select"),
		opt = select.appendChild (document.createElement ("option"));

	input.type = "case à cocher";

	// Support: Android <= 4.3 uniquement
	// La valeur par défaut d'une case à cocher doit être "on"
	support.checkOn = input.value! == "";

	// Support: IE <= 11 seulement
	// Doit accéder à selectedIndex pour que les options par défaut soient sélectionnées
	support.optSelected = opt.selected;

	// Support: IE <= 11 seulement
	// Une entrée perd sa valeur après être devenue une radio
	input = document.createElement ("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
}) ();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend ({
	attr: fonction (nom, valeur) {
		retourne l'accès (this, jQuery.attr, nom, valeur, arguments.length> 1);
	},

	removeAttr: fonction (nom) {
		retourne this.each (function () {
			jQuery.removeAttr (this, name);
		});
	}
});

jQuery.extend ({
	attr: fonction (elem, nom, valeur) {
		var ret, crochets,
			nType = elem.nodeType;

		// Ne pas obtenir / définir d'attributs sur les nœuds texte, commentaire et attribut
		if (nType === 3 || nType === 8 || nType === 2) {
			revenir;
		}

		// Repli sur prop lorsque les attributs ne sont pas supportés
		if (typeof elem.getAttribute === "undefined") {
			retourne jQuery.prop (elem, name, value);
		}

		// Les hooks d'attributs sont déterminés par la version minuscule
		// Attrape le crochet nécessaire s'il en existe un
		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {
			hooks = jQuery.attrHooks [name.toLowerCase ()] ||
				(jQuery.expr.match.bool.test (nom)? boolHook: undefined);
		}

		if (valeur! == non définie) {
			if (valeur === null) {
				jQuery.removeAttr (elem, name);
				revenir;
			}

			if (hooks && "set" in hooks &&
				(ret = hooks.set (elem, value, name))! == undefined) {
				retour ret;
			}

			elem.setAttribute (nom, valeur + "");
			valeur de retour;
		}

		if (hooks && "get" dans hooks && (ret = hooks.get (elem, name))! == null) {
			retour ret;
		}

		ret = jQuery.find.attr (elem, name);

		// Les attributs inexistants renvoient null, nous normalisons en indéfini
		renvoyer ret == null? undefined: ret;
	},

	crochets: {
		type: {
			set: fonction (elem, valeur) {
				if (! support.radioValue && valeur === "radio" &&
					nodeName (elem, "input")) {
					var val = elem.value;
					elem.setAttribute ("type", valeur);
					si (val) {
						elem.value = val;
					}
					valeur de retour;
				}
			}
		}
	},

	removeAttr: function (elem, value) {
		nom var,
			i = 0,

			// Les noms d'attributs peuvent contenir des caractères d'espacement non HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = valeur && valeur.match (rnothtmlwhite);

		if (attrNames && elem.nodeType === 1) {
			while ((name = attrNames [i ++])) {
				elem.removeAttribute (nom);
			}
		}
	}
});

// Crochets pour les attributs booléens
boolHook = {
	set: fonction (elem, valeur, nom) {
		if (valeur === false) {

			// Supprime les attributs booléens lorsqu'il est défini sur false
			jQuery.removeAttr (elem, name);
		} autre {
			elem.setAttribute (nom, nom);
		}
		renvoyer le nom;
	}
};

jQuery.each (jQuery.expr.match.bool.source.match (/ \ w + / g), fonction (i, nom) {
	var getter = attrHandle [nom] || jQuery.find.attr;

	attrHandle [nom] = fonction (elem, nom, isXML) {
		var ret, manipuler,
			Nom minuscule = name.toLowerCase ();

		si (! isXML) {

			// Evite une boucle infinie en supprimant temporairement cette fonction du getter
			handle = attrHandle [nom minuscule];
			attrHandle [nom minuscule] = ret;
			ret = getter (elem, name, isXML)! = null?
				Nom minuscule:
				nul;
			attrHandle [nom minuscule] = handle;
		}
		retour ret;
	};
});




var rfocusable = / ^ (?: input | select | textarea | button) $ / i,
	rcliquable = / ^ (?: a | aire) $ / i;

jQuery.fn.extend ({
	prop: fonction (nom, valeur) {
		retourne l'accès (this, jQuery.prop, nom, valeur, arguments.length> 1);
	},

	removeProp: fonction (nom) {
		retourne this.each (function () {
			supprimer ce [jQuery.propFix [nom] || prénom ];
		});
	}
});

jQuery.extend ({
	prop: fonction (elem, nom, valeur) {
		var ret, crochets,
			nType = elem.nodeType;

		// Ne pas obtenir / définir les propriétés sur les nœuds texte, commentaire et attribut
		if (nType === 3 || nType === 8 || nType === 2) {
			revenir;
		}

		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {

			// Corrige le nom et attache les crochets
			name = jQuery.propFix [name] || prénom;
			hooks = jQuery.propHooks [nom];
		}

		if (valeur! == non définie) {
			if (hooks && "set" in hooks &&
				(ret = hooks.set (elem, value, name))! == undefined) {
				retour ret;
			}

			return (elem [nom] = valeur);
		}

		if (hooks && "get" dans hooks && (ret = hooks.get (elem, name))! == null) {
			retour ret;
		}

		renvoyer elem [nom];
	},

	propHooks: {
		tabIndex: {
			get: function (elem) {

				// Support: IE <= 9 - 11 seulement
				// elem.tabIndex ne retourne pas toujours le
				// corrige la valeur quand elle n'a pas été explicitement définie
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Utiliser la récupération d'attribut appropriée (# 12072)
				var tabindex = jQuery.find.attr (elem, "tabindex");

				si (tabindex) {
					return parseInt (tabindex, 10);
				}

				si (
					rfocusable.test (elem.nodeName) ||
					rclickable.test (elem.nodeName) &&
					elem.href
				) {
					retourne 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"pour": "htmlFor",
		"class": "className"
	}
});

// Support: IE <= 11 seulement
// Accès à la propriété selectedIndex
// force le navigateur à respecter les paramètres sélectionnés
// sur l'option
// Le getter s'assure qu'une option par défaut est sélectionnée
// quand dans un optgroup
// La règle eslint "non-expressions-non utilisées" est désactivée pour ce code
// puisqu'il considère de telles adhésions noop
si (! support.optSelected) {
	jQuery.propHooks.selected = {
		get: function (elem) {

			/ * eslint expressions non-inutilisées: "off" * /

			var parent = elem.parentNode;
			if (parent && parent.parentNode) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: fonction (elem) {

			/ * eslint expressions non-inutilisées: "off" * /

			var parent = elem.parentNode;
			si (parent) {
				parent.selectedIndex;

				if (parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each ([
	"tabIndex",
	"lecture seulement",
	"longueur maximale",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"bordure de cadre",
	"contentEditable"
], une fonction() {
	jQuery.propFix [this.toLowerCase ()] = this;
});




	// Enlève et réduit les espaces selon les spécifications HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	fonction stripAndCollapse (valeur) {
		Var tokens = value.match (rnothtmlwhite) || [];
		return tokens.join ("");
	}


fonction getClass (elem) {
	return elem.getAttribute && elem.getAttribute ("class") || "";
}

fonction classesToArray (valeur) {
	if (Array.isArray (valeur)) {
		valeur de retour;
	}
	if (typeof valeur === "chaîne") {
		valeur de retour.match (rnothtmlwhite) || [];
	}
	revenir [];
}

jQuery.fn.extend ({
	addClass: fonction (valeur) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (valeur)) {
			retourne this.each (function (j) {
				jQuery (this) .addClass (value.call (this, j, getClass (this)));
			});
		}

		classes = classesToArray (valeur);

		si (classes.longueur) {
			while ((elem = this [i ++])) {
				curValue = getClass (elem);
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				si (cur) {
					j = 0;
					while ((clazz = classes [j ++])) {
						if (cur.indexOf ("" + clazz + "") <0) {
							cur + = clazz + "";
						}
					}

					// n'affecte que si différent pour éviter un rendu inutile.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("class", finalValue);
					}
				}
			}
		}

		retournez ceci;
	},

	removeClass: fonction (valeur) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (valeur)) {
			retourne this.each (function (j) {
				jQuery (this) .removeClass (value.call (this, j, getClass (this)));
			});
		}

		if (! arguments.length) {
			return this.attr ("classe", "");
		}

		classes = classesToArray (valeur);

		si (classes.longueur) {
			while ((elem = this [i ++])) {
				curValue = getClass (elem);

				// Cette expression est là pour une meilleure compressibilité (voir addClass)
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				si (cur) {
					j = 0;
					while ((clazz = classes [j ++])) {

						// Supprimer * toutes * les instances
						while (cur.indexOf ("" + clazz + "")> -1) {
							cur = cur.replace ("" + clazz + "", "");
						}
					}

					// n'affecte que si différent pour éviter un rendu inutile.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("class", finalValue);
					}
				}
			}
		}

		retournez ceci;
	},

	toggleClass: fonction (valeur, stateVal) {
		var type = typeof valeur,
			isValidValue = type === "chaîne" || Array.isArray (valeur);

		if (typeof stateVal === "boolean" && isValidValue) {
			return stateVal? this.addClass (valeur): this.removeClass (valeur);
		}

		if (isFunction (valeur)) {
			retourne this.each (fonction (i) {
				jQuery (this) .toggleClass (
					value.call (this, i, getClass (this), stateVal),
					stateVal
				)
			});
		}

		retourne this.each (function () {
			var className, i, self, classNames;

			if (isValidValue) {

				// Basculer les noms de classe individuels
				i = 0;
				self = jQuery (this);
				classNames = classesToArray (valeur);

				while ((className = classNames [i ++])) {

					// Vérifie chaque nom de classe donné, liste séparée par des espaces
					if (self.hasClass (className)) {
						self.removeClass (className);
					} autre {
						self.addClass (className);
					}
				}

			// Basculer le nom de la classe entière
			} else if (valeur === non définie || type === "booléen") {
				className = getClass (this);
				si (NomClasse) {

					// Store className si défini
					dataPriv.set (this, "__className__", className);
				}

				// Si l'élément a un nom de classe ou si nous sommes passés `false`,
				// puis supprime le nom de classe complet (s'il y en a un, le ci-dessus l'a enregistré).
				// Sinon, ramenez tout ce qui a déjà été sauvegardé (le cas échéant),
				// retourne à la chaîne vide si rien n'a été stocké.
				if (this.setAttribute) {
					this.setAttribute ("classe",
						className || valeur === false?
						"":
						dataPriv.get (this, "__className__") || ""
					)
				}
			}
		});
	},

	hasClass: fonction (sélecteur) {
		var className, elem,
			i = 0;

		className = "" + selector + "";
		while ((elem = this [i ++])) {
			if (elem.nodeType === 1 &&
				("" + stripAndCollapse (getClass (elem)) + "") .indexOf (className)> -1) {
					retourne vrai;
			}
		}

		retourne faux;
	}
});




var rreturn = / \ r / g;

jQuery.fn.extend ({
	val: fonction (valeur) {
		var hooks, ret, valeurIsFunction,
			elem = this [0];

		if (! arguments.length) {
			si (elem) {
				hooks = jQuery.valHooks [type_élément] ||
					jQuery.valHooks [elem.nodeName.toLowerCase ()];

				si (crochets &&
					"get" dans les crochets &&
					(ret = hooks.get (elem, "valeur"))!! == indéfini
				) {
					retour ret;
				}

				ret = elem.value;

				// Gère les cas de chaînes les plus courants
				if (typeof ret === "chaîne") {
					retourne.retour (retour, "");
				}

				// Gère les cas où la valeur est null / undef ou number
				renvoyer ret == null? "": ret;
			}

			revenir;
		}

		valueIsFunction = isFunction (valeur);

		retourne this.each (fonction (i) {
			var val;

			if (this.nodeType! == 1) {
				revenir;
			}

			if (valueIsFunction) {
				val = value.call (this, i, jQuery (this) .val ());
			} autre {
				val = valeur;
			}

			// Traite null / undefined comme ""; convertir des nombres en chaîne
			if (val == null) {
				val = "";

			} else if (typeof val === "numéro") {
				val + = "";

			} else if (Array.isArray (val)) {
				val = jQuery.map (val, fonction (valeur) {
					valeur de retour == null? "": valeur + "";
				});
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase ()];

			// Si set retourne undefined, retourne au réglage normal
			if (! hooks ||! ("set" dans les crochets) || hooks.set (this, val, "valeur") === non défini) {
				this.value = val;
			}
		});
	}
});

jQuery.extend ({
	valHooks: {
		option: {
			get: function (elem) {

				var val = jQuery.find.attr (elem, "valeur");
				return val! = null?
					val:

					// Support: IE <= 10 - 11 seulement
					// option.text lève des exceptions (# 14686, # 14858)
					// efface et réduit les espaces
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse (jQuery.text (elem));
			}
		},
		sélectionnez: {
			get: function (elem) {
				valeur var, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					valeurs = un? nul : [],
					max = un? index + 1: options.length;

				si (index <0) {
					i = max;

				} autre {
					i = un? indice: 0;
				}

				// Boucle à travers toutes les options sélectionnées
				pour (; i <max; i ++) {
					option = options [i];

					// Support: IE <= 9 seulement
					// IE8-9 ne met pas à jour la sélection après la réinitialisation du formulaire (# 2551)
					if ((option.selected || i === index) &&

							// Ne pas renvoyer les options qui sont désactivées ou dans un groupe optionnel désactivé
							! option.disabled &&
							(! option.parentNode.disabled ||
								! nodeName (option.parentNode, "optgroup"))) {

						// Obtient la valeur spécifique pour l'option
						valeur = jQuery (option) .val ();

						// On n'a pas besoin d'un tableau pour une sélection
						Si un ) {
							valeur de retour;
						}

						// Les sélections multiples renvoient un tableau
						values.push (valeur);
					}
				}

				renvoyer des valeurs;
			},

			set: fonction (elem, valeur) {
				var optionSet, option,
					options = elem.options,
					values ​​= jQuery.makeArray (valeur),
					i = options.length;

				alors que je-- ) {
					option = options [i];

					/ * eslint-disable no-cond-assign * /

					if (option.selected =
						jQuery.inArray (jQuery.valHooks.option.get (option), valeurs)> -1
					) {
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				// Forcer les navigateurs à se comporter de manière cohérente quand une valeur non correspondante est définie
				if (! optionSet) {
					elem.selectedIndex = -1;
				}
				renvoyer des valeurs;
			}
		}
	}
});

// Radios et cases à cocher getter / setter
jQuery.each (["radio", "case à cocher"], function () {
	jQuery.valHooks [this] = {
		set: fonction (elem, valeur) {
			if (Array.isArray (valeur)) {
				return (elem.checked = jQuery.inArray (jQuery (elem) .val (), valeur)> -1);
			}
		}
	};
	si (! support.checkOn) {
		jQuery.valHooks [this] .get = function (elem) {
			return elem.getAttribute ("valeur") === null? "on": elem.value;
		};
	}
});




// Retourne jQuery pour l'inclusion avec attributs uniquement


support.focusin = "onfocusin" dans la fenêtre;


var rfocusMorph = / ^ (?: focusinfocus | focusoutblur) $ /,
	stopPropagationCallback = function (e) {
		e.stopPropagation ();
	};

jQuery.extend (jQuery.event, {

	trigger: function (événement, données, elem, onlyHandlers) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [elem || document],
			type = hasOwn.call (event, "type")? event.type: event,
			namespaces = hasOwn.call (event, "namespace")? event.namespace.split ("."): [];

		cur = lastElement = tmp = elem = elem || document;

		// Ne pas faire d'événements sur les nœuds text et comment
		if (elem.nodeType === 3 || elem.nodeType === 8) {
			revenir;
		}

		// focus / blur se transforme en focusin / out; assurer que nous ne les virons pas en ce moment
		if (rfocusMorph.test (type + jQuery.event.triggered)) {
			revenir;
		}

		if (type.indexOf (".")> -1) {

			// déclencheur Namespaced; créer une expression rationnelle pour correspondre au type d'événement dans handle ()
			namespaces = type.split (".");
			type = namespaces.shift ();
			namespaces.sort ();
		}
		ontype = type.indexOf (":") <0 && "on" + type;

		// L'appelant peut transmettre un objet jQuery.Event, un objet ou simplement une chaîne de type d'événement.
		event = event [jQuery.expando]?
			un événement :
			new jQuery.Event (type, typeof event === "object" && event);

		// Déclencher le masque de bits: & 1 pour les gestionnaires natifs; & 2 pour jQuery (toujours vrai)
		event.isTrigger = onlyHandlers? 2: 3;
		event.namespace = namespaces.join (".");
		event.rnamespace = event.namespace?
			new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)"):
			nul;

		// Nettoyer l'événement au cas où il serait réutilisé
		event.result = undefined;
		si (! event.target) {
			event.target = elem;
		}

		// Clone toutes les données entrantes et ajoute l'événement, en créant la liste d'arguments du gestionnaire
		data = data == null?
			[ un événement ] :
			jQuery.makeArray (data, [event]);

		// Autoriser les événements spéciaux à dessiner en dehors des lignes
		special = jQuery.event.special [type] || {};
		if (! onlyHandlers && special.trigger && special.trigger.apply (elem, data) === false) {
			revenir;
		}

		// Déterminer le chemin de propagation d'événement à l'avance, conformément aux spécifications d'événement W3C (# 9951)
		// Boule jusqu'à documenter, puis à la fenêtre; rechercher un propriétaire globalDocument var (# 9724)
		if (! onlyHandlers &&! special.noBubble &&! isWindow (elem)) {

			bubbleType = special.delegateType || type;
			if (! rfocusMorph.test (bubbleType + type)) {
				cur = cur.parentNode;
			}
			pour (; cur; cur = cur.parentNode) {
				eventPath.push (cur);
				tmp = cur;
			}

			// Ajoute seulement la fenêtre si on arrive à documenter
			if (tmp === (elem.ownerDocument || document)) {
				eventPath.push (tmp.defaultView || tmp.parentWindow || fenêtre);
			}
		}

		// Gestionnaires d'incendie sur le chemin d'événement
		i = 0;
		while ((cur = eventPath [i ++]) &&! event.isPropagationStopped ()) {
			lastElement = cur;
			event.type = i> 1?
				Type de bulle:
				special.bindType || type;

			// gestionnaire jQuery
			handle = (dataPriv.get (cur, "events") || {}) [event.type] &&
				dataPriv.get (cur, "handle");
			si (poignée) {
				handle.apply (cur, data);
			}

			// gestionnaire natif
			handle = ontype && cur [ontype];
			if (handle && handle.apply && acceptData (cur)) {
				event.result = handle.apply (cur, data);
				if (event.result === false) {
					event.preventDefault ();
				}
			}
		}
		event.type = type;

		// Si personne n'a empêché l'action par défaut, faites-le maintenant
		if (! onlyHandlers &&! event.isDefaultPrevented ()) {

			si ((! special._default ||
				special._default.apply (eventPath.pop (), data) === false) &&
				acceptData (elem)) {

				// Appelle une méthode DOM native sur la cible portant le même nom que l'événement.
				// Ne pas faire d'actions par défaut sur la fenêtre, c'est là que sont les variables globales (# 6170)
				if (ontype && isFunction (elem [type]) &&! isWindow (elem)) {

					// Ne pas re-déclencher un événement onFOO lorsque nous appelons sa méthode FOO ()
					tmp = elem [ontype];

					si (tmp) {
						elem [ontype] = null;
					}

					// Empêche le re-déclenchement du même événement, puisque nous l'avons déjà mentionné précédemment
					jQuery.event.triggered = type;

					if (event.isPropagationStopped ()) {
						lastElement.addEventListener (type, stopPropagationCallback);
					}

					elem [type] ();

					if (event.isPropagationStopped ()) {
						lastElement.removeEventListener (type, stopPropagationCallback);
					}

					jQuery.event.triggered = undefined;

					si (tmp) {
						elem [ontype] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback sur un événement donneur pour en simuler un autre
	// Utilisé uniquement pour les événements `focus (in | out)`
	simuler: fonction (type, elem, event) {
		var e = jQuery.extend (
			new jQuery.Event (),
			un événement,
			{
				type: type,
				isSimulated: true
			}
		)

		jQuery.event.trigger (e, null, elem);
	}

});

jQuery.fn.extend ({

	déclencheur: fonction (type, données) {
		retourne this.each (function () {
			jQuery.event.trigger (type, données, this);
		});
	},
	triggerHandler: fonction (type, données) {
		var elem = this [0];
		si (elem) {
			return jQuery.event.trigger (type, données, elem, true);
		}
	}
});


// Support: Firefox <= 44
// Firefox n'a pas d'événements focus (in | out)
// Ticket associé - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Assistance: Chrome <= 48 - 49, Safari <= 9.0 - 9.1
// les événements de focus (in | out) se déclenchent après les événements de focus et de flou,
// qui est une violation de spécification - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Ticket associé - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (! support.focusin) {
	jQuery.each ({focus: "focusin", flou: "focusout"}, fonction (orig, correction) {

		// attache un seul gestionnaire de capture sur le document pendant que quelqu'un veut se concentrer / se concentrer
		var gestionnaire = function (event) {
			jQuery.event.simulate (correction, event.target, jQuery.event.fix (event));
		};

		jQuery.event.special [fix] = {
			configuration: fonction () {
				var doc = this.ownerDocument || ce,
					attaches = dataPriv.access (doc, correction);

				si (! attaches) {
					doc.addEventListener (orig, gestionnaire, true);
				}
				dataPriv.access (doc, fix, (attaches || 0) + 1);
			},
			démontage: function () {
				var doc = this.ownerDocument || ce,
					attaches = dataPriv.access (doc, correction) - 1;

				si (! attaches) {
					doc.removeEventListener (orig, gestionnaire, true);
					dataPriv.remove (doc, correction);

				} autre {
					dataPriv.access (doc, correctif, pièces jointes);
				}
			}
		};
	});
}
var location = window.location;

var nonce = Date.now ();

var rquery = (/ \? /);



// Analyse xml sur plusieurs navigateurs
jQuery.parseXML = function (data) {
	var xml;
	if (! data || typeof data! == "chaîne") {
		return null;
	}

	// Support: IE 9 - 11 seulement
	// IE lance parseFromString avec une entrée invalide.
	essayer {
		xml = (nouvelle fenêtre.DOMParser ()) .parseFromString (data, "text / xml");
	} catch (e) {
		xml = undefined;
	}

	if (! xml || xml.getElementsByTagName ("parsererror") .length) {
		jQuery.error ("XML non valide:" + données);
	}
	renvoyer xml;
};


var
	rbracket = / \ [\] $ /,
	rCRLF = / \ r? \ n / g,
	rsubmitterTypes = / ^ (?: submit | button | image | reset | file) $ / i,
	rsubmittable = / ^ (?: input | select | textarea | keygen) / i;

fonction buildParams (préfixe, obj, traditionnel, add) {
	nom var;

	if (Array.isArray (obj)) {

		// Sérialiser un élément de tableau.
		jQuery.each (obj, function (i, v) {
			if (traditionnel || rbracket.test (préfixe)) {

				// Traite chaque élément du tableau comme un scalaire.
				add (préfixe, v);

			} autre {

				// L'élément n'est pas scalaire (tableau ou objet), code son index numérique.
				buildParams (
					préfixe + "[" + (typeof v === "objet" && v! = null? i: "") + "]",
					v,
					traditionnel,
					ajouter
				)
			}
		});

	} else if (! traditional && toType (obj) === "objet") {

		// Sérialiser un objet.
		pour (nom dans obj) {
			buildParams (préfixe + "[" + nom + "]", obj [nom], traditionnel, ajouter);
		}

	} autre {

		// Sérialiser un élément scalaire.
		add (préfixe, obj);
	}
}

// Sérialiser un tableau d'éléments de formulaire ou un ensemble de
// clé / valeurs dans une chaîne de requête
jQuery.param = function (a, traditionnel) {
	préfixe var,
		s = [],
		add = function (key, valueOrFunction) {

			// Si value est une fonction, appelez-la et utilisez sa valeur de retour
			var value = isFunction (valueOrFunction)?
				valueOrFunction ():
				valueOrFunction;

			s [longueur s] = encodeURIComponent (clé) + "=" +
				encodeURIComponent (valeur == null? "": valeur);
		};

	// Si un tableau a été passé, supposons qu'il s'agisse d'un tableau d'éléments de formulaire.
	if (Array.isArray (a) || (a.jquery &&! jQuery.isPlainObject (a))) {

		// Sérialiser les éléments de formulaire
		jQuery.each (a, function () {
			add (this.name, this.value);
		});

	} autre {

		// Si traditionnel, encoder le "vieux" chemin (le chemin 1.3.2 ou plus ancien
		// l'a fait), sinon encodez les paramètres de manière récursive.
		pour (préfixe en a) {
			buildParams (préfixe, un [préfixe], traditionnel, add);
		}
	}

	// retourne la sérialisation résultante
	retourne à l'adresse suivante ("&");
};

jQuery.fn.extend ({
	sérialiser: function () {
		retourne jQuery.param (this.serializeArray ());
	},
	serializeArray: function () {
		retourne this.map (function () {

			// Peut ajouter propHook pour "elements" pour filtrer ou ajouter des éléments de formulaire
			var elements = jQuery.prop (this, "elements");
			renvoyer des éléments? jQuery.makeArray (éléments): this;
		})
		.filter (function () {
			var type = this.type;

			// Utilise .is (": disabled") pour que fieldset [disabled] fonctionne
			return this.name &&! jQuery (this) .is (": disabled") &&
				rsubmittable.test (this.nodeName) &&! rsubmitterTypes.test (type) &&
				(this.checked ||! rcheckableType.test (type));
		})
		.map (fonction (i, elem) {
			var val = jQuery (this) .val ();

			if (val == null) {
				return null;
			}

			if (Array.isArray (val)) {
				retourne jQuery.map (val, fonction (val) {
					return {name: elem.name, valeur: val.replace (rCRLF, "\ r \ n")};
				});
			}

			return {name: elem.name, valeur: val.replace (rCRLF, "\ r \ n")};
		}) .get ();
	}
});


var
	r20 = /% 20 / g,
	rhash = /#.*$/,
	rantiCache = / ([? &]) _ = [^ &] * /,
	rheaders = / ^ (. *?): [\ t] * ( [^ \ r \ n] *) $ / mg,

	// # 7653, # 8125, # 8152: détection de protocole local
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = / ^ (?: GET | HEAD) $ /,
	rprotocol = / ^ \ / \ //,

	/ * Préfiltres
	 * 1) Ils sont utiles pour introduire des dataTypes personnalisés (voir ajax / jsonp.js pour un exemple)
	 * 2) Celles-ci s'appellent:
	 * - AVANT de demander un transport
	 * - AFTER paramérialisation (s.data est une chaîne si s.processData est true)
	 * 3) la clé est le type de données
	 * 4) le symbole fourre-tout "*" peut être utilisé
	 * 5) l'exécution commencera par transport dataType et ALORS poursuivra jusqu'à "*" si nécessaire
	 * /
	prefilters = {},

	/ * Transports liaisons
	 * 1) la clé est le type de données
	 * 2) le symbole fourre-tout "*" peut être utilisé
	 * 3) la sélection commencera par transport dataType, puis passera à "*" si nécessaire
	 * /
	transports = {},

	// Évitez la séquence de caractères comment-prolog (# 10098); doit apaiser les peluches et éviter la compression
	allTypes = "* /". concat ("*"),

	// balise d'ancrage pour l'analyse de l'origine du document
	originAnchor = document.createElement ("a");
	originAnchor.href = location.href;

// Base "constructeur" pour jQuery.ajaxPrefilter et jQuery.ajaxTransport
fonction addToPrefiltersOrports (structure) {

	// dataTypeExpression est optionnel et "*" par défaut
	fonction de retour (dataTypeExpression, func) {

		if (typeof dataTypeExpression! == "chaîne") {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase (). match (rnothtmlwhite) || [];

		if (isFunction (func)) {

			// Pour chaque type de données dans l'expression de type de données
			while ((dataType = dataTypes [i ++])) {

				// Préfini si demandé
				if (type de données [0] === "+") {
					dataType = dataType.slice (1) || "*";
					(structure [type de données] = structure [type de données] || []) .unshift (func);

				// Sinon, ajoute
				} autre {
					(structure [type de données] = structure [type de données] || []) .push (func);
				}
			}
		}
	};
}

// fonction d'inspection de base pour les préfiltres et les transports
fonction inspectPrefiltersOrtransport (structure, options, options d'origine, jqXHR) {

	var inspecté = {},
		rechercheTransport = (structure === transports);

	fonction inspecter (dataType) {
		var sélectionné;
		inspecté [type de données] = true;
		jQuery.each (structure [type de données] || [], fonction (_, prefilterOrFactory) {
			var dataTypeOrTransport = prefilterOrFactory (options, originalOptions, jqXHR);
			if (typeof dataTypeOrTransport === "chaîne" &&
				! seekTransport &&! inspected [dataTypeOrTransport]) {

				options.dataTypes.unshift (dataTypeOrTransport);
				inspecter (dataTypeOrTransport);
				retourne faux;
			} sinon si (rechercheTransport) {
				return! (selected = dataTypeOrTransport);
			}
		});
		retour sélectionné;
	}

	return inspect (options.dataTypes [0]) || ! inspected ["*"] && inspect ("*");
}

// Une extension spéciale pour les options ajax
// qui prend des options "à plat" (ne pas être étendu en profondeur)
// Corrections # 9887
fonction ajaxExtend (cible, src) {
	clé var, profonde,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	pour (clé dans src) {
		if (src [clé]! == non défini) {
			(flatOptions [key]? target: (deep || (deep = {}))) [key] = src [key];
		}
	}
	si (profond) {
		jQuery.extend (true, target, deep);
	}

	cible de retour;
}

/ * Gère les réponses à une requête ajax:
 * - trouve le bon type de données (intermédiaire entre le type de contenu et le type de données attendu)
 * - renvoie la réponse correspondante
 * /
fonction ajaxHandleResponses (s, jqXHR, réponses) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Supprimer auto dataType et obtenir le contenu-type dans le processus
	while (dataTypes [0] === "*") {
		dataTypes.shift ();
		if (ct === non défini) {
			ct = s.mimeType || jqXHR.getResponseHeader ("Content-Type");
		}
	}

	// Vérifie s'il s'agit d'un type de contenu connu
	si (ct) {
		pour (tapez le contenu) {
			if (contenus [type] && contenus [type] .test (ct)) {
				dataTypes.unshift (type);
				Pause;
			}
		}
	}

	// Vérifie si nous avons une réponse pour le type de données attendu
	if (dataTypes [0] dans les réponses) {
		finalDataType = dataTypes [0];
	} autre {

		// Essayez convertible dataTypes
		pour (tapez les réponses) {
			if (! dataTypes [0] || s.converters [type + "" + dataTypes [0]]) {
				finalDataType = type;
				Pause;
			}
			si (! firstDataType) {
				firstDataType = type;
			}
		}

		// Ou utilisez simplement le premier
		finalDataType = finalDataType || firstDataType;
	}

	// Si nous avons trouvé un type de données
	// Nous ajoutons le type de données à la liste si nécessaire
	// et retourne la réponse correspondante
	if (finalDataType) {
		if (finalDataType! == dataTypes [0]) {
			dataTypes.unshift (finalDataType);
		}
		renvoyer les réponses [finalDataType];
	}
}

/ * Conversions en chaîne compte tenu de la demande et de la réponse d'origine
 * Définit également les champs responseXXX sur l'instance jqXHR
 * /
fonction ajaxConvert (s, response, jqXHR, isSuccess) {
	var conv2, courant, conv, tmp, prev,
		convertisseurs = {},

		// Travailler avec une copie de dataTypes au cas où nous aurions besoin de la modifier pour la conversion
		dataTypes = s.dataTypes.slice ();

	// Créer une carte de convertisseurs avec des clés minuscules
	if (dataTypes [1]) {
		pour (conv. dans les convertisseurs) {
			convertisseurs [conv.toLowerCase ()] = s.converters [conv];
		}
	}

	current = dataTypes.shift ();

	// Conversion en chaque type de données séquentiel
	while (actuel) {

		if (s.responseFields [current]) {
			jqXHR [s.responseFields [current]] = response;
		}

		// Appliquer le dataFilter si fourni
		if (! prev && isSuccess && s.dataFilter) {
			response = s.dataFilter (response, s.dataType);
		}

		prev = courant;
		current = dataTypes.shift ();

		si (actuel) {

			// Il n'y a de travail à faire que si le type de données actuel est non automatique
			if (actuel === "*") {

				current = prev;

			// Convertir la réponse si prev dataType n'est pas automatique et diffère de l'actuel
			} else if (prev! == "*" && prev! == actuel) {

				// Cherche un convertisseur direct
				conv = convertisseurs [prev + "" + current] || convertisseurs ["*" + courant];

				// Si aucun n'est trouvé, cherche une paire
				si (! conv) {
					pour (conv2 dans les convertisseurs) {

						// Si conv2 fournit du courant
						tmp = conv2.split ("");
						if (tmp [1] === actuel) {

							// If prev peut être converti en entrée acceptée
							conv = convertisseurs [prev + "" + tmp [0]] ||
								convertisseurs ["*" + tmp [0]];
							si (conv) {

								// Convertisseurs d'équivalence condensés
								if (conv === true) {
									conv = convertisseurs [conv2];

								// Sinon, insère le type de données intermédiaire
								} else if (convertisseurs [conv2]! == true) {
									courant = tmp [0];
									dataTypes.unshift (tmp [1]);
								}
								Pause;
							}
						}
					}
				}

				// Appliquer le convertisseur (si ce n'est une équivalence)
				if (conv! == true) {

					// Sauf si des erreurs sont autorisées à faire des bulles, les récupérer et les renvoyer
					if (conv && s.throws) {
						réponse = conv (réponse);
					} autre {
						essayer {
							réponse = conv (réponse);
						} catch (e) {
							revenir {
								state: "parsererror",
								erreur: conv? e: "Pas de conversion de" + prev + "en" + courant
							};
						}
					}
				}
			}
		}
	}

	return {state: "success", data: response};
}

jQuery.extend ({

	// Compteur contenant le nombre de requêtes actives
	actif: 0,

	// Cache d'en-tête en dernier lieu modifié pour la demande suivante
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test (location.protocol),
		global: vrai,
		processData: true,
		async: true,
		contentType: "application / x-www-form-urlencoded; charset = UTF-8",

		/ *
		délai d'attente: 0,
		data: null,
		dataType: null,
		nom d'utilisateur: null,
		mot de passe: null,
		cache: null,
		jette: faux,
		traditionnel: faux,
		en-têtes: {},
		* /

		accepte: {
			"*": tous les types,
			text: "text / plain",
			html: "text / html",
			xml: "application / xml, text / xml",
			json: "application / json, text / javascript"
		},

		Contenu: {
			xml: / \ bxml \ b /,
			html: / \ bhtml /,
			json: / \ bjson \ b /
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Convertisseurs de données
		// Les clés séparent les types source (ou catchall "*") et destination avec un seul espace
		convertisseurs: {

			// Convertit n'importe quoi en texte
			"* text": String,

			// Texte en HTML (true = pas de transformation)
			"text html": true,

			// Evalue le texte en tant qu'expression json
			"text json": JSON.parse,

			// Analyse le texte en XML
			"texte xml": jQuery.parseXML
		},

		// Pour les options qui ne devraient pas être étendues en profondeur:
		// vous pouvez ajouter vos propres options personnalisées ici si
		// et quand vous en créez un qui ne devrait pas l'être
		// deep extended (voir ajaxExtend)
		flatOptions: {
			url: true,
			contexte: true
		}
	},

	// Crée un objet de paramètres à part entière dans la cible
	// avec les champs ajaxSettings et settings.
	// Si target est omis, écrit dans ajaxSettings.
	ajaxSetup: fonction (cible, paramètres) {
		revenir aux paramètres?

			// Construction d'un objet de paramètres
			ajaxExtend (ajaxExtend (cible, jQuery.ajaxSettings), paramètres):

			// Extension de ajaxSettings
			ajaxExtend (jQuery.ajaxSettings, cible);
	},

	ajaxPrefilter: addToPrefiltersOrports (préfiltres),
	ajaxTransport: addToPrefiltersOright (transports),

	// Méthode principale
	ajax: fonction (url, options) {

		// Si l'URL est un objet, simuler une signature antérieure à 1.5
		if (typeof url === "objet") {
			options = url;
			url = non défini;
		}

		// Forcer les options à être un objet
		options = options || {};

		transport var,

			// URL sans paramètre anti-cache
			cacheURL,

			// en-têtes de réponse
			responseHeadersString,
			responseHeaders,

			// poignée de délai d'attente
			timeoutTimer,

			// URL de nettoyage var
			urlAnchor,

			// Etat de la demande (devient faux à l'envoi et vrai à la fin)
			terminé,

			// Pour savoir si des événements globaux doivent être envoyés
			fireGlobals,

			// variable de boucle
			je,

			// partie non mise en cache de l'URL
			non mis en cache,

			// Crée l'objet final d'options
			s = jQuery.ajaxSetup ({}, options),

			// Contexte de rappel
			callbackContext = s.context || s,

			// Le contexte pour les événements globaux est callbackContext s'il s'agit d'un nœud DOM ou d'une collection jQuery
			globalEventContext = s.context &&
				(callbackContext.nodeType || callbackContext.jquery)?
					jQuery (callbackContext):
					jQuery.event,

			// différé
			deferred = jQuery.Deferred (),
			completeDeferred = jQuery.Callbacks ("une fois en mémoire"),

			// rappels dépendants du statut
			statusCode = à l'étatCode || {},

			// En-têtes (ils sont envoyés en une fois)
			requestHeaders = {},
			requestHeadersNames = {},

			// Message d'abandon par défaut
			strAbort = "annulé",

			// Faux xhr
			jqXHR = {
				readyState: 0,

				// Construit la hashtable des en-têtes si nécessaire
				getResponseHeader: fonction (clé) {
					match var;
					si (complété) {
						if (! responseHeaders) {
							responseHeaders = {};
							while ((match = rheaders.exec (responseHeadersString)))) {
								responseHeaders [match [1] .toLowerCase ()] = match [2];
							}
						}
						match = responseHeaders [key.toLowerCase ()];
					}
					match retour == null? null: match;
				},

				// chaîne brute
				getAllResponseHeaders: function () {
					retour terminé? responseHeadersString: null;
				},

				// met en cache l'en-tête
				setRequestHeader: fonction (nom, valeur) {
					si (complété == null) {
						name = requestHeadersNames [name.toLowerCase ()] =
							requestHeadersNames [name.toLowerCase ()] || prénom;
						requestHeaders [nom] = valeur;
					}
					retournez ceci;
				},

				// Substitue l'en-tête de type de contenu de réponse
				overrideMimeType: function (type) {
					si (complété == null) {
						s.mimeType = type;
					}
					retournez ceci;
				},

				// rappels dépendants du statut
				statusCode: fonction (carte) {
					code var;
					si (carte) {
						si (complété) {

							// Exécuter les rappels appropriés
							jqXHR.always (map [jqXHR.status]);
						} autre {

							// Lazy-ajouter les nouveaux rappels d'une manière qui conserve les anciens
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extraire la liste de dataTypes
		s.dataTypes = (s.dataType || "*") .toLowerCase (). match (rnothtmlwhite) || [""];

		// Une demande interdomaine est en ordre lorsque l'origine ne correspond pas à l'origine actuelle.
		if (s.crossDomain == null) {
			urlAnchor = document.createElement ("a");

			// Support: IE <= 8 - 11, Edge 12 - 15
			// IE lève une exception sur l'accès à la propriété href si l'URL est mal formée,
			// par exemple http://example.com:80x/
			essayer {
				urlAnchor.href = s.url;

				// Support: IE <= 8 - 11 seulement
				// La propriété hôte d'Anchor n'est pas correctement définie lorsque s.url est relatif
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host! ==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch (e) {

				// S'il y a une erreur d'analyse de l'URL, supposons qu'il s'agisse de crossDomain,
				// il peut être rejeté par le transport s'il est invalide
				s.crossDomain = true;
			}
		}

		// Convertir des données s'il ne s'agit pas déjà d'une chaîne
		if (s.data && s.processData && typeof s.data! == "chaîne") {
			s.data = jQuery.param (s.data, s.traditional);
		}

		// Appliquer les préfiltres
		inspectPrefiltersOrtransports (préfiltres, s, options, jqXHR);

		// Si la requête a été abandonnée à l'intérieur d'un préfiltre, arrêtez-vous là
		si (complété) {
			retourne jqXHR;
		}

		// Nous pouvons déclencher des événements mondiaux dès maintenant si on nous le demande
		// Ne déclenche pas d'événements si jQuery.event n'est pas défini dans un scénario d'utilisation d'AMD (# 15118)
		fireGlobals = jQuery.event && s.global;

		// Surveillez un nouvel ensemble de demandes
		if (fireGlobals && jQuery.active ++ === 0) {
			jQuery.event.trigger ("ajaxStart");
		}

		// le type en majuscule
		s.type = s.type.toUpperCase ();

		// Déterminer si la requête a un contenu
		s.hasContent =! rnoContent.test (s.type);

		// Sauvegarde l'URL au cas où nous jouerions avec If-Modified-Since
		// et / ou en-tête If-None-Match ultérieurement
		// Supprimer le hachage pour simplifier la manipulation des URL
		cacheURL = s.url.replace (rhash, "");

		// Plus d'options de traitement pour les demandes sans contenu
		si (! s.hasContent) {

			// Souviens-toi du hash pour pouvoir le remettre en place
			uncached = s.url.slice (cacheURL.length);

			// Si les données sont disponibles et doivent être traitées, ajoutez les données à l'URL
			if (s.data && (s.processData || typeof s.data === "chaîne")) {
				cacheURL + = (rquery.test (cacheURL)? "&": "?") + s.data;

				// # 9682: supprime les données afin qu'elles ne soient pas utilisées lors d'une nouvelle tentative
				supprimer les données;
			}

			// Ajouter ou mettre à jour le paramètre anti-cache si nécessaire
			if (s.cache === false) {
				cacheURL = cacheURL.replace (rantiCache, "$ 1");
				uncached = (rquery.test (cacheURL)? "&": "?") + "_ =" + (nonce ++) + uncached;
			}

			// Met le hachage et l'anti-cache sur l'URL qui sera demandée (gh-1732)
			s.url = cacheURL + uncached;

		// Change '% 20' en '+' s'il s'agit d'un contenu de corps de formulaire codé (gh-2658)
		} else if (s.data && s.processData &&
			(s.contentType || "") .indexOf ("application / x-www-form-urlencoded") === 0) {
			s.data = s.data.replace (r20, "+");
		}

		// Définit l'en-tête If-Modified-Since et / ou If-None-Match, si en mode ifModified.
		if (s.ifModified) {
			if (jQuery.lastModified [cacheURL]) {
				jqXHR.setRequestHeader ("If-Modified-Since", jQuery.lastModified [cacheURL]);
			}
			if (jQuery.etag [cacheURL]) {
				jqXHR.setRequestHeader ("If-None-Match", jQuery.etag [cacheURL]);
			}
		}

		// Définit l'en-tête correct, si des données sont envoyées
		if (s.data && s.hasContent && s.contentType! == false || options.contentType) {
			jqXHR.setRequestHeader ("Content-Type", s.contentType);
		}

		// Définit l'en-tête Accepte pour le serveur, en fonction du type de données.
		jqXHR.setRequestHeader (
			"Acceptez",
			s.dataTypes [0] && s.accepts [s.dataTypes [0]]?
				s.accepts [s.dataTypes [0]] +
					(s.dataTypes [0]! == "*"? "," + tous les types + "; q = 0.01": ""):
				s.accepts ["*"]
		)

		// Vérifier l'option des en-têtes
		pour (je dans les en-têtes) {
			jqXHR.setRequestHeader (i, en-têtes [i]);
		}

		// Autorise les en-têtes / types MIME personnalisés et l'abandon précoce
		si (s.avantEnvoie &&
			(s.beforeSend.call (callbackContext, jqXHR, s) === false || complete)) {

			// Abandonne si ce n'est déjà fait et retourne
			renvoyer jqXHR.abort ();
		}

		// Abandonner n'est plus une annulation
		strAbort = "abandonner";

		// Installer des callbacks sur différés
		completeDeferred.add (s.complete);
		jqXHR.done (à la réussite);
		jqXHR.fail (s.error);

		// prend le transport
		transport = inspectPrefiltersOrports (transports, s, options, jqXHR);

		// Si aucun transport, nous abandonnons automatiquement
		si (! transport) {
			done (-1, "Pas de transport");
		} autre {
			jqXHR.readyState = 1;

			// Envoyer un événement global
			if (fireGlobals) {
				globalEventContext.trigger ("ajaxSend", [jqXHR, s]);
			}

			// Si la requête a été abandonnée dans ajaxSend, arrêtez-vous là
			si (complété) {
				retourne jqXHR;
			}

			// Temps libre
			if (s.async && s.timeout> 0) {
				timeoutTimer = window.setTimeout (function () {
					jqXHR.abort ("timeout");
				}, à la fin);
			}

			essayer {
				complété = faux;
				transport.send (requestHeaders, done);
			} catch (e) {

				// Retire les exceptions après achèvement
				si (complété) {
					lancer e;
				}

				// Propager les autres en tant que résultats
				fait (-1, e);
			}
		}

		// Rappel pour quand tout est fini
		fonction effectuée (status, nativeStatusText, réponses, en-têtes) {
			var isSuccess, succès, erreur, réponse, modifié,
				statusText = nativeStatusText;

			// Ignorer les invocations de répétition
			si (complété) {
				revenir;
			}

			terminé = vrai;

			// Effacer le délai d'attente s'il existe
			if (timeoutTimer) {
				window.clearTimeout (timeoutTimer);
			}

			// Transport de déréférence pour la collecte des ordures au début
			// (peu importe combien de temps l'objet jqXHR sera utilisé)
			transport = non défini;

			// Cache les en-têtes de réponse
			responseHeadersString = en-têtes || "";

			// Set readyState
			jqXHR.readyState = status> 0? 4: 0;

			// Détermine si réussi
			isSuccess = status> = 200 && status <300 || statut === 304;

			// Obtenir les données de réponse
			si (réponses) {
				response = ajaxHandleResponses (s, jqXHR, réponses);
			}

			// Convertit n'importe quoi (de cette façon, les champs responseXXX sont toujours définis)
			response = ajaxConvert (s, response, jqXHR, isSuccess);

			// En cas de succès, gère le chaînage
			if (isSuccess) {

				// Définit l'en-tête If-Modified-Since et / ou If-None-Match, si en mode ifModified.
				if (s.ifModified) {
					modified = jqXHR.getResponseHeader ("Last-Modified");
					si (modifié) {
						jQuery.lastModified [cacheURL] = modifié;
					}
					modified = jqXHR.getResponseHeader ("etag");
					si (modifié) {
						jQuery.etag [cacheURL] = modifié;
					}
				}

				// si pas de contenu
				if (status === 204 || du type === "HEAD") {
					statusText = "nocontent";

				// si non modifié
				} sinon si (statut === 304) {
					statusText = "non modifié";

				// Si nous avons des données, convertissons-les
				} autre {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess =! error;
				}
			} autre {

				// Extrait l'erreur de statusText et normalise pour les non-abandons
				error = statusText;
				if (status ||! statusText) {
					statusText = "erreur";
					si (statut <0) {
						statut = 0;
					}
				}
			}

			// Définir les données pour le faux objet xhr
			jqXHR.status = status;
			jqXHR.statusText = (nativeStatusText || statusText) + "";

			// succès / erreur
			if (isSuccess) {
				deferred.resolveWith (callbackContext, [success, statusText, jqXHR]);
			} autre {
				deferred.rejectWith (callbackContext, [jqXHR, statusText, error]);
			}

			// rappels dépendants du statut
			jqXHR.statusCode (statusCode);
			statusCode = non défini;

			if (fireGlobals) {
				globalEventContext.trigger (isSuccess? "ajaxSuccess": "ajaxError",
					[jqXHR, s, isSuccess? succès: erreur]);
			}

			// Achevée
			completeDeferred.fireWith (callbackContext, [jqXHR, statusText]);

			if (fireGlobals) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: méthode,
			dataType: type,
			data: data,
			succès: rappel
		}, jQuery.isPlainObject (url) && url));
	};
});


jQuery._evalUrl = fonction (url) {
	retourne jQuery.ajax ({
		url: url,

		// Rendre ceci explicite, car l'utilisateur peut le remplacer par ajaxSetup (# 11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: faux,
		"jette": vrai
	});
};


jQuery.fn.extend ({
	wrapAll: function (html) {
		var wrap;

		si (ce [0]) {
			if (isFunction (html)) {
				html = html.call (this [0]);
			}

			// Les éléments à entourer de la cible
			wrap = jQuery (html, this [0] .ownerDocument) .eq (0) .clone (true);

			if (this [0] .parentNode) {
				wrap.insertBefore (this [0]);
			}

			wrap.map (function () {
				var elem = this;

				while (elem.firstElementChild) {
					elem = elem.firstElementChild;
				}

				renvoyer elem;
			}) .append (this);
		}

		retournez ceci;
	},

	wrapInner: function (html) {
		if (isFunction (html)) {
			retourne this.each (fonction (i) {
				jQuery (this) .wrapInner (html.call (this, i));
			});
		}

		retourne this.each (function () {
			var self = jQuery (this),
				contents = self.contents ();

			si (contenu.longueur) {
				contents.wrapAll (html);

			} autre {
				self.append (html);
			}
		});
	},

	wrap: function (html) {
		var htmlIsFunction = isFunction (html);

		retourne this.each (fonction (i) {
			jQuery (this) .wrapAll (htmlIsFunction? html.call (this, i): html);
		});
	},

	décompresser: fonction (sélecteur) {
		this.parent (sélecteur) .not ("body") .each (function () {
			jQuery (this) .replaceWith (this.childNodes);
		});
		retournez ceci;
	}
});


jQuery.expr.pseudos.hidden = function (elem) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback ("abort");

				essayer {

					// envoie la demande (cela peut déclencher une exception)
					xhr.send (options.hasContent && options.data || null);
				} catch (e) {

					// # 14683: Renouveler uniquement si cela n'a pas encore été signalé comme une erreur
					si (rappel) {
						lancer e;
					}
				}
			},

			abort: function () {
				si (rappel) {
					rappeler();
				}
			}
		};
	}
});




// Empêche l'exécution automatique des scripts lorsqu'aucun type de données explicite n'a été fourni (Voir gh-2432)
jQuery.ajaxPrefilter (fonction (s) {
	if (s.crossDomain) {
		s.contents.script = false;
	}
});

// Installer le script dataType
jQuery.ajaxSetup ({
	accepte: {
		script: "texte / javascript, application / javascript," +
			"application / ecmascript, application / x-ecmascript"
	},
	Contenu: {
		script: / \ b (?: java | ecma) script \ b /
	},
	convertisseurs: {
		"script de texte": function (text) {
			jQuery.globalEval (text);
			renvoyer le texte;
		}
	}
});

// Gère le cas spécial du cache et crossDomain
jQuery.ajaxPrefilter ("script", fonction (s) {
	if (s.cache === non défini) {
		s.cache = false;
	}
	if (s.crossDomain) {
		s.type = "GET";
	}
});

// Lier le script à un hack transport
jQuery.ajaxTransport ("script", fonction (s) {

	// Ce transport ne traite que les requêtes entre domaines
	if (s.crossDomain) {
		script var, rappel;
		revenir {
			send: function (_, complete) {
				script = jQuery ("<script>") .prop ({
					charset: s.scriptCharset,
					src: s.url
				} ).sur(
					"erreur de chargement",
					callback = function (evt) {
						script.remove ();
						callback = null;
						si (evt) {
							complete (evt.type === "erreur"? 404: 200, evt.type);
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Utiliser le convertisseur de données pour récupérer json après l'exécution du script
		s.converters ["script json"] = function () {
			if (! responseContainer) {
				jQuery.error (callbackName + "n'a pas été appelé");
			}
			return responseContainer [0];
		};

		// Force json dataType
		s.dataTypes [0] = "json";

		// Installer le rappel
		écrasé = window [callbackName];
		window [callbackName] = function () {
			responseContainer = arguments;
		};

		// Fonction de nettoyage (se déclenche après les convertisseurs)
		jqXHR.always (function () {

			// Si la valeur précédente n'existait pas - supprimez-la
			if (écrasé === non défini) {
				jQuery (fenêtre) .removeProp (callbackName);

			// Sinon, restaure une valeur préexistante
			} autre {
				window [callbackName] = écrasé;
			}

			// Sauvegarde libre
			if (s [callbackName]) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument ("") .body;
	body.innerHTML = "<form> </ form> <form> </ form>";
	return body.childNodes.length === 2;
}) ();


// L'argument "data" doit être une chaîne de caractères HTML.
// contexte (facultatif): si spécifié, le fragment sera créé dans ce contexte,
// valeur par défaut du document
// keepScripts (optionnel): Si true, inclura les scripts passés dans la chaîne html
jQuery.parseHTML = function (données, contexte, keepScripts) {
	if (typeof data! == "chaîne") {
		revenir [];
	}
	if (typeof context === "boolean") {
		keepScripts = contexte;
		contexte = faux;
	}

	var base, analysé, scripts;

	si (! contexte) {

		// Arrête l'exécution immédiate des scripts ou des gestionnaires d'événements en ligne
		// en utilisant document.implementation
		if (support.createHTMLDocument) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf ("");

	si (off> -1) {
		sélecteur = stripAndCollapse (url.slice (off));
		url = url.slice (0, off);
	}

	// si c'est une fonction
	if (isFunction (params)) {

		// Nous supposons que c'est le rappel
		callback = params;
		params = undefined;

	// Sinon, construit une chaîne de paramètres
	} else if (params && typeof params === "objet") {
		type = "POST";
	}

	// Si nous avons des éléments à modifier, faites la demande
	si (self.length> 0) {
		jQuery.ajax ({
			url: url,

			// Si la variable "type" n'est pas définie, la méthode "GET" sera utilisée.
			// Rendre explicite la valeur de ce champ depuis
			// l'utilisateur peut le remplacer par la méthode ajaxSetup
			type: type || "OBTENIR",
			dataType: "html",
			données: params
		}) .done (function (responseText) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) Pour l'élément body ou html, c'est-à-dire dans le cas du nœud html, il se retournera
	//
	// mais ces exceptions n'ont jamais été présentées comme des cas d'utilisation réels
	// et peut être considéré comme un résultat préférable.
	//
	// Cette logique n'est toutefois pas garantie et peut changer à tout moment dans le futur
	offsetParent: function () {
		retourne this.map (function () {
			var offsetParent = this.offsetParent;

			while (offsetParent && jQuery.css (offsetParent, "position") === "static") {
				offsetParent = offsetParent.offsetParent;
			}

			retour offsetParent || documentElement;
		});
	}
});

// Créer les méthodes scrollLeft et scrollTop
jQuery.each ({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, fonction (méthode, prop) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// plutôt que de faire en sorte que le module css dépende du module offset, vérifiez-le ici
jQuery.each (["top", "left"], fonction (i, prop) {
	jQuery.cssHooks [prop] = addGetHookIf (support.pixelPosition,
		fonction (elem, calculée) {
			if (calculé) {
				calculé = curCSS (elem, prop);

				// Si curCSS renvoie un pourcentage, le repli sur l'offset
				renvoyer rnumnonpx.test (calculé)?
					jQuery (elem) .position () [prop] + "px":
					calculé;
			}
		}
	)
});


// Création des méthodes innerHeight, innerWidth, height, width, outerHeight et outerWidth
jQuery.each ({Hauteur: "hauteur", Largeur: "largeur"}, fonction (nom, type) {
	jQuery.each ({padding: "inner" + nom, contenu: type, "": "outer" + nom},
		fonction (defaultExtra, funcName) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	fonction (i, nom) {

	// Gérer la liaison d'événement
	jQuery.fn [nom] = fonction (données, fn) {
		retourne arguments.length> 0?
			this.on (name, null, data, fn):
			this.trigger (nom);
	};
});

jQuery.fn.extend ({
	hover: fonction (fnOver, fnOut) {
		return this.mouseenter (fnOver) .mouseleave (fnOut || fnOver);
	}
});




jQuery.fn.extend ({

	bind: fonction (types, données, fn) {
		renvoie this.on (types, null, data, fn);
	},
	unbind: fonction (types, fn) {
		renvoyer this.off (types, null, fn);
	},

	délégué: fonction (sélecteur, types, données, fn) {
		retourne this.on (types, selector, data, fn);
	},
	undelegate: function (sélecteur, types, fn) {

		// (espace de noms) ou (sélecteur, types [, fn])
		retourne arguments.length === 1?
			this.off (sélecteur, "**"):
			this.off (types, sélecteur || "**", fn);
	}
});

// Lier une fonction à un contexte, en appliquant éventuellement partiellement
// arguments.
// jQuery.proxy est obsolète pour promouvoir les standards (en particulier Function # bind)
// Cependant, il n'est pas prévu de l'enlever de si tôt
jQuery.proxy = function (fn, contexte) {
	var tmp, args, proxy;

	if (typeof context === "chaîne") {
		tmp = fn [contexte];
		contexte = fn;
		fn = tmp;
	}

	// Vérification rapide pour déterminer si la cible est appelable, dans la spécification
	// ceci renvoie une erreur TypeError, mais nous renverrons simplement undefined.
	if (! isFunction (fn)) {
		return non défini;
	}

	// liaison simulée
	args = slice.call (arguments, 2);
	proxy = fonction () {
		return fn.apply (contexte || this, args.concat (slice.call (arguments)));
	};

	// Définit le guid du gestionnaire unique sur le même gestionnaire que le gestionnaire d'origine, afin qu'il puisse être supprimé
	proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );