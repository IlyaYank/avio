var clicks = 0;

function OneClick(){
	clicks += 1;
	console.log('h');
	if(clicks > 8){
		clicks = 0;
	}
	document.getElementById("clicks").innerHTML = clicks;
} 

function OneClic(){
	clicks -= 1;
	if(clicks < 0){
		clicks = 0;
	}
	document.getElementById("clicks").innerHTML = clicks;
} 