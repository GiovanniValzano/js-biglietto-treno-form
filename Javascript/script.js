let myname
let distance
let price
let newprice
let etaselect
let x

document.getElementById("invio").onclick = function() {

    myname = document.getElementById("Name").value;
    console.log("hello", myname)

    distance = document.getElementById("km").value;
    console.log(distance,"km")
    price = parseFloat(distance * 0.21).toFixed(2);
    document.getElementById("prezzo").innerHTML = price + " €"

    x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = x;
    
    if (x == 0) {
        newprice = parseFloat(price * 0.80).toFixed(2);
        console.log(newprice)
    }
    else if (x == 2) {
        newprice = (price * 0.60).toFixed(2);
        console.log(newprice)
    }
    else {
        console.log(price)
    }

}