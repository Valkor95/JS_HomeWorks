
    (function (){
        "use strict" //eslint-disable-line
        const eventFunction = function (){
            const category = document.querySelector('.category-list')
            const product = document.querySelector('.product-list')
            const info = document.querySelector('.product-info-content')

            const categories = ['Canon', 'Nikon', 'Fujifilm'];
            const products = [
                {category: 'Canon', name: 'Canon 60d', price: '500$'},
                {category: 'Canon', name: 'Canon 77d', price: '800$'},
                {category: 'Canon', name: 'Canon RP', price: '1000$'},
                {category: 'Nikon', name: 'Nikon D5600', price: '400$'},
                {category: 'Nikon', name: 'Nikon D800', price: '1000$'},
                {category: 'Nikon', name: 'Nikon Z6 II', price: '2000$'},
                {category: 'Fujifilm', name: 'Fujifilm S3200', price: '600$'},
                {category: 'Fujifilm', name: 'Fujifilm X-M1', price: '1000$'},
                {category: 'Fujifilm', name: 'Fujifilm X-H2', price: '1500$'},
            ]

            const renderCategories = function (){
                category.innerHTML = '';
                categories.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    category.append(li);
                    li.addEventListener('click', () => renderProducts(item));
                })
            }

            const renderProducts = function (catalog){
                product.innerHTML = '';
                const filter = products.filter(prod => prod.category === catalog)
                filter.forEach(item =>{
                    const li = document.createElement('li');
                    li.textContent = `${item.name}: ${item.price}`;
                    product.append(li);
                })
            }

            renderCategories()
        }

        document.addEventListener('DOMContentLoaded', eventFunction)
    })()