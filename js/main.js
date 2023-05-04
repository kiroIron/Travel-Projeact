let navBar = document.getElementById("navBar");

let hideBtn = document.getElementById("hideBtn");

hideBtn.addEventListener("click" , ()=>{
    if(navBar.classList.contains("hidemenu")){
        navBar.classList.remove("hidemenu");
    } else {
        navBar.classList.add("hidemenu");
    }
});