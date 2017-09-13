const express = require('express');
const bodyParser = require('body-parser');
const messageController = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build'))

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, messageController.create );
app.get( messagesBaseUrl, messageController.read );
app.put( `${messagesBaseUrl}/:id`, messageController.update );
app.delete( `${messagesBaseUrl}/:id`, messageController.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );