/* 
Du texte brut : text/plain
Du HTML : text/html
Du CSS : text/css
Une image JPEG : image/jpeg
Une vidéo MPEG4 : video/mp4
Un fichier ZIP : application/zip

res.writeHead(200, {"Content-Type": "text/html"}); pour indiquer le type MIME de reponse

*/
//-----------reponse avec du HTML----------
/*var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
    res.end();
});
server.listen(8080);*/
/* var url = require("url"); Pour récupérer la page demandée par le visiteur*/
var http = require('http');
var url = require('url');
var querystring = require('querystring'); //

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    } else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);

/* Ici j'ai donc choisi de commencer à numéroter mon application à la version 0.1.0 (on aurait aussi pu commencer à 1.0.0 mais ç'aurait été prétentieux ;) ).

Si je corrige un bug, l'application passera à la version 0.1.1 et il me faudra mettre à jour ce numéro 
dans le fichier packages.json.

Si j'améliore significativement mon application, elle passera à la version 0.2.0, puis 0.3.0 et ainsi 
de suite.

Le jour où je considère qu'elle a atteint un jalon important, et qu'elle est mature, je pourrai la 
passer en version 1.0.0.*/