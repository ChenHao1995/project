var express = require('express')
var app = express()
var consolidate = require('consolidate')
var axios = require('axios')

app.use('/js',express.static('js'))
app.use('/lib',express.static('lib'))
app.use('/dist',express.static('dist'))
app.use('/',express.static('./'))
app.engine('html',consolidate.ejs)
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.use('/home',function(req,res,next){
  res.render('home.html',{
    title:'home'
  })
})
app.use('/api',function(req,res,next){
  axios.post('http://m.anfubaoxian.com/api',{}).then(function(data){
    console.log(data)
    res.send(JSON.stringify(data))
  }).catch(function(err){
    console.log(err)
    res.send(JSON.stringify(err))
  })
})

app.listen(8848,function(err){
  if(err){
    throw err
  } else {
    console.log('==> 🌎  Listening on 8848. Open up http://localhost:8848/ in your browser.')
  }
})