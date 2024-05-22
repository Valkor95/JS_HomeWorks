// "use strict" //eslint-disable-line

(function (){

    const TODO_ITEMS = 'todo-items';
    const form = document.querySelector('#todoForm');

    const createTodoItem = (event) =>{
        event.preventDefault();
        event.stopPropagation();

        const data = {}

        event.target.querySelectorAll('input, textarea').forEach(input => {
            data[input.name] = input.value
        })

        console.log(data)

    }

    const saveTodoItems = () => {

    }

    const createTodoIL = () => {

    }

    form.addEventListener('submit', createTodoItem)

})()