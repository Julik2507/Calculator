const btnElClear = document.querySelector(".calc-field__header-btn");
const inputEl = document.querySelector(".calc-field__header-input");

function display(value) {
    inputEl.value+=value;
    console.log(inputEl.value);
}

function solve() {
    let result = eval(inputEl.value);
    inputEl.value=result;    
}

btnElClear.addEventListener("click", () =>  {
    inputEl.value='';
})

function pressWithKey(event) {
    console.log(event);
    
    if(event.key == '0') {
        inputEl.value += event.key;
    }
}