$(document).ready(function() {
    $("p").hover(changeParStyle);

    function changeParStyle() {
      $(this).toggleClass("clicked");
    }
});
