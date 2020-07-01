const express = require('express');
const service = require('./service.js');

const app = express();
const port = process.env.PORT || '8000';

app.get('/', (req, res) => {
    res.status(200).send('Very healthy!');
});

app.get('/active-items', async function(req, res) {

    // TODO #1:
     // - Get locale information via query params such as ?locale=en
     // - List only active lots (end_date field should not be in the past)
     // - get title & description via locale information

    const locale = 'en';
    const items = await service.getActiveLotsByLocale(locale);

    res.send({
        items
    });
});

app.get('/prices', async function(req, res) {

    // TODO #2:
        // - Get type information via body { type: 'lot' } or {type: 'auction'}
        // - Calculate price for each type
        // - render the results for each type in json { lot: '1250 EUR', auction: '4500 EUR' }

    const type = 'lot';
    const items = await service.getPrices(type);

    res.send({
        items
    });
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


