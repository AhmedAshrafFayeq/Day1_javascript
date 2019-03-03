function myFunction()
{
	var myWords=document.getElementById("sentence").value;

	var delimeter=document.getElementById("spliter").value;
	var res=myWords.split(delimeter);

	document.getElementById("areaa").value=res.join("\n");

}