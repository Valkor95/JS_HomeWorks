
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

            const stringLS = JSON.stringify(formObj)

            localStorage.setItem('formData', stringLS)
        }

        form.addEventListener('submit', eventHandler)


    })()

