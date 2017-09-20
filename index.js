const express = require('express');
const app = express();

const port = process.env.PORT | 5000;
app.listen(port, () => console.log("running"));

app.get('/', (req, res) => res.send("WOkring"));