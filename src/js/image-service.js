
const apiKey = '21739365-699704d85d2e3a75a32a4de8c';
 
export default {
 searchQuery: '',
page: 1,
    async fetchImages () {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
        /*return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => {
                this.incrementPage();
                return hits;
            });
      //  .catch(error => console.log(error));
    },*/
         try {
             const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error('Something went wrong!(');
      }
      const parseRes = await res.json();
     if (parseRes.hits.length === 0) {
        throw new Error('Nothing found!(');
      }
      this.incrementPage();
      return parseRes.hits;
    } catch (err) {
      throw err;
    }
  },
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};