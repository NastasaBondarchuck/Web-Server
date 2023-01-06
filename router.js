const {Router} = require('express')
const fs = require('fs')

const routs = Router()

routs.get('/api', async (req, res)=>{
    let data = fs.readFileSync('data.txt').toString()
    res.send(data)
})

routs.post('/api', (req, res) =>{
    console.log(req.body);
    if(!req.body.data) return res.sendStatus(400);

    fs.writeFileSync('data.txt', req.body.data)
    res.sendStatus(200)
})

module.exports = routs
