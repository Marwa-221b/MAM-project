var divuserinfo=document.querySelector("#userinfo")
var userplace=document.querySelector("#user")
var links=document.querySelector("#links")
let logbtn=document.querySelector("#logout")
if(localStorage.getItem("username")){

 links.remove()
 divuserinfo.style.display="flex"
 userplace.innerHTML=localStorage.getItem("username")

}
logbtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})