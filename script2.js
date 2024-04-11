const count = document.querySelector('.count')
const button = document.querySelector('.buttons')


button.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }

    setColor()
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "greenyellow"
    }
    if (count.innerHTML < 0) {
        count.style.color = "orangered"
    }
    if (count.innerHTML == 0) {
        count.style.color = "white"
    }
}


