export class View{
    static displayAlbums(albums){
        const albumList = document.querySelector('#album-list');
        albums.forEach(album => {
            const albumItem = document.createElement('a');
            albumItem.href = `album.html?albumId=${album.id}`;
            albumItem.className = 'list-group-item list-group-item-action';
            albumItem.textContent = album.title;
            albumList.append(albumItem);
        });
    }


}