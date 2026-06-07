const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

// Using bcrypt performing encryption
app.get('/', (Request, Response) => {
    bcrypt.genSalt(10, function(err, salt){
        // Hash means lengthy String
        bcrypt.hash("rdpkbzr", salt, function(err, hash){
            console.log(hash);
        });
    });
})

app.listen(3000)