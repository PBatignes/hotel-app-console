function start() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");

    // récupération du module `readline` 
    var readline = require('readline');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur 
    var rl = readline.createInterface({ 
        input: process.stdin,
         
        output: process.stdout
    });

    // récupération de la saisie utilisateur 
    rl.question('', function(saisie) { 

        // la variable `saisie` contient la saisie effectuée
        if (saisie == "1") {
            console.log(">> Liste des clients");
            start();
        } else if (saisie == "99") {
            console.log("Aurevoir");
            rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
        }


    });

}

exports.str = start;