import Model from "./Model.js";
import Controller from "./Controller.js";
import View from "./View.js";

const selectors = {
    form: '#todoForm',
    todosContainer: '#todoItems'
}

View.init(selectors);
Model.init();
Controller.init(selectors);
