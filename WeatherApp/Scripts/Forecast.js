const key = 'c2a2114448bf44f0905175053221406'

//getWeather info
const getWeather = async (id) => {
const base =  'http://api.weatherapi.com/v1/current.json?key=c2a2114448bf44f0905175053221406&q=manchester&aqi=no'
const query = `${id}?apikey=${key}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0]
// console.log(data)

};


// getCity info

const getCity = async (city) => {
    const base = 'http://api.weatherapi.com/v1/search.json?key=c2a2114448bf44f0905175053221406&q=manchester'
    const query = `?apiKey = ${key}&q=${city}`;


    const response = await fetch(base + query)
    const data = response.json();

    return data[0]
    // console.log(data)
   
}

getCity('manchester')
.then(data=>{
    return getWeather(data.key);
}).then(data => {
    console.log(data);
})
.catch(err => console.log(err))

// getWeather("2802433")