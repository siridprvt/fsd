const express = require('express');
const axios = require('axios');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// OpenWeatherMap API key (replace with your actual API key)
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

// Route to render weather data from OpenWeatherMap API
app.get('/', async (req, res) => {
    const city = 'London'; // Default city

    try {
        // Fetch weather data from OpenWeatherMap
        const response = await axios.get(apiUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric' // Temperature in Celsius
            }
        });

        const weather = response.data; // Get the weather data from the response

        // Render the data in the EJS template
        res.render('index', { weather });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
