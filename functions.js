var all = document.getElementById('allList')

var ammo = document.getElementById('ammoList')
// var ammoSelect = document.getElementById('ammoRadio')

var Lammo = document.getElementById('LammoList')

var poke = document.getElementById('pokeList')
var pokeSelect = document.getElementById('pokeRadio')

var color = document.getElementById('colorList')
var colorSelect = document.getElementById('colorRadio')

let allData = []

let pokeData = []

let colorData = []

let ammoData = []

let limitedAmmoData = []

fetch('https://eksmanapi.herokuapp.com/all').then(function (response) {

	return response.json();

}).then(function (data) {

    data.forEach((item) => {

        item.forEach((itemm) => {

            allData.push(itemm.title || itemm.color)

        })
        
    })

}).catch(function (err) {
	
	console.warn('Something went wrong.', err);

});

fetch('https://eksmanapi.herokuapp.com/poke').then(function (response) {

	return response.json();

}).then(function (data) {

    data.forEach((item) => {

        pokeData.push(item.title)

    })

}).catch(function (err) {
	
	console.warn('Something went wrong.', err);

});

fetch('https://eksmanapi.herokuapp.com/colors').then(function (response) {
	
	return response.json();

}).then(function (data) {
	
    data.forEach((item) => {

        colorData.push(item.color)

    })

    display()

}).catch(function (err) {

	console.warn('Something went wrong.', err);

});

fetch('https://eksmanapi.herokuapp.com/ammo').then(function (response) {
	
	return response.json();

}).then(function (data) {
	
    data.forEach((item) => {

        ammoData.push(item.title)

    })

    display()

}).catch(function (err) {

	console.warn('Something went wrong.', err);

});

fetch('https://eksmanapi.herokuapp.com/ammo-20').then(function (response) {
	
	return response.json();

}).then(function (data) {
	
    data.forEach((item) => {

        limitedAmmoData.push(item.title)

    })

    display()

}).catch(function (err) {

	console.warn('Something went wrong.', err);

});

function display(){

    pokeData.forEach((item) => {

        let li = document.createElement("li");

        li.innerText = item;

        poke.appendChild(li);

    });
    colorData.forEach((item) => {

        let li = document.createElement("li");

        li.innerText = item;

        color.appendChild(li);

    });
    ammoData.forEach((item) => {

        let li = document.createElement("li");

        li.innerText = item;

        ammo.appendChild(li);

    });
    limitedAmmoData.forEach((item) => {

        let li = document.createElement("li");

        li.innerText = item;

        Lammo.appendChild(li);

    });
    allData.forEach((item) => {

        let li = document.createElement("li");

        li.innerText = item;

        all.appendChild(li);

    });

}

function addDataSelector() {

    if (colorSelect === true){
        addColorData()
    } else if (pokeSelect === true){
        addPokeData()
    }

}

function addColorData(){

    console.log('color')

    // fs.readFile('colors.json', function (err, data) {

    //     var json = JSON.parse(data)
        
    //     json.push('color : ' + currentSearchResult)

    //     json.push('value : ' + currentSearchResult)
    
    //     fs.writeFile("colors.json", JSON.stringify(json))
    // })
        
}

function addPokeData(){

    console.log('poke')

    // fs.readFile('poke.json', function (err, data) {

    //     var json = JSON.parse(data)

    //     json.push('title : ' + currentSearchResult)

    //     json.push('img : ' + currentSearchResult)
    
    //     fs.writeFile("poke2.json", JSON.stringify(json))
    // })
        
}