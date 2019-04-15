import 'reflect-metadata';
import server from './../server'

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;