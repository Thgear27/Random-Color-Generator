function generateRandomColor(colorType) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let colorString = `rgb(${red}, ${green}, ${blue})`;

    if (colorType == "rgb") {
        return colorString
    } else if (colorType == "hex") {
        colorString = `#${red.toString(16).toUpperCase()}${green.toString(16).toUpperCase()}${blue.toString(16).toUpperCase()}`;
        return colorString;
    }
}

function updateOptions(option, arrOptions) {
    Array.from(arrOptions).forEach((item) => {
        if (item != option) item.classList.remove("option-selected");
        option.classList.add("option-selected");
    });
}

function main() {
    let mainContainer = document.getElementById("color-generater-container");
    let generatorButton = document.getElementById("generate-button");
    let colorLabel = document.getElementById("color-label");
    let optionPanel = document.getElementById("option-panel");
    let gearButton = document.getElementById("gear-button");

    let colorOptions = document.getElementsByClassName("op");
    let optionSelected = colorOptions[1];

    let randomColor = generateRandomColor("rgb");

    // Da el primer color a al paǵina
    mainContainer.style.backgroundColor = randomColor;
    colorLabel.innerText = "Color: " + randomColor;

    // Genera un color al pulsar el botón
    generatorButton.addEventListener("click", () => {
        let randomColor = generateRandomColor(optionSelected.value);

        mainContainer.style.backgroundColor = randomColor;
        colorLabel.innerText = "Color: " + randomColor;
    })

    // Oculta el panel de opciones
    gearButton.addEventListener("click", () => {
        optionPanel.classList.toggle("hide-panel")
    });

    gearButton.addEventListener("blur", () => {
        setTimeout(() => {
            optionPanel.classList.toggle("hide-panel")
        }, 200)
    });

    // Se encarga de registrar que opcion se está usando
    for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].addEventListener("click", () => {
            optionSelected = colorOptions[i];
            updateOptions(optionSelected, colorOptions);
        });
    }

}

main();