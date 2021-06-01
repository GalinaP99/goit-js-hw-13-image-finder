const refs = {
    searchForm: document.querySelector('.search-form'),
   imagesContainer: document.querySelector('.js-images'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    loadMoreBtnLabel: document.querySelector('button[data-action="load-more"] > .label'),
    loadMoreBtnSpinner: document.querySelector('button[data-action="load-more"] > .spinner'),
  // spinner: document.querySelector('.spinner')
}

export default refs;