import dal from './dal';
import {createTable} from './createTable';

export const initialTableForLocalStorage = () => {
    if (localStorage.length != 0) {
        const state = JSON.parse(localStorage.getItem("state"));
        dal.setState(state.planets);
        createTable(state.planets);
    } else {
        return;
    }
}