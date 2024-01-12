const main=document.querySelector(".main")
const favorite=document.querySelector("#favorite")


fetch("http://localhost:3000/templete/")
.then(res=>res.json())
.then(data=>{
    axios.get(`http://localhost:3000/favorite/`)
    .then(fav=>{
        data.forEach(element => {
            if(fav.data.find(favEl=>favEl.id===element.id)){
                main.innerHTML+=`
                <div class="main-1">
                            <div class="img"><img src=${element.img} alt=""></div>
                            <i class="bi bi-heart-fill" style="color: red;"  onclick="deleteFav(${element.id})"></i>
                            <h1>${element.name}</h1>
                            <p>${element.description}</p>
                             <button onclick="deleteBtn(${element.id})">Delete</button>
                             <button onclick="detailsBtn(${element.id})">Details</button>
                             <button onclick="updateBtn(${element.id})">Update</button>
                        </div>
                `
            }
            else{
                main.innerHTML+=`
                <div class="main-1">
                            <div class="img"><img src=${element.img} alt=""></div>
                            <i class="bi bi-heart"   onclick="addFav(${element.id})"></i>
                            <h1>${element.name}</h1>
                            <p>${element.description}</p>
                             <button onclick="deleteBtn(${element.id})">Delete</button>
                             <button onclick="detailsBtn(${element.id})">Details</button>
                             <button onclick="updateBtn(${element.id})">Update</button>
                        </div>
                `
            }
            
        });
    })
   
})

function detailsBtn(id){
    window.location=`details.html?id=${id}`
}

function deleteBtn(id){
    axios.delete(`http://localhost:3000/templete/${id}`)
    window.location.reload()
}

function deleteFav(id){
    axios.delete(`http://localhost:3000/favorite/${id}`)
}

function addFav(id){
    fetch(`http://localhost:3000/templete/${id}`)
    .then(res=>res.json())
    .then(data=>{
        axios.post(`http://localhost:3000/favorite/`,data)
    })
}

favorite.addEventListener("click",()=>{
    window.location=`favorite.html`
})

const add=document.querySelector("#add")

add.addEventListener("click",()=>{
    window.location=`add.html`
})



