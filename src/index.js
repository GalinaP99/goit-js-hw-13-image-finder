import './styles.scss';
import imageService from './js/image-service';
import updateImagesMarkup from './js/update-images-markup'


const refs = {
    searchForm: document.querySelector('.search-form'),
    imagesContainer: document.querySelector('.js-images'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    
imageService.query = form.elements.query.value;
    refs.imagesContainer.innerHTML = '';
    form.reset();

  imageService.resetPage();
    imageService.fetchImages().then(hits => {
        updateImagesMarkup(hits);
    }); 
}) 

refs.loadMoreBtn.addEventListener('click', () => {
    imageService.fetchImages().then(updateImagesMarkup);
})
