const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
const clearBtn = document.getElementById("clr") 

let itemsArray = []
let data

const liMaker = text => {
    var li = document.createElement("li");
    li.textContent = text
    ul.appendChild(li);
}

if (localStorage.getItem("items")) {

    let items = JSON.parse(localStorage.getItem("items"))
    items.forEach(item => {
        liMaker(item)
        itemsArray.push(item);     
    })

    console.log(itemsArray)

} else {

    console.log("Error: No todo list already!")
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    itemsArray.push(input.value)
    
    localStorage.setItem("items", JSON.stringify(itemsArray))
    data = JSON.parse(localStorage.getItem("items"))
    
    console.log(data)
    
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    
    data.forEach(item => {
        liMaker(item)
    })
    input.value = ""

    clearBtn.style.display = "block"
    
})

if (document.querySelector("li")) {
    clearBtn.style.display = "block"
}

clearBtn.onclick = function() {
    localStorage.clear()
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    
    console.log(localStorage)

    clearBtn.style.display = "none"
}