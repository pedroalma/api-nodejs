const express = require('express');
const app = express();
const port = 3000;
const add = require('./add');
app.use(express.static('public'));

console.log(add(2, 3));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/img.png');
});
app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});
