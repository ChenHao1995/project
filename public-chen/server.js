var express = require('express')
var app = express()
var consolidate = require('consolidate')


app.use('/js',express.static('js'))
app.use('/lib',express.static('lib'))
app.use('/dist',express.static('dist'))
app.engine('html',consolidate.ejs)
app.set('view engine','html')
app.set('views',__dirname + '/views')
app.use('/home',function(req,res,next){
  res.render('home.html',{
    title:'home'
  })

})


app.listen(8848,function(err){
  if(err){
    throw err
  } else {
    console.log('==> 🌎  Listening on 8848. Open up http://localhost:8848/ in your browser.')
  }

})