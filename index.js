const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT || 3001

app.use(express.static('public'))

//httpt:/localhost:3000
app.set("view engine",'ejs')
app.set('views' , path.resolve('./views'))
app.get('/',(req,res)=>{
    return res.render('index')
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
}) 
