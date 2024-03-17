
// typing effect here
var typed = new Typed('#element', {
  strings: ['Discover the best food  drinks in Delhi NCR','Developed by Adarsh'],
  typeSpeed: 40,
  loop:true,
});

let signup =document.getElementById("sign");
let formgroup=document.getElementById("formgroup");
let formgroup1=document.getElementById("formgroup1");
let acc=document.getElementById("account");
acc.addEventListener("click",()=>{
    formgroup.style.display="block"
    formgroup1.style.display="none"
})
signup.addEventListener("click",()=>{
    formgroup.style.display="block"
    formgroup1.style.display="none"

})
let cross=document.getElementById("cross")

cross.addEventListener("click",()=>{
    formgroup.style.display="none"
})
let login =document.getElementById("logins");
let log=document.getElementById("login");
log.addEventListener("click",()=>{
    formgroup1.style.display="block"
    formgroup.style.display="none"  
})
login.addEventListener("click",()=>{
    formgroup1.style.display="block"
    formgroup.style.display="none"

})
let crosse=document.getElementById("crosse")

crosse.addEventListener("click",()=>{
    formgroup1.style.display="none"
})
let nav=document.getElementById("navbar")

const emailsrado=document.getElementById("emailss");
const phonesrado=document.getElementById("phones");
let behaviour=document.getElementById("behaviour");
emailsrado.addEventListener("click",()=>{
    if(emailsrado.value==="email"){
        behaviour.setAttribute("type","email")
        behaviour.setAttribute("placeholder","Email");

    }  
})

phonesrado.addEventListener("click",()=>{
    if(phonesrado.value==="Phone"){
        behaviour.setAttribute("type","number")
        behaviour.setAttribute("placeholder","Phone");
        
    }
})

