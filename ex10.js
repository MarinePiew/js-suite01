/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));

//  écrire votre code sous ce commentaire
function shoppingList(panier) {
    var list = {
        "orange": 0,
        "kiwi": 0,
        "ananas": 0,
        "prune": 0,
        "banane": 0,
        "pamplemousse": 0
    }
    var obj = panier.reduce(function(a, b) {
        return a.concat(b);
      }, []);

    for (fruits of obj) {
        switch (fruits) {
            case 'orange':
                list.orange ++
                break;
            case 'kiwi':
                list.kiwi ++
                break;
            case 'ananas':
                list.ananas ++
                break;
            case 'prune':
                list.prune ++
                break;
            case 'banane':
                list.banane ++
                break;
            case 'pamplemousse':
                list.pamplemousse ++
                break;
        }
    }
    console.log(list);
}