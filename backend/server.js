const http = require('http');
const app = require('./app');
function normailizePort(val)
{
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
    
  }else if (port >=0)
  {                                         //ce code a été conçue pour gérer le port entrer
    return port;
  }else
  {
    return false;
  }

}
const port = normailizePort(process.env.PORT || 3000); // Definit la variable port etant normalisée par la fonction normalizePort
app.set('port', port);//Cette ligne utilise la méthode .set() d'une application Express (app) pour définir la propriété 'port' sur la valeur calculée dans l'étape précédente, c'est-à-dire le numéro de port choisi pour l'application. Cela permet à l'application d'utiliser ce numéro de port pour écouter les requêtes entrantes.
function errorHandler(error) {
  if (error.syscall !== 'listen') {
    throw error; //throw error; permet de propager l'erreur actuelle vers des parties du code qui sont en mesure de mieux la traiter en fonction du contexte global de l'application.
  }
  // recuperation de l'adress ou server a été definit
  const address= server.address();
  let addressIsString;

// ... ici, vous obtenez l'adresse ou le port que vous voulez vérifier ...

if (typeof address === 'string') {
  addressIsString = true;
} else {
  addressIsString = false;
}

let bind;
if (addressIsString) {
  bind = 'pipe ' + address;
} else {
  bind = 'port: ' + port;
}

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
// configration du serveur
