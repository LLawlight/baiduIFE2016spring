var student=document.getElementById('student');
var notStudent=document.getElementById('notStudent');
var school=document.getElementById('school');
var company=document.getElementById('company');
var city=document.getElementById('city');
var bjs=document.getElementById('bjs');
var zjs=document.getElementById('zjs');

student.onclick=function(){
	student.setAttribute("checked","checked");
	notStudent.checked=false;
	company.style.display="none";
	school.style.display="inline-block";
}

city.onclick=function(){
	if (this.value=="浙江") {
		bjs.style.display="none";
		zjs.style.display="inline-block";
	}else {
		zjs.style.display="none";
		bjs.style.display="inline-block";
	}
}

notStudent.onclick=function(){
	notStudent.setAttribute("checked","checked");
	student.checked=false;
	school.style.display="none";
	company.style.display="inline-block";
}