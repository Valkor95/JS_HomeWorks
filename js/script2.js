(function (){
    const getLS = () =>{
        const formDataGet = localStorage.getItem('formData');
        const userInfoList = document.querySelector('#userInfo');

        if (formDataGet){
            const formDataObj = JSON.parse(formDataGet);

            for(const key in formDataObj){
                if (formDataObj.hasOwnProperty(key)){
                    const value = formDataObj[key];

                    if(value.trim() !== ''){
                        const li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = `${key}: ${value}`;
                        userInfoList.append(li);

                    }
                }
            }
        } else {
            const li2 = document.createElement('li');
            li2.classList.add('list-group-item');
            li2.textContent = 'No data available';
            userInfoList.append(li2);
        }
    }

    document.addEventListener('DOMContentLoaded', getLS)
})()