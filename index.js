const input = document.querySelector(".in")
let nextbox = document.getElementsByClassName("addBOX")
const mainBox = document.querySelector("#mainBox")


const add = document.querySelector("button")
add.addEventListener('click',()=>{
    const newel = document.createElement("div")
    newel.innerHTML += `<p>${input.value}</p>
    <div class="buttons">
                    <button class="done">DONE</button>
                    <button class="delet">DELETE</button>
                </div>`
    mainBox.append(newel)
    newel.classList.add("addBOX")
    input.value=""
    for(next of nextbox){
        next.addEventListener("click",(e)=>{
            if(e.target.classList.contains("done")){
                const element = e.target.parentNode.previousElementSibling
                element.style.textDecoration = 'line-through'
                element.style.color = 'red'
                element.style.fontWeight = 'bolder'
                e.target.parentNode.parentNode.style.backgroundColor = 'grey'
            }
            else if(e.target.classList.contains("delet")){
                const element2 = e.target.parentNode.parentNode
                element2.remove()

            }
        })
    }
})
