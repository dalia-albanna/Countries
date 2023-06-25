const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var countries =[
    {id:1, name: 'Lebanon'},
    {id:2, name:'France'},
    {id:3, name: 'Qatar'},
    {id:4, name: 'Germany'},
    {id:5, name: 'Sweeden'}
]

app.get('/', function (req, res) {
  res.send('Hello Dalia!!!!!')
})

app.get('/abc', function (req, res) {
    res.send('<select><option>Arabic</option><option>English</option></select>')
  })
  app.get('/countries', function (req, res)
   {
    res.send(countries)
  })

  app.post('/addcountry', function (req, res)
  {
      //console.log(req.body)
    countries.push(req.body)
    res.send(countries)
 })
app.listen(3000)