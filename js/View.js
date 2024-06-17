const View = {
    renderResult(result){
        const container = document.querySelector('#result-container');
        container.innerHTML = '';
        const resultElement = document.createElement('p');
        resultElement.innerHTML = `Результат: ${result}`;
        container.append(resultElement);
    }
}

export default View