import Model from "./Model.js";
import Controller from "./Controller.js";
import View from "./View.js";

const selectors = {
    form: '#todoForm',
    todosContainer: '#todoItems'
}

Controller.init(selectors)