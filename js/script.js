"use strict" //eslint-disable-line

class PostElement{
    post = null;
    element = null;
    constructor(post) {
        this.post = post;
        this.element = document.createElement('div');
        this.element.className = 'post';
    }

    render (){
        this.element.innerHTML = `
        <h2>${this.post.title}</h2>
        <p>${this.post.body}</p>
        <button class="load-comments">Load comments</button>`

        this.loadCommentButton = this.element.querySelector('.load-comments');
        this.element.dataset.id = this.post.id;
        return this.element;
    }
}

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
        this.fetchCommentsByPostId = this.fetchCommentsByPostId.bind(this)

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

        const postElement = new PostElement(post);
        this.postContainer.append(postElement.render());

        postElement.loadCommentButton.addEventListener('click', this.fetchCommentsByPostId)
    }

    fetchCommentsByPostId(){
        const postId = document.querySelector('.post').dataset.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                this.displayComments(comments);
            })
            .catch(error => {
                throw new Error('Error fetching comments');
            });
    }

    displayComments(comments){
        const commentsContainer = document.createElement('div');
        commentsContainer.className = 'comments';
        commentsContainer.innerHTML = comments.map(comment => `
            <div>
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
                <p><small>By: ${comment.email}</small></p>
            </div>
        `).join('');

        this.postContainer.append(commentsContainer);
    }
}

const p = new PostFinder()
p.init()

