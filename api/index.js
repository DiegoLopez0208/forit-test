const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require ('cors')

const port = 5000; 

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }))

app.post('/save', (req, res) => {
    const data = req.body;
    console.log (data)

    fs.writeFile('newDataUser.json', JSON.stringify(data), (err) => {
        if (err) {
            res.status(500).send('Fallo al guardar la información');
            return;
        }
        res.send('Información guardada exitosamente');
    });
});

app.listen(port , () => {
    console.log(`Servidor inicializado en: http://localhost:${port}`);
});
