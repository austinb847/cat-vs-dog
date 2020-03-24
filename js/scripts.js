$(document).ready(function(){

  $("button#meow").click(function(){
    $("body").toggleClass("green-background");
    $("ul#cat").append("<li>MEOW!</li>");
    $("ul#dog").append("<li>WOOF WOOF BARK BARK!</li>");
  });

  $("button#bark").click(function(){
    $("body").toggleClass("brown-background");
    $("ul#dog").append("<li>WOOF!</li>");
    $("ul#cat").append("<li>MEOWWWWW!!!</li>");
  });
});