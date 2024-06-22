"use strict" //eslint-disable-line

class PostFinder {
    postContainer = null;
    searchButton = null;
    postIdInput = null;
    constructor() {
        this.postContainer = document.querySelector('#postContainer');
        this.searchButton = document.querySelector('#searchPost');
        this.postIdInput = document.querySelector('#postId');

        this.init();
    }

    init(){
        this.onSearchPost = this.onSearchPost.bind(this);

        this.searchButton.addEventListener('click', this.onSearchPost)
    }

    onSearchPost (){
        const postId = this.postIdInput.value
        if (postId < 1 || postId > 100){
            throw new Error('Post ID must be between 1 and 100');
            return
        }
        this.fetchPostById(postId)
    }

    fetchPostById(postId){
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok){
                    throw new Error('Post not found!')
                }
                return response.json()
            })
            .then(post => {
                this.displayPost(post);
            })
            .catch(error => {
                throw new Error(`Error fetching post: ${error}`);
            })
    }

    displayPost(post){
        this.postContainer.innerHTML = '';

        const postElement = new
    }


}

const p = new PostFinder()

// console.log(p)