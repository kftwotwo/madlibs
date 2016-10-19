$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var place1 = $("input#place1").val();
    var sound = $("#sound").val();
    var adjective = $("#adjective").val();
    var noun = $("#noun").val();

    $(".name").text(name);
    $(".place1").text(place1);
    $(".sound").text(sound);
    $(".adjective").text(adjective);
    $(".noun").text(noun);
    $("#story").show();
    event.preventDefault();


  });

});
