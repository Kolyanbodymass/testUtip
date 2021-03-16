import getPlanets from '../services/ApiServices';

export let state = {};
export const initialState = [{name: 'no data :(', diameter: 'no data :(', climate: 'no data :(', gravity: 'no data :(', population: 'no data :('}];

const dal = {

    setState(data) {
        state = {planets: data};
        state.planets.forEach((item) => {
            item.id = this.getID()
        });
        return state;
    },
    loadData () {
        getPlanets()
            .then(res => this.setState(res.results))
            .then(res => this.createTable(state.planets))
        this.createTable(state.planets);        
    },
    emptyTable() {
        document.querySelector('.SWTableJS tbody').innerHTML = `
            <tr>
                  <td>Planet name</td>
                  <td>Diameter</td>
                  <td>Climate</td>
                  <td>Gravity</td>
                  <td>Population</td>
            </tr>
        `;
    },
    getID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
    createTable(data) {

        if (!data) {
            document.querySelector('.SWTableJS tbody').innerHTML = `
                
                <div class="loadingio-spinner-spin-ueeauidw9bp">
                    <div class="ldio-bt0gdk9jjc">
                    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
                </div>
                   
                
            `;
            return;
        } 
    
        console.log(data);
        this.emptyTable();
        if (data.length == 1 && !data[0].id) {
            data.map(n => { document.querySelector('.SWTableJS tbody').innerHTML +=
            `
            <tr>
                <td>${n.name}</td>
                <td>${n.diameter}</td>
                <td>${n.climate}</td>
                <td>${n.gravity}</td>
                <td>${n.population}</td>
            </tr>
            `
            });
        } else {
            data.map(n => { document.querySelector('.SWTableJS tbody').innerHTML +=
            `
            <tr>
                <td>${n.name}</td>
                <td>${n.diameter}</td>
                <td>${n.climate}</td>
                <td>${n.gravity}</td>
                <td>${n.population}</td>
                <td><button id="del_string" value=${n.id}>Del</button></td>
            </tr>
            `
            });
        }
        
        document.querySelectorAll('#del_string').forEach((item) => {item.addEventListener('click', (e) => this.delString(e))})
    },
    delString(e) {
        const idString = e.target.value;
        state.planets = state.planets.filter(p => p.id !== idString);
        if (state.planets.length == 0) {
            this.createTable(initialState);
        } else {
            this.createTable(state.planets);
        }
        
    }  
}

export default dal;
