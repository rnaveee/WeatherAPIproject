let loc;
const APIKEY = 'be89089f34294728858194156252905';

function getInput() {
    loc = document.getElementById('search').value;

    const URL = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${loc}`;


    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('temp').innerText = data.current.temp_c + '°C';
            document.getElementById('city').innerText = data.location.name + '\n';
            document.getElementById('region').innerText = data.location.region;
            document.getElementById('wind').innerText = 'Wind (kPh): ' + data.current.wind_kph;
            document.getElementById('humidity').innerText = 'Humidity: ' + data.current.humidity + '%';
            document.getElementById('pressure').innerText = 'Pressure (inHg): ' + data.current.pressure_in;
            const dateTime = data.location.localtime
            document.getElementById('time').innerText = dateTime.split(" ")[1];
        })
        .catch(error => {
            console.log(error);
            document.getElementById('temp').innerText = '0C';
            document.getElementById('city').innerText = data.location.name;
            document.getElementById('region').innerText = data.location.region;
            document.getElementById('wind').innerText = 'Wind (kPh): 0';
            document.getElementById('humidity').innerText = 'Humidity: 0%';
            document.getElementById('pressure').innerText = 'Pressure (inHg): 0';
            document.getElementById('time').innerText = '00:00';
        });
}