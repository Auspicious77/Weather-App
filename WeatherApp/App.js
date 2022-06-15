const cityform = document.querySelector('form');


const updatecity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.id);
    return{
        cityDets: cityDets,
        weather: weather
    }

// console.log(city);

};

cityform.addEventListener('submit', e=>{
    e.preventDefault();

    const city = cityform.city.value.trim();
    cityform.reset();

    //update UI with new city
    updatecity(city).then(data => 
        console.log(data))
        .catch(err => console.log(err))

})