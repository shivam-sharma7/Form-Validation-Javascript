

let id = (id)=> document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let username = id("username"), 
email = id("email"), 
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");


// adding EventListener in form

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    engine(username, 0, "Please enter yout username");
    engine(email, 1, "Please enter yout email");
    engine(password, 2, "Please enter yout password");


})

let engine = (id, serial, message) =>{

    if(id.value === ""){

        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else{
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
    
}

let myFunction=()=>{

   return console.log("Thanks");

}



