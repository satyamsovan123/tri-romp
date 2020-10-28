$(".pun").on("mouseover", function(event){

  var bck = $(this).text();
  var desg = "'" + $(this).text() + "'";
  $(this).text(desg);
  setTimeout(() => { $(this).text(bck); }, 600);
});
