let stock = [];
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
    let clrBox = document.getElementById("clrBox").value;
    let clrPck = document.getElementById("clrPack").value;
    let mklPck = document.getElementById("mklPack").value;
    var tot = (frzBox*itemBox)+(clrBox*itemBox)+(clrPck*itemPck)+(mklPck*itemPck);
    
    //saving the amounts of all the items onto the array and displaying them
    if (document.getElementById("menu").value == 1){
        stock.chicken = {
            total:tot, 
            freezer:frzBox, 
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        //details = "Freezer = "+stock.chicken.freezer+"<br>Coolroom Boxes = "+stock.chicken.coolroomBox+"<br>Coolroom Packets = "+stock.chicken.coolroomPack+"<br>Makeline = "+stock.chicken.makeline;
        document.getElementById("out1").style.display = "block";
        document.getElementById("out1").innerHTML = "Chicken: "+stock.chicken.total+"kg";
    } else if (document.getElementById("menu").value == 2){
        stock.cheese = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out2").style.display = "block";
        document.getElementById("out2").innerHTML = "Cheese: "+stock.cheese.total+"kg";
    } else if (document.getElementById("menu").value == 3){
        stock.sausage = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out3").style.display = "block";
        document.getElementById("out3").innerHTML = "Sausage: "+stock.sausage.total+"kg";
    } else if (document.getElementById("menu").value == 4){
        stock.onion = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out4").style.display = "block";
        document.getElementById("out4").innerHTML = "Onion: "+stock.onion.total+"kg";
    } else if (document.getElementById("menu").value == 5){
        stock.beef = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out5").style.display = "block";
        document.getElementById("out5").innerHTML = "Beef: "+stock.beef.total+"kg";
    } else if (document.getElementById("menu").value == 6){
        stock.ham = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out6").style.display = "block";
        document.getElementById("out6").innerHTML = "Ham: "+stock.ham.total+"kg";
    } else if (document.getElementById("menu").value == 7){
        stock.pepperoni = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out7").style.display = "block";
        document.getElementById("out7").innerHTML = "Pepperoni: "+stock.pepperoni.total+"kg";
    } else if (document.getElementById("menu").value == 8){
        stock.bacon = {
            total:tot,
            freezer:frzBox,
            coolroomBox:clrBox,
            coolroomPack:clrPck,
            makeline:mklPck
        };
        document.getElementById("out8").style.display = "block";
        document.getElementById("out8").innerHTML = "Bacon: "+stock.bacon.total+"kg";
    }
    
    document.getElementById("output").innerHTML = "Total is: "+tot+"kg";
    //reset function for the output label
    if (tot <= null) {
        document.getElementById("output").innerHTML = null;
    }
    console.log(stock)
}

function txtChange(){
    //changing the label "pack" to container when onion or cheese is selected
    if (document.getElementById("menu").value == 2 || document.getElementById("menu").value == 4){
        document.getElementById("pckLbl2").innerHTML = "container";
        document.getElementById("pckLbl3").innerHTML = "container";
    } else {
        document.getElementById("pckLbl2").innerHTML = "pack";
        document.getElementById("pckLbl3").innerHTML = "pack";
    }
}

function resetBtn(){
    document.getElementById("freBox").value = null;
    document.getElementById("clrBox").value = null;
    document.getElementById("clrPack").value = null;
    document.getElementById("mklPack").value = null;
    document.getElementById("output").innerHTML = null;
}

function data(){
    if (document.getElementById("menu").value == 1){
        if (stock.chicken != null){
            document.getElementById("freBox").value = stock.chicken.freezer;
            document.getElementById("clrBox").value = stock.chicken.coolroomBox;
            document.getElementById("clrPack").value = stock.chicken.coolroomPack;
            document.getElementById("mklPack").value = stock.chicken.makeline;
        }
    } else if (document.getElementById("menu").value == 2){
        if (stock.cheese != null){
            document.getElementById("freBox").value = stock.cheese.freezer;
            document.getElementById("clrBox").value = stock.cheese.coolroomBox;
            document.getElementById("clrPack").value = stock.cheese.coolroomPack;
            document.getElementById("mklPack").value = stock.cheese.makeline;
        }
    } else if (document.getElementById("menu").value == 3){
        if (stock.sausage != null){
            document.getElementById("freBox").value = stock.sausage.freezer;
            document.getElementById("clrBox").value = stock.sausage.coolroomBox;
            document.getElementById("clrPack").value = stock.sausage.coolroomPack;
            document.getElementById("mklPack").value = stock.sausage.makeline;
        }
    } else if (document.getElementById("menu").value == 4){
        if (stock.onion != null){
            document.getElementById("freBox").value = stock.onion.freezer;
            document.getElementById("clrBox").value = stock.onion.coolroomBox;
            document.getElementById("clrPack").value = stock.onion.coolroomPack;
            document.getElementById("mklPack").value = stock.onion.makeline;
        }
    } else if (document.getElementById("menu").value == 5){
        if (stock.beef != null){
            document.getElementById("freBox").value = stock.beef.freezer;
            document.getElementById("clrBox").value = stock.beef.coolroomBox;
            document.getElementById("clrPack").value = stock.beef.coolroomPack;
            document.getElementById("mklPack").value = stock.beef.makeline;
        }
    } else if (document.getElementById("menu").value == 6){
        if (stock.ham != null){
            document.getElementById("freBox").value = stock.ham.freezer;
            document.getElementById("clrBox").value = stock.ham.coolroomBox;
            document.getElementById("clrPack").value = stock.ham.coolroomPack;
            document.getElementById("mklPack").value = stock.ham.makeline;
        }
    } else if (document.getElementById("menu").value == 7){
        if (stock.pepperoni != null){
            document.getElementById("freBox").value = stock.pepperoni.freezer;
            document.getElementById("clrBox").value = stock.pepperoni.coolroomBox;
            document.getElementById("clrPack").value = stock.pepperoni.coolroomPack;
            document.getElementById("mklPack").value = stock.pepperoni.makeline;
        }
    } else if (document.getElementById("menu").value == 3){
        if (stock.bacon != null){
            document.getElementById("freBox").value = stock.bacon.freezer;
            document.getElementById("clrBox").value = stock.bacon.coolroomBox;
            document.getElementById("clrPack").value = stock.bacon.coolroomPack;
            document.getElementById("mklPack").value = stock.bacon.makeline;
        }
    }
}

function drpMenu(){
    resetBtn()
    data()
    txtChange()
}
