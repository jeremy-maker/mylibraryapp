const express = require('express')
const app = express();

//set up author routers
const authorRouter = require('./routes/authorRouter')

//Get Home page
app.get('/',(req,res)=> {
    res.send('<h1>Library System</h1>')
})

//Handle author-management requests
//the authors routes are added onto the end of '/author-management'
app.use('/author-management',authorRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("The library app is running!")
   })
   