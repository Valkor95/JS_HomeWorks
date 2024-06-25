import {Controller} from "./Controller.js";

const initialization = function (){
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/'){
        Controller.showAlbums();
    } else if (path.endsWith('album.html')){
        const urlParams = new URLSearchParams(window.location.search);
        const albumId = urlParams.get('albumId');
        if (albumId){
            Controller.showPhotos(albumId);
        } else {
            throw new Error('Album ID is missing in the URL parameters')
        }

    }
}

document.addEventListener('DOMContentLoaded', initialization)

