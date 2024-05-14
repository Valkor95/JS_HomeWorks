
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

            const showInfo = function (product){
                info.innerHTML = `
                <h3>${product.name}</h3>;
                <p>Category: ${product.category}</p>;
                <p>Price: ${product.price}</p>.
                <hr>
                <p>Best choice of your life!</p>
                <button data-buy-btn>Buy NOW!!!</button>`;
                document.querySelector('[data-buy-btn]').addEventListener('click', buyProduct);
            }

            const buyProduct =  () => {
                alert('Product purchased');
                renderCategories();
                product.innerHTML = ''
            }

            renderCategories()

            const eventCategory = (event) => {
                if (event.target.tagName === 'LI'){
                    const category = event.target.textContent;
                    renderProducts(category)
                }
            }

            category.addEventListener('click', eventCategory)

            const eventProduct = (event) => {
                if (event.target.tagName === 'LI'){
                    const prodName = event.target.textContent.split(' - ')[0];
                    const product = products.find(p => p.name === prodName);
                    showInfo(product)
                }
            }
        }

        document.addEventListener('DOMContentLoaded', eventFunction)
    })()