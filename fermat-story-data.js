const story = {
start: {
    title: "Prologue : Le Défi de Fermat",
    year: "1637 - Toulouse, France",
    text: `Vous êtes Pierre de Fermat, magistrat et mathématicien amateur. En lisant l'Arithmétique de Diophante, vous venez de découvrir une propriété fascinante des nombres. Dans la marge de votre livre, vous griffonnez une note qui hantera les mathématiciens pendant plus de 350 ans.`,
    formula: "x<sup>n</sup> + y<sup>n</sup> = z<sup>n</sup> n'a pas de solutions entières pour n > 2",
    choices: [
        { text: "A. Vous écrivez : 'J'ai découvert une démonstration merveilleuse, mais cette marge est trop étroite pour la contenir'", next: "fermat_claim" },
        { text: "B. Vous tentez immédiatement de démontrer le théorème par la méthode de descente infinie", next: "descent_method" },
        { text: "C. Vous cherchez des contre-exemples pour vérifier votre intuition", next: "counterexamples" },
        { text: "D. Vous abandonnez, pensant que c'est trop difficile", next: "give_up_early" }
    ],
    progress: 10
},

// Branches pour la méthode de descente infinie
descent_method: {
    title: "La Méthode de Descente Infinie",
    year: "1638 - Toulouse",
    text: `Vous appliquez votre méthode favorite : la descente infinie. Si une solution existe, alors une plus petite existe aussi, et ainsi de suite... Ce qui mène à une contradiction ! Mais cette méthode fonctionne bien pour n=4. Qu'en est-il du cas général ?`,
    formula: "Si (x₀, y₀, z₀) est solution, alors ∃(x₁, y₁, z₁) plus petite...",
    choices: [
        { text: "A. Essayer de généraliser la méthode pour tout n > 2", next: "generalize_descent" },
        { text: "B. Se concentrer d'abord sur le cas n=3", next: "case_n3" },
        { text: "C. Chercher une approche arithmétique différente", next: "arithmetic_approach" },
        { text: "D. Combiner la descente avec les propriétés des nombres premiers", next: "prime_descent" }
    ],
    progress: 18
},

generalize_descent: {
    title: "La Généralisation Impossible",
    year: "1640 - Toulouse",
    text: `Après deux ans d'efforts acharnés, vous réalisez que la descente infinie ne peut pas se généraliser facilement. Chaque exposant semble nécessiter des astuces spécifiques. Il doit y avoir une raison profonde à cette résistance...`,
    choices: [
        { text: "A. Persévérer malgré les difficultés", next: "dead_end_1" },
        { text: "B. Chercher pourquoi la généralisation échoue", next: "dead_end_1" },
        { text: "C. Revenir à des cas particuliers", next: "dead_end_1" },
        { text: "D. Abandonner cette approche", next: "dead_end_1" }
    ],
    progress: 22
},

// Branches pour les contre-exemples
counterexamples: {
    title: "La Recherche de Contre-exemples",
    year: "1638 - Toulouse",
    text: `Vous calculez méthodiquement : 3³ + 4³ = 27 + 64 = 91... Aucun cube parfait. 2⁴ + 3⁴ = 16 + 81 = 97... Pas une puissance quatrième. Plus vous cherchez, plus votre conviction grandit : il n'y a vraiment pas de solutions !`,
    formula: "Vérification : aucune solution trouvée pour n=3,4,5...",
    choices: [
        { text: "A. Développer un algorithme systématique de recherche", next: "systematic_search" },
        { text: "B. Étudier les résidus modulo des nombres premiers", next: "modular_arithmetic" },
        { text: "C. Chercher des patterns dans les échecs", next: "pattern_analysis" },
        { text: "D. Conclure qu'il n'y a pas de solution et passer à la preuve", next: "proof_attempt" }
    ],
    progress: 18
},

systematic_search: {
    title: "L'Algorithme de Recherche",
    year: "1639 - Toulouse",
    text: `Vous développez une méthode systématique, mais les calculs deviennent rapidement insurmontables. Pour n=5, vérifier toutes les possibilités jusqu'à 100 prendrait des années ! Il faut une approche théorique, pas computationnelle.`,
    choices: [
        { text: "A. Continuer quand même les calculs", next: "dead_end_1" },
        { text: "B. Chercher des bornes théoriques", next: "dead_end_1" },
        { text: "C. Utiliser les symétries pour réduire les cas", next: "dead_end_1" },
        { text: "D. Abandonner l'approche computationnelle", next: "dead_end_1" }
    ],
    progress: 22
},

// Chemin principal conservé
fermat_claim: {
    title: "Chapitre 1 : L'Héritage d'un Mystère",
    year: "1995 - Princeton, États-Unis",
    text: `Vous êtes maintenant Andrew Wiles, mathématicien à Princeton. Depuis votre enfance, vous êtes obsédé par le dernier théorème de Fermat. Après des siècles d'échecs, vous décidez de vous attaquer au problème. Mais par où commencer ? La méthode directe a échoué pendant 350 ans.`,
    formula: "Il faut une approche révolutionnaire...",
    choices: [
        { text: "A. Étudier la conjecture de Shimura-Taniyama-Weil sur les courbes elliptiques", next: "shimura_taniyama" },
        { text: "B. Utiliser la théorie des nombres algébriques de Kummer", next: "kummer_theory" },
        { text: "C. Appliquer les méthodes de géométrie algébrique de Grothendieck", next: "grothendieck_approach" },
        { text: "D. Chercher une preuve élémentaire avec les méthodes du 17ème siècle", next: "elementary_proof" }
    ],
    progress: 25
},

// Branches pour Kummer
kummer_theory: {
    title: "La Théorie de Kummer",
    year: "1995 - Princeton",
    text: `Ernst Kummer a prouvé Fermat pour de nombreux exposants premiers en utilisant les nombres idéaux. Vous plongez dans cette théorie sophistiquée. Les nombres cyclotomiques et la théorie des corps semblent prometteurs...`,
    formula: "ℤ[ζₚ] et la factorisation unique des idéaux",
    choices: [
        { text: "A. Étendre les résultats de Kummer aux exposants composés", next: "extend_kummer" },
        { text: "B. Chercher les cas où la méthode de Kummer échoue", next: "kummer_failures" },
        { text: "C. Combiner avec la théorie de Galois moderne", next: "galois_kummer" },
        { text: "D. Utiliser les formes quadratiques et la théorie des classes", next: "class_field" }
    ],
    progress: 35
},

extend_kummer: {
    title: "Les Limites de l'Extension",
    year: "1996 - Princeton",
    text: `Malgré vos efforts, l'approche de Kummer montre ses limites. Les exposants irréguliers résistent, et la complexité croît exponentiellement. Il manque un ingrédient fondamental pour une preuve complète.`,
    choices: [
        { text: "A. Persister avec des raffinements techniques", next: "dead_end_2" },
        { text: "B. Chercher pourquoi certains cas résistent", next: "dead_end_2" },
        { text: "C. Développer de nouveaux invariants", next: "dead_end_2" },
        { text: "D. Abandonner cette voie", next: "dead_end_2" }
    ],
    progress: 40
},

// Branches pour Grothendieck
grothendieck_approach: {
    title: "La Vision de Grothendieck",
    year: "1995 - Princeton",
    text: `Les schémas, les topos, la cohomologie étale... L'arsenal de Grothendieck est impressionnant. Vous explorez comment ces outils pourraient s'appliquer à Fermat. La géométrie algébrique moderne offre une perspective radicalement nouvelle.`,
    formula: "Spec(ℤ) et la géométrie arithmétique",
    choices: [
        { text: "A. Utiliser la cohomologie étale des courbes de Fermat", next: "etale_cohomology" },
        { text: "B. Appliquer la théorie des motifs", next: "motives_theory" },
        { text: "C. Explorer les catégories dérivées", next: "derived_categories" },
        { text: "D. Étudier les espaces de modules", next: "moduli_spaces" }
    ],
    progress: 35
},

etale_cohomology: {
    title: "La Cohomologie Étale",
    year: "1996 - Princeton",
    text: `La cohomologie étale révèle la structure profonde des variétés arithmétiques. Mais pour Fermat, il manque un pont crucial. Ces outils sont puissants mais ne pointent pas directement vers une solution.`,
    choices: [
        { text: "A. Calculer explicitement les groupes de cohomologie", next: "dead_end_3" },
        { text: "B. Chercher des suites spectrales adaptées", next: "dead_end_3" },
        { text: "C. Utiliser la dualité de Poincaré", next: "dead_end_3" },
        { text: "D. Combiner avec d'autres approches", next: "dead_end_3" }
    ],
    progress: 42
},

// Chemin principal
shimura_taniyama: {
    title: "Chapitre 2 : La Conjecture Révolutionnaire",
    year: "1986 - Berkeley",
    text: `Brillant ! Vous vous souvenez de la conférence de Ken Ribet qui a montré que la conjecture de Shimura-Taniyama-Weil implique le théorème de Fermat. Cette conjecture affirme que toute courbe elliptique rationnelle est modulaire. Si vous pouvez prouver cette conjecture, Fermat tombera !`,
    formula: "Courbe elliptique ↔ Forme modulaire",
    choices: [
        { text: "A. Utiliser la théorie des représentations galoisiennes pour lier courbes elliptiques et formes modulaires", next: "galois_representations" },
        { text: "B. Appliquer directement les séries L et les fonctions zêta", next: "l_series_approach" },
        { text: "C. Utiliser les méthodes de cohomologie étale", next: "cohomology_approach" },
        { text: "D. Étudier les jacobiennes des courbes modulaires", next: "jacobian_approach" }
    ],
    progress: 40
},

// Branches pour les séries L
l_series_approach: {
    title: "Les Séries L et Fonctions Zêta",
    year: "1991 - Princeton",
    text: `Les séries L encodent l'information arithmétique profonde. L'équation fonctionnelle, l'hypothèse de Riemann... Mais comment prouver que les séries L des courbes elliptiques sont modulaires ?`,
    formula: "L(E,s) = L(f,s) ?",
    choices: [
        { text: "A. Utiliser les formules de traces de Selberg", next: "selberg_trace" },
        { text: "B. Appliquer la méthode de Rankin-Selberg", next: "rankin_selberg" },
        { text: "C. Étudier les valeurs spéciales", next: "special_values" },
        { text: "D. Chercher des identités entre séries", next: "series_identities" }
    ],
    progress: 48
},

selberg_trace: {
    title: "La Formule de Trace",
    year: "1992 - Princeton",
    text: `La formule de trace compare spectre et géométrie. Mais pour les courbes elliptiques générales, les calculs deviennent intraitables. Il faut une approche plus structurelle, moins calculatoire.`,
    choices: [
        { text: "A. Simplifier les calculs pour des cas spéciaux", next: "dead_end_3" },
        { text: "B. Chercher des variantes de la formule", next: "dead_end_3" },
        { text: "C. Utiliser l'analyse harmonique", next: "dead_end_3" },
        { text: "D. Abandonner cette approche", next: "dead_end_3" }
    ],
    progress: 52
},

// Chemin principal
galois_representations: {
    title: "Chapitre 3 : Les Représentations Galoisiennes",
    year: "1991 - Princeton",
    text: `Vous travaillez maintenant en secret depuis 7 ans. Les représentations galoisiennes sont la clé ! Elles permettent de traduire les propriétés arithmétiques des courbes elliptiques en propriétés des formes modulaires. Mais il faut encore franchir un obstacle majeur...`,
    formula: "ρ : Gal(Q̄/Q) → GL₂(Z_p)",
    choices: [
        { text: "A. Développer une méthode pour relever les représentations modulaires en caractéristique p", next: "deformation_theory" },
        { text: "B. Utiliser les courbes de Shimura pour construire les représentations", next: "shimura_curves" },
        { text: "C. Appliquer la théorie de Langlands directement", next: "langlands_direct" },
        { text: "D. Chercher des isogénies entre courbes elliptiques", next: "isogenies_search" }
    ],
    progress: 55
},

// Branches alternatives
shimura_curves: {
    title: "Les Courbes de Shimura",
    year: "1992 - Princeton",
    text: `Les courbes de Shimura généralisent les courbes modulaires classiques. Elles semblent offrir un cadre naturel pour construire les représentations galoisiennes. Mais comment les relier aux courbes elliptiques arbitraires ?`,
    formula: "X_D → Courbes elliptiques avec multiplication complexe",
    choices: [
        { text: "A. Étudier les points de Heegner", next: "heegner_points" },
        { text: "B. Utiliser les correspondances de Hecke", next: "hecke_correspondence" },
        { text: "C. Appliquer la théorie de l'intersection", next: "intersection_theory" },
        { text: "D. Chercher des uniformisations p-adiques", next: "p_adic_uniformization" }
    ],
    progress: 62
},

heegner_points: {
    title: "Les Points de Heegner",
    year: "1993 - Princeton",
    text: `Les points de Heegner fournissent des solutions rationnelles, mais seulement pour certaines courbes. L'approche est élégante mais trop restrictive pour le cas général nécessaire à Fermat.`,
    choices: [
        { text: "A. Généraliser la construction de Heegner", next: "dead_end_4" },
        { text: "B. Combiner avec d'autres méthodes", next: "dead_end_4" },
        { text: "C. Étudier les familles de points", next: "dead_end_4" },
        { text: "D. Chercher une approche différente", next: "dead_end_4" }
    ],
    progress: 66
},

// Chemin principal
deformation_theory: {
    title: "Chapitre 4 : La Théorie des Déformations",
    year: "1993 - Princeton",
    text: `Génial ! Vous développez une théorie des déformations des représentations galoisiennes. Cela permet de 'relever' les représentations de caractéristique p vers la caractéristique 0. Mais votre première tentative a une faille...`,
    formula: "R → T (anneau universel de déformation)",
    choices: [
        { text: "A. Collaborer avec Richard Taylor pour combler la lacune avec la théorie d'Iwasawa", next: "taylor_collaboration" },
        { text: "B. Chercher une approche différente via les courbes de Fermat généralisées", next: "generalized_fermat" },
        { text: "C. Utiliser les méthodes de Kolyvagin et les hauteurs d'Arakelov", next: "kolyvagin_method" },
        { text: "D. Abandonner et essayer une approche complètement différente", next: "complete_restart" }
    ],
    progress: 70
},

// Branches alternatives finales
kolyvagin_method: {
    title: "Les Systèmes d'Euler",
    year: "1994 - Princeton",
    text: `Les systèmes d'Euler de Kolyvagin sont puissants pour les courbes de rang analytique ≤ 1. Mais pour la modularité générale nécessaire à Fermat, ils ne suffisent pas. La théorie des déformations reste incomplète.`,
    formula: "Systèmes d'Euler → Finitude de Sha[E]",
    choices: [
        { text: "A. Chercher à étendre les systèmes d'Euler", next: "euler_extension" },
        { text: "B. Combiner avec d'autres approches", next: "combination_attempt" },
        { text: "C. Revenir aux déformations", next: "back_to_deformations" },
        { text: "D. Explorer de nouvelles pistes", next: "new_directions" }
    ],
    progress: 75
},

euler_extension: {
    title: "L'Extension Impossible",
    year: "1994 - Princeton",
    text: `Malgré vos efforts, les systèmes d'Euler résistent à la généralisation. Le problème fondamental de la théorie des déformations demeure. Sans une percée majeure, Fermat reste hors de portée.`,
    choices: [
        { text: "A. Une dernière tentative désespérée", next: "dead_end_5" },
        { text: "B. Chercher de l'aide", next: "dead_end_5" },
        { text: "C. Revoir toute l'approche", next: "dead_end_5" },
        { text: "D. Accepter l'échec", next: "dead_end_5" }
    ],
    progress: 78
},

// Chemin principal final
taylor_collaboration: {
    title: "Chapitre 5 : La Collaboration Décisive",
    year: "1994-1995 - Princeton",
    text: `Avec Richard Taylor, vous développez de nouveaux outils pour traiter les cas résiduels. En utilisant la théorie d'Iwasawa et une construction ingénieuse impliquant les courbes de Hecke, vous parvenez enfin à compléter la preuve !`,
    formula: "∀n>2, x^n + y^n ≠ z^n (x,y,z ∈ ℕ*)",
    choices: [
        { text: "A. Annoncer la preuve complète du théorème de Fermat au monde mathématique", next: "victory" },
        { text: "B. Garder la preuve secrète pour la vérifier encore", next: "secret_verification" },
        { text: "C. Publier seulement la partie sur Shimura-Taniyama", next: "partial_publication" },
        { text: "D. Demander à d'autres de vérifier d'abord", next: "peer_verification" }
    ],
    progress: 85
},

// Branches finales alternatives
secret_verification: {
    title: "La Vérification Secrète",
    year: "1995 - Princeton",
    text: `Vous passez des mois supplémentaires à vérifier chaque détail. La preuve est solide ! Mais pendant ce temps, d'autres mathématiciens se rapprochent de la solution. Le temps presse...`,
    formula: "La preuve est correcte, mais le monde attend",
    choices: [
        { text: "A. Continuer les vérifications", next: "dead_end_6" },
        { text: "B. Publier immédiatement", next: "late_publication" },
        { text: "C. Organiser un séminaire secret", next: "dead_end_6" },
        { text: "D. Attendre le moment parfait", next: "dead_end_6" }
    ],
    progress: 88
},

late_publication: {
    title: "Publication Tardive",
    year: "1996",
    text: `Vous publiez finalement, mais le retard a créé des doutes. La communauté mathématique est sceptique. Votre réputation souffre malgré la validité de la preuve. L'histoire retiendra votre hésitation autant que votre génie.`,
    ending: "failure",
    progress: 90
},

victory: {
    title: "Épilogue : La Gloire Éternelle",
    year: "1995 - Cambridge, Angleterre",
    text: `Félicitations ! Vous avez réussi à suivre le chemin exact qu'Andrew Wiles a emprunté pour prouver le dernier théorème de Fermat. Votre preuve de 109 pages, utilisant les mathématiques les plus avancées du 20ème siècle, résout enfin le mystère vieux de 358 ans.<br><br>
    Le 23 juin 1993, lors d'une conférence à Cambridge, vous avez conclu votre présentation par ces mots historiques : "Je pense que je vais m'arrêter ici" avant de révéler la solution au monde ébahi.<br><br>
    Vous êtes devenu une légende vivante des mathématiques !`,
    formula: "Q.E.D. - Ce qu'il fallait démontrer",
    ending: "success",
    progress: 100
},

// Nouvelles fins intermédiaires ajoutées
give_up_early: {
    title: "L'Abandon Prématuré",
    year: "1637 - Toulouse",
    text: `Découragé par la difficulté apparente, vous rangez vos notes. Votre conjecture restera inconnue, et l'histoire des mathématiques prendra un cours différent. Parfois, la persévérance fait toute la différence entre l'oubli et l'immortalité.`,
    ending: "failure",
    progress: 12
},

case_n3: {
    title: "Le Cas n=3",
    year: "1639 - Toulouse",
    text: `Vous vous concentrez sur les cubes. Euler réussira ce cas un siècle plus tard avec des méthodes ingénieuses. Mais vous, malgré vos efforts, vous vous heurtez aux subtilités des entiers de Gauss. La route est encore longue...`,
    choices: [
        { text: "A. Insister sur cette approche", next: "dead_end_1" },
        { text: "B. Essayer n=5 à la place", next: "dead_end_1" },
        { text: "C. Chercher un principe unificateur", next: "dead_end_1" },
        { text: "D. Revenir à la vue d'ensemble", next: "dead_end_1" }
    ],
    progress: 20
},

arithmetic_approach: {
    title: "L'Approche Arithmétique",
    year: "1639 - Toulouse",
    text: `Vous explorez les propriétés profondes des nombres : divisibilité, congruences, résidus quadratiques... Ces outils sont puissants mais insuffisants pour le cas général. Il faudra attendre Gauss pour vraiment les maîtriser.`,
    choices: [
        { text: "A. Développer une nouvelle arithmétique", next: "dead_end_1" },
        { text: "B. Étudier les formes quadratiques", next: "dead_end_1" },
        { text: "C. Explorer les nombres complexes", next: "dead_end_1" },
        { text: "D. Retourner aux bases", next: "dead_end_1" }
    ],
    progress: 20
},

prime_descent: {
    title: "Descente et Nombres Premiers",
    year: "1640 - Toulouse",
    text: `Vous combinez descente infinie et théorie des nombres premiers. Pour certains exposants premiers, cela fonctionne ! Mais d'autres résistent mystérieusement. Kummer comprendra pourquoi deux siècles plus tard avec ses nombres idéaux.`,
    choices: [
        { text: "A. Classifier les premiers 'faciles' et 'difficiles'", next: "dead_end_1" },
        { text: "B. Chercher ce qui distingue les cas", next: "dead_end_1" },
        { text: "C. Développer de nouveaux outils", next: "dead_end_1" },
        { text: "D. Accepter les limites actuelles", next: "dead_end_1" }
    ],
    progress: 20
},

modular_arithmetic: {
    title: "L'Arithmétique Modulaire",
    year: "1639 - Toulouse",
    text: `Modulo p, les puissances ont des patterns fascinants. Le petit théorème de Fermat (ironiquement !) s'applique. Mais ces observations locales ne donnent pas d'information globale sur l'existence de solutions.`,
    choices: [
        { text: "A. Étudier tous les modules premiers", next: "dead_end_1" },
        { text: "B. Chercher des obstructions locales", next: "dead_end_1" },
        { text: "C. Utiliser le théorème chinois", next: "dead_end_1" },
        { text: "D. Passer au global", next: "dead_end_1" }
    ],
    progress: 20
},

pattern_analysis: {
    title: "L'Analyse des Patterns",
    year: "1639 - Toulouse",
    text: `Vous notez que x^n + y^n est toujours 'loin' d'être une puissance n-ième. Mais quantifier ce 'loin' est difficile. Cette intuition est correcte mais nécessite des outils analytiques qui n'existent pas encore.`,
    choices: [
        { text: "A. Mesurer la 'distance' aux puissances", next: "dead_end_1" },
        { text: "B. Étudier la répartition des puissances", next: "dead_end_1" },
        { text: "C. Chercher des invariants", next: "dead_end_1" },
        { text: "D. Développer une nouvelle approche", next: "dead_end_1" }
    ],
    progress: 20
},

proof_attempt: {
    title: "La Tentative de Preuve",
    year: "1640 - Toulouse",
    text: `Fort de vos observations, vous tentez une preuve générale. Mais chaque approche bute sur la même difficulté : comment passer du particulier au général ? Le problème cache une profondeur insoupçonnée.`,
    choices: [
        { text: "A. Une dernière tentative", next: "dead_end_1" },
        { text: "B. Chercher pourquoi ça résiste", next: "dead_end_1" },
        { text: "C. Consulter d'autres mathématiciens", next: "dead_end_1" },
        { text: "D. Laisser le problème aux générations futures", next: "dead_end_1" }
    ],
    progress: 22
},

elementary_proof: {
    title: "La Quête de la Preuve Élémentaire",
    year: "1995 - Princeton",
    text: `Vous cherchez une preuve 'élémentaire' que Fermat aurait pu connaître. Mais après des décennies d'échecs par les plus grands esprits, cette approche semble vouée à l'échec. Pourtant, l'espoir persiste...`,
    formula: "Méthodes du 17ème siècle : arithmétique et géométrie",
    choices: [
        { text: "A. Réexaminer les méthodes de Fermat lui-même", next: "fermat_methods" },
        { text: "B. Chercher dans les manuscrits perdus", next: "lost_manuscripts" },
        { text: "C. Développer une 'nouvelle' mathématique élémentaire", next: "new_elementary" },
        { text: "D. Combiner toutes les approches élémentaires connues", next: "combined_elementary" }
    ],
    progress: 32
},

fermat_methods: {
    title: "Sur les Traces de Fermat",
    year: "1996 - Princeton",
    text: `Vous étudiez minutieusement toutes les preuves connues de Fermat. Sa descente infinie, ses astuces... Mais rien ne semble s'étendre au cas général. Fermat avait-il vraiment une preuve ?`,
    choices: [
        { text: "A. Reconstituer sa 'preuve merveilleuse'", next: "dead_end_2" },
        { text: "B. Chercher l'erreur qu'il aurait faite", next: "dead_end_2" },
        { text: "C. Explorer ses autres théorèmes", next: "dead_end_2" },
        { text: "D. Accepter qu'il n'avait pas de preuve", next: "dead_end_2" }
    ],
    progress: 36
},

kummer_failures: {
    title: "Les Cas Récalcitrants",
    year: "1996 - Princeton",
    text: `Vous identifiez précisément quand Kummer échoue : les premiers irréguliers. Mais comprendre pourquoi et comment contourner reste mystérieux. Il faut un changement de paradigme.`,
    choices: [
        { text: "A. Attaquer directement les premiers irréguliers", next: "dead_end_2" },
        { text: "B. Chercher une caractérisation différente", next: "dead_end_2" },
        { text: "C. Utiliser des méthodes probabilistes", next: "dead_end_2" },
        { text: "D. Abandonner Kummer", next: "dead_end_2" }
    ],
    progress: 38
},

galois_kummer: {
    title: "Fusion Galois-Kummer",
    year: "1996 - Princeton",
    text: `Combiner Galois et Kummer semble prometteur. Les actions de groupe sur les unités cyclotomiques révèlent une structure riche. Mais le pont vers une preuve complète reste insaisissable.`,
    choices: [
        { text: "A. Approfondir cette fusion", next: "dead_end_2" },
        { text: "B. Chercher d'autres connexions", next: "dead_end_2" },
        { text: "C. Simplifier l'approche", next: "dead_end_2" },
        { text: "D. Changer de stratégie", next: "dead_end_2" }
    ],
    progress: 38
},

class_field: {
    title: "La Théorie des Corps de Classes",
    year: "1996 - Princeton",
    text: `La théorie des corps de classes offre un cadre puissant. Les lois de réciprocité généralisées semblent pertinentes. Mais leur application à Fermat reste obscure malgré leur élégance.`,
    choices: [
        { text: "A. Utiliser la réciprocité d'Artin", next: "dead_end_2" },
        { text: "B. Explorer les extensions abéliennes", next: "dead_end_2" },
        { text: "C. Chercher des analogues géométriques", next: "dead_end_2" },
        { text: "D. Revenir aux fondamentaux", next: "dead_end_2" }
    ],
    progress: 39
},

motives_theory: {
    title: "La Théorie des Motifs",
    year: "1996 - Princeton",
    text: `Les motifs - le rêve de Grothendieck d'une théorie cohomologique universelle. Conceptuellement séduisant, mais encore trop conjectural pour une preuve rigoureuse de Fermat.`,
    choices: [
        { text: "A. Développer les motifs mixtes", next: "dead_end_3" },
        { text: "B. Utiliser les réalisations p-adiques", next: "dead_end_3" },
        { text: "C. Chercher des cas spéciaux", next: "dead_end_3" },
        { text: "D. Attendre que la théorie mûrisse", next: "dead_end_3" }
    ],
    progress: 43
},

derived_categories: {
    title: "Les Catégories Dérivées",
    year: "1996 - Princeton",
    text: `L'algèbre homologique moderne offre des outils sophistiqués. Les catégories dérivées unifient de nombreux phénomènes. Mais leur lien avec l'équation de Fermat reste ténu.`,
    choices: [
        { text: "A. Calculer des Ext et Tor pertinents", next: "dead_end_3" },
        { text: "B. Chercher des équivalences", next: "dead_end_3" },
        { text: "C. Utiliser la dualité", next: "dead_end_3" },
        { text: "D. Simplifier l'approche", next: "dead_end_3" }
    ],
    progress: 43
},

moduli_spaces: {
    title: "Les Espaces de Modules",
    year: "1996 - Princeton",
    text: `Les espaces de modules des courbes de Fermat ont une géométrie fascinante. Mais extraire l'information arithmétique nécessaire pour prouver l'inexistence de points rationnels reste hors de portée.`,
    choices: [
        { text: "A. Étudier la géométrie birationnelle", next: "dead_end_3" },
        { text: "B. Utiliser les fibrés vectoriels", next: "dead_end_3" },
        { text: "C. Appliquer la théorie de l'intersection", next: "dead_end_3" },
        { text: "D. Chercher ailleurs", next: "dead_end_3" }
    ],
    progress: 44
},

cohomology_approach: {
    title: "L'Approche Cohomologique",
    year: "1991 - Princeton",
    text: `La cohomologie étale encode l'arithmétique des variétés. Pour les courbes elliptiques, elle révèle la structure galoisienne. Mais comment la relier aux formes modulaires ?`,
    formula: "H¹(E, ℚₚ) et représentations galoisiennes",
    choices: [
        { text: "A. Calculer explicitement pour des courbes spécifiques", next: "explicit_computation" },
        { text: "B. Utiliser les théorèmes de comparaison", next: "comparison_theorems" },
        { text: "C. Appliquer la théorie de Hodge p-adique", next: "p_adic_hodge" },
        { text: "D. Chercher des foncteurs", next: "functor_search" }
    ],
    progress: 47
},

explicit_computation: {
    title: "Calculs Explicites",
    year: "1992 - Princeton",
    text: `Les calculs deviennent rapidement inextricables. Même pour des courbes simples, la complexité explose. Il faut une approche plus conceptuelle, moins calculatoire.`,
    choices: [
        { text: "A. Utiliser des ordinateurs", next: "dead_end_3" },
        { text: "B. Chercher des simplifications", next: "dead_end_3" },
        { text: "C. Développer des algorithmes", next: "dead_end_3" },
        { text: "D. Abandonner les calculs directs", next: "dead_end_3" }
    ],
    progress: 50
},

jacobian_approach: {
    title: "Les Jacobiennes",
    year: "1991 - Princeton",
    text: `Les jacobiennes des courbes modulaires sont des variétés abéliennes riches en structure. Leurs points rationnels correspondent aux formes modulaires. Mais le lien avec toutes les courbes elliptiques ?`,
    formula: "J₀(N) et les quotients d'Atkin-Lehner",
    choices: [
        { text: "A. Étudier les morphismes vers les courbes elliptiques", next: "morphism_study" },
        { text: "B. Utiliser les opérateurs de Hecke", next: "hecke_operators" },
        { text: "C. Appliquer la théorie de Néron", next: "neron_theory" },
        { text: "D. Chercher des isogénies", next: "isogeny_search" }
    ],
    progress: 47
},

morphism_study: {
    title: "L'Étude des Morphismes",
    year: "1992 - Princeton",
    text: `Les morphismes des jacobiennes vers les courbes elliptiques existent parfois, mais pas toujours. La condition de modularité reste mystérieuse. Il manque un critère général.`,
    choices: [
        { text: "A. Classifier tous les morphismes possibles", next: "dead_end_3" },
        { text: "B. Étudier le noyau et l'image", next: "dead_end_3" },
        { text: "C. Utiliser la dualité", next: "dead_end_3" },
        { text: "D. Chercher une autre approche", next: "dead_end_3" }
    ],
    progress: 50
},

rankin_selberg: {
    title: "La Méthode de Rankin-Selberg",
    year: "1992 - Princeton",
    text: `Les convolutions de Rankin-Selberg permettent d'étudier les produits de séries L. Mais prouver l'égalité avec les séries des courbes elliptiques nécessite de déjà savoir qu'elles sont modulaires !`,
    choices: [
        { text: "A. Contourner la circularité", next: "dead_end_3" },
        { text: "B. Utiliser des cas spéciaux", next: "dead_end_3" },
        { text: "C. Développer des variantes", next: "dead_end_3" },
        { text: "D. Abandonner cette voie", next: "dead_end_3" }
    ],
    progress: 51
},

special_values: {
    title: "Les Valeurs Spéciales",
    year: "1992 - Princeton",
    text: `Les valeurs spéciales des séries L encodent des invariants arithmétiques profonds. La conjecture de Birch et Swinnerton-Dyer les relie au rang. Mais cela ne prouve pas la modularité.`,
    choices: [
        { text: "A. Calculer L(E,1) pour diverses courbes", next: "dead_end_3" },
        { text: "B. Utiliser les formules de Gross-Zagier", next: "dead_end_3" },
        { text: "C. Étudier les zéros", next: "dead_end_3" },
        { text: "D. Chercher ailleurs", next: "dead_end_3" }
    ],
    progress: 51
},

series_identities: {
    title: "Identités entre Séries",
    year: "1992 - Princeton",
    text: `Vous cherchez des identités miraculeuses entre séries L. Quelques cas marchent, mais aucun pattern général n'émerge. L'approche est trop ad hoc pour Shimura-Taniyama complet.`,
    choices: [
        { text: "A. Collectionner plus d'exemples", next: "dead_end_3" },
        { text: "B. Chercher des principes unificateurs", next: "dead_end_3" },
        { text: "C. Utiliser la théorie spectrale", next: "dead_end_3" },
        { text: "D. Abandonner cette stratégie", next: "dead_end_3" }
    ],
    progress: 52
},

langlands_direct: {
    title: "Le Programme de Langlands",
    year: "1992 - Princeton",
    text: `Le programme de Langlands est une vision unificatrice grandiose. Mais sa machinerie est encore trop générale et conjecturale pour une application directe à Shimura-Taniyama.`,
    formula: "Correspondance : Représentations automorphes ↔ Représentations galoisiennes",
    choices: [
        { text: "A. Développer le cas GL₂", next: "gl2_case" },
        { text: "B. Utiliser la fonctorialité", next: "functoriality" },
        { text: "C. Appliquer les conjectures locales", next: "local_conjectures" },
        { text: "D. Simplifier pour les courbes elliptiques", next: "elliptic_simplification" }
    ],
    progress: 62
},

gl2_case: {
    title: "Le Cas GL₂",
    year: "1993 - Princeton",
    text: `Pour GL₂, Langlands est mieux compris. Les formes modulaires sont exactement les formes automorphes pour GL₂. Mais établir que les courbes elliptiques y correspondent reste le défi central.`,
    choices: [
        { text: "A. Utiliser la formule des traces", next: "dead_end_4" },
        { text: "B. Appliquer les L-paquets", next: "dead_end_4" },
        { text: "C. Étudier les induites paraboliques", next: "dead_end_4" },
        { text: "D. Chercher une approche plus directe", next: "dead_end_4" }
    ],
    progress: 65
},

isogenies_search: {
    title: "La Recherche d'Isogénies",
    year: "1992 - Princeton",
    text: `Les isogénies préservent de nombreuses propriétés. Si une courbe est modulaire, ses isogènes le sont aussi. Mais comment démarrer la chaîne ? Il faut au moins une courbe modulaire initiale.`,
    formula: "E₁ → E₂ isogénie ⟹ L(E₁,s) et L(E₂,s) liées",
    choices: [
        { text: "A. Classifier toutes les classes d'isogénie", next: "isogeny_classes" },
        { text: "B. Utiliser les courbes à multiplication complexe", next: "cm_curves" },
        { text: "C. Appliquer la théorie de Honda-Tate", next: "honda_tate" },
        { text: "D. Explorer les graphes d'isogénies", next: "isogeny_graphs" }
    ],
    progress: 62
},

cm_curves: {
    title: "Multiplication Complexe",
    year: "1993 - Princeton",
    text: `Les courbes à multiplication complexe sont effectivement modulaires - un résultat classique. Mais elles forment une classe très spéciale. Comment étendre aux courbes générales ?`,
    choices: [
        { text: "A. Déformer les courbes CM", next: "dead_end_4" },
        { text: "B. Utiliser la théorie de Shimura", next: "dead_end_4" },
        { text: "C. Appliquer Kronecker Jugendtraum", next: "dead_end_4" },
        { text: "D. Chercher une généralisation", next: "dead_end_4" }
    ],
    progress: 66
},

hecke_correspondence: {
    title: "Les Correspondances de Hecke",
    year: "1993 - Princeton",
    text: `Les opérateurs de Hecke organisent l'espace des formes modulaires. Leurs valeurs propres correspondent aux coefficients de Fourier. Mais comment les relier aux courbes elliptiques arbitraires ?`,
    choices: [
        { text: "A. Étudier le spectre de Hecke", next: "dead_end_4" },
        { text: "B. Utiliser l'algèbre de Hecke complète", next: "dead_end_4" },
        { text: "C. Appliquer Eichler-Shimura", next: "dead_end_4" },
        { text: "D. Chercher des eigenforms spéciales", next: "dead_end_4" }
    ],
    progress: 65
},

intersection_theory: {
    title: "Théorie de l'Intersection",
    year: "1993 - Princeton",
    text: `Les nombres d'intersection sur les courbes de Shimura encodent des informations arithmétiques. Les formules de Gross-Kudla sont élégantes. Mais le lien avec la modularité générale reste flou.`,
    choices: [
        { text: "A. Calculer tous les nombres d'intersection", next: "dead_end_4" },
        { text: "B. Utiliser les cycles arithmétiques", next: "dead_end_4" },
        { text: "C. Appliquer Arakelov", next: "dead_end_4" },
        { text: "D. Simplifier l'approche", next: "dead_end_4" }
    ],
    progress: 65
},

p_adic_uniformization: {
    title: "Uniformisation p-adique",
    year: "1993 - Princeton",
    text: `Cerednik a montré que certaines courbes de Shimura uniformisent p-adiquement des courbes elliptiques. Fascinant, mais encore trop restrictif pour le cas général nécessaire.`,
    choices: [
        { text: "A. Étendre le théorème de Cerednik", next: "dead_end_4" },
        { text: "B. Chercher d'autres uniformisations", next: "dead_end_4" },
        { text: "C. Utiliser la géométrie rigide", next: "dead_end_4" },
        { text: "D. Explorer d'autres pistes", next: "dead_end_4" }
    ],
    progress: 66
},

generalized_fermat: {
    title: "Courbes de Fermat Généralisées",
    year: "1994 - Princeton",
    text: `Les courbes x^p + y^q = z^r offrent une généralisation naturelle. Leur géométrie est riche, mais cela éloigne du problème original plutôt que de le résoudre.`,
    formula: "Généralisation : x^p + y^q = z^r",
    choices: [
        { text: "A. Étudier les cas particuliers", next: "special_cases_fermat" },
        { text: "B. Utiliser les revêtements cycliques", next: "cyclic_covers" },
        { text: "C. Appliquer Belyi", next: "belyi_maps" },
        { text: "D. Revenir au cas classique", next: "back_to_classical" }
    ],
    progress: 73
},

special_cases_fermat: {
    title: "Cas Spéciaux",
    year: "1994 - Princeton",
    text: `Certains cas spéciaux des courbes généralisées sont plus accessibles. Mais chaque succès partiel semble ad hoc, sans principe unificateur pour attaquer Fermat original.`,
    choices: [
        { text: "A. Persévérer avec cette approche", next: "dead_end_5" },
        { text: "B. Chercher le principe manquant", next: "dead_end_5" },
        { text: "C. Combiner plusieurs cas", next: "dead_end_5" },
        { text: "D. Abandonner cette voie", next: "dead_end_5" }
    ],
    progress: 76
},

complete_restart: {
    title: "Retour à la Case Départ",
    year: "1994 - Princeton",
    text: `Frustré, vous abandonnez tout et repartez de zéro. Mais sans la théorie des déformations, vous tournez en rond. Les années passent, et d'autres résolvent le problème pendant que vous cherchez.`,
    formula: "Parfois, persévérer est la clé",
    choices: [
        { text: "A. Réessayer une dernière fois", next: "final_attempt" },
        { text: "B. Étudier les travaux des autres", next: "study_others" },
        { text: "C. Changer de problème", next: "change_problem" },
        { text: "D. Accepter l'échec", next: "accept_failure" }
    ],
    progress: 72
},

final_attempt: {
    title: "L'Ultime Tentative",
    year: "1995 - Princeton",
    text: `Dans un dernier effort désespéré, vous reprenez tout depuis le début. Mais il est trop tard. La fenêtre d'opportunité est passée, et votre place dans l'histoire s'est envolée.`,
    ending: "failure",
    progress: 75
},

partial_publication: {
    title: "Publication Partielle",
    year: "1995 - Princeton",
    text: `Vous publiez seulement la partie sur Shimura-Taniyama, gardant le lien avec Fermat secret. Mais d'autres font rapidement la connexion. Votre prudence excessive vous prive de la gloire complète.`,
    formula: "La science récompense l'audace autant que la rigueur",
    choices: [
        { text: "A. Publier rapidement le reste", next: "rushed_publication" },
        { text: "B. Réclamer la priorité", next: "priority_claim" },
        { text: "C. Accepter la situation", next: "accept_partial" },
        { text: "D. Collaborer avec les autres", next: "late_collaboration" }
    ],
    progress: 87
},

rushed_publication: {
    title: "Publication Précipitée",
    year: "1995",
    text: `Dans la hâte de publier le reste, vous commettez des erreurs. La communauté perd confiance. Votre contribution historique est ternie par la précipitation finale.`,
    ending: "failure",
    progress: 89
},

peer_verification: {
    title: "Vérification par les Pairs",
    year: "1995 - Princeton",
    text: `Vous demandez à des collègues de vérifier. Le processus prend des mois. Pendant ce temps, des rumeurs circulent, et d'autres tentent de reproduire votre approche. La course est lancée !`,
    formula: "Le temps est crucial en mathématiques",
    choices: [
        { text: "A. Accélérer la vérification", next: "accelerate_verification" },
        { text: "B. Maintenir le secret absolu", next: "maintain_secrecy" },
        { text: "C. Faire une annonce préliminaire", next: "preliminary_announcement" },
        { text: "D. Continuer méthodiquement", next: "methodical_continuation" }
    ],
    progress: 87
},

preliminary_announcement: {
    title: "L'Annonce Préliminaire",
    year: "1995",
    text: `Vous annoncez avoir une preuve sans donner tous les détails. La pression monte. La communauté attend avec impatience. Mais les doutes grandissent avec chaque jour qui passe...`,
    choices: [
        { text: "A. Révéler la preuve complète maintenant", next: "victory" },
        { text: "B. Attendre encore", next: "dead_end_6" },
        { text: "C. Donner plus de détails", next: "dead_end_6" },
        { text: "D. Se rétracter", next: "dead_end_6" }
    ],
    progress: 92
},

// Dead ends améliorés avec plus de contexte
dead_end_1: {
    title: "Impasse : Les Limites du 17ème Siècle",
    text: `Votre approche, bien que brillante pour l'époque, se heurte aux limites des mathématiques du 17ème siècle. Le théorème de Fermat nécessitera des outils qui ne seront inventés que des siècles plus tard : théorie de Galois, courbes elliptiques, formes modulaires... Votre intuition était correcte, mais l'humanité n'était pas prête.`,
    formula: "Les grands problèmes attendent leur époque",
    ending: "failure",
    progress: 25
},

dead_end_2: {
    title: "Impasse : L'Approche Incomplète",
    text: `Vous avez exploré une voie prometteuse qui a effectivement contribué à l'histoire du problème. Kummer, les corps de nombres, la théorie algébrique... tous ces outils sont importants. Mais seuls, ils ne suffisent pas. Il faudra la synthèse géniale de Wiles combinant géométrie arithmétique et théorie des représentations pour percer le mystère.`,
    formula: "Chaque échec est un pas vers la solution",
    ending: "failure",
    progress: 42
},

dead_end_3: {
    title: "Impasse : La Complexité Excessive",
    text: `Vous vous êtes perdu dans la sophistication technique. Séries L, cohomologie, géométrie algébrique... Ces outils sont puissants mais nécessitent d'être combinés avec la bonne intuition. Le lien crucial entre courbes elliptiques et formes modulaires via les représentations galoisiennes vous a échappé.`,
    formula: "La simplicité émerge de la complexité maîtrisée",
    ending: "failure",
    progress: 53
},

dead_end_4: {
    title: "Impasse : Si Proche et Si Loin",
    text: `Vous touchez du doigt la solution ! Les représentations galoisiennes, les courbes de Shimura, la théorie de Langlands... tous les ingrédients sont là. Mais sans la théorie des déformations pour assembler le puzzle, la preuve reste hors d'atteinte. Wiles mettra 7 ans en secret pour franchir ce dernier obstacle.`,
    formula: "Les derniers pas sont les plus difficiles",
    ending: "failure",
    progress: 68
},

dead_end_5: {
    title: "Impasse : L'Erreur Fatale",
    text: `À ce stade avancé, chaque décision compte. La théorie des déformations est LA clé manquante. Sans elle, même avec toutes les autres pièces du puzzle, la preuve s'effondre. Votre erreur fut de chercher ailleurs alors que la solution était devant vous. Richard Taylor sera crucial pour combler les dernières lacunes.`,
    formula: "En mathématiques, une seule erreur suffit",
    ending: "failure",
    progress: 77
},

dead_end_6: {
    title: "Impasse : L'Hésitation Fatale",
    text: `L'histoire des mathématiques est jonchée de génies qui ont hésité au moment crucial. Vous aviez la preuve complète du dernier théorème de Fermat ! Mais en ne la partageant pas au bon moment, vous avez laissé passer votre chance d'immortalité. D'autres ont peut-être redécouvert votre approche et réclamé la gloire. La science favorise les audacieux.`,
    formula: "Carpe diem - même en mathématiques",
    ending: "failure",
    progress: 95
},

// Nouveaux noeuds intermédiaires
lost_manuscripts: {
    title: "Les Manuscrits Perdus",
    year: "1996 - Bibliothèque de Toulouse",
    text: `Vous fouillez les archives, espérant trouver des notes inédites de Fermat. Quelques fragments intrigants émergent, mais rien de concluant. La 'démonstration merveilleuse' reste un mystère.`,
    choices: [
        { text: "A. Continuer les recherches historiques", next: "dead_end_2" },
        { text: "B. Analyser les fragments trouvés", next: "dead_end_2" },
        { text: "C. Consulter d'autres archives", next: "dead_end_2" },
        { text: "D. Abandonner cette piste", next: "dead_end_2" }
    ],
    progress: 36
},

new_elementary: {
    title: "Une Nouvelle Mathématique Élémentaire",
    year: "1996 - Princeton",
    text: `Vous tentez de créer de nouveaux outils 'élémentaires' mais puissants. C'est ambitieux, mais réinventer les mathématiques prend du temps. Pendant ce temps, d'autres avancent avec les outils modernes.`,
    choices: [
        { text: "A. Persévérer dans cette création", next: "dead_end_2" },
        { text: "B. Publier vos idées partielles", next: "dead_end_2" },
        { text: "C. Collaborer avec d'autres", next: "dead_end_2" },
        { text: "D. Revenir aux méthodes établies", next: "dead_end_2" }
    ],
    progress: 37
},

combined_elementary: {
    title: "La Synthèse Élémentaire",
    year: "1996 - Princeton",
    text: `Vous combinez toutes les approches élémentaires connues : descente infinie, factorisation unique, congruences... La synthèse est impressionnante mais insuffisante. Le problème résiste à l'élémentaire.`,
    choices: [
        { text: "A. Ajouter une touche moderne", next: "dead_end_2" },
        { text: "B. Simplifier encore plus", next: "dead_end_2" },
        { text: "C. Chercher le chaînon manquant", next: "dead_end_2" },
        { text: "D. Accepter les limites", next: "dead_end_2" }
    ],
    progress: 38
},

comparison_theorems: {
    title: "Théorèmes de Comparaison",
    year: "1992 - Princeton",
    text: `Les théorèmes de comparaison relient différentes cohomologies. C'est élégant mais technique. Le lien avec la modularité reste indirect et difficile à exploiter concrètement.`,
    choices: [
        { text: "A. Appliquer Hodge-Tate", next: "dead_end_3" },
        { text: "B. Utiliser Fontaine-Messing", next: "dead_end_3" },
        { text: "C. Explorer de Rham-Weil", next: "dead_end_3" },
        { text: "D. Simplifier l'approche", next: "dead_end_3" }
    ],
    progress: 49
},

p_adic_hodge: {
    title: "Théorie de Hodge p-adique",
    year: "1992 - Princeton",
    text: `La théorie de Hodge p-adique de Fontaine est révolutionnaire. Les périodes p-adiques encodent des informations subtiles. Mais l'application à Shimura-Taniyama n'est pas évidente.`,
    choices: [
        { text: "A. Étudier les anneaux de périodes", next: "dead_end_3" },
        { text: "B. Utiliser la théorie de Sen", next: "dead_end_3" },
        { text: "C. Appliquer Colmez-Fontaine", next: "dead_end_3" },
        { text: "D. Chercher une autre voie", next: "dead_end_3" }
    ],
    progress: 49
},

functor_search: {
    title: "Recherche de Foncteurs",
    year: "1992 - Princeton",
    text: `Un foncteur miracle relierait courbes elliptiques et formes modulaires. Vous explorez diverses constructions catégoriques. Mais le bon foncteur reste insaisissable.`,
    choices: [
        { text: "A. Construire via les schémas en groupes", next: "dead_end_3" },
        { text: "B. Utiliser les champs algébriques", next: "dead_end_3" },
        { text: "C. Explorer les topos", next: "dead_end_3" },
        { text: "D. Revenir au concret", next: "dead_end_3" }
    ],
    progress: 50
},

hecke_operators: {
    title: "Opérateurs de Hecke",
    year: "1992 - Princeton",
    text: `Les opérateurs de Hecke sont fondamentaux pour les formes modulaires. Leurs valeurs propres déterminent les coefficients de Fourier. Mais comment forcer une courbe elliptique à correspondre ?`,
    choices: [
        { text: "A. Étudier l'algèbre de Hecke universelle", next: "dead_end_3" },
        { text: "B. Utiliser les congruences entre formes", next: "dead_end_3" },
        { text: "C. Appliquer multiplicity one", next: "dead_end_3" },
        { text: "D. Explorer d'autres opérateurs", next: "dead_end_3" }
    ],
    progress: 49
},

neron_theory: {
    title: "Modèles de Néron",
    year: "1992 - Princeton",
    text: `Les modèles de Néron donnent la 'meilleure' façon d'étendre une courbe elliptique sur les entiers. Leur structure encode l'information de mauvaise réduction. Utile, mais pas directement pour la modularité.`,
    choices: [
        { text: "A. Étudier les fibres spéciales", next: "dead_end_3" },
        { text: "B. Utiliser les hauteurs canoniques", next: "dead_end_3" },
        { text: "C. Appliquer aux jacobiennes", next: "dead_end_3" },
        { text: "D. Chercher ailleurs", next: "dead_end_3" }
    ],
    progress: 49
},

isogeny_search: {
    title: "Recherche d'Isogénies",
    year: "1992 - Princeton",
    text: `Les isogénies forment un graphe reliant les courbes elliptiques. Si une est modulaire, ses voisines le sont. Mais comment amorcer ? Il faut au moins un point de départ modulaire.`,
    choices: [
        { text: "A. Étudier les volcans d'isogénies", next: "dead_end_3" },
        { text: "B. Utiliser la formule de Vélu", next: "dead_end_3" },
        { text: "C. Appliquer Honda-Tate", next: "dead_end_3" },
        { text: "D. Explorer les graphes d'isogénies", next: "dead_end_3" }
    ],
    progress: 50
},

functoriality: {
    title: "Fonctorialité de Langlands",
    year: "1993 - Princeton",
    text: `La fonctorialité prédit des liens profonds entre différents groupes. Pour passer de GL₁ à GL₂, il faut des ascensions. Mais les preuves manquent encore pour les cas nécessaires.`,
    choices: [
        { text: "A. Prouver des cas de fonctorialité", next: "dead_end_4" },
        { text: "B. Utiliser l'induction automorphe", next: "dead_end_4" },
        { text: "C. Appliquer les L-fonctions", next: "dead_end_4" },
        { text: "D. Simplifier le problème", next: "dead_end_4" }
    ],
    progress: 64
},

local_conjectures: {
    title: "Correspondance Locale",
    year: "1993 - Princeton",
    text: `Localement, Langlands est mieux compris. La correspondance locale de Langlands est prouvée pour GL₂. Mais passer du local au global pour les courbes elliptiques reste délicat.`,
    choices: [
        { text: "A. Utiliser le principe local-global", next: "dead_end_4" },
        { text: "B. Étudier les obstructions", next: "dead_end_4" },
        { text: "C. Appliquer la formule du produit", next: "dead_end_4" },
        { text: "D. Chercher une approche globale directe", next: "dead_end_4" }
    ],
    progress: 64
},

elliptic_simplification: {
    title: "Simplification pour les Courbes Elliptiques",
    year: "1993 - Princeton",
    text: `Vous tentez d'adapter Langlands spécifiquement aux courbes elliptiques. C'est plus concret mais toujours complexe. Le lien avec les formes modulaires de poids 2 reste à établir.`,
    choices: [
        { text: "A. Utiliser la paramétrisation modulaire", next: "dead_end_4" },
        { text: "B. Étudier les twists", next: "dead_end_4" },
        { text: "C. Appliquer la théorie du corps de classes", next: "dead_end_4" },
        { text: "D. Revenir aux représentations", next: "dead_end_4" }
    ],
    progress: 65
},

isogeny_classes: {
    title: "Classes d'Isogénie",
    year: "1993 - Princeton",
    text: `Classifier les classes d'isogénie est un problème profond. Chaque classe forme une composante connexe. Mais déterminer lesquelles sont modulaires reste le mystère central.`,
    choices: [
        { text: "A. Utiliser les invariants j", next: "dead_end_4" },
        { text: "B. Étudier les degrés d'isogénies", next: "dead_end_4" },
        { text: "C. Appliquer Faltings", next: "dead_end_4" },
        { text: "D. Chercher des critères", next: "dead_end_4" }
    ],
    progress: 64
},

honda_tate: {
    title: "Théorie de Honda-Tate",
    year: "1993 - Princeton",
    text: `Honda-Tate classifie les variétés abéliennes sur les corps finis. L'analogie avec les courbes elliptiques sur ℚ est tentante mais incomplète. Les méthodes ne se transfèrent pas directement.`,
    choices: [
        { text: "A. Adapter au cas des rationnels", next: "dead_end_4" },
        { text: "B. Utiliser la réduction modulo p", next: "dead_end_4" },
        { text: "C. Chercher des analogues", next: "dead_end_4" },
        { text: "D. Explorer d'autres théories", next: "dead_end_4" }
    ],
    progress: 65
},

isogeny_graphs: {
    title: "Graphes d'Isogénies",
    year: "1993 - Princeton",
    text: `Les graphes d'isogénies ont une structure fascinante : volcans, cycles... Mais naviguer dedans pour prouver la modularité semble impossible sans point de départ.`,
    choices: [
        { text: "A. Étudier la structure des graphes", next: "dead_end_4" },
        { text: "B. Utiliser les marches aléatoires", next: "dead_end_4" },
        { text: "C. Appliquer la théorie spectrale", next: "dead_end_4" },
        { text: "D. Abandonner cette approche", next: "dead_end_4" }
    ],
    progress: 65
},

cyclic_covers: {
    title: "Revêtements Cycliques",
    year: "1994 - Princeton",
    text: `Les courbes de Fermat sont des revêtements cycliques de la droite projective. Cette structure géométrique est riche mais ne simplifie pas vraiment le problème arithmétique.`,
    choices: [
        { text: "A. Étudier le groupe de monodromie", next: "dead_end_5" },
        { text: "B. Utiliser la théorie de Galois", next: "dead_end_5" },
        { text: "C. Appliquer Riemann-Hurwitz", next: "dead_end_5" },
        { text: "D. Chercher d'autres structures", next: "dead_end_5" }
    ],
    progress: 74
},

belyi_maps: {
    title: "Applications de Belyi",
    year: "1994 - Princeton",
    text: `Le théorème de Belyi relie courbes algébriques et dessins combinatoires. C'est profond et surprenant, mais l'application à Fermat n'est pas claire. La beauté ne suffit pas toujours.`,
    choices: [
        { text: "A. Calculer les dessins d'enfants", next: "dead_end_5" },
        { text: "B. Utiliser l'action de Galois", next: "dead_end_5" },
        { text: "C. Chercher des invariants", next: "dead_end_5" },
        { text: "D. Revenir au problème original", next: "dead_end_5" }
    ],
    progress: 74
},

back_to_classical: {
    title: "Retour au Classique",
    year: "1994 - Princeton",
    text: `Après ces détours, vous revenez au problème classique. Mais vous avez perdu du temps précieux. La théorie des déformations progresse ailleurs pendant vos explorations.`,
    choices: [
        { text: "A. Rattraper le temps perdu", next: "dead_end_5" },
        { text: "B. Intégrer vos découvertes", next: "dead_end_5" },
        { text: "C. Collaborer avec d'autres", next: "dead_end_5" },
        { text: "D. Changer complètement d'approche", next: "dead_end_5" }
    ],
    progress: 75
},

combination_attempt: {
    title: "Tentative de Combinaison",
    year: "1994 - Princeton",
    text: `Vous essayez de combiner systèmes d'Euler, théorie des déformations, et méthodes de Kolyvagin. L'idée est bonne mais l'exécution complexe. Sans guide clair, vous vous perdez dans les détails techniques.`,
    choices: [
        { text: "A. Simplifier drastiquement", next: "dead_end_5" },
        { text: "B. Persévérer dans la complexité", next: "dead_end_5" },
        { text: "C. Demander de l'aide", next: "dead_end_5" },
        { text: "D. Abandonner la combinaison", next: "dead_end_5" }
    ],
    progress: 76
},

back_to_deformations: {
    title: "Retour aux Déformations",
    year: "1994 - Princeton",
    text: `Vous réalisez que la théorie des déformations était la bonne voie. Mais vous avez perdu un temps précieux. D'autres ont progressé, et rattraper devient difficile.`,
    choices: [
        { text: "A. Reprendre où vous étiez", next: "dead_end_5" },
        { text: "B. Chercher une nouvelle approche des déformations", next: "dead_end_5" },
        { text: "C. Étudier les travaux récents", next: "dead_end_5" },
        { text: "D. Collaborer", next: "dead_end_5" }
    ],
    progress: 76
},

new_directions: {
    title: "Nouvelles Directions",
    year: "1994 - Princeton",
    text: `Désespéré, vous explorez des directions complètement nouvelles : physique mathématique, théorie des cordes... Fascinant, mais cela vous éloigne de Fermat. L'innovation doit rester pertinente.`,
    choices: [
        { text: "A. Persister dans l'exploration", next: "dead_end_5" },
        { text: "B. Chercher des connexions avec Fermat", next: "dead_end_5" },
        { text: "C. Publier ces idées séparément", next: "dead_end_5" },
        { text: "D. Revenir à Fermat", next: "dead_end_5" }
    ],
    progress: 74
},

study_others: {
    title: "Étude des Autres Travaux",
    year: "1995 - Princeton",
    text: `Vous étudiez frénétiquement les travaux des autres. Certains semblent sur la bonne voie. Mais comprendre et dépasser prend du temps. La course est perdue d'avance.`,
    ending: "failure",
    progress: 74
},

change_problem: {
    title: "Changement de Cap",
    year: "1995 - Princeton",
    text: `Vous abandonnez Fermat pour d'autres problèmes. Sage décision pour votre santé mentale, mais l'histoire retiendra que vous avez abandonné si près du but. Les 'et si' vous hanteront.`,
    ending: "failure",
    progress: 73
},

accept_failure: {
    title: "L'Acceptation",
    year: "1995 - Princeton",
    text: `Vous acceptez l'échec avec philosophie. Fermat a résisté à des siècles de génies. Mais sachant que vous étiez si proche de la solution finale, l'acceptation a un goût amer.`,
    ending: "failure",
    progress: 72
},

priority_claim: {
    title: "Revendication de Priorité",
    year: "1995",
    text: `Vous tentez de revendiquer la priorité, mais sans la partie sur Fermat, votre claim semble faible. Les disputes de priorité ternissent votre réputation. La gloire vous échappe dans l'amertume.`,
    ending: "failure",
    progress: 88
},

accept_partial: {
    title: "Succès Partiel",
    year: "1995",
    text: `Vous acceptez le succès partiel. Prouver une partie de Shimura-Taniyama est déjà historique. Mais voir d'autres compléter VOTRE approche pour Fermat est doux-amer. L'histoire vous oubliera à moitié.`,
    ending: "failure",
    progress: 87
},

late_collaboration: {
    title: "Collaboration Tardive",
    year: "1995",
    text: `Vous proposez de collaborer, mais c'est trop tard. D'autres ont déjà fait le lien avec Fermat. Votre contribution est diluée. La leçon : en science, le timing est crucial.`,
    ending: "failure",
    progress: 88
},

accelerate_verification: {
    title: "Vérification Accélérée",
    year: "1995",
    text: `Vous accélérez la vérification, coupant certains coins. Une erreur subtile passe inaperçue. Lors de l'annonce, un jeune étudiant trouve la faille. L'humiliation est totale. Fermat se venge une dernière fois.`,
    ending: "failure",
    progress: 89
},

maintain_secrecy: {
    title: "Secret Absolu",
    year: "1995",
    text: `Le secret absolu crée des rumeurs. La paranoïa s'installe. Vous retardez trop. Quand vous êtes enfin prêt, l'atmosphère est empoisonnée par les soupçons. Votre triomphe est gâché.`,
    ending: "failure",
    progress: 88
},
    // ... (continuer avec tous les autres nœuds)
};
