//Import the necessary modules
const express = require('express')
const app = express()
const logger = require('./routes/users').logger;


//Set view engine - EJS template engine for display data
app.set('view engine', 'ejs')

//Define middleware
app.use(logger)



//Define the routes 
app.get('/' , (req , res,  ) => {
    res.render("index", {text23423: "world"})
    })



// import user router
const userRouter = require('./routes/users')


//mount user router
app.use('/users', userRouter)



//start server
app.listen(3000)