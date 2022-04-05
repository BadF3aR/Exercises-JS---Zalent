function check()
{
    var number = document.getElementById("place").value;
    /* alert("Wpisana liczba to " + number); */
    if(number>0) 
        document.getElementById("result").innerHTML="positive";
    else if(number<0)
        document.getElementById("result").innerHTML="negative";
    else if(number==0)
        document.getElementById("result").innerHTML="neutral";
    else
        document.getElementById("result").innerHTML="It isn't a number";
}