//click get weather button to get the current weather data from openweather.org data base
async function getWeather() {
  const apiKey = "821c602bd6e84fd0fa603df08e954ac9";
  const cityInput = document.getElementById("userInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather-info").innerHTML = "City not found";
    } else {
      updateBackground(data.weather[0].main.toLowerCase());

      const weatherInfo = `
                <h5>Present Weather of</h5>
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
      document.getElementById("weather-info").innerHTML = weatherInfo;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function updateBackground(weatherCondition) {
  const body = document.body;

  switch (weatherCondition) {
    case "clear":
      body.style.backgroundImage =
        'url("https://i.ibb.co/P5WnCcG/sun-3588618-1280-1.jpg")';
      break;
    case "rain":
      // body.style.backgroundImage = 'url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHg0bm9lamFoMmh6cDJ0bXBiNnpleDdjbWwxbzcwN2NlZTd1eG9uMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3ov9jCEFMBtCy54q6Q/giphy.gif")';
      // body.style.backgroundImage = 'url("https://dynamicpowerpoint.com/wp-content/uploads/2022/02/rain-and-clouds-full-hd-weather-icon-sample.gif")';
      body.style.backgroundImage =
        'url("https://dynamicpowerpoint.com/wp-content/uploads/2022/02/thunder-full-hd-weather-icon-sample.gif")';
      break;
    case "thunderstorm":
      body.style.backgroundImage =
        'url("https://dynamicpowerpoint.com/wp-content/uploads/2022/02/thunder-full-hd-weather-icon-sample.gif")';
      break;
    case "haze":
      body.style.backgroundImage =
        'url("https://www.denverpost.com/wp-content/uploads/2020/08/505.0.43722125-DENVER_HAZE_069x.jpg?w=978")';
      break;
    case "smoke":
      body.style.backgroundImage =
        'url("https://media.wired.com/photos/5b8473dacde746582fe9ff00/master/w_2560%2Cc_limit/smokestorm-1021620844.jpg")';
      break;
    case "overcast":
      body.style.backgroundImage =
        'url("https://images.freeimages.com/images/large-previews/d05/cloudy-sky-1200230.jpg")';
      break;
    case "fog":
      body.style.backgroundImage = 'url("https://i.gifer.com/GCue.gif")';
      break;
    case "snow":
      body.style.backgroundImage =
        'url("https://i.pinimg.com/originals/41/9e/97/419e974e5b946cc9854be1d8d3ec8513.gif")';
      break;
    case ("scattered", "clouds"):
      body.style.backgroundImage =
        'url("https://c0.wallpaperflare.com/preview/532/447/657/scattered-white-clouds.jpg")';
      break;
    case "drizzle":
      body.style.backgroundImage =
        'url("https://s7d2.scene7.com/is/image/TWCNews/raindrops_jpg-11")';
      break;
    case "mist":
      body.style.backgroundImage =
        'url("https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/fog-on-a-country-road.jpg")';
      break;
    case ("few", "few clouds"):
      body.style.backgroundImage =
        'url("https://i.pinimg.com/736x/50/0f/87/500f87a5f85e9b2d198e6c4f62fa4b0f.jpg")';
      break;
    case (" ", "city not found"):
      body.style.backgroundImage =
        'url("https://wallpaperaccess.com/full/2391514.jpg")';
      break;
    default:
      body.style.backgroundImage =
        'url("https://png.pngtree.com/thumb_back/fh260/background/20200205/pngtree-3d-world-map-with-shadow-light-image_329158.jpg")';
      body.style.backgroundColor = "black";
      break;
  }
}
