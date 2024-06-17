import Model from "./Model.js";
import View from "./View.js";

const Controller = {
    handleCalculate(){
        const a = parseInt(document.querySelector('#input-a').value);
        const b = parseInt(document.querySelector('#input-b').value);

        const result = Model.calculate(a, b);
        View.renderResult(result)
    },

    setEvents(){
        document.querySelector('#calculate-button').addEventListener('click', this.handleCalculate)
    },

    init(){
        this.handleCalculate = this.handleCalculate.bind(this);

        this.setEvents()
    }
};

export default Controller;