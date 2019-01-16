const express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// set morgan
app.use(morgan('dev'));

let showDatabase = {
  0: {
    name: 'Sabrina',
    actors: [
      'Kiernan Shipka',
      'Ross Lynch',
      'Lucy Davis',
      'Chance Perdomo'
    ],
    description: 'Witches',
    ratings: '5/5',
    genres: ['horror', 'drama', 'witches']
  },
  1: {
    name: 'You',
    actors: [
      'Bob',
      'Jane'
    ],
    description: 'psychological thriller television series developed by Greg Berlanti',
    ratings: '2/5',
    genres: ['creepy', 'drama', 'psychological thriller', 'romance']
  },
  2: {
    name: 'American Vandal',
    actors: [
      'Jimmy Tatro',
      'Tyler Alvarez',
      'Melvin Gregg'
    ],
    description: 'True-crime series are gaining popularity on TV so, of course, there was bound to be a satire of the genre. ',
    ratings: '5/5',
    genres: ['satire', 'documentary', 'high school']
  }
}

// CRUD

// READ - everything, or one specific thing

// READ ALL - get /shows

app.get('/shows', function (request, response) {

  console.log('show database', showDatabase)
  
  let templateVars = {
    shows: showDatabase
  }

  response.render('index_shows', templateVars)
})

// CREATE
app.get('/shows/new', function (request, response) {
  response.render('show_new')
})

app.post('/shows', function (request, response) {
  console.log(request.body)

  let showBody = request.body

  let newShow = {
    name: showBody.showName,
    actors: [showBody.actors],
    description: showBody.showDescription,
    ratings: '5/5',
    genres: [showBody.genres]
  }

  showDatabase[6] = newShow

  response.redirect('/shows')
})

// READ ONE - get /shows/:id
app.get('/shows/:id', function (request, response) {
  let show = showDatabase[request.params.id]

  let templateVars = {
    showId: request.params.id,
    show: show
  }

  response.render('show_shows', templateVars)
})


// DELETE
app.post('/shows/:id/delete', function (request, response) {
  let showToDeleteId = request.params.id

  delete showDatabase[showToDeleteId]

  response.redirect('/shows')
})

// GET THE EDIT FORM

app.get('/shows/:id/edit', function (request, response) {
  let showToEditId = request.params.id
  let show = showDatabase[showToEditId]

  let templateVars = {
    showId: showToEditId,
    show: show
  }

  response.render('show_edit', templateVars)
})

// ACTUALLY UPDATE
app.post('/shows/:id', function (request, response) {
  let showToEditId = request.params.id
  
  showDatabase[showToEditId].name = request.body.showName
  showDatabase[showToEditId].description = request.body.showDescription

  response.redirect('/shows/' + showToEditId)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))