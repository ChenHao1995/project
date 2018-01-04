import axios from 'axios'
import $ from 'n-zepto'

axios.post('http://127.0.0.1:8848/api',{}).then(function(data){
  console.log(data,'dataaaa')
}).catch(function(err){
  console.log(err,'errrrrr')
})

console.log(axios,$)