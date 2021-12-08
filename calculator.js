var slider = "slider::-webkit-slider-thumb";


function toggle(me){
	if(me.value==1){
		document.getElementById('main').style.background = " hsl(222, 26%, 31%)"
		document.getElementById('calc').style.color = "white";
		document.getElementById('label').style.color = "white";
		document.getElementById('p-1').style.color = "white";
		document.getElementById('container-1').style.background = "hsl(223, 31%, 20%)";
		document.getElementById('answer-1').style.background = "hsl(224, 36%, 15%)";
		document.getElementById('slider-1').style.background = "hsl(223, 31%, 20%)";
		document.getElementById('answer-1').style.color = "white";
		var x = document.getElementsByClassName('btn');
		for(let i=0;i<x.length;i++){
			if(x[i].value=="DEL" || x[i].value=="RESET"){
				x[i].style.background = "hsl(225, 21%, 49%)";
			}else if (x[i].value == "="){
				x[i].style.background = "hsl(6, 63%, 50%)";

			}else {
				x[i].style.background = "white";
				x[i].style.color = "hsl(221, 14%, 31%)";
			}
		}
	}else if(me.value==2){
		document.getElementById('main').style.background = "hsl(0, 0%, 90%)"
		document.getElementById('calc').style.color =  "hsl(60, 10%, 19%)"
		document.getElementById('label').style.color =  "hsl(60, 10%, 19%)"
		document.getElementById('p-1').style.color = "hsl(60, 10%, 19%)"
		document.getElementById('container-1').style.background = "hsl(0, 5%, 81%)";
		document.getElementById('answer-1').style.background = "hsl(0, 0%, 93%)";
		document.getElementById('slider-1').style.background = "hsl(0, 5%, 81%)";
		document.getElementById('answer-1').style.color = "black";
		var x = document.getElementsByClassName('btn');
		for(let i=0;i<x.length;i++){
			if(x[i].value=="DEL" || x[i].value=="RESET"){
				x[i].style.background = "hsl(185, 42%, 37%)";
			}else if (x[i].value == "="){
				x[i].style.background = "hsl(25, 98%, 40%)";

			}else {
				x[i].style.background = "white";
				x[i].style.color = "hsl(60, 10%, 19%)";
			}
		}
		
	}else {
		document.getElementById('main').style.background = "hsl(268, 75%, 9%)"
		document.getElementById('calc').style.color =  "hsl(52, 100%, 62%)"
		document.getElementById('label').style.color =  "hsl(52, 100%, 62%)"
		document.getElementById('p-1').style.color = "hsl(52, 100%, 62%)"
		document.getElementById('container-1').style.background = "hsl(268, 71%, 12%)";
		document.getElementById('answer-1').style.background = "hsl(268, 71%, 12%)";
		document.getElementById('slider-1').style.background = "hsl(268, 71%, 12%)";
		document.getElementById('answer-1').style.color = "hsl(52, 100%, 62%)";
		
		var x = document.getElementsByClassName('btn');
		for(let i=0;i<x.length;i++){
			if(x[i].value=="DEL" || x[i].value=="RESET"){
				x[i].style.background = "hsl(281, 89%, 26%)";
			}else if (x[i].value == "="){
				x[i].style.background = "hsl(176, 100%, 44%)";
			}else {
				x[i].style.background = "hsl(268, 47%, 21%)";
				x[i].style.color = "hsl(52, 100%, 62%)";
			}
		}
		
	}
}
function dis(val)
{
	if(document.getElementById("answer-1").value==0){
		document.getElementById("answer-1").value=val
	}else {
		document.getElementById("answer-1").value+=val;
	}

}
//function for evaluation
function solve()
{
let x = document.getElementById('answer-1').value
let y = eval(x)
document.getElementById("answer-1").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("answer-1").value =0;
}



