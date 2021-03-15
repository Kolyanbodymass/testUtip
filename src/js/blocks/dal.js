import getPlanets from '../services/ApiServices';

const dal = {

    getData () {
        getPlanets()
            .then(res => this.createTable(res.results))
        
    },
    initialTable() {
        document.querySelector('#SWTableJS tbody').innerHTML = `
            <tr>
                  <td>Planet name</td>
                  <td>Diameter</td>
                  <td>Climate</td>
                  <td>Gravity</td>
                  <td>Population</td>
            </tr>
        `;
    },
    createTable(data) {
        this.initialTable();
        data.map(n => { document.querySelector('#SWTableJS tbody').innerHTML +=
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
}

export default dal;
