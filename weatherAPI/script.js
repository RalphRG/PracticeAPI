console.log("works");
const apiKey = 'c7ec8627afdc5f39d2b3cd73d5977caa';

//fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`)


const search = document.querySelector(".btn-svg");
// When search button is clicked the card will show up
search.addEventListener("click", () => {

  const card = document.querySelector(".card-container.hidden");card.classList.remove('hidden');
    getWeather();
});

//fetch weather data

async function getWeather(){
    try{
         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=edmonton,ca&appid=c7ec8627afdc5f39d2b3cd73d5977caa&units=metric`)
         const data = await response.json();

        if(!!response.cod){
            console.log('no fetch')
        }

         console.log(data);
         console.log(data.cod)
         console.log('this is the name',data.name);
         console.log(data.main.temp)
         console.log(data.weather[0]['main'])
         
        weatherCard(data.name,data.main.temp, data.weather[0]['main'])
    }catch(error){
        console.error(error)
    }
}
function weatherCard(place,temp,weather){
    let card = document.querySelector('.card-container');
    card.innerHTML = '';
    card.innerHTML = `<section class="card ">
    <h2 class="place">${place}</h2>
    <p class="temp">${temp}</p>
    <p class="weather">${weather}</p>
</section>`
}
