let carsList = document.getElementById('carsList');

// let cars = [
//     {
//         name: 'fiat',
//         model: '500',
//         color: 'white',
//     },
//     {
//         name: 'Volvo',
//         model: 'S60',
//         color: 'Grey',
//     },
//     {
//         name: 'BMW',
//         model: 'X7',
//         color: 'Black',
//     },
// ];



fetch('./cars.json')
    .then(response => response.json())
    .then(data => {
        // Hier begint de loop pas nadat de accolade { open is gegaan
        for (let car of data) {
            carsList.innerHTML += `
            <p>${car.name}</p>
            `    
    }
    })