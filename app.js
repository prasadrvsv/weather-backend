// const express = require('express')
// const app = express()
// const port = 3000

// const key = "eyJ1c2VyIjoicmFqYWxpbnYiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.rPaPZqtAUvJfaEgZp7y44POhq84ZMpYgY9TPkHah_Gk"
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// // app.get('/v1/hello', (req, res) => {
// //   res.send('Hello World!')
// //   })

// app.get('v1/hello', verifyToken, (req, res) => {
//   key.verifyAccessToken(req.b_token, 'api://default')
//     .then(jwt => {
//       res.send('You are viewing private profile info');
//     })
//     .catch(err => {
//       res.sendStatus(403);
//     });
// });

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers['authorization'];

//   if (bearerHeader) {
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[1];
//     req.b_token = bearerToken;
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }


// app.post('/v1/auth', (req, res) => {
//   // res.send('Auth Success')
//   username = req.body.username
//   password = req.body.password
//   if (username == "rajalinv" && password == "password"){
//     token = {
//       "jwt" : key,
//       //"expires": expiry 
//    }
//    res.json(token)

// }
//   })
// app.get('/v1/weather', get_weather)
// function get_weather(req,response)
// {
// response.json(
//     {
//         "coord": {
//           "lon": -123.262,
//           "lat": 44.5646
//         },
//         "weather": [
//           {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//           }
//         ],
//         "base": "stations",
//         "main": {
//           "temp": 281.59,
//           "feels_like": 281.59,
//           "temp_min": 279.1,
//           "temp_max": 286.38,
//           "pressure": 1024,
//           "humidity": 75,
//           "sea_level": 1024,
//           "grnd_level": 1016
//         },
//         "visibility": 10000,
//         "wind": {
//           "speed": 1.07,
//           "deg": 17,
//           "gust": 1.14
//         },
//         "clouds": {
//           "all": 22
//         },
//         "dt": 1642982860,
//         "sys": {
//           "type": 2,
//           "id": 2010260,
//           "country": "US",
//           "sunrise": 1642952435,
//           "sunset": 1642986538
//         },
//         "timezone": -28800,
//         "id": 5720727,
//         "name": "Corvallis",
//         "cod": 200
//       }
// )
// }
// app.listen(port, () => {
// console.log(`Server Started`)
// })

" use strict"
var express = require('express')
var app = express()
// var cors = require('cors')
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3Blc2giLCJwYXNzd29yZCI6MTIzfQ.u_yo4uukxyaKhgmfKfuv_9lRqzV0t1RiDn_yTne3hQ0"

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());


app.get('/v1/weather',get_weather_v1)
app.get('/v1/hello',get_hello)
app.post('/v1/auth',post_auth)



function get_weather_v1(req, res) {
    let tokens = key
    let token = req.query.token
    if(tokens.includes(token)){
        res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":282.61,"feels_like":282.61,"temp_min":280.58,"temp_max":285.29,"pressure":1018,"humidity":84},"visibility":10000,"wind":{"speed":0.89,"deg":225,"gust":0.89},"clouds":{"all":0},"dt":1642038331,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642002454,"sunset":1642035291},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
    }
     
}

function get_hello(req,res){
    //res.set('content-type', 'application/json')
    let tokens = key
    let token = req.query.token
    console.log(req.query.token)
    if(tokens.includes(token)){
        res.json({"hello": "Hi I am Prasad"})
    }
}

// const fs = require("fs");

function post_auth(req,res){
    let usernames = ['rajalinv','rvsv','prasad']
    let passwords = ['123','456','789']
    // const obj = JSON.parse(req.body)
    let username = req.body.username
    let pwd = req.body.password

    if(usernames.includes(username)){
      if(passwords.includes(pwd)){
          res.json({
            "access-token": key,
            "expires": "2022-01-11T22:18:26.625Z"
          })
      }
  }
}

app.listen(3000)
console.log('Server Started')