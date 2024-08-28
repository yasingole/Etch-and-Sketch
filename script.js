console.log("Hi")

//Input and Error 
const numberInput= document.getElementById("number-input");
const errorMessage = document.getElementById("error-message");

//Listener for input
numberInput.addEventListener("input", () => {
    const numberInputValue= parseInt(numberInput.value, 10);

    //Check is number
    if (isNaN(numberInputValue) || numberInputValue < 1 || numberInputValue > 100) {
        errorMessage.style.display= "block";
        document.getElementById("container").innerHTML = "";
    } else {
        errorMessage.style.display = 'none';

        //Creating the squares in the grid
        const container= document.getElementById("container");

        container.innerHTML= "";

        const containerSize= 640;
        const gridSize= containerSize/numberInputValue;

        for (let i=0; i < (numberInputValue*numberInputValue); i++) {
        const square= document.createElement("div");
        square.className= "grid";
        square.style.width= `${gridSize}px`;
        square.style.height= `${gridSize}px`;
        container.appendChild(square)
        }
    }

    //Adding hovering over grid
    const squares= document.querySelectorAll(".grid");
    squares.forEach(square => {
    
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor= "grey";
        })
    })
})





