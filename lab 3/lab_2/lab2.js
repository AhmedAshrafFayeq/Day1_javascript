var value = prompt("Enter 1 for Bullet , 2 for Numbered , 3 for lettered ");

if (value == 1) {
	document.write("<h1>" + "Bullet List " + "</h1>");
	document.write("<ul><li>list item 1</li>"+"<li>list item 2</li>"+"<li>list item 3</li></ul>");
	document.write("<h3>Refresh or Reload to Re-enter </h3>");
}

else if (value == 2) {
	document.write("<h1>" + "Ordered List : Numbers " + "</h1>");
	document.write("<ol type='1' ><li>list item 1</li>"+"<li>list item 2</li>"+"<li>list item 3</li></ol>");
	document.write("<h3>Refresh or Reload to Re-enter </h3>");
}

else if (value == 3) {
	document.write("<h1>" + "Ordered List :Letters " + "</h1>");
	document.write("<ol  type='A' ><li>list item 1</li>"+"<li>list item 2</li>"+"<li>list item 3</li></ol>");
	document.write("<h3>Refresh or Reload to Re-enter </h3>");
}
else{
	document.write ("<h1> not valid  <h1>");
	document.write("<h3>Refresh or Reload to Re-enter </h3>");
}

