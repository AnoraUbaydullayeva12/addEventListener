// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//     console.log('hello');
// }) //button

// const items = document.querySelectorAll('button');

// items.forEach((item) =>{
//     item.addEventListener('click', ()=>{
//         console.log('item cliked');

//     })
// })

// const items = document.querySelectorAll('button');

// items.forEach((item) =>{
//     item.addEventListener('click', (e)=>{
//         console.log(e.target);

//     })
// })

// const items = document.querySelectorAll('button');

// items.forEach((item) =>{
//     item.addEventListener('click', (e)=>{
//         e.target.style.textTransform = 'uppercase'
//         e.target.style.backgroundColor = 'red'
//         console.log(e.target);

//     })
// })

//home task

let button = document.querySelector(".button");

button.addEventListener("click", () => {
    let number = document.querySelector("#number");
    let newNumber = parseFloat(number.value);

    if (!isNaN(newNumber)) {

        let numberElement = document.createElement("h3");
        numberElement.textContent = `${newNumber}`;

    
        let container = document.querySelector(".mainNumber");
        container.appendChild(numberElement);

        
        let plus_buttons = document.querySelectorAll(".btn_plus");
        plus_buttons.forEach((plus_button) => {
            plus_button.addEventListener("click", () => {
                newNumber += 1;
                numberElement.textContent = `${newNumber}`; 
            });
        });

    
        let minus_buttons = document.querySelectorAll(".btn_minus");
        minus_buttons.forEach((minus_button) => {
            minus_button.addEventListener("click", () => {
                newNumber -= 1;
                numberElement.textContent = `${newNumber}`; 
            });
        });

        let choiseColor = document.querySelector('.choiseColor');
        choiseColor.addEventListener("click")
    } else {
        alert("Please enter a valid number");
    }
});

colorPicker.addEventListener('input', (event) =>{
    numberElement.style.color = event.target.numberElement;
});
