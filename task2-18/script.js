var insertfromleft=document.getElementById("insertfromleft");
insertfromleft.onclick=function(){
	var num=document.getElementById('inputnum').value;
	var insertnum=document.createTextNode(num);
	var oLi=document.createElement("li");
	var oUl=document.getElementsByTagName('ul')[0];
	var firstli = oUl.querySelectorAll("li")[0];
	oLi.appendChild(insertnum);
	if(!/^\d+$/.test(num)){
		alert("请输入正确的整数！");
	}else if(firstli){
		oUl.insertBefore(oLi,firstli);
	}else{
		oUl.appendChild(oLi);
	}
}
var insertfromright=document.getElementById("insertfromright");
insertfromright.onclick=function(){
	var num=document.getElementById('inputnum').value;
	var insertnum=document.createTextNode(num);
	var oLi=document.createElement("li");
	var oUl=document.getElementsByTagName('ul')[0];
	if(!/^\d+$/.test(num)){
		alert("请输入正确的整数！");
	}else{
	oLi.appendChild(insertnum);
	oUl.appendChild(oLi);
	}
}
var removefromleft=document.getElementById("removefromleft");
removefromleft.onclick=function(){
	var oUl=document.getElementsByTagName("ul")[0];
	var firstli = oUl.querySelectorAll("li")[0];
	alert(firstli.innerHTML);
	oUl.removeChild(firstli);
}
var removefromright=document.getElementById("removefromright");
removefromright.onclick=function(){
	var oUl=document.getElementsByTagName("ul")[0];
	alert(oUl.lastChild.innerHTML);
	oUl.removeChild(oUl.lastChild);
}

var oUl=document.getElementsByTagName('ul')[0];
oUl.addEventListener('click', function(e) {
	var e = e || window.event,
		target = e.target || e.srcElement;
	if (target.tagName.toLowerCase() === 'li') {
		oUl.removeChild(target);
	}
});