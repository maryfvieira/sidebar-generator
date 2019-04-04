import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const config = fs.readFileSync('./config/config.js');


const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})