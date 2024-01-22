const express = require ('express');
const bodyParser = require ('body-parser');
const mahasiswacontrollers = require ('./controllers/mahasiswacontrollers');
const dosencontrollers = require ('./controllers/dosencontrollers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswacontrollers);
app.use('/dosen', dosencontrollers);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
