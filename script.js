'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



navigator.geolocation.getCurrentPosition(function (location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const coords = [lat, lon]
    const map = L.map('map').setView(coords, 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    

    map.on('click', function(e){
        const {lat, lng} = e.latlng;
        L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 50,
            autoClose: false,
            closeOnClick: false,
            className: true === true ? 'running-popup' : 'cycling-popup'
        }))
        .setPopupContent('Test')
        .openPopup();
    })

}, function () {
    alert('Failed to get current location')
});