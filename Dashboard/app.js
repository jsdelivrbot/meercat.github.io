loadDate();
loadWeather();
loadNews();


function loadWeather() {
  var weather = $("#weather");
  var url = "https://api.forecast.io/forecast/"; // Dark Sky API url
  var apiKey = "YOUR API KEY"; // API key from Dark Sky

}

function success(position) {
    var latitude = position.coords.latitude; // latitude using geolocation
    var longitude = position.coords.longitude; // longitude using geolocation

    // API request:
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
  }

  // This message is displayed if their is a geolocation error:
  function error() {
    alert("ERROR! Unable to retrieve your location for weather");
  }

  // calling the geolocation API
  navigator.geolocation.getCurrentPosition(success, error);

  // the text that will be displayed while the function is making the request
  weather.text("fetching weather...");
}


function loadNews() {
  var news = $("#news");
  var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey="; // News API url
  var apiKey = "e0ea4a723c197c32872ea9ae2dd4cd8f"; // API key from News API

  $.getJSON(url + apiKey, function(data) {

    // map() method to call article urls and titles

    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });

     // joining the titles with two line breaks

    news.html(titles.join("<br><br>"));
  });

  // the text that will be displayed while the function is making the request
  news.text("LOADING NEWS REQUEST..."); 
}
