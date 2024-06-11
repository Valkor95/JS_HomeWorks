const Controller = {
    _formSelector: null,
    _todosContainerSelector: null,
    _formElement: null,
    _todosContainerElement: null,

    set formSelector (selector){
        this.validateSelector(selector);
        this._formSelector = selector;
        this._formElement = document.querySelector(selector)

    },

    init(selectors){
        console.log(selectors)
    },

    validateSelector(selector){
        if(typeof selector !== "string") throw new Error('Selector must be a string!');
        if(selector.trim() === '') throw new Error('Selector must not be empty!');

        const element = document.querySelector(selector);

        if(element === null) throw new Error('Selector not found in DOM!')
    },
}

export default Controller;