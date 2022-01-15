"use strict"

// THIS FUNCTION GET COFFEES FROM LOCALSTORAGE, OR IF ITS NOT THERE, RETURNS A DEFAULT ARRAY
let coffees = function () {
    if (localStorage.getItem("coffees") !== null) {
        return JSON.parse(localStorage.getItem("coffees"));
    } else {
        return [
            {
                id: 1,
                name: 'San Antonio Morning',
                origin: "Brazil",
                roast: 'light',
                image: "light-roast-coffee-bean.jpeg"
            },
            {
                id: 2,
                name: 'Alamo City Blonde',
                origin: "Columbia",
                roast: 'light',
                image: "light-roast-coffee-bean.jpeg"
            },
            {id: 3, name: 'Rodeo Drive', origin: "Indonesia", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 4, name: 'Pizza Time', origin: "Honduras", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 5, name: 'Light City', origin: "Ethiopia", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 6, name: 'Half City', origin: "Peru", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 7, name: 'Folgers', origin: "Uganda", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 8, name: 'Double Light', origin: "Brazil", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 9, name: 'Light Bulb', origin: "Ecuador", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 10, name: 'Cinnamon', origin: "Indonesia", roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {
                id: 11,
                name: 'Nitty Gritty',
                origin: "Honduras",
                roast: 'medium',
                image: "medium-roasts-coffee-bean.jpeg"
            },
            {
                id: 12,
                name: 'Downtown Brown',
                origin: "Ethiopia",
                roast: 'medium',
                image: "medium-roasts-coffee-bean.jpeg"
            },
            {id: 13, name: 'Bye Felicia', origin: "Peru", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 14, name: 'City', origin: "Uganda", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 15, name: 'American', origin: "Brazil", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 16, name: 'Breakfast', origin: "Ecuador", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 17, name: 'Medrano', origin: "Columbia", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 18, name: 'Spicy', origin: "Indonesia", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {
                id: 19,
                name: 'Pickle Coffee',
                origin: "Honduras",
                roast: 'medium',
                image: "medium-roasts-coffee-bean.jpeg"
            },
            {id: 20, name: 'San Antonio', origin: "Ethiopia", roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 21, name: 'Turkish Delight', origin: "Peru", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 22, name: 'Maui Wowie', origin: "Uganda", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 23, name: 'High', origin: "Brazil", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 24, name: 'Continental', origin: "Ecuador", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 25, name: 'New Orleans', origin: "Honduras", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 26, name: 'European', origin: "Indonesia", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 27, name: 'Espresso', origin: "Ethiopia", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 28, name: 'Viennese', origin: "Peru", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 29, name: 'Italian', origin: "Columbia", roast: 'dark', image: "dark-roast.jpeg"},
            {id: 30, name: 'French', origin: "Honduras", roast: 'dark', image: "dark-roast.jpeg"}
        ]
    }
}();

// THIS FUNCTION RESETS LOCALSTORAGE AND RELOADS THE PAGE
function resetArray() {
    window.localStorage.removeItem('coffees');
    location.reload();
}

function renderCoffee(coffee) {
    let html = '<div class="coffee-box my-2 p-3 mx-0 mx-sm-auto">'
    html += '<div><h2 class="font-weight-bold">' + coffee.name + '</h2></div><div><h3>' + coffee.roast + '</h3></div><div class="img-holder"><img class="img-fluid" src="' + coffee.image + '"></div><div>' + coffee.origin + '</div></div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    let selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    let filteredCoffees = [];
    if (selectedRoast === 'all roasts') {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        })
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function searchForCoffee() {
    let searchedForCoffee = document.querySelector('#coffeeName').value.toLowerCase();
    let searchedCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().startsWith(searchedForCoffee)) {
            searchedCoffees.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(searchedCoffees);
}

function addACoffee() {
    let newCoffeeInfo = {};
    let newName = newCoffeeName.value;
    let newRoast = newCoffeeRoast.value;
    let newOrigin = newCoffeeOrigin.value;
    let newIndex = function () {
        for (let i = 0; i < coffees.length; i++) {
            if (coffees[i].roast === 'medium') {
                return i;
            }
        }
    }();
    newCoffeeInfo.id = coffees.length + 1;
    newCoffeeInfo.name = newName;
    newCoffeeInfo.origin = newOrigin;
    newCoffeeInfo.roast = newRoast;
    if (newName === "") {
        return;
    }
    if (newRoast === "") {
        return;
    }
    if (newOrigin === "") {
        return;

    } else if (newRoast === 'light') {
        newCoffeeInfo.image = "light-roast-coffee-bean.jpeg"
        coffees.unshift(newCoffeeInfo);
    } else if (newRoast === 'medium') {
        newCoffeeInfo.image = "medium-roasts-coffee-bean.jpeg"
        coffees.splice(newIndex, 0, newCoffeeInfo);
    } else {
        newCoffeeInfo.image = "dark-roast.jpeg"
        coffees.push(newCoffeeInfo);
    }

    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('coffees', JSON.stringify(coffees));
    location.reload();
}

function laughSound() {
    let haHa = new Audio("assets/the-simpsons-nelsons-haha.mp3");
    haHa.play();
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// let coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];

let newCoffeeName = document.querySelector('#newCoffee');
let newCoffeeRoast = document.querySelector('#selectRoast');
let newCoffeeOrigin = document.querySelector('#selectOrigin');
let tbody = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

