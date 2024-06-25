export class View{
    static displayAlbums(albums){
        const albumList = document.querySelector('#album-list');
        albums.forEach(album => {
            const albumItem = document.createElement('a');
            albumItem.href = `albumsPhoto.html?albumId=${album.id}`;
            albumItem.className = 'list-group-item list-group-item-action';
            albumItem.textContent = album.title;
            albumList.append(albumItem);
        });
    }

    static displayPhotos(photos){
        const photoList = document.querySelector('#photo-list');
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = `col-md-3 mb-3`;
            photoItem.innerHTML = `
                 <div class="card">
                      <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                      <div class="card-body">
                          <p class="card-text">${photo.title}</p>
                      </div>
                 </div>`;

            photoList.append(photoItem);
        });
    }
}