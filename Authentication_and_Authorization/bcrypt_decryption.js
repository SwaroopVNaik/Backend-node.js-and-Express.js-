const express = require('express');
const app = express()
const bcrypt = require('bcrypt')

// usinf bcrypt for password Decryption
app.get("/", (Request, Response) => {
    // Comparing hash and Password 
    bcrypt.compare("rdpkbzr", "$RVWEwKFjp7FswuLapSpt.ovdvyyv6wnQTsIhLiMSnJA/KhZxLdwS", function(err, result){
        console.log(result);
    })
});

app.listen(3000);