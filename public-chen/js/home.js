import axios from 'axios'
import $ from 'n-zepto'

axios.post('http://127.0.0.1:8848/api',{}).then(function(data){
  console.log('dataaaa')
}).catch(function(err){
  console.log('errrrrr')
})

//console.log(axios,$)