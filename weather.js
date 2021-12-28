// let xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cbf857554fc18aecbe1686533f317710",true);
// //https://api.openweathermap.org/data/2.5/weather?q=oulu&units=metric&appid=cbf857554fc18aecbe1686533f317710
// // Send request
// xmlhttp.send();
// // Let's create an event handler
// xmlhttp.onreadystatechange=function() {
//     if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
//         // Response is ready
//         // Let's parse JSON response
//         let answerObject = JSON.parse(xmlhttp.response)
//         // Let's add textual answer
//         document.getElementById("temperature").innerHTML = answerObject.main.temp;
//         document.getElementById("feelslike").innerHTML = answerObject.main.feels_like
//         // Let's add an image
//         // document.getElementById("answer-image").setAttribute('src', answerObject.image);
//     }
//   }

let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")
let cityName = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=cbf857554fc18aecbe1686533f317710')
    .then(Response => Response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        cityName.innerHtML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue
    })


.catch(error => alert("Wrong city name!"))

})

