import imagesTpl from '../template/images.hbs';
import refs from './refs';


function updateImagesMarkup(hits) {
         const markup = imagesTpl(hits)
        //console.log(markup);
    refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
       refs.imagesContainer.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
}
export default updateImagesMarkup;