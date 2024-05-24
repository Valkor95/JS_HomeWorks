"use strict"

(function (){

    const objTodoList = {
        TODO_ITEMS: 'todo-items',
        form: document.querySelector('#todoForm'),
        todoItemContainer: document.querySelector('#todoItems'),
        currentId: 1,
        removeAll: document.querySelector('[data-remove-all]'),

        createTodoItem: (event) => {
            event.preventDefault();
            event.stopPropagation();

            const data = {
                title: null,
                description: null
            }

            event.target.querySelectorAll('input, textarea').forEach(input => {
                data[input.name] = input.value
            })

            try{
                const saveItem = saveTodoItem(data);
                const todoItemHTML
            }
        },

        init() {
            this.form.addEventListener('submit', createTodoItem)
        }

    }

})()