function getWeather(coords, callback) {
           
     var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + document.getElementById("city").value
     $.ajax({
			dataType: "jsonp",
			url: url,
			jsonCallback: 'jsonp',
			cache: false,
			success: function (data) {
				callback(data);
			}
		});
	}
		
	function getWeatherforWeek(coords, callback) {
		var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + document.getElementById("city").value+"&units=metric&cnt=7"
		 $.ajax({
			dataType: "jsonp",
			url: url,
			jsonCallback: 'jsonp',
			cache: false,
			success: function (data) {
				callback(data);
			}
		});
	}
