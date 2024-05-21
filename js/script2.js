(function (){
    const getLS = () =>{
        const formDataGet = localStorage.getItem('formData');

        if (formDataGet){
            const formDataObj = JSON.parse(formDataGet);

            const userInfoList = document.querySelector('#userInfo');

            for(const key in formDataObj){
                if (formDataObj.hasOwnProperty(key)){
                    const value = formDataObj[key];

                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    li.textContent = `${key}: ${value}`;

                    userInfoList.append(li);
                }
            }
        }
    }
})()