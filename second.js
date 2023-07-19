// Check External Javascript Work or not
document.write("<h1 style='text-align: center';>Welcome To External javascript.</h1>");

// Concatinaton in javascript in using + And concatinate the 2 string
var a="Shaikh";
var b="Arbaz";
var c=a+" "+b;
document.write(c+" ");


// logical Operator
var d=0;
var e=1;
var f= d<e && e<d;
var g= d<e || e>d;
document.write(f+" ");
document.write(g);


// arithmetic  Operator
var h,i;
h=4;
i=5;
var j=h+i;
// alert(j)

// comparison operator
var k=7;
var l=7;
var M=k==l;
var M=k!=l;
// prompt(M);

// assignment operator
var n=8;
 // n=n+5;
 n+=5;
document.write(" "+n);



// Function in javascript
// function first()
// {
// 	alert("Hello Its work.");
// }

// get the value using getElementById
// function first()
// {
// 	var varaible=document.getElementById('name').value;
// 	alert(varaible);
// }


// show Entered name in web_page.
function first()
{
	var varaible=document.getElementById('name').value;
	var string="Hello "+ varaible;
	document.getElementsByClassName('display')[0].innerHTML=string;
}







