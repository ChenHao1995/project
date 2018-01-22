import axios from 'axios'
import $ from 'n-zepto'
axios({
  method:'post',
  url:'http://127.0.0.1:8848/api',
  data:{
    'boolean':true
  },
  headers:{
    'afb-action':'chenhao'
  }
}).then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err)
})

//console.log(axios,$)