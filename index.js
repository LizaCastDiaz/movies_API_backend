const express = require('express');
const app = express();
const router = require('./router');
const colors = require('colors');
const PORT = 3000;

app.use(express.json());
app.use(router)


app.listen(PORT, () => {
    console.log(`Server conected to port ${PORT}`.bgGreen.red);
});