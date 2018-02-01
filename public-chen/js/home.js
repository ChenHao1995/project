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

function createXHR(){
  if(window.XMLHttpRequest){
    return new XMLHttpRequest()
  }else{
    return new ActiveXObject('Microsoft.XMLHttp')
  }
}
console.log(createXHR())
// var xhr = createXHR()
// xhr.onreadystatechange = function(){
//   if( xhr.readyState == 4 ){
// 	if(xhr.status == 200){
//       console.log(xhr.responseText)
// 	}
//   }
// }
// xhr.open('post','http://127.0.0.1:8848/req')
// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
// xhr.send('a=2&c=3')
const promise1 = new Promise(function(resolve,reject){
  var xhr = createXHR()
  xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 ){
	  if(xhr.status == 200){
	    //console.log(xhr.responseText)
	    //setTimeout(resolve,5000,xhr.responseText)
	    return resolve(xhr.responseText)
	  }else{
	  	reject(xhr.status + '-' + xhr.statusText)
	  }
	}
  }
  xhr.open('post','http://127.0.0.1:8848/req')
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.send('a=2&b=3')
})
const promise2 = new Promise(function(resolve,reject){
  var xhr = createXHR()
  xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 ){
	  if(xhr.status == 200){
	    //console.log(xhr.responseText)
	    //setTimeout(resolve,5000,xhr.responseText)
	    resolve({
	    	data:xhr.responseText,
	    	promise1:promise1
	    })
	  }else{
	  	reject(xhr.status + '-' + xhr.statusText)
	  }
	}
  }
  xhr.open('post','http://127.0.0.1:8848/req')
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.send('c=2&d=3')
})
const promise3 = new Promise(function(resolve,reject){
  var xhr = createXHR()
  xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 ){
	  if(xhr.status == 200){
	    //console.log(xhr.responseText)
	    //setTimeout(resolve,5000,xhr.responseText)
	    resolve({
	    	data:xhr.responseText,
	    	promise2:promise2
	    })
	  }else{
	  	reject(xhr.status + '-' + xhr.statusText)
	  }
	}
  }
  xhr.open('post','http://127.0.0.1:8848/req')
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.send('e=2&f=3')
})



promise3.then(function(data){
  console.log(data.data)
  return data.promise2
}).then(function(data){
  console.log(data.data)
  return data.promise1
}).then(function(data){
  console.log(data)
})
// window.onload = function(){
//   console.log(document.getElementById('index').contentWindow)
// }
// window.frames['index'].onload = function(){
//   console.log(document.getElementById('index').contentWindow.username)

// }
//console.log(axios,$)