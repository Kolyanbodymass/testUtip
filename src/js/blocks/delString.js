import {state, initialState} from './dal';
import {createTable} from './createTable';

export const delString = (e) => {
    const idString = e.target.value;
    state.planets = state.planets.filter(p => p.id !== idString);
    if (state.planets.length == 0) {
        createTable(initialState);
        localStorage.clear();
    } else {
        createTable(state.planets);
        localStorage["state"] = JSON.stringify(state);
    }
}