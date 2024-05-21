
    (function (){

        const form = document.querySelector('form');


        const eventHandler = function (event){
            event.preventDefault();
            event.stopPropagation();


            const formData = new FormData(this);
            const formObj = {};

            formData.forEach((value, key) => {
                formObj[key] = value;
            })

            console.log(formObj)
        }

        form.addEventListener('submit', eventHandler)


    })()

