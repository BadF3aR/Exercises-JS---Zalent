var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length; 
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("haslo").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "F";
litery[8] = "G";
litery[9] = "H";
litery[10] = "I";
litery[11] = "J";
litery[12] = "K";
litery[13] = "L";
litery[14] = "Ł";
litery[15] = "M";
litery[16] = "N";
litery[17] = "Ń";
litery[18] = "O";
litery[19] = "Ó";
litery[20] = "P";
litery[21] = "Q";
litery[22] = "R";
litery[23] = "S";
litery[24] = "Ś";
litery[25] = "T";
litery[26] = "U";
litery[27] = "V";
litery[28] = "W";
litery[29] = "X";
litery[30] = "Y";
litery[31] = "Z";
litery[32] = "Ż";
litery[33] = "Ź";
litery[34] = "Ę";

function start()
{
    var tresc_diva = "";

    for(i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+ litery[i] +'</div>';
    }

    document.getElementById("litery").innerHTML = tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length -1) return this.toString();
    else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
    var trafiona = false;

    for(i=0; i<dlugosc; i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona == true) // == operator funkcji
    {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "2px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypisz_haslo();
    }
    else
    {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "2px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //skucha
        ile_skuch++;
        var obraz = "img/s"+ ile_skuch + ".jpg";
        document.getElementById("obrazek").innerHTML = '<img src="'+obraz+'" alt ="" />'; 
    }
    //wygrana
    if(haslo == haslo1)
    document.getElementById("litery").innerHTML = "Gratulacje! odgadłeś hasło!" + '<br/><br/><span class="rest" onclick="location.reload()">JESZCZE RAZ?</span>'
    //przegrana
    if(ile_skuch>=9)
    document.getElementById("litery").innerHTML = "Przegrana!" + '<br/><br/><span class="rest" onclick="location.reload()">JESZCZE RAZ?</span>'

}