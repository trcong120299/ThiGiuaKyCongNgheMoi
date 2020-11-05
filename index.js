const express = require('express')
const app = express()
const port = 3000

const route = require('./route/route.index')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', route);

app.listen(port, () => console.log(`Example app listening on port ${port}`))