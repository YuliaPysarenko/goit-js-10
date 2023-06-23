//  import catApi from './cat-api';
import linksDokQuerySel from './links';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const link = linksDokQuerySel();
link.breadSelect.addEventListener(`change`, onChangeSelectOption);

// catApi.fetchBreeds();
fetchBreeds()
 
function onChangeSelectOption() {
    const selectedOptionValue = link.breadSelect.value;
    //    catApi.fetchCatByBreed(selectedOptionValue); 
     fetchCatByBreed(selectedOptionValue); 
}   

