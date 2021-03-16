import dal, {initialState} from './blocks/dal';

window.addEventListener('DOMContentLoaded', () => {

    const loadButton = document.querySelector('#loadButton');
    const deleteButton = document.querySelector('#deleteButton');
    
    loadButton.addEventListener('click', () => dal.loadData());
    deleteButton.addEventListener('click', () => dal.createTable(initialState));

   
});