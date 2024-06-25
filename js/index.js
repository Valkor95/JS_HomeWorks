import {Controller} from "./Controller.js";

document.addEventListener('DOMContentLoaded', initialization)

const initialization = function (){
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/'){
        Controller.showAlbums();
    } else if (path.endsWith('album.html')){
        const urlParams = new URLSearchParams(window.location.search);
        const albumId = urlParams.get('albumId');
        Controller.showPhotos(albumId);
    }
}