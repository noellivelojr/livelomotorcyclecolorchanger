function GenerateColor(){
	var setColor = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("color1").style.backgroundColor = "#" + setColor;
	document.querySelector("#color").innerHTML ="#"+setColor;
}
function ShowColor(){
	var show = document.getElementById('show').value;
	if (document.getElementById('show').value == 'red'){
		document.getElementById('color1').style.background = "red";
	}
	else if (document.getElementById('show').value == 'blue'){
		document.getElementById('color1').style.background = "blue";
	}
	else if (document.getElementById('show').value == 'green'){
		document.getElementById('color1').style.background = "green";
	}
	else if (document.getElementById('show').value == 'black'){
		document.getElementById('color1').style.background = "black";
	}
	else if (document.getElementById('show').value == 'yellow'){
		document.getElementById('color1').style.background = "yellow";
	}
	else if (document.getElementById('show').value == 'grey'){
		document.getElementById('color1').style.background = "grey";
	}
	else if (document.getElementById('show').value == 'light blue'){
		document.getElementById('color1').style.background = "#64C5EB";
	}
	else{
		document.getElementById('color1').style.background = "#86817C";
	}
} 


function ResetColor(){
	var reset = document.querySelector("#color1").style.backgroundColor = "white";
}