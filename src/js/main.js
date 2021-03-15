import getPlanets from './services/ApiServices';

const loadData = () => {
    getPlanets()
        .then(res => createTable(res.results))
    
}

const createTable = (data) => {

    data.map(n => { document.querySelector('#SWTable tbody').innerHTML +=
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
}

window.addEventListener('DOMContentLoaded', () => {

    loadData();

});