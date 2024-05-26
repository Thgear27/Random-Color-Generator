function generateRandomColor(colorType) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let colorString = `rgb(${red}, ${green}, ${blue})`;

    if (colorType === "rgb") {
        return colorString;
    } else if (colorType === "hex") {
        let redHex = red.toString(16).toUpperCase().padStart(2, '0');
        let greenHex = green.toString(16).toUpperCase().padStart(2, '0');
        let blueHex = blue.toString(16).toUpperCase().padStart(2, '0');
        colorString = `#${redHex}${greenHex}${blueHex}`;
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
    let mainContainer = document.querySelector(".color-generator-container");;
    let generatorButton = document.querySelector(".generate-button");
    let colorLabel = document.querySelector(".color-label");
    let optionPanel = document.querySelector(".option-panel");
    let gearButton = document.querySelector(".gear-button");

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