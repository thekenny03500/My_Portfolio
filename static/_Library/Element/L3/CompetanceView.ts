interface optionCompetenceView extends option
{
    init?:optionCompetenceViewItem[]
}

interface optionCompetenceViewItem extends option
{
    Titre:string,
    Icone:string,
    Pourcentage:number,
    color:EnumColorCompetenceView
}

enum EnumColorCompetenceView{
    Violet="Violet",
    Rouge="Rouge",
    Bleu="Bleu",
    Bleu_Foncer="Bleu_Foncer",
    Bleu_Claire="Bleu_Claire",
    Cyan="Cyan",
    Orange="Orange",
    Jaune="Jaune",
    Gris="Gris"
}

class CompetenceView implements ElementX{

    private warp :Warppanel;

    constructor(option : optionCompetenceView)
    {
        let mythis : CompetenceView = this;
        mythis.warp = new Warppanel({class:"CompetenceView",id:option.id});
        if(option.class != null)
            mythis.warp.addClass(option.class);

        if(option.init != null)
            option.init.forEach(function (element:optionCompetenceViewItem) {
               mythis.ajouter(element);
            });
    }

    private GenerateBarre(option : optionCompetenceViewItem):ElementX
    {
        let mythis : CompetenceView = this;

        let backbarre : Div = new Div({class:"BarreCompBack"});
        backbarre.addClass("BarreCompColor_"+option.color.toString());
        let Titre : Label = new Label({text:option.Titre,type:EnumTypeLabel.Titre});
        let forwardbarre : Div = new Div({class:"BarreComp" });
        forwardbarre.Ajouter(Titre);
        forwardbarre.x.width((option.Pourcentage*500)/100);
        backbarre.Ajouter(forwardbarre);
        return backbarre;
    }

    public ajouter(option :optionCompetenceViewItem)
    {
        let mythis : CompetenceView = this;
        let dock : DockPanel = new DockPanel({});
        dock.ajouter(new DivImage({typeCadre:EnumTypeCadreImage.Sans,Image:option.Icone}),EnumDockPosition.left);
        dock.ajouter(new Label({text:option.Pourcentage+"%",type:EnumTypeLabel.Titre,class:"Pourcentage"}),EnumDockPosition.right);
        dock.ajouter(mythis.GenerateBarre(option),EnumDockPosition.right);
        mythis.warp.ajouter(dock);
    }

    get x():JQuery
    {
        return this.warp.x;
    }
}
