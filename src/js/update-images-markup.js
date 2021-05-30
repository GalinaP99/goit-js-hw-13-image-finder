import imagesTpl from '../template/images.hbs';
const refs = {
    //searchForm: document.querySelector('.search-form'),
    imagesContainer: document.querySelector('.js-images')
}

function updateImagesMarkup(hits) {
         const markup = imagesTpl(hits)
        //console.log(markup);
    refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
}
export default updateImagesMarkup;