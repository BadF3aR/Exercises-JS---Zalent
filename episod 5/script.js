let cards = ["ciri.png","geralt.png","jaskier.png","jaskier.png","iorweth.png","triss.png","geralt.png","yen.png","ciri.png","triss.png","yen.png","iorweth.png"];
//alert(cards[4]);

//console.log(cards);

let c0 = document.getElementById("0");
let c1 = document.getElementById("1");
let c2 = document.getElementById("2");
let c3 = document.getElementById("3");

let c4 = document.getElementById("4");
let c5 = document.getElementById("5");
let c6 = document.getElementById("6");
let c7 = document.getElementById("7");

let c8 = document.getElementById("8");
let c9 = document.getElementById("9");
let c10 = document.getElementById("10");
let c11 = document.getElementById("11");


c0.addEventListener("click", function(){ revealCard(0);});
c1.addEventListener("click", function(){ revealCard(1);});
c2.addEventListener("click", function(){ revealCard(2);});
c3.addEventListener("click", function(){ revealCard(3);});
c4.addEventListener("click", function(){ revealCard(4);});
c5.addEventListener("click", function(){ revealCard(5);});
c6.addEventListener("click", function(){ revealCard(6);});
c7.addEventListener("click", function(){ revealCard(7);});
c8.addEventListener("click", function(){ revealCard(8);});
c9.addEventListener("click", function(){ revealCard(9);});
c10.addEventListener("click", function(){ revealCard(10);});
c11.addEventListener("click", function(){ revealCard(11);});

let oneVisible = false;
let turnCounter = 0;
let visible_nr;
let lock = false;
let pairsleft = 6;

function revealCard(nr)
{
    let opacityValue = $("#"+nr).css("opacity");
    //alert("Opacity: "+opacityValue);

    if(opacityValue != 0 && lock == false)
    {
        lock = true;

        let image = "url(img/" + cards[nr] + ")";

        $("#"+nr).css("background-image", image);
        $("#"+nr).toggleClass("cardA");
        
        if(oneVisible == false)
        {
            //first card
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        }
        else
        {
            //second card
            if(cards[visible_nr] == cards[nr])
            {
                //alert("para")
                setTimeout(function() {hide2Cards(nr,visible_nr)}, 750);
            }
            else
            {
                //alert("pudło")
                setTimeout(function() {restore2Cards(nr,visible_nr)}, 750);
            }
    
            turnCounter++;
            $(".score").html("Turn counter: "+turnCounter);
            oneVisible = false;
        }
        //alert(nr);
    }
}

function hide2Cards(nr1,nr2)
{
    $("#"+nr1).css("opacity","0");
    $("#"+nr2).css("opacity","0");
    lock = false;

    pairsleft--;
    if(pairsleft == 0)
    {
        $(".board").html("<h1>YOU WIN!<br>Done in "+turnCounter+" turns</h1>");
    }
}

function restore2Cards(nr1,nr2)
{
    $("#"+nr1).css("background-image", "url(img/karta.png");
    $("#"+nr1).addClass("card");
    $("#"+nr1).removeClass("cardA");

    $("#"+nr2).css("background-image", "url(img/karta.png");
    $("#"+nr2).addClass("card");
    $("#"+nr2).removeClass("cardA");
    lock = false;
}