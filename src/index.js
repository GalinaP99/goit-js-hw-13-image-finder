import './styles.scss';
import refs from './js/refs';
import imageService from './js/image-service';
import updateImagesMarkup from './js/update-images-markup';
import loadMoreBtn from './js/load-more-btn';

refs.searchForm.addEventListener('submit', formSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchImages);

    function formSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    
    imageService.query = form.elements.query.value;
   
    clearImagesCointainer();
    imageService.resetPage();
    fetchImages();
    form.reset();
};

function fetchImages() {
   // refs.loadMoreBtn.classList.add('is-hidden');
   // refs.spinner.classList.remove('is-hidden');
    loadMoreBtn.disable();
    imageService
        .fetchImages().then(hits => {
            updateImagesMarkup(hits);
            loadMoreBtn.show();
            loadMoreBtn.enable();
       // refs.loadMoreBtn.classList.remove('is-hidden');
        })
    refs.imagesContainer.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
       /* .finally(() => {
           refs.spinner.classList.add('is-hidden');
        });*/

};
function clearImagesCointainer() {
    refs.imagesContainer.innerHTML = '';
};