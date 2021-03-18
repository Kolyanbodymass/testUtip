import getPlanets from '../services/ApiServices';
import {createTable} from './createTable';

export let state = {};
export const initialState = [{name: 'no data :(', diameter: 'no data :(', climate: 'no data :(', gravity: 'no data :(', population: 'no data :('}];

const dal = {

    setState(data) {
        state = {planets: data};
        localStorage["state"] = JSON.stringify(state);
        return state;
    },
    loadData () {
        getPlanets()
        .then(res => {res.results.forEach((item) => {
            item.id = this.getID()});
            return res.results;
        })
            .then(res => {
                createTable(res);
                return res;})
            .then(res => this.setState(res))
        createTable()
    },
    getID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }    
}

export default dal;
