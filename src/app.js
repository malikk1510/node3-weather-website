const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const geo = require("./utils/geocode");
const forecast = require("./utils/forecast");



// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));
// const about = path.join(__dirname, '../public/about.html');
// const help = path.join(__dirname, '../public/help.html');

//Define path for Express Configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partial_views');


//Set up Handlers & views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//set up static path
app.use(express.static(publicDirectoryPath));

//Routing
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'This is where all front data will come.'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        message: 'This is where all personal info will come.'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is some help text.',
        title: 'Help'

    })
})
app.get('/clock', (req, res) => {
    res.render('ticky_clock');
});
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ error: "Address field undefined!!" })
    }
    geo.geocode(req.query.address, (error, { place } = {}) => {
        if (error) {
            return res.send({
                error: error
            })
        };
        forecast.weather(place, (error, { weatherDescriptions, temperature, feelslike } = {}) => {
            if (error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                Location: place,
                Weather_Descriptions: weatherDescriptions,
                Temperature: temperature,
                Feelslike: feelslike
            });

        });
    });

})

app.get('/help/*', (req, res) => {
    // res.send("Help page not found")
    res.render('error', {
        errorMessage: "Help article not found"
    });
})

app.get('*', (req, res) => {
    // res.send("404 not found")
    res.render('error', {
        title: '404',
        errorMessage: "Page not found"
    });
})

//    app.use('/about1', express.static(about));
/*app.use('/help', express.static(help));

app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>');
})
app.get('/help', (req, res) => {
    res.send("<h1>Help page</h1>");
})
app.get('/about', (req, res) => {
    res.send("<h2>Version :2.0.1</h2>");
    
})*/


app.listen(port, () => {
    console.log('Server is up on port ' + port);
})