const express = require('express')
const app = express()
const port = 3000


app.get('/v1/hello', (req, res) => {
  res.send('Hello World!')
  })

app.post('/v1/auth', (req, res) => {
  res.send('Auth Success')
  })

app.get('/v1/weather', get_weather)


function get_weather(req,response)
{
response.json(
    {
        "coord": {
          "lon": -123.262,
          "lat": 44.5646
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 281.59,
          "feels_like": 281.59,
          "temp_min": 279.1,
          "temp_max": 286.38,
          "pressure": 1024,
          "humidity": 75,
          "sea_level": 1024,
          "grnd_level": 1016
        },
        "visibility": 10000,
        "wind": {
          "speed": 1.07,
          "deg": 17,
          "gust": 1.14
        },
        "clouds": {
          "all": 22
        },
        "dt": 1642982860,
        "sys": {
          "type": 2,
          "id": 2010260,
          "country": "US",
          "sunrise": 1642952435,
          "sunset": 1642986538
        },
        "timezone": -28800,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
      }
)
}
app.listen(port, () => {
console.log(`Server Started`)
})

