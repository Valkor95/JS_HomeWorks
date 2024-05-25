    (function (){
        'use strict'
        const objTodoList = {
            TODO_ITEMS: 'todo-items',
            FAVORITES: 'favorites-items',
            form: document.querySelector('#todoForm'),
            formInputs: document.querySelectorAll('#todoForm input, #todoForm textarea'),
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

                this.formInputs.forEach(input => {
                    data[input.name] = input.value
                })

                try{
                    const savedItem = this.saveTodoItem(data);
                    const todoItemHTML = this.createTodoItemLayout(savedItem);
                    this.todoItemContainer.prepend(todoItemHTML);
                } catch (error) {
                    console.warn(error.message);
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
                               <button class="btn btn-primary btn-sm" data-favorites-btn>Favorites</button>
                               </div>`
                return wrapper;
            },

            loadedHandler()  {
                const todoItems = this.getData();
                if(!todoItems.length) return;

                this.currentId = todoItems.at(-1).id + 1;
                todoItems.forEach(item => {
                    const layout = this.createTodoItemLayout(item);
                    this.todoItemContainer.prepend(layout)
                })
            },

            handlerRemoveTodo(event) {
                event.stopPropagation();
                if(!event.target.hasAttribute('data-remove-btn')) return;

                const currentWrapper = event.target.closest('[data-todo-id]');
                const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

                const savedData = this.getData();
                const dataToSave = savedData.filter(item => {
                    return item.id !== todoId;
                })

                localStorage.setItem(this.TODO_ITEMS, JSON.stringify(dataToSave));
                currentWrapper.remove();
            },

            handlerRemoveAllTodo() {
                localStorage.removeItem(this.TODO_ITEMS);
                this.todoItemContainer.innerHTML = ''
            },

            init() {
                this.createTodoItem = this.createTodoItem.bind(this);
                this.loadedHandler = this.loadedHandler.bind(this);
                this.handlerRemoveTodo = this.handlerRemoveTodo.bind(this);
                this.handlerRemoveAllTodo = this.handlerRemoveAllTodo.bind(this);

                this.form.addEventListener('submit', this.createTodoItem);
                document.addEventListener('DOMContentLoaded', this.loadedHandler);
                this.todoItemContainer.addEventListener('click', this.handlerRemoveTodo);
                this.removeAll.addEventListener('click', this.handlerRemoveAllTodo)
            }

        }

        objTodoList.init()


    })()