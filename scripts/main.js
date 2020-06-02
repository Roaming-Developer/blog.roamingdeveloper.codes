// let getUser = document.getElementById("userName");

// getUser = write(localStorage.getItem("userName"));

function setName(){
    if(localStorage.getItem("userName") === "null") {
        localStorage.setItem("userName", "Anonymous");
    }
    document.getElementById("userName").innerHTML = localStorage.getItem("userName");
    document.getElementById("userName_rep").innerHTML = localStorage.getItem("userName");
}