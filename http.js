const { timeStamp } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Ola Mundo!\n');
    }else if(req.url === './api/data' && req.method === 'GET'){
        const data ={ message: 'Dados da APi', timeStamp: new Date() };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Rota nao encontrada\n');
    }
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});