var i,fact;
document.write("<table>");
for(i=0 ; i <11 ;i++)
{
    fact = factorial(i);
    document.write("<tr> <td>"+i+"</td> <td>"+fact+"</td> </tr>");
}
document.write("</table>");

function factorial(num)
{
    if(num <= 1)
    {
        return 1;
    }
    else
    {
        return num * factorial(num-1);
    }
}

function factorialFor()
{
    var number;
    do{
        number = prompt("Enter the number:", "");
        if(number<0)
        {
            alert("Please enter a number greater than 0");
        }
    }while(number < 0);
    alert(factorial(number));
}