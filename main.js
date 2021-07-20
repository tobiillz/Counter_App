
let value = document.getElementById('counter');
let count = 0;
function increment(){
    count += 1;
    value.textContent = count;
}

let save_val = document.getElementById('save')
function save(){
    let output = count + ' - ';
    save_val.textContent += output;
    value.textContent = count = 0;
}
















