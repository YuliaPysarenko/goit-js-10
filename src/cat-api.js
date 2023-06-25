import catJs from './cat';
const IPA_KEY = `live_SMtLvF4MNZqRFib6He2a90q3TJAniCZuwUyeLjyBQHRzIdcj8BrTbJxdjwHyeiLT`;
const url = `https://api.thecatapi.com/v1`;

function fetchBreeds() {
    // fetch(`https://api.thecatapi.com/v1/breeds?api_key=${IPA_KEY}`)
   fetch(`${url}/breeds?api_key=${IPA_KEY}`)
      .then(catJs.errorResponse)
      .then(catJs.optionSelectBreed)
      .catch(catJs.errorFetchBreeds);
}

function fetchCatByBreed(breedId) {
  catJs.removeClassCat();
  fetch(
    `${url}/images/search?breed_ids=${breedId}&api_key=${IPA_KEY}`
  )
    .then(catJs.errorResponse)
    .then(catJs.renderCat)
    .catch(catJs.errorFetchBreeds)
    .finally(catJs.addClassCat)
}

export { fetchBreeds, fetchCatByBreed}
    

