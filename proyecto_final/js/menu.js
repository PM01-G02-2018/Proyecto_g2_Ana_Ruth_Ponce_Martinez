/*button de nav */
$("#ir_principal").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#princip").offset().top - 250
    }, 500);
});
$("#ir_historia").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $(".histo").offset().top - 250
    }, 500);
});

$("#ir_clasificacion").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $(".clasi").offset().top - 250
    }, 500);
});
$("#ir_pie").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#pie").offset().top - 250
    }, 500);
});

/* efectos */

$("#instagram").mouseout(function () {
    $("#instagram").height("35px");
    $("#instagram").width("35px");
});

$("#instagram").mouseover(function () {
    $("#instagram").height("40px");
    $("#instagram").width("40px");
});

$("#Facebook").mouseout(function () {
    $("#Facebook").height("35px");
    $("#Facebook").width("35px");
});

$("#Facebook").mouseover(function () {
    $("#Facebook").height("40px");
    $("#Facebook").width("40px");
});
$("#Snapchat").mouseout(function () {
    $("#Snapchat").height("35px");
    $("#Snapchat").width("35px");
});

$("#Snapchat").mouseover(function () {
    $("#Snapchat").height("40px");
    $("#Snapchat").width("40px");
});
$("#Twitter").mouseout(function () {
    $("#Twitter").height("35px");
    $("#Twitter").width("35px");
});

$("#Twitter").mouseover(function () {
    $("#Twitter").height("40px");
    $("#Twitter").width("40px");
});
/*tops*/

$("#artificial").mouseout(function () {
    $("#artificial").height("35px");
    $("#artificial").width("330px");
});
$("#artificial").mouseover(function () {
    $("#artificial").height("35px");
    $("#artificial").width("300px");
});
$("#domestico").mouseout(function () {
    $("#domestico").height("35px");
    $("#domestico").width("330px");
});
$("#domestico").mouseover(function () {
    $("#domestico").height("35px");
    $("#domestico").width("300px");
});
$("#movil").mouseout(function () {
    $("#movil").height("35px");
    $("#movil").width("330px");
});
$("#movil").mouseover(function () {
    $("#movil").height("35px");
    $("#movil").width("300px");
});
$("#autonoma").mouseout(function () {
    $("#autonoma").height("35px");
    $("#autonoma").width("330px");
});
$("#autonoma").mouseover(function () {
    $("#autonoma").height("35px");
    $("#autonoma").width("300px");
});
$("#educativa").mouseout(function () {
    $("#educativa").height("35px");
    $("#educativa").width("330px");
});
$("#educativa").mouseover(function () {
    $("#educativa").height("35px");
    $("#educativa").width("300px");
});
$("#evolutiva").mouseout(function () {
    $("#evolutiva").height("35px");
    $("#evolutiva").width("330px");
});
$("#evolutiva").mouseover(function () {
    $("#evolutiva").height("35px");
    $("#evolutiva").width("300px");
});



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}