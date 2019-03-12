declare module index {
    class LinkIndex {
        static GoAcceuil(): void;
        static GoAPropos(): void;
        static GoCV(): void;
        static GoPortfolio(): void;
        static GoContact(): void;
    }
}
declare module index {
    class mainIndex implements ElementX {
        private page;
        constructor();
        private GenerateBoutonHeader;
        private GenaratContainte;
        private Accuiel;
        private Apropos;
        private CV;
        private Portfolio;
        private Contact;
        readonly x: JQuery;
    }
}
declare module index {
}
