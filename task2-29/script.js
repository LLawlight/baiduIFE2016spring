var feedback=document.getElementById("feedback");
var verification=document.getElementById('verification');
var patt=/^[A-z0-9\u4e00-\u9fa5]+$/;
verification.onclick=function(){
	var proinputname=document.getElementById('inputname');
	var inputname=proinputname.value;
	var trueinputname=inputname.trim();
	if(trueinputname.match(/[\u4e00-\u9fa5]/g)){
		trueinputnamelength=trueinputname.length+trueinputname.match(/[\u4e00-\u9fa5]/g).length;
	}else{
		trueinputnamelength=trueinputname.length;
	}
	console.log(trueinputnamelength);
	if(trueinputname==""){
		feedback.innerHTML="姓名不能为空";
		feedback.style.color="red";
		proinputname.style.border="1px solid red";
	}else if (trueinputnamelength<4||trueinputnamelength>16) {
		feedback.innerHTML="字符长度应为4~16个字符";
		feedback.style.color="red";
		proinputname.style.border="1px solid red";
	}else if(!patt.test(trueinputname)){
		feedback.innerHTML="名字里有奇怪的东西混进去了╭(﹊∩∩﹊#)╮";
		feedback.style.color="red";
		proinputname.style.border="1px solid red";
	}else{
		feedback.innerHTML="名称格式正确";
		feedback.style.color="green";
		proinputname.style.border="1px solid green";
	}
}