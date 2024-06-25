import {Model} from './Model.js';
import {View} from "./View.js";

export class Controller{
    static async showAlbums(){
        const albums = await Model.getAlbums();
        View.displayAlbums(albums);
    }

    static async showPhotos(albumId){
        const photos = await Model.getPhotos(albumId);
        View.displayPhotos(photos);
    }
}