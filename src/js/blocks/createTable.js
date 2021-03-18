import {delString} from './delString';
// import {state} from './dal';

export const createTable = (data) => {

    if (!data) {
        document.querySelector('.SWTableJS tbody').innerHTML = `
            <div class="loadingio-spinner-spin-ueeauidw9bp">
                <div class="ldio-bt0gdk9jjc">
                <div><div></div></div><div><div></div></div><div><div></div>
                </div><div><div></div></div><div><div></div></div><div><div>
                </div></div><div><div></div></div><div><div></div></div></div>
            </div>
        `;
        return;
    };

    emptyTable();
    if (data.length == 1 && !data[0].id) {
        data.map(n => { document.querySelector('.SWTableJS tbody').innerHTML +=`
            <tr>
                <td>${n.name}</td>
                <td>${n.diameter}</td>
                <td>${n.climate}</td>
                <td>${n.gravity}</td>
                <td>${n.population}</td>
            </tr>
        `});
    } else {
        data.map(n => { document.querySelector('.SWTableJS tbody').innerHTML +=`
            <tr>
                <td>${n.name}</td>
                <td>${n.diameter}</td>
                <td>${n.climate}</td>
                <td>${n.gravity}</td>
                <td>${n.population}</td>
                <td><button id="del_string" value=${n.id}>Del</button></td>
            </tr>
        `});
    }
    
    document.querySelectorAll('#del_string').forEach((item) => {item.addEventListener('click', (e) => delString(e))})
};

const emptyTable = () => {
    document.querySelector('.SWTableJS tbody').innerHTML = ``;
};