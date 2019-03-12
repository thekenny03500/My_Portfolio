var NavPortfolio = /** @class */ (function () {
    function NavPortfolio(option) {
        var mythis = this;
        //Instancation
        var laclasse = "NavPortfolio " + (option.class != null ? option.class : "");
        mythis.Dock = new DockPanel({ id: option.id, class: laclasse });
        mythis.Warp = new Warppanel({ class: "WarpNavPortfolio" });
        mythis.DivItem = new Div({ class: "DivNavPortfolio" });
        mythis.ListNavPortfolioItem = [];
        mythis.nbNav = 0;
        // Generation element base
        mythis.Dock.ajouter(mythis.Warp, EnumDockPosition.bot, "WarpNavConteneur");
        mythis.Dock.ajouter(new Bouton({
            texte: "Back",
            click: function (e) {
                mythis.Back();
                e();
            }
        }), EnumDockPosition.left);
        mythis.Dock.ajouter(new Bouton({
            texte: "Next",
            click: function (e) {
                mythis.Next();
                e();
            }
        }), EnumDockPosition.right);
        mythis.Dock.ajouter(mythis.DivItem, EnumDockPosition.top);
        // Generate init list
        if (option.init != null && option.init.length != 0) {
            option.init.forEach(function (e) {
                mythis.ajouter(e);
            });
            mythis.Actualise();
        }
    }
    NavPortfolio.prototype.Next = function () {
        var mythis = this;
        if (mythis.ListNavPortfolioItem.length - 1 > mythis.nbNav)
            mythis.nbNav++;
        else
            mythis.nbNav = 0;
        mythis.Actualise();
    };
    NavPortfolio.prototype.Back = function () {
        var mythis = this;
        if (0 < mythis.nbNav)
            mythis.nbNav--;
        else
            mythis.nbNav = mythis.ListNavPortfolioItem.length - 1;
        mythis.Actualise();
    };
    NavPortfolio.prototype.Actualise = function () {
        var mythis = this;
        mythis.DivItem.Empty();
        mythis.Warp.Empty();
        mythis.DivItem.Ajouter(mythis.ListNavPortfolioItem[mythis.nbNav]);
        mythis.ListNavPortfolioItem[mythis.nbNav].generate().forEach(function (element) {
            mythis.Warp.ajouter(element);
        });
    };
    NavPortfolio.prototype.ajouter = function (option) {
        var mythis = this;
        var tempo = new NavPortfolioItem(option);
        if (tempo != null)
            mythis.ListNavPortfolioItem.push(tempo);
    };
    Object.defineProperty(NavPortfolio.prototype, "x", {
        get: function () {
            return this.Dock.x;
        },
        enumerable: true,
        configurable: true
    });
    return NavPortfolio;
}());
var NavPortfolioItem = /** @class */ (function () {
    function NavPortfolioItem(option) {
        var mythis = this;
        mythis.stack = new Stackpanel({ class: "NavPortfolioItem" });
        mythis.stack.ajouter(new DivImage({ class: "NavPortfolioItemImage", Image: option.Image, typeCadre: EnumTypeCadreImage.Sans }));
        mythis.stack.ajouter(new Label({ text: option.Titre, class: "NavPortfolioItemTitre", type: EnumTypeLabel.Titre }));
        mythis.listMiniItem = option.Init;
    }
    NavPortfolioItem.prototype.generate = function () {
        var mythis = this;
        var toSender = [];
        mythis.listMiniItem.forEach(function (miniItem) {
            toSender.push(new Bouton({
                class: "NavPortfolioMiniItem",
                title: miniItem.Title,
                texte: miniItem.Titre,
                click: function (e) {
                    e();
                }
            }));
        });
        return toSender;
    };
    Object.defineProperty(NavPortfolioItem.prototype, "x", {
        get: function () {
            return this.stack.x;
        },
        enumerable: true,
        configurable: true
    });
    return NavPortfolioItem;
}());
