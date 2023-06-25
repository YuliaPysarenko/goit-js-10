import {fetchBreeds,fetchCatByBreed} from './cat-api';
import linksDokQuerySel from './links';

const link = linksDokQuerySel();
link.breadSelect.addEventListener(`change`, onChangeSelectOption);

fetchBreeds();
 
function onChangeSelectOption() {
const selectedOptionValue = link.breadSelect.value;
fetchCatByBreed(selectedOptionValue); 
}   

