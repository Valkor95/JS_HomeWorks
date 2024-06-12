const View = {

    renderItem(data){
        const layout = this.createTemplate(data);

    },

    createTemplate({title, description, id}){
        const wrap = document.createElement('div');
        wrap.classList.add('col-4');
        wrap.setAttribute('data-id', id);
        wrap.innerHTML = `<div class="col-4">-->
                            <div class="taskWrapper">
                               <div class="taskHeading">${title}</div>
                               <div class="taskDescription">${description}</div>
                            </div>
                          </div>`

        return wrap;
    }
}

export default View;