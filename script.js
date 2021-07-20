let startingNumber = parseInt(prompt("Gives me a number, precious!"));;
const div = document.querySelector(".valueDisplay");
const yourNum = document.querySelector(".yourNumber");

const numDisplay = document.createElement("p");
numDisplay.textContent = startingNumber;
yourNum.appendChild(numDisplay);

function checkDivisibleBy3(startingNumber) {
    for (let i = 1; i <= startingNumber; i++) {
        let displayValue = document.createElement('p');
        if (i % 3) {
            if (i % 5) {
                displayValue.textContent = i;
                div.appendChild(displayValue);
            } else {
                displayValue.textContent = "Buzz";
                displayValue.style.color = "green";
                displayValue.style.backgroundColor = "#CFC9BA";
                div.appendChild(displayValue);

            }; 
        } else if (i % 5) {
            displayValue.textContent = "Fizz";
            displayValue.style.color = "orange";
            div.appendChild(displayValue);
        } else {
            displayValue.textContent = "FizzBuzz";
            displayValue.style.color = "red";
            div.appendChild(displayValue);
        }
    }
}

checkDivisibleBy3(startingNumber);





