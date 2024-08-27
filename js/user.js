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

///////////////////sec4
function myfunction(){
    var element= document.querySelector(".sec2")
       element.classList.toggle("dark-mode");
}

function showalert() {
        var alertHTML = 
            '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            'Product added to the cart Successfully :D' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>';
        document.getElementById('alertPlaceholder').innerHTML = alertHTML;
}
showalert()
var badge=document.querySelector(".badge")
var btnpl=document.querySelector(".explore-button")
btnpl.addEventListener("click",function(){
   badge.style.display="block"
})