var btnsin=document.querySelector("#btnsin")
var username=document.querySelector("#userid")
var passwd=document.querySelector("#passwd")
 
let getname=localStorage.getItem("username")
let getpass=localStorage.getItem("passwd")

btnsin.addEventListener("click",function(e){
    e.preventDefault()
     if(username.value===""||passwd.value===""){
        alert("please complete filling data")
     }else{
      if(getname&&getname.trim()===username.value.trim()&&getpass&&getpass.trim()===passwd.value.trim()){
        setTimeout(()=>{
            window.location="index.html"
        },1000)
      }else{
        alert("username or password are not correct")
       }



       
     }
})