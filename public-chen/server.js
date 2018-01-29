var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var consolidate = require('consolidate')
var axios = require('axios')


app.use('/js',express.static('js'))
app.use('/lib',express.static('lib'))
app.use('/dist',express.static('dist'))
app.use('/style',express.static('style'))
app.use('/',express.static('./'))
app.engine('html',consolidate.ejs)
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.use('/home',function(req,res,next){
  res.render('home.html',{
    title:'home'
  })
})
app.use('/index',function(req,res,next){
  res.render('index.html',{
    title:'index'
  })
})
app.use('/api',jsonParser,function(req,res,next){
  if(req.body){
    console.log(req.body)
    res.send(req.body)
  } else {
    res.send('err')
  }

  // axios.post('http://m.anfubaoxian.com/api',{}).then(function(data){
  //   console.log(data)
  //   res.send(JSON.stringify(data))
  // }).catch(function(err){
  //   console.log(err)
  //   res.send(err.response.data)
  // })
  
})

app.listen(8848,function(err){
  if(err){
    throw err
  } else {
    console.log('==> 🌎  Listening on 8848. Open up http://localhost:8848/ in your browser.')
  }
})