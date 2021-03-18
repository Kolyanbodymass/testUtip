import dal, {initialState} from './blocks/dal';
import {initialTableForLocalStorage} from './blocks/saveInLocalStorage';
import {createTable} from './blocks/createTable';
import {sortingAlphabetically} from './blocks/sort';

window.addEventListener('DOMContentLoaded', () => {

    initialTableForLocalStorage();

    const loadButton = document.querySelector('#loadButton');
    const deleteButton = document.querySelector('#deleteButton');
    
    loadButton.addEventListener('click', () => dal.loadData());
    deleteButton.addEventListener('click', () => {
            createTable(initialState);
            localStorage.clear();
        });

    document.querySelector('.SWTableJS th:first-child').addEventListener('click', () => sortingAlphabetically());
});