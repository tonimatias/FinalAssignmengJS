// Tehdään muuttujat jokaiselle tarvittavalle elementille
let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")
let cityName = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");

// funktion check klikkaukseen
button.addEventListener('click', function(){
    // Haetaan API tiedot
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=cbf857554fc18aecbe1686533f317710')
    .then(Response => Response.json())
    .then(data => {
        // Haetaan tiedot
        let nameValue = data['name'];
        let tempValue = data['main']['temp'] + " °C";
        let descValue = data['weather'][0]['description'];

        // Tulostetaan arvot 
        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue
    })
    // Jos käyttäjä syöttää muuta kuin kaupungin nimen, tulee alert
    .catch(error => alert("Wrong city name!"))
})

