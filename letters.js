var letters = {
	alef:drawAlef,
	bet:drawBet,
	gimmel:drawGimmel,
	dalet:drawDalet,
	hay:drawHay,
	nun:drawNun,
	engA:drawEngA,
	engE:drawEngE,
	engF:drawEngF,
	engH:drawEngH,
	engK:drawEngK,
	engL:drawEngL,
	kah:drawKah,
	kuh:drawKuh,
	ga:drawGa,
	ngu:drawNgu,
	cha:drawCha,
	tha:drawTha
}

function drawAlef(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(50,0);
	ctx.lineTo(350,300);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(50,300);
	ctx.lineTo(100,50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300,0);
	ctx.lineTo(280,230);
	ctx.stroke();
	
	curLetter = "alef";
	
	document.getElementById("headLetter").innerHTML = "&#1488";
	
	var audio = new Audio('alef.mp3');
	audio.play();
}

function drawBet(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(80,30);
	ctx.lineTo(310,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(310,30);
	ctx.lineTo(310,250);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(80,250);
	ctx.lineTo(370,250);
	ctx.stroke();
	
	curLetter = "bet";
	
	document.getElementById("headLetter").innerHTML = "&#64305";
	
	var audio = new Audio('bet.mp3');
	audio.play();
}

function drawGimmel(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(120,250);
	ctx.lineTo(280,170);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(280,250);
	ctx.lineTo(280,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120,30);
	ctx.lineTo(280,30);
	ctx.stroke();
	
	curLetter = "gimmel";
	
	document.getElementById("headLetter").innerHTML = "&#1490";
	
	var audio = new Audio('gimel.mp3');
	audio.play();
}

function drawDalet(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(70,30);
	ctx.lineTo(330,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(250,30);
	ctx.lineTo(250,270);
	ctx.stroke();
	
	curLetter = "dalet";
	
	document.getElementById("headLetter").innerHTML = "&#1491";
	
	var audio = new Audio('dalet.mp3');
	audio.play();
}

function drawHay(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(90,30);
	ctx.lineTo(310,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(310,270);
	ctx.lineTo(310,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(110,270);
	ctx.lineTo(110,130);
	ctx.stroke();
	
	curLetter = "hay";
	
	document.getElementById("headLetter").innerHTML = "&#1492";
	
	var audio = new Audio('hay.mp3');
	audio.play();
}

function drawNun(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5]);
	ctx.strokeStyle="#000000";

	ctx.beginPath();
	ctx.moveTo(140,30);
	ctx.lineTo(260,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(260,270);
	ctx.lineTo(260,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(255,270);
	ctx.lineTo(140,270);
	ctx.stroke();

	
	curLetter = "nun";
	
	document.getElementById("headLetter").innerHTML = "&#1504";
	
	var audio = new Audio('nun.mp3');
	audio.play();
}

function drawEngA(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";
	
	ctx.beginPath();
    ctx.moveTo(100,300);
    ctx.lineTo(200,50);
    ctx.moveTo(200,50);
    ctx.lineTo(300,300);
    ctx.moveTo(140,200);
    ctx.lineTo(260,200);
	ctx.stroke();

	curLetter = "engA";
	
	document.getElementById("headLetter").innerHTML = "A";
	
	var audio = new Audio('a.mp3');
	audio.play();
}

function drawEngE(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";
	
	ctx.beginPath();
    ctx.moveTo(125,275);
    ctx.lineTo(125,50);
    ctx.moveTo(125,275);
    ctx.lineTo(300,275);
    ctx.moveTo(125,50);
    ctx.lineTo(300,50);
    ctx.moveTo(125,165);
    ctx.lineTo(300,165);
	ctx.stroke();
	
	curLetter = "engE";
	
	document.getElementById("headLetter").innerHTML = "E";
	
	var audio = new Audio('e.mp3');
	audio.play();
}

function drawEngF(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";
	
	ctx.beginPath();
    ctx.moveTo(125,275);
    ctx.lineTo(125,50);
    ctx.moveTo(125,50);
    ctx.lineTo(300,50);
    ctx.moveTo(125,165);
    ctx.lineTo(300,165);
	ctx.stroke();
	
	curLetter = "engF";
	
	document.getElementById("headLetter").innerHTML = "F";
	
	var audio = new Audio('f.mp3');
	audio.play();
}

function drawEngH(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";
	
	ctx.beginPath();
    ctx.moveTo(125,275);
    ctx.lineTo(125,50);  
    ctx.moveTo(125,165);
    ctx.lineTo(300,165);
    ctx.moveTo(300,275);
    ctx.lineTo(300,50);
	ctx.stroke();
	
	curLetter = "engH";
	
	document.getElementById("headLetter").innerHTML = "H";
	
	var audio = new Audio('h.mp3');
	audio.play();
}

function drawEngK(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.beginPath();
    ctx.setLineDash([5,13]);
    ctx.lineWidth="5"
	ctx.strokeStyle="#000000";
    ctx.moveTo(125,275);
    ctx.lineTo(125,50);  
    ctx.moveTo(125,165);
    ctx.lineTo(275,275);
    ctx.moveTo(125,165);
    ctx.lineTo(275,50);
	ctx.stroke();

	curLetter = "engK";
	
	document.getElementById("headLetter").innerHTML = "K";
	
	var audio = new Audio('k.mp3');
	audio.play();
}

function drawEngL(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.beginPath();
    ctx.setLineDash([5,13]);
    ctx.lineWidth="5"
    ctx.moveTo(125,275);
    ctx.lineTo(125,50);  
    ctx.moveTo(300,275);
    ctx.lineTo(125,275);
	ctx.stroke();
	
	curLetter = "engL";
	
	document.getElementById("headLetter").innerHTML = "L";
	
	var audio = new Audio('l.mp3');
	audio.play();
}

function drawKah(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath(); 
	ctx.moveTo(120,50);
	ctx.lineTo(280,50);
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(140,50);
	ctx.lineTo(110,110);            
	ctx.stroke();

	//line three
	ctx.beginPath();
	ctx.moveTo(200,50);
	ctx.lineTo(200,150);            
	ctx.stroke();

	//line four
	ctx.beginPath();
	ctx.moveTo(260,50);
	ctx.lineTo(260,250);            
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(320,50);
	ctx.lineTo(320,150);            
	ctx.stroke();
	
	curLetter = "kah";
	
	document.getElementById("headLetter").innerHTML = "&#3904";
	
	var audio = new Audio('kah.mp3');
	audio.play();
}

function drawKuh(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Default settings             
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath(); 
	ctx.moveTo(120,50);
	ctx.lineTo(280,50);
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(120,50);
	ctx.lineTo(120,200);            
	ctx.stroke();

	//line three
	ctx.beginPath();
	ctx.moveTo(120,200);
	ctx.lineTo(280,200);            
	ctx.stroke();

	//line four
	ctx.beginPath();
	ctx.moveTo(280,50);
	ctx.lineTo(280,140);            
	ctx.stroke();

	//line five
	ctx.beginPath();
	ctx.moveTo(280,140);
	ctx.lineTo(200,140);            
	ctx.stroke();

	//line six
	ctx.beginPath();
	ctx.moveTo(200,140);
	ctx.lineTo(200,50);            
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(320,50);
	ctx.lineTo(320,150);            
	ctx.stroke();
	
	curLetter = "kuh";
	
	document.getElementById("headLetter").innerHTML = "&#3905";
	
	var audio = new Audio('kuh.mp3');
	audio.play();
}

function drawGa(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Default settings             
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath(); 
	ctx.moveTo(120,50);
	ctx.lineTo(280,50);
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(120,50);
	ctx.lineTo(120,140);            
	ctx.stroke();

	//line three
	ctx.beginPath();
	ctx.moveTo(120,140);
	ctx.lineTo(200,140);            
	ctx.stroke();

	//line four
	ctx.beginPath();
	ctx.moveTo(280,50);
	ctx.lineTo(280,250);            
	ctx.stroke();

	//line five
	ctx.beginPath();
	ctx.moveTo(200,140);
	ctx.lineTo(200,50);            
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(320,50);
	ctx.lineTo(320,150);            
	ctx.stroke();
	
	curLetter = "ga";
	
	document.getElementById("headLetter").innerHTML = "&#3906";
	
	var audio = new Audio('ga.mp3');
	audio.play();
}

function drawNgu(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Default settings             
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath();
	ctx.moveTo(150,50);
	ctx.lineTo(150,170);            
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(150,170);
	ctx.lineTo(250,260);            
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(250,260);
	ctx.lineTo(260,230);            
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(240,50);
	ctx.lineTo(240,150);            
	ctx.stroke();
	
	curLetter = "ngu";
	
	document.getElementById("headLetter").innerHTML = "&#3908";
	
	var audio = new Audio('nga.mp3');
	audio.play();
}

function drawCha(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Default settings             
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath(); 
	ctx.moveTo(120,70);
	ctx.lineTo(280,70);
	ctx.stroke();

	//line two
	ctx.beginPath();
	ctx.moveTo(280,70);
	ctx.lineTo(280,220);            
	ctx.stroke();

	//line three
	ctx.beginPath();
	ctx.moveTo(280,220);
	ctx.lineTo(120,220);            
	ctx.stroke();

	//line four
	ctx.beginPath();
	ctx.moveTo(140,20);
	ctx.lineTo(280,220);            
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(320,70);
	ctx.lineTo(320,170);            
	ctx.stroke();
	
	curLetter = "cha";
	
	document.getElementById("headLetter").innerHTML = "&#3909";
	
	var audio = new Audio('cha.mp3');
	audio.play();
}

function drawTha(canvas,ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Default settings             
	ctx.lineWidth="5";
	ctx.setLineDash([5,13]);
	ctx.strokeStyle="#000000";

	//line one
	ctx.beginPath(); 
	ctx.moveTo(180,50);
	ctx.lineTo(180,270);
	ctx.stroke();

	//tsug thung
	ctx.beginPath();
	ctx.moveTo(250,50);
	ctx.lineTo(250,150);            
	ctx.stroke();
	
	curLetter = "tha";
	
	document.getElementById("headLetter").innerHTML = "&#3921";
	
	var audio = new Audio('tha.mp3');
	audio.play();
}