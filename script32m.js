﻿﻿function $() 
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

function f2()
{       x=parseFloat($('tx1').value);
	N=parseFloat($('tx2').value);
S=1; p1=1;p2=1;p3=1;
for(i=1;i<=N;i++)
{p1=p1*(2*i-3);
p2=p2*(2*i);
p3=p3*(-1);
S=S+((Math.pow(x,i)*p3*p1)/p2);
}
$('tx3').value=''+S;
}