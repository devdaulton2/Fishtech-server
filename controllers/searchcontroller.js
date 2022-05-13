let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');

router.get('/practice', function(req, res){
    res.send('Hey! This is a practice route')
})

router.get('/results', async (req, res) => {
    const domainName = 'google.com'
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_RZrOAzmfRHs5RAQBKu6qwubOmDrAR&outputFormat=JSON&domainName=${domainName}`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "oh no",
                error: e,
            })
        })
    console.log("RESPONSE: ", response);
    res.json(response)
})

module.exports = router;