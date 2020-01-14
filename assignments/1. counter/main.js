let h1 = document.querySelector('h1');
let div = document.querySelector('div');

function display(event){
    if(event.toElement.className == 'increment'){
        h1.textContent =  Number(h1.textContent) + 1;
    }
    if(event.toElement.className == 'decrement'){
        h1.textContent =  Number(h1.textContent) - 1;
    }
    if(event.toElement.className == 'reset'){
        h1.textContent = 0;
    }
}

div.addEventListener('click' , display)

