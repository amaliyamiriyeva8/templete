let id=new URLSearchParams(window.location.search).get("id")
const main=document.querySelector(".main")

fetch(`http://localhost:3000/templete/${id}`)
.then(res=>res.json())
.then(element=>{
        main.innerHTML=`
        <div class="main-1">
                    <div class="img"><img src=${element.img} alt=""></div>
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                </div>
        `
    });
