var div=document.getElementById('wrap');
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
	}else{
		alert("输入有误，请检查！\nGO：向蓝色边所面向的方向前进一格\nTUN LEF：向左转（逆时针旋转90度）\nTUN RIG：向右转（顺时针旋转90度）\nTUN BAC：向右转（旋转180度）")
	}
}
function divGO(){
	if(angle>=0){
		if (angle%360/90==0&&parseInt(getComputedStyle(div).top)!==51) {
			div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
		}else if (angle%360/90==1&&parseInt(getComputedStyle(div).left)!==510) {
			div.style.left=(parseInt(getComputedStyle(div).left)+51)+"px";
		}else if (angle%360/90==2&&parseInt(getComputedStyle(div).top)!==510) {
			div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
		}else if (angle%360/90==3&&parseInt(getComputedStyle(div).left)!==51) {
			div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
		}
	}else{
		if (Math.abs(angle)%360/90==0&&parseInt(getComputedStyle(div).top)!==51) {
			div.style.top=(parseInt(getComputedStyle(div).top)-51)+"px";
		}else if (Math.abs(angle)%360/90==1&&parseInt(getComputedStyle(div).left)!==51) {
			div.style.left=(parseInt(getComputedStyle(div).left)-51)+"px";
		}else if (Math.abs(angle)%360/90==2&&parseInt(getComputedStyle(div).top)!==510) {
			div.style.top=(parseInt(getComputedStyle(div).top)+51)+"px";
		}else if (Math.abs(angle)%360/90==3&&parseInt(getComputedStyle(div).left)!==510) {
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