var Page404;
(function (Page404) {
    var mainPage404 = /** @class */ (function () {
        // Constructeur
        function mainPage404() {
            var mythis = this;
            mythis.Div = new Div({ id: "Page404" });
            mythis.Div.Ajouter(new DivImage({ Image: "Error404", typeCadre: EnumTypeCadreImage.Sans }));
            mythis.Div.Ajouter(new Bouton({ texte: "Retour a l'accueil", typeBouton: EnumBoutonType.Big, click: function (e) {
                    location.href = '/';
                    e();
                } }));
        }
        Object.defineProperty(mainPage404.prototype, "x", {
            // Methodes
            // Propriete implementer par elementX
            get: function () { return this.Div.x; },
            enumerable: true,
            configurable: true
        });
        return mainPage404;
    }());
    Page404.mainPage404 = mainPage404;
})(Page404 || (Page404 = {}));
var Page404;
(function (Page404) {
    WebCall.call(function (ici) {
        ici.append(new Page404.mainPage404().x);
    });
})(Page404 || (Page404 = {}));
//# sourceMappingURL=app.js.map