import getPlanets from '../services/ApiServices';
import {createTable} from './createTable';

export let state = {};
export const initialState = [{name: 'no data :(', diameter: 'no data :(', climate: 'no data :(', gravity: 'no data :(', population: 'no data :('}];

const dal = {

    setState(data) {
        state = {planets: data};
        state.planets.forEach((item) => {
            item.id = this.getID()
        });
        localStorage["state"] = JSON.stringify(state);
        return state;
    },
    loadData () {
        getPlanets()
            .then(res => {
                createTable(res.results);
                return res;})
            .then(res => this.setState(res.results))
        createTable()
    },
    getID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }    
}

export default dal;
