var cards = ["AKM.png", "Groza.png", "Groza.png", "QBZ.png", "Scar-L.png", "AUG.png", "Scar-L.png",
            "M416.png", "AUG.png", "AKM.png", "M416.png", "QBZ.png"];

$('.card').click(function(){
    var my_id=this.id;
    my_nr = my_id.substr(4, my_id.length - 1);
    alert(my_nr);
});

var oneVisible = false;

function revealCard(nr){
    lock=true;
    var img="url(../../img/memo/"+cards[nr]+")";
    if(oneVisible==false){
        oneVisible=true;

    }
};
