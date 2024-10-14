const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Hello World backend!');
});

app.listen(3199, () => {
    console.log('Server is running on port 3001');
});