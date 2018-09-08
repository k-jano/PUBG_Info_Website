var cards = ["AKM.png", "Groza.png", "Groza.png", "QBZ.png", "Scar-L.png", "AUG.png", "Scar-L.png",
            "M416.png", "AUG.png", "AKM.png", "M416.png", "QBZ.png"];

$('.card').click(function(){
    var my_id=this.id;
    my_nr = my_id.substr(4, my_id.length - 1);
    revealCard(my_nr);
});

var oneVisible = false;
var lock=false;
var activeCard;
var pairsLeft = 6;
var counter=0;

function revealCard(nr){
    var thisOpacity = $('#card'+nr).css('opacity');

    if(thisOpacity!=0 && lock==false && nr!=activeCard){

        lock=true;
        var my_img="url(img/memo/"+cards[nr]+")";
        $('#card'+nr).css('background-image', my_img);
        $('#card'+nr).addClass('cardActive');
        $('#card'+nr).removeClass('card');
        if(oneVisible==false){
            oneVisible=true;
            activeCard=nr;
            lock=false
        }
        else{
            if(cards[nr]==cards[activeCard]){
                setTimeout(function(){
                    $('#card'+nr).css('opacity',0);
                    $('#card'+activeCard).css('opacity',0);
                    
                    pairsLeft--;
                    if(pairsLeft==0)
                        $('#board').html("<h1>Congrats! You won in " + counter + " turns</h1>");
                    
                    lock=false;
                }, 1000);
            }
            else{
                setTimeout(function(){
                    $('#card'+nr).css('background-image', 'url(img/memo/back.png)');
                    $('#card'+nr).addClass('card');
                    $('#card'+nr).removeClass('cardActive');

                    $('#card'+activeCard).css('background-image', 'url(img/memo/back.png)');
                    $('#card'+activeCard).addClass('card');
                    $('#card'+activeCard).removeClass('cardActive');

                    lock=false;
                }, 2000);
            }
            counter++;
            $('#score').html("<p>Your score: "+ counter +"</p>");
            oneVisible=false;
        }
    }
};
