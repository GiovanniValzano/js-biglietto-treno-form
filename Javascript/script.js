let myname
let distance
let price
let newprice
let x
let none

document.getElementById("invio").onclick = function() {

    none = document.getElementById("title");
    none.classList.remove("none");

    none = document.getElementById("ticket");
    none.classList.remove("none");

    myname = document.getElementById("Name").value;
    document.getElementById("nome").innerHTML = myname

    distance = document.getElementById("km").value;
    console.log(distance,"km")
    price = parseFloat(distance * 0.21).toFixed(2);

    x = document.getElementById("mySelect").value;
    
    if (x == 0) {
        newprice = parseFloat(price * 0.80).toFixed(2);
        document.getElementById("promozione").innerHTML = "Ridotto"
        document.getElementById("prezzo").innerHTML = newprice + " €"
    }
    else if (x == 2) {
        newprice = (price * 0.60).toFixed(2);
        document.getElementById("promozione").innerHTML = "Over 65"
        document.getElementById("prezzo").innerHTML = newprice + " €"
    }
    else {
        console.log(price)
        document.getElementById("promozione").innerHTML = "Standard"
        document.getElementById("prezzo").innerHTML = price + " €"
    }

}

document.getElementById("annulla").onclick = function refreshPage(){
    window.location.reload();
} 
