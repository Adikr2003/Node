const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index', {
      title: 'Home',
      name: 'MyName'
  })
})

app.get('/page1', (req, res) => {
  res.render('page1', {
      title: 'Page 1',
      name: 'MyName'
  })
})

app.get('/page2', (req, res) => {
  res.render('page2', {
      title: 'Page 2',
      name: 'MyName'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})



