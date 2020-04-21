function listeClients(clientFunction) {
    var request = require('request');

    request('http://localhost:8080/clients?start=0&size=5', { json: true },
        function(err, res, body) { 
            if (err) { return console.log('Erreur', err); }

              // body contient les données récupérées     
            //console.log('Ok', body);
            clientFunction(body);
        });

}

exports.liste = listeClients;