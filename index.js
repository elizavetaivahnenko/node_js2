// const fs =require('fs');
// const db=require('./models/index.js');

// console.log(db);

// // db.forEach(file =>{
// //     console.log(fs.readFileSync(`./models/${file}`, {
// //         encoding: 'utf8'
// //     }))
// // });

// task 2
 
const bcrypt = require('bcrypt');
const users = require('./seed-users');

const hashFun = (users)=>{
    const hashPassword = users.map( u => (
        bcrypt.hashSync(u.password , 5)
    ))
    return hashPassword;
}

const hashUser = hashFun(users);
console.log(hashUser);