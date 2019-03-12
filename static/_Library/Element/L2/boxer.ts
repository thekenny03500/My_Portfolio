interface optionBoxer extends option{
    BeforeOpen?:(ici:Boxer)=>void,
    AfterClose?:(ici:Boxer)=>void,
    Init?:ElementX
}

class Boxer{
    private div: DivEvent;
    private divBoxer:DivEvent;
    private Contenu:Div;
    private isHover:boolean;
    private option:optionBoxer;

    constructor(option : optionBoxer)
    {
        let mythis:Boxer = this;

        mythis.option = option;

        let Dock:DockPanel=new DockPanel({});

        mythis.Contenu = new Div({class:"BoxerContenu"});

        Dock.ajouter(mythis.Contenu,EnumDockPosition.bot);
        
        Dock.ajouter(new Bouton({
            click:function (e) {
                e();
                mythis.Fermer();
            },
            texte:"Fermer",
            title:"Fermer",
        }),EnumDockPosition.right);

        mythis.divBoxer = new DivEvent({
            MouseHover:function () {
                mythis.isHover = true;
            },
            MouseOut:function () {
                mythis.isHover = false;
            },
            Init: Dock,
            class:"BoxerConteneur"
        });

        mythis.div = new DivEvent({
            MouseClick: function () {
                if(!mythis.isHover)
                    mythis.Fermer();
            },
            Init: mythis.divBoxer,
            class:"Boxer",
            id:option.id
        });

        if(option.class != null)
            mythis.div.addclass(option.class)

        mythis.div.x.hide();
        $("body").append(mythis.div.x);
    }

    public Afficher():void
    {
        let mythis: Boxer = this;

        if(mythis.option.BeforeOpen != null)
            mythis.option.BeforeOpen(mythis);
        $("body").css("overflow","hidden");
        mythis.div.x.fadeIn(500);
    }

    public Fermer():void
    {
        let mythis : Boxer = this;

        mythis.div.x.fadeOut(500,function () {
            if(mythis.option.AfterClose != null)
                mythis.option.AfterClose(mythis);
            $("body").css("overflow","");
        });
    }

    public Ajouter(unElement:ElementX):void
    {
        let mythis :Boxer = this;
        mythis.Contenu.Ajouter(unElement);
    }

    public Empty():void
    {
        let mythis :Boxer = this;
        mythis.Contenu.Empty();
    }
}