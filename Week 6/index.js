const h1 = document.getElementById("h1")
h1.style.color = "red"
h1.style.backgroundColor = "lightYellow"

const btn = document.getElementById("btn1")

function buttonPressed(){
    const container = document.getElementById("container")
    const ball = document.createElement("ball")
    ball.id = "ball"
    container.appendChild(ball)
}

btn.onclick = buttonPressed
