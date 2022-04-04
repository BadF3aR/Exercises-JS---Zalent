
function write()
{
    var number1 = document.getElementById("field1").value;
    var number2 = document.getElementById("field2").value;
    var space = ""; 
    for(i=number1; i<=number2; i++)
    {
        space = space + i + " ";
    }
    document.getElementById("result").innerHTML = "jebac kurwy";
}