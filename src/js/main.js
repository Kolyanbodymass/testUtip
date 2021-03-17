import dal, {initialState} from './blocks/dal';

window.addEventListener('DOMContentLoaded', () => {

    dal.initialTableForLocalStorage();

    const loadButton = document.querySelector('#loadButton');
    const deleteButton = document.querySelector('#deleteButton');
    
    loadButton.addEventListener('click', () => dal.loadData());
    deleteButton.addEventListener('click', () => {
        dal.createTable(initialState);
        localStorage.clear();
        });

    document.querySelector('.SWTableJS th:first-child').addEventListener('click', () => dal.sortingAlphabetically());
});