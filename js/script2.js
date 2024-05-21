(function (){
    const getLS = () =>{
        const formDataGet = localStorage.getItem('formData');

        if (formDataGet){
            const formDataObj = JSON.parse(formDataGet);

            const userInfoList = document.querySelector('#userInfo');

            for(const key in formDataObj){
                if ()
            }
        }
    }
})()