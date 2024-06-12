const View = {

    _formSelector: null,
    _todosContainerSelector: null,
    _formElement: null,
    _todosContainerElement: null,

    renderItem(data){
        const layout = this.createTemplate(data);
        this.todosContainerElement.prepend(layout);
    },

    createTemplate({title, description, id}){
        const wrap = document.createElement('div');
        wrap.classList.add('col-4');
        wrap.setAttribute('data-id', id);
        wrap.innerHTML = `
                            <div class="taskWrapper">
                               <div class="taskHeading">${title}</div>
                               <div class="taskDescription">${description}</div>
                            </div>
                          </div>`

        return wrap;
    },

    init({form, todosContainer}){
        this.formSelector = form;
        this.todosContainerSelector = todosContainer;

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

export default View;