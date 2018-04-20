let http = require('http');
var express = require('express');
var app = express();

app.get('/',
    function (request, response) {

        console.log('=^.^= A kawaii neko appeared on your server =^.^=');

        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        if (request.param('persons') > 0 ) {
            var parameterPersonsToGet = request.param('persons');
        } else {
            var parameterPersonsToGet = 10;
        }

        var firstNameArray = [
            'Lisa',
            'Marco',
            'Sander',
            'Djim',
            'Fer',
            'Inge',
            'Esther',
            'Ruben',
            'Eva',
            'Jones',
            'Chef',
            'Floris',
            'Rowenna',
            'Kim',
            'Kitty'
        ];

        var lastNameArray = [
            'Tyem',
            'van Poortvliet',
            'Postma',
            'Oomes',
            'Schmidt',
            'van Zetten',
            'Zygmuntowitcz',
            'Kolijn',
            'Hoefman',
            'de Poes',
            'Konijn',
            'Smits',
            'Lequi',
            'Schuurmans',
            'Hoogendaale'
        ]

        var cityArray = [
            'Tholen',
            'Bergen op Zoom',
            'Breda',
            'Roosendaal',
            'Heerle',
            'Vlissingen',
            'Rotterdam',
            'Amsterdam',
            'Marle',
            'Maastricht'
        ];

        var o = {};
        var key = 'persons';
        o[key] = [];

        for (i = 0; i < parameterPersonsToGet; i++) {
            var randomFirstName = Math.floor(Math.random() * firstNameArray.length);
            var randomLastName = Math.floor(Math.random() * lastNameArray.length);
            var randomAge = Math.floor(Math.random() * 80 + 1);
            var randomCity = Math.floor(Math.random() * cityArray.length);

            var data = {
                'firstname': firstNameArray[randomFirstName],
                'lastname': lastNameArray[randomLastName],
                'age': randomAge,
                'city': cityArray[randomCity]
            }

            o[key].push(data);
        }

        let json = JSON.stringify(o);
        response.end(json);
    }
);

app.listen(process.env.PORT || 3000);