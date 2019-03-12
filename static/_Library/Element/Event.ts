class MyEvent{

    public static ScrollEvent(handler:(scrollTop:number)=>void) {
        $(window).scroll(function () {
            handler($(window).scrollTop());
        })
    }
}