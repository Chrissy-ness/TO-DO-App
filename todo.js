const form = document.querySelector('#form');
const inputButton = document.querySelector('#todo');
const ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    
    else if(e.target.tagName === 'LI'){
        if(e.target.style.textDecoration === ''){
            e.target.style.textDecoration = 'line-through';
        }
        else if(e.target.style.textDecoration === 'line-through'){
            e.target.style.textDecoration = '';
        }
    }
});


form.addEventListener('submit', function (e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const newButton = document.createElement('button');

    newTodo.innerText = inputButton.value;
    newButton.innerText = "Remove";

    newTodo.append(newButton);
    ul.append(newTodo);

    inputButton.value = '';
})

