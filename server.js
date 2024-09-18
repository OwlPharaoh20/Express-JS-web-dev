//Import the necessary modules
const express = require('express')
const app = express()


//Set view engine - EJS template engine for display data
app.set('view engine', 'ejs')

//Define middleware
app.use(logger)



//Define the routes 
app.get('/' , (req , res, next ) => {
    console.log('here')
    res.render("index", {text23423: "world"})
    })



// import user router
const userRouter = require('./routes/users')


//mount user router
app.use('/users', userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
//start server
app.listen(3000)