
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const address = document.querySelector('.location')
const forecast = document.querySelector('.forecast')
const temp = document.querySelector('.temp');
const err = document.querySelector('.err')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' +
    location).then((response) => {
        response.json().then((data) => {
        if (data.error) {
            err.style.display= 'block'
            err.innerText= data.error;
            console.log(data.error)
    } else {
            console.log(data);
            address.innerText = data.location;
            console.log(data.location);
            forecast.innerText = data.forecast;
            console.log(data.forecast);
            temp.innerText = data.temperature +'°' + 'C';
            console.log(data.temperature);
    
    }
    })
 })
})

