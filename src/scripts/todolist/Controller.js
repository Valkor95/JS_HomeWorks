const Controller = {
    _formSelector: null,
    _todosContainerSelector: null,
    _formElement: null,
    _todosContainerElement: null,


    init({form, todosContainer}){
        this.formSelector = form;
        this.todosContainerSelector = todosContainer;
        console.log(this)
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

    validateSelector(selector){
        if(typeof selector !== "string") throw new Error('Selector must be a string!');
        if(selector.trim() === '') throw new Error('Selector must not be empty!');

        const element = document.querySelector(selector);

        if(element === null) throw new Error('Selector not found in DOM!')
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