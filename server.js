const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/' , (req , res) => {
    console.log('here')
    res.render("index", {text23423: "world"})
    

})



app.listen(3000)