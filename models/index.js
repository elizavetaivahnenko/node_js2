const fs = require("fs");
const readFile = fs.readdirSync('./models');

const db = readFile.filter( file => 
    file.endsWith('.js') &&
    file !== 'index.js' &&
    !file.startsWith('.')
    );
    
module.exports=db;








