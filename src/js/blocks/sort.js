import {state} from './dal';
import {createTable} from './createTable';

let toggleSort = true;

export const sortingAlphabetically = () => {
    if (state.length == 0 || !state.planets) {
        return;
    } else if (!toggleSort) {
        
        _sort(toggleSort);
        toggleSort = true;
        createTable(state.planets);
        localStorage["state"] = JSON.stringify(state);
    } else if(toggleSort) {
;
        _sort(toggleSort);
        toggleSort = false;
        createTable(state.planets);
        localStorage["state"] = JSON.stringify(state);
    }
};

const _sort = (toggleSort) => {
    let q, w;

    if (!toggleSort) {
        q = 1;
        w = -1;
    } else {
        q = -1;
        w = 1;
    }
    state.planets = state.planets.sort((a, b) => {
        let nameA = a.name.toLowerCase(), 
            nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return q
        if (nameA > nameB)
          return w
        return 0 
    })
}