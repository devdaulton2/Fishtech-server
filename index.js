let express = require('express');
let app = express();

let search = require('./controllers/searchcontroller');

app.use('/test', function(req, res){
    res.send('This is a message from the test endpoint on the server')
})

app.use(require('./middleware/headers'));
app.use('/search', search);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})