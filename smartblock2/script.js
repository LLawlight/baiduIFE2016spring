var div=document.getElementById('wrap');
div.style.transition="1s linear";
var run=document.getElementById('run');
var angle=0;
run.onclick=function(){
	var cmd=document.getElementById('cmdinput').value;
	if (cmd=="TUN LEF"){	
		turnLeft();
	}else if(cmd=="TUN RIG"){	
		turnRight();
	}else if (cmd=="TUN BAC") {
		turnBack();
	}else if(cmd=="GO"){
		divGO();
	}else if (cmd=="TRA LEF") {
		traLeft();
	}else if (cmd=="TRA TOP") {
		traTop();
	}else if (cmd=="TRA RIG") {
		traRight();
	}else if (cmd=="TRA BOT") {
		traBottom();
	}else if (cmd=="MOV LEF") {
		moveLeft();
	}else if (cmd=="MOV TOP") {
		moveTop();
	}else if (cmd=="MOV RIG") {
		moveRight();
	}else if (cmd=="MOV BOT") {
		moveBottom();
	}else{
		alert("输入有误，请检查！\nGO：向蓝色边所面向的方向前进一格\nTUN LEF：向左转（逆时针旋转90度）\nTUN RIG：向右转（顺时针旋转90度）\nTUN BAC：向右转（旋转180度）\nTRA LEF：向屏幕的左侧移动一格，方向不变\nTRA TOP：向屏幕的上面移动一格，方向不变\nTRA RIG：向屏幕的右侧移动一格，方向不变\nTRA BOT：向屏幕的下面移动一格，方向不变\nMOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格\nMOV TOP：方向转向屏幕上面，向屏幕的上面移动一格\nMOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格\nMOV BOT：方向转向屏幕下面，向屏幕的下面移动一格")
	}
}
function divGO(){
	if(angle>=0){
		if (angle%360/90==0&&parseInt(getComputedStyle(div).top)!==51&&parseInt(getComputedStyle(div).top)%51==0) {
			div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
		}else if (angle%360/90==1&&parseInt(getComputedStyle(div).left)!==510&&parseInt(getComputedStyle(div).left)%51==0) {
			div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
		}else if (angle%360/90==2&&parseInt(getComputedStyle(div).top)!==510&&parseInt(getComputedStyle(div).top)%51==0) {
			div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
		}else if (angle%360/90==3&&parseInt(getComputedStyle(div).left)!==51&&parseInt(getComputedStyle(div).left)%51==0) {
			div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
		}
	}else{
		if (Math.abs(angle)%360/90==0&&parseInt(getComputedStyle(div).top)!==51&&parseInt(getComputedStyle(div).top)%51==0) {
			div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
		}else if (Math.abs(angle)%360/90==1&&parseInt(getComputedStyle(div).left)!==51&&parseInt(getComputedStyle(div).left)%51==0) {
			div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
		}else if (Math.abs(angle)%360/90==2&&parseInt(getComputedStyle(div).top)!==510&&parseInt(getComputedStyle(div).top)%51==0) {
			div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
		}else if (Math.abs(angle)%360/90==3&&parseInt(getComputedStyle(div).left)!==510&&parseInt(getComputedStyle(div).left)%51==0) {
			div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
		}
	}
}
function turnLeft(){
	angle=angle-90;
	div.style.transform='rotate('+angle+'deg)';
}
function turnRight(){
	angle=angle+90;
	div.style.transform='rotate('+angle+'deg)';
}
function turnBack(){
	angle=angle+180;
	div.style.transform='rotate('+angle+'deg)';
}
function traLeft(){
	if(parseInt(getComputedStyle(div).left)!==51&&parseInt(getComputedStyle(div).left)%51==0){
		div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
	}
}
function traTop(){
	if(parseInt(getComputedStyle(div).top)!==51&&parseInt(getComputedStyle(div).top)%51==0){
		div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
	}
}
function traRight(){
	if(parseInt(getComputedStyle(div).left)!==510&&parseInt(getComputedStyle(div).left)%51==0){
		div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
	}
}
function traBottom(){
	if(parseInt(getComputedStyle(div).top)!==510&&parseInt(getComputedStyle(div).top)%51==0){
		div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
	}
}
function moveLeft(){
	if (angle>=0) {
		if (angle%360/90==0) {
			turnLeft();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else if(angle%360/90==1){
			turnBack();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else if (angle%360/90==2) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else{
			divGO();
		}
	}else{
		if (Math.abs(angle)%360/90==0) {
			turnLeft();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else if(Math.abs(angle)%360/90==3){
			turnBack();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else if (Math.abs(angle)%360/90==2) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
			}
		}else{
			divGO();
		}
	}
}
function moveRight(){
	if (angle>=0) {
		if (angle%360/90==0) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else if(angle%360/90==3){
			turnBack();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else if (angle%360/90==2) {
			turnLeft();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else{
			divGO();
		}
	}else{
		if (Math.abs(angle)%360/90==0) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else if(Math.abs(angle)%360/90==1){
			turnBack();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else if (Math.abs(angle)%360/90==2) {
			turnLeft();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
			}
		}else{
			divGO();
		}
	}
}
function moveTop(){
	if (angle>=0) {
		if (angle%360/90==1) {
			turnLeft();
			if (parseInt(getComputedStyle(div).top)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else if(angle%360/90==2){
			turnBack();
			if (parseInt(getComputedStyle(div).top)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else if (angle%360/90==3) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else{
			divGO();
		}
	}else{
		if (Math.abs(angle)%360/90==1) {
			turnRight();
			if (parseInt(getComputedStyle(div).top)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else if(Math.abs(angle)%360/90==2){
			turnBack();
			if (parseInt(getComputedStyle(div).top)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else if (Math.abs(angle)%360/90==3) {
			turnLeft();
			if (parseInt(getComputedStyle(div).top)!==51) {
				div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
			}
		}else{
			divGO();
		}
	}
}
function moveBottom(){
	if (angle>=0) {
		if (angle%360/90==3) {
			turnLeft();
			if (parseInt(getComputedStyle(div).top)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else if(angle%360/90==0){
			turnBack();
			if (parseInt(getComputedStyle(div).top)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else if (angle%360/90==1) {
			turnRight();
			if (parseInt(getComputedStyle(div).left)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else{
			divGO();
		}
	}else{
		if (Math.abs(angle)%360/90==1) {
			turnLeft();
			if (parseInt(getComputedStyle(div).top)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else if(Math.abs(angle)%360/90==0){
			turnBack();
			if (parseInt(getComputedStyle(div).top)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else if (Math.abs(angle)%360/90==3) {
			turnRight();
			if (parseInt(getComputedStyle(div).top)!==510) {
				div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
			}
		}else{
			divGO();
		}
	}
}