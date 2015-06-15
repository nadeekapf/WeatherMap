function fngetDetails() {
    var teams = [
	{
	   Teams: document.getElementById("city").value,
	   Long: -0.800299,
	   City: document.getElementById("city").value,
	   Lat: 51.6306,
	   Weather: "api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("city").value
	}
    ];

	for (var team in teams) {
		var obj = teams[team];
		(function (team) {
			coords = [team.Lat, team.Long]
			getWeather(coords, function (data) {
				
				var html = [];
				html.push('<div>')
				html.push(data.list[0].weather[0].description);
				html.push('</div>')
				$("#div381").text('');
				$("#div381").append(html.join('   '));
			});
			
			var wweek=[];
			getWeatherforWeek(coords,function(dataw){
				
				wweek.push('<table class='+"table table-bordered table-hover"+' id='+"myTable"+'><thead><tr><th>Date</th><th>Weather</th></tr></thead></table>');
				$("#divWeek").text('');
				$("#divWeek").append(wweek);
						$.each(dataw.list, function (i, v) {
							$('#myTable tr:last').after('<tr><td>'+dataw.list[i].dt_txt+'</td><td>'+dataw.list[i].weather[0].description+'</td></tr>');
							
						});
						
					});
					
                }(obj));
            }
        }

		function fnClear(){
			document.getElementById("city").value="";
		}
