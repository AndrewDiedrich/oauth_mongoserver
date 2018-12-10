const express = require('express'); //will use common js modules


//create express app, calling as function creates single express app
//most projects will probably only have one express app in them.
//all route handlers will be registered with app 
const app = express();

//route handler
app.get('/', (req, res) => {
    res.send({ hi: 'buddy' });
});

//production use process.env.port linked to heroku env variable, 
//development use 5000, 
const PORT = process.env.PORT || 5000;
app.listen(PORT);