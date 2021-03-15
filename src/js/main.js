import dal from './blocks/dal';
import initialState from './blocks/initialState';

window.addEventListener('DOMContentLoaded', () => {

    const loadButton = document.querySelector('#loadButton');
    const deleteButton = document.querySelector('#deleteButton');

    loadButton.addEventListener('click', () => dal.getData());
    deleteButton.addEventListener('click', () => dal.createTable(initialState));
   
});