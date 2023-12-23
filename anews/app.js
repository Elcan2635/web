let btn =  document.querySelector(".bi bi-list")
let ule = document.querySelector("ul")
let inputcheched = document.querySelector(".slider");
const main = document.querySelector("main");
let Cookie = document.cookie;
if(Cookie === "gece=night"){
    main.style.backgroundColor="gray"
    inputcheched.checked = true
}



btn?.addEventListener("change", ()=>{
    if(ule.style.left === "-100%"){
        ule.style.left = "0%"
    }
    else{
        ule.style.left = "-100%"
    }

    
})
inputcheched?.addEventListener("change",()=>{
    if(inputcheched.checked){
        main.style.backgroundColor = "gray"
        document.cookie = "gece=night"
    }
    else{
        main.style.backgroundColor = "" 
        document.cookie = "gece=sun"
    }
})

 

/* start sign start */

let formUp = document.querySelector(".formup");
let inputUptext = document.querySelector(".signuplogin");
let inputUPassword = document.querySelector(".signuppassword");
let inputUpEmail = document.querySelector(".signupemail");
let submit = document.querySelector(".submit");
let signvalue;
let signPass;


let allvalue ={
    inputtext:"",
    inputPass:"",
    inputemail:""
};


formUp?.addEventListener("submit",(e)=>{
    e.preventDefault();
   if(allvalue.inputtext === "" || allvalue.inputPass === "" || allvalue.inputemail=== ""){
    formUp.style.border = "2px solid red"
   }else{
    localStorage.setItem("myData",JSON.stringify(allvalue))
    location.href = "login.html"
   }
    console.log(allvalue);
});


inputUptext?.addEventListener("change",(e)=>{
    allvalue.inputtext = e.target.value.trim();
})
inputUPassword?.addEventListener("change",(e)=>{
    allvalue.inputPass = e.target.value.trim();
})
inputUpEmail?.addEventListener("change",(e)=>{
    allvalue.inputemail = e.target.value.trim();
});



/* start login js */

const localdata = JSON.parse(localStorage.getItem("myData"))

console.log(localdata);
let formin = document.querySelector(".formin");
let signininput = document.querySelector(".signinlogin")
let signinPass = document.querySelector(".signinpassword")



formin?.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(localdata.inputtext === signvalue && localdata.inputPass===signPass){
        location.href = "web.html"
    }else{
        alert("login ve ya parol sevhdir")
    }

});


signininput?.addEventListener("change",(e)=>{
  signvalue = e.target.value;
})
signinPass?.addEventListener("change",(e)=>{
  signPass = e.target.value;
})

