fetch('http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt=1&appid=eb9906711076a1ee61f0bdb8bd7907ca')
.then(function (resp) {return resp.json()})
.then(function (data) {
    console.log(data)
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.deg').innerHTML = (data.main.temp - 273).toFixed() + '&deg;';
    document.querySelector('.clouds').textContent = data.weather[0]['description'];
    document.querySelector('.feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function () {
    
});
//'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=eb9906711076a1ee61f0bdb8bd7907ca'