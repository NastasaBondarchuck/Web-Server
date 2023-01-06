const express = require('express')
const routs = require('./router')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routs)
app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log('Server started!')
})


