const mongo = require('./database')
const app = require('./app')


app.listen(app.get('PORT'), () => {
    console.log('Servidor en el puerto 4000');
});
