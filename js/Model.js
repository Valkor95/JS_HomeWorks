export class Model{
    static async getAlbums(){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        return await response.json();
    }

    static async getPhotos(albumId){
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        return await response.json();
    }
}