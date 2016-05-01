//名称
function nameVerification(){
	var oName=document.getElementById('oName');
	var nameMsg=document.getElementById('nameMsg');
	var patt=/^[\w\u4e00-\u9fa5]+$/;
	oName.onfocus=function(){		
		nameMsg.style.display="block";
		oName.style.border="1px solid #62AEEC";
		oName.style.boxShadow="0px 0px 10px #DCECF9";
	}
	oName.onblur=function(){
		oNameText=oName.value.trim();
		oNametrueText=oNameText.replace(/[^\x00-\xff]/g,"xx");
		if (oName.value=="") {
			nameMsg.innerHTML="名称不能为空";
			nameMsg.style.color="red";
			oName.style.border="1px solid red";
		}else if (oNametrueText.length<4||oNametrueText.length>16) {
			nameMsg.innerHTML="长度为4~16个字符，一个汉字为2个字符";
			nameMsg.style.color="red";
			oName.style.border="1px solid red";
		}else if (patt.test(oNameText)) {
			nameMsg.innerHTML="名称可用";
			nameMsg.style.color="green";
			oName.style.border="1px solid green";
		}else{
			nameMsg.innerHTML="名称格式错误";
			nameMsg.style.color="red";
			oName.style.border="1px solid red";
		}
	}
}
nameVerification();

//密码
function pwdVerification(){
	var pwd=document.getElementById('pwd');
	var pwdMsg=document.getElementById('pwdMsg');
	var patt=/^[\w]+$/;
	pwd.onfocus=function(){		
		pwdMsg.style.display="block";
		pwd.style.border="1px solid #62AEEC";
		pwd.style.boxShadow="0px 0px 10px #DCECF9";
	}
	pwd.onblur=function(){
		pwdText=pwd.value.trim();
		var patt2=/[A-z]/;
		var patt3=/[\u4e00-\u9fa5]/g;
		if (pwd.value=="") {
			pwdMsg.innerHTML="密码不能为空";
			pwdMsg.style.color="red";
			pwd.style.border="1px solid red";
		}else if (patt3.test(pwdText)) {
			pwdMsg.innerHTML="不能含有中文";
			pwdMsg.style.color="red";
			pwd.style.border="1px solid red";
		}else if (!patt2.test(pwdText[0])) {
			pwdMsg.innerHTML="必须以字母开头";
			pwdMsg.style.color="red";
			pwd.style.border="1px solid red";
		}else if (pwdText.length<4||pwdText.length>16) {
			pwdMsg.innerHTML="长度为4~16个字符";
			pwdMsg.style.color="red";
			pwd.style.border="1px solid red";
		}else if (patt.test(pwdText)) {
			pwdMsg.innerHTML="密码可用";
			pwdMsg.style.color="green";
			pwd.style.border="1px solid green";
		}else{
			pwdMsg.innerHTML="密码格式错误";
			pwdMsg.style.color="red";
			pwd.style.border="1px solid red";
		}
	}
}
pwdVerification();

//密码确认
function pwd2Verification(){
	var pwd2=document.getElementById('pwd2');
	var pwd2Msg=document.getElementById('pwd2Msg');
	pwd2.onfocus=function(){		
		pwd2Msg.style.display="block";
		pwd2.style.border="1px solid #62AEEC";
		pwd2.style.boxShadow="0px 0px 10px #DCECF9";
	}
	pwd2.onblur=function(){
		var pwdText=document.getElementById('pwd').value.trim();
		pwd2Text=pwd2.value.trim();
		if (pwd2Text==""){
			pwd2Msg.innerHTML="密码不能为空";
			pwd2Msg.style.color="red";
			pwd2.style.border="1px solid red";
		}else if(pwd2Text===pwdText) {
			pwd2Msg.innerHTML="密码输入一致";
			pwd2Msg.style.color="green";
			pwd2.style.border="1px solid green";
		}else {
			pwd2Msg.innerHTML="密码输入不一致";
			pwd2Msg.style.color="red";
			pwd2.style.border="1px solid red";
		}
	}
}
pwd2Verification();

//邮箱
function mailVerification(){
	var mail=document.getElementById('mail');
	var mailMsg=document.getElementById('mailMsg');
	var patt=/[\w]+@([\w]+\.)+[a-z]+$/i;
	mail.onfocus=function(){		
		mailMsg.style.display="block";
		mail.style.border="1px solid #62AEEC";
		mail.style.boxShadow="0px 0px 10px #DCECF9";
	}
	mail.onblur=function(){
		mailText=mail.value.trim();
		if (mail.value=="") {
			mailMsg.innerHTML="邮箱不能为空";
			mailMsg.style.color="red";
			mail.style.border="1px solid red";
		}else if (patt.test(mailText)) {
			mailMsg.innerHTML="邮箱输入正确";
			mailMsg.style.color="green";
			mail.style.border="1px solid green";
		}else{
			mailMsg.innerHTML="邮箱格式错误";
			mailMsg.style.color="red";
			mail.style.border="1px solid red";
		}
	}
}
mailVerification();

//手机
function phoneNumVerification(){
	var phoneNum=document.getElementById('phoneNum');
	var phoneNumMsg=document.getElementById('phoneNumMsg');
	var patt=/\d+/;
	phoneNum.onfocus=function(){		
		phoneNumMsg.style.display="block";
		phoneNum.style.border="1px solid #62AEEC";
		phoneNum.style.boxShadow="0px 0px 10px #DCECF9";
	}
	phoneNum.onblur=function(){
		phoneNumText=phoneNum.value.trim();
		if (phoneNum.value=="") {
			phoneNumMsg.innerHTML="手机号码不能为空";
			phoneNumMsg.style.color="red";
			phoneNum.style.border="1px solid red";
		}else if (!patt.test(phoneNumText)) {
			phoneNumMsg.innerHTML="请填写数字";
			phoneNumMsg.style.color="red";
			phoneNum.style.border="1px solid red";
		}else if (phoneNumText.length!==11) {
			phoneNumMsg.innerHTML="手机号码长度为11位";
			phoneNumMsg.style.color="red";
			phoneNum.style.border="1px solid red";
		}else {
			phoneNumMsg.innerHTML="手机格式正确";
			phoneNumMsg.style.color="green";
			phoneNum.style.border="1px solid green";
		}
	}
}
phoneNumVerification();

//提交
function oSubmit(){
	var btn=document.getElementsByTagName('button')[0];
	btn.onclick=function(){
		var msgs=document.getElementsByClassName('msg');
		console.log(getComputedStyle(msgs[0]).color);
		if (getComputedStyle(msgs[0]).color==="rgb(0, 128, 0)"&&getComputedStyle(msgs[1]).color==="rgb(0, 128, 0)"&&getComputedStyle(msgs[2]).color==="rgb(0, 128, 0)"&&getComputedStyle(msgs[3]).color==="rgb(0, 128, 0)"&&getComputedStyle(msgs[4]).color==="rgb(0, 128, 0)") {
			alert("提交成功！");
		}else{
			alert("输入有误！");
		}
	}
}
oSubmit();