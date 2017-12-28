var express = require('express')
var app = express()
var consolidate = require('consolidate')



app.engine('html',consolidate.ejs)
app.set('view engine','html')
app.set('views',__dirname + '/views')
app.use('/home',function(req,res,next){
  res.render('home.html',{
    title:'标题'
  })

})


app.listen(8848,function(err){
  if(err){
    throw err
  } else {
    console.log('==> 🌎  Listening on 8848. Open up http://localhost:8848/ in your browser.')
  }

})