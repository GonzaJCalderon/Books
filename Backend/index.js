const server = require('./server');
const { conn } = require('./db')

conn.sync({force: true}).then(()=>{
    server.listen(3001, ()=>{
        console.log('server listening at 3001')
    });
});