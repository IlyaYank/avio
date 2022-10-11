var clicks = 0;
function OneClick(){
	clicks += 1;
	if(clicks > 8){
		clics = 0;
	}
	document.getElementById("clicks").innerHTML = clicks;
} 

function OneClick(){
	clicks -= 1;
	if(clicks < 0){
		clics = 0;
	}
	document.getElementById("clicks").innerHTML = clicks;
} 