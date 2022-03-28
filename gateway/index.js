const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');
const cors = require('cors');
const port = 3030;
 
app.use(logger('dev'));
app.use(cors());

const {
    COMENTARIOS_API_URL,
    GBOOKS_API_URL,
} = require('./URLs');
 
function selectProxyHost(req) {
    if (req.path.startsWith('/comentarios'))
        return COMENTARIOS_API_URL;
    else if (req.path.startsWith('/books'))
        return GBOOKS_API_URL;
        
}
 
app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
 
app.listen(port, () => {
    console.log('API Gateway running!');
});