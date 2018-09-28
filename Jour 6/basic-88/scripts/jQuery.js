/********************************************
DOCUMENTATION jQUERY
https://api.jquery.com/click/#click
https://api.jquery.com/text/#text
https://api.jquery.com/html/#html
https://api.jquery.com/parent/#parent-selector
https://api.jquery.com/children/#children-selector
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date


.html permet de faire référence au texte et d'agir. Si on met qqch entre les () on agit

*******************************************/


// $ remplace querySelectorAll. Pour en sélectionner seulement un, il faut utiliser
// .click remplace addEventListener click
$("#services a").click(function(e) { // le paramètre e dans une fonction capture tous les events liés à la fonction
        e.preventDefault();
        if ($(this).html() == "Read More »") {
            jQuery.data(
                $(this).parent().parent().children("p"), "text",
                $(this).parent().parent().children("p").text()
            );
            $(this).parent().parent().children("p").append("ékqsjeghrkzehtrksetgksrhtkjrhtkrjhtksdrhterklhtrjhtksrhtkrjshtksrht"); // append équivaut à +=
            $(this).html("Read Less &raquo;");
        } else {
            $(this).html("Read More &raquo;");
        }
    })
    // le this permet de faire référence à l'élément avec lequel on a interagi !!!!!! TRES IMPORTANT. Il s'utilise dans une fonction, un event, dans un univers quoi