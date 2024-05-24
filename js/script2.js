"use strict"

(function (){

    const objTodoList = {
        TODO_ITEMS: 'todo-items',
        form: document.querySelector('#todoForm'),
        todoItemContainer: document.querySelector('#todoItems'),
        currentId: 1,
        removeAll: document.querySelector('[data-remove-all]'),

        createTodoItem(event) {
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
                const savedItem = this.saveTodoItem(data);
                const todoItemHTML = this.createTodoItemLayout(savedItem);
                this.todoItemContainer.prepend(todoItemHTML);
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
            const dataFromLS = this.getData();
            return dataFromLS.at(-1)
        },

        createTodoItemLayout:(data) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'col-4';
            wrapper.setAttribute('data-todo-id', data.id);

            wrapper.innerHTML = `<div class="taskWrapper">
                               <div class="taskHeading">#${data.id} | ${data.title}</div>
                               <div class="taskDescription">${data.description}</div>
                               <hr>
                               <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                               </div>`
            return wrapper;
        },

        init() {
            this.createTodoItem = this.createTodoItem.bind(this);
            this.form.addEventListener('submit', this.createTodoItem)
        }

    }

    objTodoList.init()

})()