require('./config/config');
require('./models/db');

const express = require('express');
const cors = require('cors');

const routIndex = require('./routes/index.router');

var app = express();
app.use(express.json());

// connection to middleware using use api
app.use(cors());
app.use('/api', routIndex);

// error handler middleware
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));