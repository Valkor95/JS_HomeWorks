import Model from "./Model.js";
import View from "./View.js";

const Controller = {
    _formSelector: null,
    _todosContainerSelector: null,
    _formElement: null,
    _todosContainerElement: null,


    init({form, todosContainer}){
        this.formSelector = form;
        this.todosContainerSelector = todosContainer;
        this.formHandler = this.formHandler.bind(this);
        this.loadedHandler = this.loadedHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
        this.setEvents();
    },

    setEvents(){
        this.formElement.addEventListener('submit', this.formHandler);
        document.addEventListener('DOMContentLoaded', this.loadedHandler);
        this._todosContainerElement.addEventListener('click', this.removeHandler)
    },

    formHandler(event){
        event.preventDefault();
        event.stopPropagation();

        let data =
            Array.from(event.target.querySelectorAll('input, textarea, select'))
                .reduce((acc, input) => {
                    acc[input.name] = input.value;
                    return acc;
                }, {})

        try {
            data = Model.setData(data);
            View.renderItem(data);
            View.resetForm();
        } catch (error) {

        }

    },

    loadedHandler(){
        const data = Model.getData();
        data.forEach((item) => {
            View.renderItem(item);
        })
    },

    removeHandler(event){
        event.stopPropagation();
        const {target} = event;
        const btn = target.closest('[data-btn="delete"]');
        if (!btn) return;

        const todoItemId = Number(btn.closest(`[data-id]`).getAttribute('data-id'));
        const isRemoved = Model.removeData(todoItemId);

        if(isRemoved){
            View.removeItem(todoItemId);
        } else {
            alert('Cannot delete todo Item!');
        }
    },

    validateSelector(selector){
        if(typeof selector !== "string") throw new Error('Selector must be a string!');
        if(selector.trim() === '') throw new Error('Selector must not be empty!');

        const element = document.querySelector(selector);

        if(element === null) throw new Error('Selector not found in DOM!')
    },
    set formSelector (selector){
        this.validateSelector(selector);
        this._formSelector = selector;
        this._formElement = document.querySelector(selector)

    },
    set todosContainerSelector (selector){
        this.validateSelector(selector);
        this._todosContainerSelector = selector;
        this._todosContainerElement = document.querySelector(selector)

    },
    get formSelector (){
        return this._formSelector
    },
    get todosContainerSelector (){
        return this._todosContainerSelector
    },
    get formElement (){
        return this._formElement
    },
    get todosContainerElement (){
        return this._todosContainerElement
    },


}

export default Controller;