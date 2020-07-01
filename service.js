const fs = require('fs');

const getActiveLotsByLocale = function (locale) {

    const data = readFile('data.json');

    // todo

    return data;
};

const getPrices = function (itemType) {

    const data = readFile('data.json');

    // todo

    return data;
};


const readFile = async filePath => {
    try {
        const data = fs.readFileSync(filePath)
        return JSON.parse(data);
    }
    catch(err) {
        console.log(err)
    }
};

module.exports ={
    getActiveLotsByLocale,
    getPrices
};

