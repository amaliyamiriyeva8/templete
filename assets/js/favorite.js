const main=document.querySelector(".main")
fetch("http://localhost:3000/favorite/")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        main.innerHTML+=`
        <div class="main-1">
                    <div class="img"><img src=${element.img} alt=""></div>
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                     <button onclick="deleteBtn(${element.id})">Delete</button>
                </div>
        `
    });
})


function deleteBtn(id){
    axios.delete(`http://localhost:3000/favorite/${id}`)
    window.location.reload()
}