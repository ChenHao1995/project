import axios from 'axios'
import $ from 'n-zepto'
// axios({
//   method:'post',
//   url:'http://127.0.0.1:8848/api',
//   data:{
//     'boolean':true
//   },
//   headers:{
//     'afb-action':'chenhao'
//   }
// }).then(function(data){
//   console.log(data)
// }).catch(function(err){
//   console.log(err)
// })

function createXHR(){
  if(window.XMLHttpRequest){
    return new XMLHttpRequest()
  }else{
    return new ActiveXObject('Microsoft.XMLHttp')
  }
}
var xhr = createXHR()
xhr.open('post','http://127.0.0.1:8848/req')
// const promise = new Promise(function(resolve,reject){
//   var xhr = createXHR()

//   if(){

//   }else{

//   }


// })


// window.onload = function(){
//   console.log(document.getElementById('index').contentWindow)
// }
// window.frames['index'].onload = function(){
//   console.log(document.getElementById('index').contentWindow.username)

// }
//console.log(axios,$)