// $(document).ready(function(){
//     $("#test").click(function(){
//         $("#demo").hide(4000) ;
//     });
// });


// Animate
$(document).ready(function () {
    $("#test").click(function () {
        $("#demo").animate({
            width: '500px',
            height: '250px'
        }, 9000).css({
            "background-color": "blue",
            "width": "500px",
            "font-size": "50px"
        }).hide(10000);
    });
    $("#test1").click(function () {
        $("#demo").stop();
    });
});

// Chaining
$(document).ready(function () {
    $("#test2").click(function () {
        $("#para").css("color", "red").slideUp(2000).slideDown(2000);
    });
});