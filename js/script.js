// "use strict" //eslint-disable-line

(function (){

    const TODO_ITEMS = 'todo-items';
    const form = document.querySelector('#todoForm');
    const todoItemContainer = document.querySelector('#todoItems')
    let currentId = 1;

    const createTodoItem = (event) =>{
        event.preventDefault();
        event.stopPropagation();

        const data = {}

        event.target.querySelectorAll('input, textarea').forEach(input => {
            data[input.name] = input.value
        })

        try {
            const savedItem = saveTodoItems(data);
            const todoItemHTML = createTodoIL(savedItem);
            todoItemContainer.prepend(todoItemHTML);
        } catch (error){
            alert(error.message)
        } finally {
            event.target.reset();
        }
    }

    const getData = () =>{
        const data = JSON.parse(localStorage.getItem(TODO_ITEMS)) ;
        return !data ? [] : data;
    }
    const saveTodoItems = (data) => {
        const dataToSave = structuredClone(data);
        const savedData = getData()
        dataToSave.id = currentId;
        currentId++;
        savedData.push(dataToSave);
        localStorage.setItem(TODO_ITEMS, JSON.stringify(savedData));
        return getData().at(-1)
    }

    const createTodoIL = (data) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-todo-id', data.id)

        wrapper.innerHTML = `<div class="taskWrapper">
                                <div class="taskHeading">#${data.id} | ${data.title}</div>
                                <div class="taskDescription">${data.description}</div>
                                <hr>
                                <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                             </div>`
        return wrapper;
    }

    const loadedHandler = () => {
        const todoItems = getData();
        if(!todoItems.length) return;

        currentId = todoItems[todoItems.length - 1].id + 1;
        todoItems.forEach(item => {
            const layout = createTodoIL(item);
            todoItemContainer.prepend(layout)
        })
    }

    document.addEventListener('DOMContentLoaded', loadedHandler)
    form.addEventListener('submit', createTodoItem)

})()