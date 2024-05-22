// "use strict" //eslint-disable-line

(function (){

    const TODO_ITEMS = 'todo-items';
    const form = document.querySelector('#todoForm');
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

    const createTodoIL = () => {

    }

    form.addEventListener('submit', createTodoItem)

})()