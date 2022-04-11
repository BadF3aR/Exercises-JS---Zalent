document.write(0.1 * 5 + "<br/>");
document.write(0.15 * 3 + "<br/>");
document.write(0.1 + 0.2 + "<br/>");
document.write(Math.pow(2,53) + "<br/>"); 
document.write(Math.pow(2,53)+1 + "<br/>"); 
document.write(Math.pow(2,53)+2 + "<br/>"); 
document.write(Math.pow(2,53)*2 + "<br/>"); 

if(0.1 + 0.2 == 0.3) document.write("true <br/>");
else document.write("false <br />");

let x;
x = Math.round((0.1 + 0.2)*10) / 10;
document.write(x+"<br />");

x = Math.round((0.15 * 3)*100) /100; // do 2 miejsca po przecinku dlatego 100
document.write(x+"<br />");

x = 0.15 * 3;
x = x.toFixed(2);
document.write(x+"<br /><br />");

x = 1.005
x = Math.round(x*1000) / 1000;
document.write(x+"<br />");

x = 1.005
x = x.toFixed(3);
document.write(x+"<br />");

Number.prototype.round = function(miejsc)   //zaokraglanie miejsc 
{
    return +(Math.round(this+"e+"+miejsc) + "e-" +miejsc);
}

x = 1.005
x = x.round(2);
document.write(x+"<br />");

// te metody zaokraglania

/* 
1. Math.round()
    standardowe zaokraglenie 
2. Math.floor()
    zaokraglenie zawsze w dol 
3. Math.ceil()
    zaokraglenie zawsze w gore
4. Math.trunc()
    usuniecie czesci ułamkowej 
*/ 