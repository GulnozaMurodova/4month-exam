"use strict"

// const { result } = require("lodash");

let baseURL = "https://task.samid.uz/v1/user/sign-up"

$('sign-up').addEventListener("submit", (e) => {
    e.preventDefault();
    let email = $('#email').value.trim();
    let password = $('#password').value.trim();

    const params = {
        email: email,
        password: password,
    }

    if (params.email.length === 0 || params.password.length === 0) {
        console.log("Please enter an email and password");
    }
    else {
        fetch(baseURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then((response.json()).then((result) =>{
            if(result.code=="1"){
                window.location.replace("./login.html");
            }
            else{
                alert(result.message)
            }
        }));
    }
})
