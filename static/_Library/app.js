var MyEvent = /** @class */ (function () {
    function MyEvent() {
    }
    MyEvent.ScrollEvent = function (handler) {
        $(window).scroll(function () {
            handler($(window).scrollTop());
        });
    };
    return MyEvent;
}());
var WebCall = /** @class */ (function () {
    function WebCall() {
    }
    WebCall.call = function (fonction) {
        $(document).ready(function () {
            fonction($("#Contenu"));
        });
    };
    return WebCall;
}());
var Code = /** @class */ (function () {
    function Code(option) {
        var mythis = this;
        var html = "<Code " + (option.id != null ? "id='" + option.id + "'" : "") + "></Code>";
        mythis.Code = $(html);
        if (option.class != null)
            mythis.Code.addClass(option.class);
        if (option.text != null)
            mythis.Code.append(option.text);
    }
    Code.prototype.Ajouter = function (Element) {
        var mythis = this;
        mythis.Code.append(Element.x);
    };
    Code.prototype.Empty = function () {
        var mythis = this;
        mythis.Code.empty();
    };
    Code.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.Code.addClass(uneclass);
    };
    Object.defineProperty(Code.prototype, "x", {
        get: function () {
            return this.Code;
        },
        enumerable: true,
        configurable: true
    });
    return Code;
}());
var Div = /** @class */ (function () {
    function Div(option) {
        var mythis = this;
        var html = "<div " + (option.title != null ? "Title=\"" + option.title + "\"" : "") +
            (option.id != null ? "id='" + option.id + "'" : "") + "></div>";
        mythis.div = $(html);
        if (option.class != null)
            mythis.div.addClass(option.class);
    }
    Div.prototype.Ajouter = function (Element) {
        var mythis = this;
        mythis.div.append(Element.x);
    };
    Div.prototype.Empty = function () {
        var mythis = this;
        mythis.div.empty();
    };
    Div.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.div.addClass(uneclass);
    };
    Object.defineProperty(Div.prototype, "x", {
        get: function () {
            return this.div;
        },
        enumerable: true,
        configurable: true
    });
    return Div;
}());
var Objectview = /** @class */ (function () {
    function Objectview(option) {
        var mythis = this;
        var html = "<object data='" + option.data + "' type='" + option.type + "' " + (option.id != null ? "id='" + option.id + "'" : "") + "></object>";
        mythis.div = $(html);
        if (option.class != null)
            mythis.div.addClass(option.class);
    }
    Objectview.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.div.addClass(uneclass);
    };
    Object.defineProperty(Objectview.prototype, "x", {
        get: function () {
            return this.div;
        },
        enumerable: true,
        configurable: true
    });
    return Objectview;
}());
var Pre = /** @class */ (function () {
    function Pre(option) {
        var mythis = this;
        var html = "<Pre " + (option.id != null ? "id='" + option.id + "'" : "") + "></Pre>";
        mythis.Pre = $(html);
        if (option.class != null)
            mythis.Pre.addClass(option.class);
    }
    Pre.prototype.Ajouter = function (Element) {
        var mythis = this;
        mythis.Pre.append(Element.x);
    };
    Pre.prototype.Empty = function () {
        var mythis = this;
        mythis.Pre.empty();
    };
    Pre.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.Pre.addClass(uneclass);
    };
    Object.defineProperty(Pre.prototype, "x", {
        get: function () {
            return this.Pre;
        },
        enumerable: true,
        configurable: true
    });
    return Pre;
}());
var Span = /** @class */ (function () {
    function Span(option) {
        var mythis = this;
        var html = "<span " + (option.id != null ? "id='" + option.id + "'" : "") + "></span>";
        mythis.Span = $(html);
        if (option.text)
            mythis.Span.append(option.text);
        if (option.class != null)
            mythis.Span.addClass(option.class);
        if (option.Icone != null)
            mythis.Span.addClass("Icone_" + option.Icone);
    }
    Object.defineProperty(Span.prototype, "x", {
        get: function () {
            return this.Span;
        },
        enumerable: true,
        configurable: true
    });
    return Span;
}());
var BackGround = /** @class */ (function () {
    function BackGround(option) {
        var mythis = this;
        mythis.div = new Div({ class: "Background Background_" + option.image, id: option.id });
        if (option.class != null)
            mythis.div.addClass(option.class);
    }
    BackGround.prototype.Ajoute = function (Element) {
        var mythis = this;
        mythis.div.Ajouter(Element);
    };
    Object.defineProperty(BackGround.prototype, "x", {
        get: function () {
            return this.div.x;
        },
        enumerable: true,
        configurable: true
    });
    return BackGround;
}());
var Bando = /** @class */ (function () {
    function Bando(option) {
        var mythis = this;
        mythis.div = new Div({ class: "Bando", id: option.id });
        if (option.class != null)
            mythis.div.addClass(option.class);
        mythis.div.Ajouter(new Label({ class: "BandoLabel", type: EnumTypeLabel.Titre, text: option.Text }));
    }
    Object.defineProperty(Bando.prototype, "x", {
        get: function () {
            return this.div.x;
        },
        enumerable: true,
        configurable: true
    });
    return Bando;
}());
var EnumBoutonType;
(function (EnumBoutonType) {
    EnumBoutonType[EnumBoutonType["Standard"] = 0] = "Standard";
    EnumBoutonType[EnumBoutonType["IconeUnique"] = 1] = "IconeUnique";
    EnumBoutonType[EnumBoutonType["textUnique"] = 2] = "textUnique";
    EnumBoutonType[EnumBoutonType["Big"] = 3] = "Big";
})(EnumBoutonType || (EnumBoutonType = {}));
var Bouton = /** @class */ (function () {
    function Bouton(option) {
        var mythis = this;
        mythis.bouton = new DivEvent({
            class: "Bouton " + mythis.generatTypeBouton(option.typeBouton) + (option.class != null ? option.class : ""),
            id: option.id,
            title: option.title,
            MouseClick: function () {
                mythis.hide();
                option.click(function () { mythis.x.show(); });
            },
            Init: mythis.generatInit(option)
        });
    }
    Bouton.prototype.hide = function () {
        var mythis = this;
        mythis.bouton.x.hide();
    };
    Bouton.prototype.generatTypeBouton = function (type) {
        switch (type) {
            case (EnumBoutonType.textUnique):
                return "BoutonTextUnique";
            case (EnumBoutonType.IconeUnique):
                return "BoutonIconeUnique";
            case (EnumBoutonType.Big):
                return "BoutonBig";
            default:
                return "";
        }
    };
    Bouton.prototype.generatInit = function (option) {
        var init = new Div({ class: "BoutonInit" });
        switch (option.typeBouton) {
            case (EnumBoutonType.textUnique):
                init.Ajouter(new Label({ class: "BoutonText", text: option.texte, type: EnumTypeLabel.Standard }));
                break;
            case (EnumBoutonType.IconeUnique):
                init.Ajouter(new Span({ class: "BoutonIcone", Icone: option.icone }));
                break;
            default:
                if (option.icone != null)
                    init.Ajouter(new Span({ class: "BoutonIcone", Icone: option.icone }));
                init.Ajouter(new Span({ class: "BoutonText", text: option.texte }));
        }
        return init;
    };
    Object.defineProperty(Bouton.prototype, "x", {
        get: function () {
            return this.bouton.x;
        },
        enumerable: true,
        configurable: true
    });
    return Bouton;
}());
var DivConteneur = /** @class */ (function () {
    function DivConteneur(option) {
        var mythis = this;
        mythis.divConteneur = new Div({ class: "DivConteneur", id: option.id });
        if (option.class != null)
            mythis.divConteneur.addClass(option.class);
        mythis.divContenu = new Div({ class: "DivContenu" });
        if (option.ini != null)
            mythis.divContenu.Ajouter(option.ini);
        if (option.Titre != null)
            mythis.divConteneur.Ajouter(new Label({ text: option.Titre, type: EnumTypeLabel.Titre, class: "Titre_divConteneur" }));
        mythis.divConteneur.Ajouter(mythis.divContenu);
    }
    DivConteneur.prototype.ajouter = function (Element) {
        var mythis = this;
        mythis.divContenu.Ajouter(Element);
        return mythis;
    };
    Object.defineProperty(DivConteneur.prototype, "x", {
        get: function () {
            return this.divConteneur.x;
        },
        enumerable: true,
        configurable: true
    });
    return DivConteneur;
}());
var DivEvent = /** @class */ (function () {
    function DivEvent(option) {
        var mythis = this;
        mythis.div = new Div({ class: option.class, id: option.id, title: option.title });
        mythis.div.x.click(function () {
            if (option.MouseClick != null)
                option.MouseClick();
        });
        mythis.div.x.hover(function () {
            if (option.MouseHover != null)
                option.MouseHover();
        }, function () {
            if (option.MouseOut != null)
                option.MouseOut();
        });
        mythis.div.Ajouter(option.Init);
    }
    DivEvent.prototype.addclass = function (uneclass) {
        var mythis = this;
        mythis.addclass(uneclass);
    };
    Object.defineProperty(DivEvent.prototype, "x", {
        get: function () {
            return this.div.x;
        },
        enumerable: true,
        configurable: true
    });
    return DivEvent;
}());
var EnumDockPosition;
(function (EnumDockPosition) {
    EnumDockPosition[EnumDockPosition["top"] = 1] = "top";
    EnumDockPosition[EnumDockPosition["bot"] = 2] = "bot";
    EnumDockPosition[EnumDockPosition["left"] = 3] = "left";
    EnumDockPosition[EnumDockPosition["right"] = 4] = "right";
})(EnumDockPosition || (EnumDockPosition = {}));
var DockPanel = /** @class */ (function () {
    function DockPanel(option) {
        var mythis = this;
        mythis.div = new Div({ class: "DockPanelMaster", id: option.id });
        if (option.class != null)
            mythis.div.addClass(option.class);
    }
    DockPanel.prototype.ajouter = function (Element, Position, Class) {
        var mythis = this;
        var Divlast = new Div({ class: "DockPanel" });
        switch (Position) {
            case EnumDockPosition.bot:
                Divlast.addClass("Position_bot");
                break;
            case EnumDockPosition.left:
                Divlast.addClass("Position_left");
                break;
            case EnumDockPosition.right:
                Divlast.addClass("Position_right");
                break;
            case EnumDockPosition.top:
                Divlast.addClass("Position_top");
                break;
        }
        var div = new Div({ class: "DockPanelItem" });
        div.Ajouter(Element);
        Divlast.Ajouter(div);
        if (Class != null) {
            div.addClass("DPI_" + Class);
            Divlast.addClass(Class);
        }
        if (mythis.LastDiv == null)
            mythis.div.Ajouter(Divlast);
        else
            mythis.LastDiv.Ajouter(Divlast);
        mythis.LastDiv = Divlast;
    };
    Object.defineProperty(DockPanel.prototype, "x", {
        get: function () {
            return this.div.x;
        },
        enumerable: true,
        configurable: true
    });
    return DockPanel;
}());
var EnumStyleHighLightCode;
(function (EnumStyleHighLightCode) {
    EnumStyleHighLightCode["A11yDark"] = "a11y-dark";
    EnumStyleHighLightCode["AtomOneDark"] = "Atom-One-Dark";
    EnumStyleHighLightCode["Darcula"] = "darcula";
    EnumStyleHighLightCode["GruvboxDark"] = "gruvbox-dark";
    EnumStyleHighLightCode["VimHybrid"] = "vim-hybrid";
    EnumStyleHighLightCode["Lightfair"] = "lightfair";
    EnumStyleHighLightCode["MonokaiSublime"] = "Monokai-Sublime";
    EnumStyleHighLightCode["Railscasts"] = "railscasts";
    EnumStyleHighLightCode["TomorrowNight"] = "Tomorrow-Night";
    EnumStyleHighLightCode["TomorrowNightEighties"] = "Tomorrow-Night-Eighties";
    EnumStyleHighLightCode["visualStudio2015dark"] = "visualStudio2015dark";
})(EnumStyleHighLightCode || (EnumStyleHighLightCode = {}));
var EnumLangageHighLightCode;
(function (EnumLangageHighLightCode) {
    EnumLangageHighLightCode["TypeScript"] = "typescript";
    EnumLangageHighLightCode["Csharp"] = "cs";
    EnumLangageHighLightCode["Json"] = "json";
    EnumLangageHighLightCode["Css"] = "css";
    EnumLangageHighLightCode["Xml"] = "xml";
    EnumLangageHighLightCode["MarkDown"] = "markdown";
    EnumLangageHighLightCode["Java"] = "java";
    EnumLangageHighLightCode["JavaScript"] = "javascript";
    EnumLangageHighLightCode["Python"] = "python";
    EnumLangageHighLightCode["Sql"] = "sql";
    EnumLangageHighLightCode["Php"] = "php";
})(EnumLangageHighLightCode || (EnumLangageHighLightCode = {}));
var HighLight_Code = /** @class */ (function () {
    function HighLight_Code(option) {
        var mythis = this;
        option.text = option.text.replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;");
        mythis.Highblock = new Pre({ class: "HighLight_Code " + option.style.valueOf() });
        var code = new Code({ class: option.Langage.valueOf(), text: option.text });
        hljs.highlightBlock(code.x[0]);
        mythis.Highblock.Ajouter(code);
    }
    Object.defineProperty(HighLight_Code.prototype, "x", {
        get: function () {
            return this.Highblock.x;
        },
        enumerable: true,
        configurable: true
    });
    return HighLight_Code;
}());
var EnumTypeCadreImage;
(function (EnumTypeCadreImage) {
    EnumTypeCadreImage["Sans"] = "sans";
    EnumTypeCadreImage["Round"] = "Round";
    EnumTypeCadreImage["Standard"] = "Standard";
    EnumTypeCadreImage["StandardRound"] = "StandardRound";
})(EnumTypeCadreImage || (EnumTypeCadreImage = {}));
var DivImage = /** @class */ (function () {
    function DivImage(option) {
        var mythis = this;
        var classe = "Image_contener ";
        classe += "Cadre_" + (option.typeCadre != null ? option.typeCadre.toString() : EnumTypeCadreImage.Sans) + " ";
        classe += "Image_" + option.Image;
        mythis.div = new Div({ class: classe, id: option.id });
        mythis.div.Ajouter(new Span({ Icone: "Image_" + option.Image }));
        if (option.class != null)
            mythis.div.addClass(option.class);
    }
    Object.defineProperty(DivImage.prototype, "x", {
        get: function () {
            return this.div.x;
        },
        enumerable: true,
        configurable: true
    });
    return DivImage;
}());
var EnumDecoLabel;
(function (EnumDecoLabel) {
    EnumDecoLabel["Aucune"] = "";
    EnumDecoLabel["Souligner"] = "Souligner";
})(EnumDecoLabel || (EnumDecoLabel = {}));
var EnumTypeLabel;
(function (EnumTypeLabel) {
    EnumTypeLabel["Standard"] = "Standard";
    EnumTypeLabel["BigText"] = "GrosText";
    EnumTypeLabel["Titre"] = "Titre";
})(EnumTypeLabel || (EnumTypeLabel = {}));
var Label = /** @class */ (function () {
    function Label(option) {
        var mythis = this;
        var classe = "LabelContener ";
        if (option.type != undefined)
            classe += "Label_" + option.type.toString() + " ";
        else
            classe += EnumTypeLabel.Standard.toString() + " ";
        if (option.Decoration != undefined)
            classe += option.Decoration.toString();
        else
            classe += EnumDecoLabel.Aucune.toString();
        mythis.leLabel = new Div({ class: classe, id: option.id, title: option.title });
        mythis.letext = new Span({ text: option.text });
        mythis.leLabel.Ajouter(mythis.letext);
        if (option.class != null)
            mythis.leLabel.addClass(option.class);
    }
    Object.defineProperty(Label.prototype, "x", {
        get: function () {
            var mythis = this;
            return mythis.leLabel.x;
        },
        enumerable: true,
        configurable: true
    });
    return Label;
}());
var Page = /** @class */ (function () {
    function Page(option) {
        var mythis = this;
        mythis.header = new Div({ class: "PageHeader" });
        mythis.containte = new Div({ class: "PageContainte" });
        mythis.page = new Div({ class: "Page", id: option.id });
        mythis.page.Ajouter(mythis.header);
        mythis.page.Ajouter(mythis.containte);
        if (option.class != undefined)
            mythis.addClass(option.class);
        if (option.initHeader != undefined)
            mythis.header.Ajouter(option.initHeader);
        if (option.initContaine != undefined)
            mythis.containte.Ajouter(option.initContaine);
        if (option.HeaderFix == undefined)
            option.HeaderFix = false;
        if (!option.HeaderFix)
            mythis.animation();
        else
            mythis.addClass("fixHeader");
    }
    Page.prototype.animation = function () {
        var mythis = this;
        mythis.header.x.hide();
        MyEvent.ScrollEvent(function (position) {
            if (position >= 1)
                mythis.header.x.slideDown(200);
            else if (position <= 0)
                mythis.header.x.slideUp(200);
        });
    };
    Page.prototype.addClass = function (lesClass) {
        var mythis = this;
        mythis.page.addClass(lesClass);
    };
    Page.prototype.Ajouteheader = function (unElement) {
        var mythis = this;
        mythis.header.Ajouter(unElement);
    };
    Page.prototype.AjouteContainte = function (unElement) {
        var mythis = this;
        mythis.containte.Ajouter(unElement);
    };
    Object.defineProperty(Page.prototype, "x", {
        get: function () {
            return this.page.x;
        },
        enumerable: true,
        configurable: true
    });
    return Page;
}());
var Viewpdf = /** @class */ (function () {
    function Viewpdf(option) {
        var mythis = this;
        mythis.view = new Objectview({ data: "static/" + option.filepath, type: "application/pdf", class: "Viewpdf", id: option.id });
        if (option.class != null)
            mythis.view.addClass(option.class);
    }
    Viewpdf.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.view.addClass(uneclass);
    };
    Object.defineProperty(Viewpdf.prototype, "x", {
        get: function () {
            return this.view.x;
        },
        enumerable: true,
        configurable: true
    });
    return Viewpdf;
}());
var Warppanel = /** @class */ (function () {
    function Warppanel(option) {
        var mythis = this;
        mythis.Warp = new Div({ class: "WarpPanelMaster ", id: option.id });
        if (option.class != null) {
            mythis.laClass = option.class;
            mythis.addClass(option.class);
        }
        if (option.init != undefined && option.init.length > 0)
            option.init.forEach(function (elem) {
                mythis.ajouter(elem);
            });
    }
    Warppanel.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.Warp.addClass(uneclass);
    };
    Warppanel.prototype.Empty = function () {
        var mythis = this;
        mythis.Warp.Empty();
    };
    Warppanel.prototype.ajouter = function (element) {
        var mythis = this;
        var item = new Div({ class: "WarpPanelItem " + (mythis.laClass != null ? "WPI_" + mythis.laClass : "") });
        item.Ajouter(element);
        mythis.Warp.Ajouter(item);
    };
    Object.defineProperty(Warppanel.prototype, "x", {
        get: function () {
            return this.Warp.x;
        },
        enumerable: true,
        configurable: true
    });
    return Warppanel;
}());
var Boxer = /** @class */ (function () {
    function Boxer(option) {
        var mythis = this;
        mythis.option = option;
        var Dock = new DockPanel({});
        mythis.Contenu = new Div({ class: "BoxerContenu" });
        Dock.ajouter(mythis.Contenu, EnumDockPosition.bot);
        Dock.ajouter(new Bouton({
            click: function (e) {
                e();
                mythis.Fermer();
            },
            texte: "Fermer",
            title: "Fermer",
        }), EnumDockPosition.right);
        mythis.divBoxer = new DivEvent({
            MouseHover: function () {
                mythis.isHover = true;
            },
            MouseOut: function () {
                mythis.isHover = false;
            },
            Init: Dock,
            class: "BoxerConteneur"
        });
        mythis.div = new DivEvent({
            MouseClick: function () {
                if (!mythis.isHover)
                    mythis.Fermer();
            },
            Init: mythis.divBoxer,
            class: "Boxer",
            id: option.id
        });
        if (option.class != null)
            mythis.div.addclass(option.class);
        mythis.div.x.hide();
        $("body").append(mythis.div.x);
    }
    Boxer.prototype.Afficher = function () {
        var mythis = this;
        if (mythis.option.BeforeOpen != null)
            mythis.option.BeforeOpen(mythis);
        $("body").css("overflow", "hidden");
        mythis.div.x.fadeIn(500);
    };
    Boxer.prototype.Fermer = function () {
        var mythis = this;
        mythis.div.x.fadeOut(500, function () {
            if (mythis.option.AfterClose != null)
                mythis.option.AfterClose(mythis);
            $("body").css("overflow", "");
        });
    };
    Boxer.prototype.Ajouter = function (unElement) {
        var mythis = this;
        mythis.Contenu.Ajouter(unElement);
    };
    Boxer.prototype.Empty = function () {
        var mythis = this;
        mythis.Contenu.Empty();
    };
    return Boxer;
}());
var Stackpanel = /** @class */ (function () {
    function Stackpanel(option) {
        var mythis = this;
        mythis.Stack = new Div({ class: "StackPanelMaster ", id: option.id });
        if (option.class != null) {
            mythis.laClass = option.class;
            mythis.addClass(option.class);
        }
        if (option.init != undefined && option.init.length > 0)
            option.init.forEach(function (elem) {
                mythis.ajouter(elem);
            });
    }
    Stackpanel.prototype.addClass = function (uneclass) {
        var mythis = this;
        mythis.Stack.addClass(uneclass);
    };
    Stackpanel.prototype.Empty = function () {
        var mythis = this;
        mythis.Empty();
    };
    Stackpanel.prototype.ajouter = function (element) {
        var mythis = this;
        var item = new Div({ class: "StackPanelItem " + (mythis.laClass != null ? "SPI_" + mythis.laClass : "") });
        item.Ajouter(element);
        mythis.Stack.Ajouter(item);
    };
    Object.defineProperty(Stackpanel.prototype, "x", {
        get: function () {
            return this.Stack.x;
        },
        enumerable: true,
        configurable: true
    });
    return Stackpanel;
}());
var EnumColorCompetenceView;
(function (EnumColorCompetenceView) {
    EnumColorCompetenceView["Violet"] = "Violet";
    EnumColorCompetenceView["Rouge"] = "Rouge";
    EnumColorCompetenceView["Bleu"] = "Bleu";
    EnumColorCompetenceView["Bleu_Foncer"] = "Bleu_Foncer";
    EnumColorCompetenceView["Bleu_Claire"] = "Bleu_Claire";
    EnumColorCompetenceView["Cyan"] = "Cyan";
    EnumColorCompetenceView["Orange"] = "Orange";
    EnumColorCompetenceView["Jaune"] = "Jaune";
    EnumColorCompetenceView["Gris"] = "Gris";
})(EnumColorCompetenceView || (EnumColorCompetenceView = {}));
var CompetenceView = /** @class */ (function () {
    function CompetenceView(option) {
        var mythis = this;
        mythis.warp = new Warppanel({ class: "CompetenceView", id: option.id });
        if (option.class != null)
            mythis.warp.addClass(option.class);
        if (option.init != null)
            option.init.forEach(function (element) {
                mythis.ajouter(element);
            });
    }
    CompetenceView.prototype.GenerateBarre = function (option) {
        var mythis = this;
        var backbarre = new Div({ class: "BarreCompBack" });
        backbarre.addClass("BarreCompColor_" + option.color.toString());
        var Titre = new Label({ text: option.Titre, type: EnumTypeLabel.Titre });
        var forwardbarre = new Div({ class: "BarreComp" });
        forwardbarre.Ajouter(Titre);
        forwardbarre.x.width((option.Pourcentage * 500) / 100);
        backbarre.Ajouter(forwardbarre);
        return backbarre;
    };
    CompetenceView.prototype.ajouter = function (option) {
        var mythis = this;
        var dock = new DockPanel({});
        dock.ajouter(new DivImage({ typeCadre: EnumTypeCadreImage.Sans, Image: option.Icone }), EnumDockPosition.left);
        dock.ajouter(new Label({ text: option.Pourcentage + "%", type: EnumTypeLabel.Titre, class: "Pourcentage" }), EnumDockPosition.right);
        dock.ajouter(mythis.GenerateBarre(option), EnumDockPosition.right);
        mythis.warp.ajouter(dock);
    };
    Object.defineProperty(CompetenceView.prototype, "x", {
        get: function () {
            return this.warp.x;
        },
        enumerable: true,
        configurable: true
    });
    return CompetenceView;
}());
var EnumTypeExperience;
(function (EnumTypeExperience) {
    EnumTypeExperience["Etude"] = "Etude";
    EnumTypeExperience["Travail"] = "Travail";
})(EnumTypeExperience || (EnumTypeExperience = {}));
var ExperienceView = /** @class */ (function () {
    function ExperienceView(option) {
        var mythis = this;
        mythis.SensDinsertion = false;
        mythis.stack = new Stackpanel({ class: "ExpetienceView", id: option.id });
        if (option.class)
            mythis.stack.addClass(option.class);
        if (option.init)
            option.init.forEach(function (Item) {
                mythis.AjouteItem(Item);
            });
    }
    ExperienceView.prototype.AjouteItem = function (ItemExperience) {
        var mythis = this;
        var image;
        if (ItemExperience.type == EnumTypeExperience.Etude)
            image = new DivImage({ Image: EnumTypeExperience.Etude.toString(), typeCadre: EnumTypeCadreImage.Standard });
        else
            image = new DivImage({ Image: EnumTypeExperience.Travail.toString(), typeCadre: EnumTypeCadreImage.Standard });
        var text = new DivConteneur({
            Titre: ItemExperience.Titre,
            ini: new Label({ text: ItemExperience.Text, class: "TextExperiance" })
        });
        var Dock = new DockPanel({ class: ItemExperience.class });
        Dock.ajouter(image, (mythis.SensDinsertion ? EnumDockPosition.right : EnumDockPosition.left));
        Dock.ajouter(text, (mythis.SensDinsertion ? EnumDockPosition.right : EnumDockPosition.left), "text");
        if (mythis.SensDinsertion)
            mythis.SensDinsertion = false;
        else
            mythis.SensDinsertion = true;
        mythis.stack.ajouter(Dock);
    };
    Object.defineProperty(ExperienceView.prototype, "x", {
        get: function () {
            return this.stack.x;
        },
        enumerable: true,
        configurable: true
    });
    return ExperienceView;
}());
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
                    location.href = "/" + miniItem.Link;
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
//# sourceMappingURL=app.js.map