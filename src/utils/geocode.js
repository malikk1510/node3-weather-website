const request = require('request');
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFsaWtrMTUxMCIsImEiOiJja2Q2d2VsdGYwNWQ2MnJwZnI3N2FrcjZ6In0.zsEg1EDf81NElORsp7kStA&limit=1';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Network Disconnection', undefined);
        } else if (response.body.features.length == 0) {
            callback('Invalid input', undefined);
        } else {
            const geo_Data = {
                place: response.body.features[0].place_name
            };
            const { place } = geo_Data;
            // const data = {
            //     long: response.body.features[0].center[0],
            //     lat: response.body.features[0].center[1]
            // };
            // callback(undefined, data); //for long &lat
            callback(undefined, geo_Data); //for place

        }
    })
}

module.exports = {
    geocode: geocode
};