// ON FAIT UN CAROUSEL

/********************************
DIFFERENCE ENTRE OBJET ET TABLEAU
let tab = [22, 11, 93]; le talbeau affiche la length, le nombre de contenu. Vu qu'on doit stocker et parcourir des images, c'est plus intéressant. De plus, il propose plus de méthodes.
let obj = { 1: 22, 2: 11, 3: 93 }; l'avantage de l'objet c'est qu'on peut associer n'importe quelle entité avec n'importe quelle valeur. 
*********************************/


// EXERCICE 1 ******************************************************************************
// déclaration de variables
let imgCarrousel = [
    "https://www.wonderplugin.com/wp-content/uploads/2014/03/Desert_960_360.jpg",
    "http://wowslider.com/sliders/demo-37/data1/images/waterandmountains.jpg",
    "https://karczmarczuk.users.greyc.fr/TEACH/Semin/IPimages/arbre1.jpg"
];

let occurrenceCarrousel = 0;

setInterval(function() {
    let img = document.querySelector("#slider img")
    img.src = imgCarrousel[occurrenceCarrousel]; // on a accès à la balise img et toutes ses propriétés comme src ou taille
    occurrenceCarrousel++;
    if (occurrenceCarrousel == imgCarrousel.length) {
        occurrenceCarrousel = 0;
    }
}, 5000);

// attention les var créées dans une fonction n'existent que dans la fonction !!!!!

// EXERCICE 2 **************************************************************************


/* @param text : string - chaine de carac à mélanger 
    @randomText : rend une chaine de carac de manière aléatoire
*/
function randomText(text = "hello the King") {
    let tableau = text.split(""); // permet de convertir une chaine de carac en un tableau de carac
    tableau = arrayToStringRandom(tableau).join(" "); // appel à la 2ème fonction
    console.error(tableau); // affichage du tableau aléatoire
    return tableau;
}


/*
arrayToStringRandom - renvoi un nouveau tableau avec les éléments de l'ancien mais de manière aléatoire
@param tab - tableau à mélanger
@return newArray - un nouveau tableau
*/

function arrayToStringRandom(tab = []) {
    let random, newArray = []; // création de 2 variables - random est la var qui stockera le nb aléatoire - newArray sera le nouveau tableau à créer à partir des nombres aléatoires
    let tabRandom = []; // tableau des entiers déjà récupérés - permet d'éviter les doublons de caractères
    // for permet de générer tous les carac selon la taille du tableau tab
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length); // retourne un entier aléatoire compris entre 0 et la taille de tab

        } while (tabRandom.includes(random)); // vérifie si l'entier a déjà été récupéré/utilisé. Si oui, on en prend un autre, si non, on sort

        tabRandom.push(random); // ajouter l'entier aléatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); // ajouter le carac aléatoire dans newArray
    }
    return newArray; // retourne le nouveau tableau

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // le return permet de sortir une valeur d'une fonction pour pouvoir la réutiliser
}

let baliseA = document.querySelectorAll("#header > nav a");
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML);
}

/******************* EXERCICE 3 ***********************/

// variables

let imgChange = ["http://maryzal.m.a.pic.centerblog.net/60d59d73.jpg",
    "http://wallpaperstorage.com/uploads/posts/frog-valentine-wallpaper-backgrounds/thumb/main_frog-valentine-wallpaper-backgrounds.jpg",
    "https://i.pinimg.com/originals/fb/e0/d2/fbe0d2a1bf0cc9ad3718966efed8e3f4.jpg"
];

let imgHtml = document.querySelectorAll("#services img");
console.log(imgHtml);

// fonction
for (let i = 0; i < imgHtml.length; i++) {
    imgHtml[i].addEventListener("click", function() {
        imgHtml[i].src = imgChange[i];
    });
}