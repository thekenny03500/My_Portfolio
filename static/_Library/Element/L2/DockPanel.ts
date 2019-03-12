interface optionDockPanel extends option{

}

enum EnumDockPosition
{
    top=1,
    bot=2,
    left=3,
    right=4
}

class DockPanel implements ElementX{

    private div:Div;
    private LastDiv:Div;

    constructor(option: optionDockPanel)
    {
        let mythis:DockPanel = this;

        mythis.div = new Div({class:"DockPanelMaster",id:option.id});

        if(option.class != null)
            mythis.div.addClass(option.class);
    }

    public ajouter(Element:ElementX,Position:EnumDockPosition,Class?:string)
    {
        let mythis:DockPanel = this;
        let Divlast = new Div({class:"DockPanel"});

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

        let div = new Div({class:"DockPanelItem"});
        div.Ajouter(Element);
        Divlast.Ajouter(div);

        if(Class != null)
        {
            div.addClass("DPI_"+Class)
            Divlast.addClass(Class);
        }

        if(mythis.LastDiv == null)
            mythis.div.Ajouter(Divlast);
        else
            mythis.LastDiv.Ajouter(Divlast);
        mythis.LastDiv = Divlast;
    }

    get x():JQuery
    {
        return this.div.x;
    }
}