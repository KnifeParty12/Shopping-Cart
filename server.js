const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',require('./routes/api').route);
app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(2222,()=> console.log("Server started at http://localhost:2222"));
