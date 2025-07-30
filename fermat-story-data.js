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

    // Toutes les fins d'impasse avec contexte enrichi
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

    // Tous les autres nœuds intermédiaires...
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

    // ... (continuer avec tous les autres nœuds)
};