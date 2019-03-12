class WebCall {
    public static call(fonction: (ici:JQuery) => void) {
        $(document).ready(
            function () {
                fonction($("#Contenu"));
            });
    }
}