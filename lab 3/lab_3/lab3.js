var value1 = prompt("Enter First Number : ");
while(isNaN(parseInt(value1)))
{
	value1 = prompt("Enter First Number : ");
}

var value2 = prompt("Enter Second Number : ");
while(isNaN(parseInt(value2)))
{
	value2 = prompt("Enter Second Number : ");
}

var value3 = prompt("Enter Third Number : ");
while(isNaN(parseInt(value3)))
{
	value3 = prompt("Enter Third Number : ");
}

document.write("<h3>First Number = "+value1+"</h3><br>");
document.write("<h3>Second Number = "+value2+"</h3><br>");
document.write("<h3>Third Number = "+value3+"</h3><br>");

document.write("<h3> Maximum Number = "+Math.max(value1,value2,value3)+"</h3><br>");
document.write("<h3> Minimum Number = "+Math.min(value1,value2,value3)+"</h3><br>");
document.write("<h4>Refresh page to Re-enter </h4>");
