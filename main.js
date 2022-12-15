"use strict"

// const { title } = require("process");

// let btn = document.querySelector('.btn')

let baseURL = "http://localhost:3000";

async function getData() {
    const response = await fetch(`${baseURL}/eduvi`,{
        method:"Get",
        headers:{
            "Content-Type":"application/json"
        }
    });

    const result = await response.json();
    console.log(result);
}
getData()

function dataRender(data = []) {
    data.length > 0 ? data.forEach((el) => {
        const su = createElement('su', 'item', `
        ${el.fullName}
        ${el.email}
        ${el.password}
        <button class="btn p-3vw-100 my-2" data-edit = ${el.id}>
                                SIGN-UP
                            </button>
        `);
        $("#data").appendChild = (su);
    }) : console.log("not found data");

}


function addData (){
    const fullName=$('#eduvi').value. trim();
    const email=$('#eduvi').value. trim();
    const password=$('#eduvi').value. trim();

   const params = {
    fullName:fullName,
    email:email,
    password:password
   }
   console.log(params);
   if (fullName.length===0|| email.length===0||password.length===0){
    alert('Please fill...')
   }
   else{
    fetch(`${baseURL}/eduvi`,{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
   }
    
}
$('#send').addEventListener('submit', (e)=>{
    e.preventDefault();
    addData()
});
