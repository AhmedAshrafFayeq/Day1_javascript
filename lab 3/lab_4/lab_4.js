function myFunction()
{
	var myWords=document.getElementById("words").value;

	var oneCharacter=document.getElementById("searchCharacter").value;
	var Index=document.getElementById("atIndex").value;



	document.getElementById("firstOccure").value = myWords.indexOf(oneCharacter);
	document.getElementById("lastOccure").value = myWords.lastIndexOf(oneCharacter);
	document.getElementById("fOccure").value = myWords.indexOf(oneCharacter,Index);
	document.getElementById("lOccure").value = myWords.lastIndexOf(oneCharacter,Index);


}


