const colors = ["green", "red", "rgba(133,122,200)", "f15025"]

const btn = document.getElementById('btn');
const color = document.querySelector(".color")

btn.addEventListener('click', function () {
    // get random no between 0-3
    const randNumber = getRandomNumber();
    console.log(randNumber)
    document.body.style.backgroundColor = colors[randNumber];
    color.textContent = colors[randNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}