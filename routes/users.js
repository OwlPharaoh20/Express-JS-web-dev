//Import the necessary modules
const express = require('express')
const router = express.Router()


router.use(logger) // use the logger middleware


router.use(logger)

//Define the routes
//route for user list
router.get('/', (req , res) => {
    res.send('User List') 

})

//route to create a new user (It Posts the Form Gotten from the /new route)
router.post('/', (req, res) => {
    res.send('create User')
})

//Route for new user (Returns a form, to create a new user).
router.get('/new', (req , res) => {
    res.send("User New Form")
  })
  

//route for user with ID
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`)
  })
  .put((req, res) => {
       res.send(`Update User with ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`)

})



const users = [{name: "Kyle"}, {name: "Sally"}, {name: "Sue"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id] 
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


//Export the router, so that it can be used in server.js
module.exports = router

module.exports.logger = logger;