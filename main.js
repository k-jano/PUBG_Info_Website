var slideIndex = 0;
var limit=0;

var timer1=0;
var timer2=0;

function hide(){
  $("#slider").fadeOut(500);
}

function showDivs() {
  var class_tmp="#badge"+slideIndex;
  $(".badge").css('background-color', 'transparent');
  $(class_tmp).css('background-color', 'white');

  var i;
  var x = document.getElementsByClassName("mySlides");
  limit=x.length;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex].style.display = "block";

  $("#slider").fadeIn(500);

  timer1=setTimeout(function(){
    calculateNum(slideIndex+=1);
    showDivs();
  }, 5000);
  timer2=setTimeout("hide()", 4500);
}
      
function currentDiv(n) {
  clearTimeout(timer1);
  clearTimeout(timer2);

  hide();
  slideIndex=n;
  setTimeout("showDivs()", 500);
}

function calculateNum(n){
  if(n<0){n=limit-1};
  if(n>limit-1){n=0};
  slideIndex=n;
}

$(function(){
  $( document ).ready(function(){
    $("#badge0").css('background-color', 'white');
  });

  $(".badge").click(function(){
    $(".badge").css('background-color', 'transparent');
    $(this).css('background-color', 'white');
  });
    
  $(".left").click(function(){
    
    clearTimeout(timer1);
    clearTimeout(timer2);
    hide();
    calculateNum(slideIndex-=1);
    setTimeout("showDivs()", 500);

    var class_tmp="#badge"+slideIndex;
    $(".badge").css('background-color', 'transparent');
    $(class_tmp).css('background-color', 'white');
  });

  $(".right").click(function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    hide();
    calculateNum(slideIndex+=1);
    setTimeout("showDivs()", 500);

    var class_tmp="#badge"+slideIndex;
    $(".badge").css('background-color', 'transparent');
    $(class_tmp).css('background-color', 'white');
  });
})
