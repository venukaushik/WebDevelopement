const generateRGBA = () => {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;
    let output = document.getElementById("output");

    output.innerText = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    output.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

const copy = () => {
    let output = document.getElementById("output");

    navigator.clipboard.writeText(output.innerText)
    alert('Copied')
}