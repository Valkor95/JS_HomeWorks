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
                const todoItemHTML = createTodoItemLayout(savedItem);
                todoItemContainer.prepend(todoItemHTML);
            } catch (error) {
                alert(error.message)
            } finally {
                event.target.reset()
            }
        },

        getData() {
            const data = JSON.parse(localStorage.getItem(this.TODO_ITEMS));
            return data ? data : []
        },

        saveTodoItem(data){
            const dataToSave = structuredClone(data);
            const saveData = this.getData();
            dataToSave.id = this.currentId;
            this.currentId++;
            saveData.push(dataToSave);
            localStorage.setItem(this.TODO_ITEMS, JSON.stringify(saveData));
        },

        init() {
            this.form.addEventListener('submit', createTodoItem)
        }

    }

})()