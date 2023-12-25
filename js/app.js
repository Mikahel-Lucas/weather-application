const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
    .querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon}] = await 
        getCityWeather(Key)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`
    timeIconContainer.innerHTML = timeIcon

    const setImgSrc = dayOrNight => timeImg.src = `./src/${dayOrNight}.svg`
    IsDayTime ? setImgSrc('day') : setImgSrc('night')
        
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
    
    cityForm.reset()
})

