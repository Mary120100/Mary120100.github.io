function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  
 
function f1()
{
$('tx1').value="Математика";
alert("Математика");
}
function f2()
{
$('tx1').value="Английский";
alert("Английский");
}
function f3()
{
$('tx1').value="Физика";
alert("Физика");
}
function f4()
{
$('tx1').value="Информатика";
alert("Информатика");
}
