import refs from './refs';

const loadMoreBtn = {
    disable() {
 refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
    },
    enable() {
refs.loadMoreBtn.disabled = false;
            refs.loadMoreBtnLabel.textContent = 'Show more';
            refs.loadMoreBtnSpinner.classList.add('is-hidden');
    },
    show() {
        refs.loadMoreBtn.classList.remove('is-hidden');
    }
}

export default loadMoreBtn;