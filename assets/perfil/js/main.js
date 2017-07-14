$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

// agregar tarjetas
var agregar = 10;

init();

function init() {
   $(".fa-plus").css({
      "-webkit-transform": "rotate(" + agregar + "deg)",
      "-moz-transform": "rotate(" + agregar + "deg)",
      "-ms-transform": "rotate(" + agregar + "deg)",
      "-o-transform": "rotate(" + agregar + "deg)",
      "transform": "rotate(" + agregar + "deg)",
      "transition": "0.2s linear"
   });
   agregar += 10;
}

// marcar detalles haciendo click
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

// Click X para borrar
$("ul").on("click", "span", function(e) {
   $(this).parent().fadeOut(500, function() {
      $(this).remove();
   });
   e.stopPropagation();
});

$("input[type='number']").on("keypress", function(e) {
   if(e.which === 13) {
      // para agregar text
      var agregarTexto = $(this).val();
      $(this).val("");
      
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + agregarTexto + "</li>");
   }

   $(".checkbox").click(function(){
            
         $(".container").append(agregarTexto);
         });
      
         $("button").click(function(r){
            $(this).parent().remove();
         })
});

$(".fa-plus").on("click", function() {
   if(agregar === 135) {
      agregar = 10;
   }
   $(this).css({
      "-webkit-transform": "rotate(" + agregar + "deg)",
      "-moz-transform": "rotate(" + agregar + "deg)",
      "-ms-transform": "rotate(" + agregar + "deg)",
      "-o-transform": "rotate(" + agregar + "deg)",
      "transform": "rotate(" + agregar + "deg)",
      "transition": "0.2s linear"
   });
   agregar += 10;
   $("input[type='number']").fadeToggle();
});