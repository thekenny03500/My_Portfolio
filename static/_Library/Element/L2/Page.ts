interface optionPage extends option{
    initHeader?:ElementX,
    initContaine?:ElementX,
    HeaderFix?:boolean
}

class Page implements ElementX
{
    private page : Div;
    private header: Div;
    private containte: Div;
    constructor(option:optionPage)
    {
        let mythis : Page = this;

        mythis.header = new Div({class:"PageHeader"});

        mythis.containte = new Div({class:"PageContainte"})

        mythis.page = new Div({class:"Page",id:option.id});
        mythis.page.Ajouter(mythis.header);
        mythis.page.Ajouter(mythis.containte);

        if(option.class != undefined)
            mythis.addClass(option.class);

        if(option.initHeader != undefined)
            mythis.header.Ajouter(option.initHeader);

        if(option.initContaine != undefined)
            mythis.containte.Ajouter(option.initContaine);

        if(option.HeaderFix == undefined)
            option.HeaderFix = false;

        if(!option.HeaderFix)
            mythis.animation();
        else
            mythis.addClass("fixHeader")
    }

    private animation()
    {
        let mythis : Page = this;
        mythis.header.x.hide();

        MyEvent.ScrollEvent(function (position:number) {
            if(position>=1)
                mythis.header.x.slideDown(200);
            else if(position <= 0)
                mythis.header.x.slideUp(200);
        })
    }

    public addClass(lesClass:string)
    {
        let mythis: Page = this;
        mythis.page.addClass(lesClass);
    }

    public Ajouteheader(unElement:ElementX)
    {
        let mythis : Page = this;
        mythis.header.Ajouter(unElement);
    }

    public AjouteContainte(unElement:ElementX)
    {
        let mythis : Page = this;
        mythis.containte.Ajouter(unElement);
    }

    get x():JQuery {
       return this.page.x;
    }
}