import express from 'express'
import fetch from 'node-fetch'
// const fetch = require('node-fetch')

let app = express()





app.get('/', async (req, res) => {
    console.log(req.ip)
//   var fetch_res = await fetch(`https://ipapi.co/188.163.5.52/json/`);
  var fetch_res = await fetch(`https://ipapi.co/${req.ip}/json/`);
  var fetch_data = await fetch_res.json()
  console.log(fetch_data)

  res.send(`You are from ${JSON.stringify(fetch_data)}`)
})

app.get('/help', async (req, res) => {
res.send('<h1>HELP</h1>')
})
// async - 1 in sec
// sync - 100 in sec


let port = process.env.PORT || 3000


app.listen(port)
// http://localhost:3000