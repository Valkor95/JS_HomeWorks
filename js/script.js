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
        console.log(postId)

    }


}

const p = new PostFinder()

console.log(p)