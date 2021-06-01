$(function() {
    $(".vav").click(function() {
        $("ul").toggle(function() {
            $(".vav").next().css("display", "none")
        }).$(".vav").hover(function() {
            $(this).css("display", "none", "flex-direction", "column", "position", "absolute", "top", "100%", "left", "0", "width", "100%")
        })
    })
})