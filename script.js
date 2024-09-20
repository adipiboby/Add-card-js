let item = document.querySelector('.card');
const container = document.querySelector('.container');
function sayhi() {
    console.log("clicked heloo")
}


item.addEventListener('click',sayhi)
let count = 1

item.addEventListener('click', () => {
    const newCard=document.createElement("div")
    newCard.classList.add('card')
    newCard.innerText=count
    count++
    container.append(newCard)
    console.log(newCard)
})