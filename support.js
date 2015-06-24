function fngetDetails(callback) {
	$("#divCurrent").text('');
	$("#divWeek").text('');
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
			
			
			var wweek=[];
			getWeatherforWeek(coords,function(dataw){
				
				if(dataw.list.length===0)
				{
					$("#divWeek").text('');
					
				}
				else{
				
				$.each(dataw.list, function (i, v) {
					wweek.push('<h3 class=\"menuheader expandable\">'+dataw.list[i].dt_txt+' - '+dataw.list[i].weather[0].main+'</h3>');
					wweek.push('<ul class=\"categoryitems\">'
					+'<li>weather      - '+dataw.list[i].weather[0].description+'</li>'
					+'<li>temp         - '+dataw.list[i].main.temp+'</li>'
					+'<li>pressure     - '+dataw.list[i].main.pressure+'</li>'
					+'<li>sea level    - '+dataw.list[i].main.sea_level+'</li>'
					+'<li>humidity     - '+dataw.list[i].main.humidity+'</li>'
					+'<li>wind speed   - '+dataw.list[i].wind.speed+'</li>'
					+'</ul>');
				});
				$("#divWeek").append(wweek);
				}
					callback();	
					});
					
                }(obj));
            }
			
        }


		
function fnAnimateList()
{

	ddaccordion.init({
	headerclass: "expandable", 
	contentclass: "categoryitems", 
	revealtype: "click", 
	mouseoverdelay: 200, 
	collapseprev: true, 
	defaultexpanded: [0], 
	onemustopen: false, 
	animatedefault: true, 
	persiststate: true, 
	toggleclass: ["", "openheader"], 
	togglehtml: ["prefix", "", ""], 
	animatespeed: "fast", 
	oninit:function(headers, expandedindices){ 
	},
	onopenclose:function(header, index, state, isuseractivated){ 
	}
});
}
		
function fnClear(){
	document.getElementById("city").value="";
}

