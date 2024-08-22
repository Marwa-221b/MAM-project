var btnsin=document.querySelector("#btnsin")
var username=document.querySelector("#userid")
var passwd=document.querySelector("#passwd")
var mail=document.querySelector("#mail")

btnsin.addEventListener("click",function(e){
   e.preventDefault()
     if(username.value===""||passwd.value===""||mail.value===""){
        alert("careful!! fill thoes fields")
     }else{
        localStorage.setItem("username",username.value)
       localStorage.setItem("passwd",passwd.value)
       localStorage.setItem("mail",mail.value)
       setTimeout(()=>{
        window.location="login.html"
       },1000)
     }
})