const btnConfirmar= document.querySelector("#btnConfirmar");


btnConfirmar.addEventListener("click", (e)=>{
    let clave= document.getElementById("txtPassword").value;
    let claveHash= await crypto.subtle.digest("SHA-256", clave);
    
    alert("Password: "+ claveHash);
})
