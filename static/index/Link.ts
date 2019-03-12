module index {

    export class LinkIndex{
        public static GoAcceuil()
        {
            $("html").animate({scrollTop: $("#Acceuil").offset().top}, 'slow');
        }

        public static GoAPropos()
        {
            $("html").animate({scrollTop: $("#APropos").offset().top-54}, 'slow');
        }

        public static GoCV()
        {
            $("html").animate({scrollTop: $("#CV").offset().top-54}, 'slow');
        }

        public static GoPortfolio()
        {
            $("html").animate({scrollTop: $("#Portfolio").offset().top-54}, 'slow');
        }

        public static GoContact()
        {
            $("html").animate({scrollTop: $("#Contact").offset().top-54}, 'slow');
        }
    }

}