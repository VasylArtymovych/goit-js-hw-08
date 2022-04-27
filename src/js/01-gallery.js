// import gallery-items:
import { galleryItems } from './gallery-items';
// import simpleLightbox packege:
import SimpleLightbox from "simplelightbox";
// import css code to use in project:
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

function createGalleryMurkup(obj) {
    const gallery = obj.map(createGalleryElement).join('');

    galleryRef.innerHTML = gallery;
}
createGalleryMurkup(galleryItems);

function createGalleryElement({preview, original, description}) {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a>`
};

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

