const btn = document.getElementById("addColumn")

x = 1
function btnCreateColumn() {
    if (x <= 10) {
        const container = document.getElementById("container")
        const column = document.createElement("column")
        column.className = "column"
        container.appendChild(column)
        x++
    }else{
        alert("Limit Exceeded!!")
    }

}

btn.onclick = btnCreateColumn

const btnRandomColor = document.getElementById("randomColor")
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColor() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
        column.style.backgroundColor = getRandomColor();
    });
}

btnRandomColor.addEventListener("click", applyRandomColor);
