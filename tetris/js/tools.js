
function random_color()
{
		var alea = get_alea(0,8);
		if (alea == 1)
				return("color1");
		else if (alea == 2)
				return("color2");
		else if (alea == 3)
				return("color3");
		else if (alea == 4)
				return("color4");
		else if (alea == 5)
				return("color5");
		else if (alea == 6)
				return("color6");
		else if (alea == 7)
				return("color7");
		else if (alea == 8)
				return("color8");
}

function draw_background_title()
{
		var title_contner = document.getElementById('title_contner');
		var i = 0;
		title_contner.innerHTML = "";
		while (i < ((window.innerWidth / 25) * 5))
		{
			var rand_color = random_color();
			title_contner.innerHTML += "<div class=\"relative_piece low_opacity " +  rand_color + "\">";
			i++;
		}
}
draw_background_title()
window.onresize = function(){
	draw_background_title();
}
