import imagesTpl from '../template/images.hbs';
import refs from './refs';


function updateImagesMarkup(hits) {
         const markup = imagesTpl(hits)
        //console.log(markup);
    refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
}
export default updateImagesMarkup;