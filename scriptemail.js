﻿function $() 
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

function f1(x)
{
var gg="abcdefghijklomnpqrstuvwxyz1234567890_.@";
fff="Okay";
var mass1 = x.split('@');
if(mass1.length==2)
{
for(i=0;i<x.length;i++)
{
if(gg.indexOf(x.charAt(i))<0)
fff="Fail";
}
}
else
fff="Fail";
return fff;

}
