function calc()
{
    //creating the function to change the multiplication number according to the menu item
            // creating a common variable for the mulitiplication number
            var itemBox;
            var itemPck;
    function menuItem(){
        if (document.getElementById("menu").value == 1){
            itemBox = 12;
            itemPck = 1;
        } else if (document.getElementById("menu").value == 2){
            itemBox = 8;
            itemPck = 4;
        } else if (document.getElementById("menu").value == 4){
            itemBox = 4;
            itemPck = 1;
        } else if (document.getElementById("menu").value == 5){
            itemBox = 14;
            itemPck = 2;
        } else {
            itemBox = 12;
            itemPck = 2
        }
    }
    menuItem()
    //creating the variables to get the values of the inputs
    let frzBox = document.getElementById("freBox").value;
    let frzPck = document.getElementById("frePack").value;
    let clrBox = document.getElementById("clrBox").value;
    let clrPck = document.getElementById("clrPack").value;
    let mklBox = document.getElementById("mklBox").value;
    let mklPck = document.getElementById("mklPack").value;
    var tot = (frzBox*itemBox)+(frzPck*itemPck)+(clrBox*itemBox)+(clrPck*itemPck)+(mklBox*itemBox)+(mklPck*itemPck);
    
    
    document.getElementById("output").innerHTML = "Total is: "+tot+"kg"
    //reset function for the output label
    if (tot <= null) {
        document.getElementById("output").innerHTML = null
    }
}

function txtChange(){
    //changing the label "pack" to container when onion or cheese is selected
    if (document.getElementById("menu").value == 2 || document.getElementById("menu").value == 4){
        document.getElementById("pckLbl1").innerHTML = "container";
        document.getElementById("pckLbl2").innerHTML = "container";
        document.getElementById("pckLbl3").innerHTML = "container";
    } else {
        document.getElementById("pckLbl1").innerHTML = "pack";
        document.getElementById("pckLbl2").innerHTML = "pack";
        document.getElementById("pckLbl3").innerHTML = "pack";
    }
}

function reset(){
    document.getElementById("freBox").value = null;
    document.getElementById("frePack").value = null;
    document.getElementById("clrBox").value = null;
    document.getElementById("clrPack").value = null;
    document.getElementById("mklBox").value = null;
    document.getElementById("mklPack").value = null;
    document.getElementById("output").innerHTML = null;
}