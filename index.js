const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Howdy Cowboy.`)
});

app.listen(8000, () => {
    console.log(`learnExpress1 app listening on port 8000!`)
});