const btnElClear = document.querySelector(".calc-field__header-btn");
const inputEl = document.querySelector(".calc-field__header-input");

function display(value) {
    inputEl.value+=value;
    console.log(inputEl.value);
}

function solve() {
    if(inputEl.value.length) {
        let result = eval(inputEl.value);
        inputEl.value=result;    
    }
}

btnElClear.addEventListener("click", () =>  {
    inputEl.value='';
})

function pressWithKey(event) {

    switch(event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            inputEl.value+=event.key;
            break;
        case "Enter":
            solve();
            break;
        case "Backspace":
            inputEl.value=''
            break;
    }
}

document.addEventListener("keydown", pressWithKey);