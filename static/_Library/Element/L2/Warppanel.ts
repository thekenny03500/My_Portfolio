interface optionWarppanel extends option{
    init? : ElementX[];
}

class Warppanel implements ElementX{

    private Warp : Div;
    private laClass:string;

    constructor(option:optionWarppanel)
    {
        let mythis : Warppanel = this;
        mythis.Warp = new Div({class:"WarpPanelMaster ", id:option.id});
        if(option.class != null) {
            mythis.laClass = option.class;
            mythis.addClass(option.class);
        }

        if(option.init != undefined && option.init.length >0)
            option.init.forEach((elem)=>{
                mythis.ajouter(elem);
            });
    }

    public addClass(uneclass:string)
    {
        let mythis : Warppanel = this;
        mythis.Warp.addClass(uneclass);
    }

    public Empty()
    {
        let mythis : Warppanel =this;
        mythis.Warp.Empty();
    }

    public ajouter(element:ElementX)
    {
        let mythis:Warppanel=this;
        let item:Div = new Div({class:"WarpPanelItem "+(mythis.laClass != null? "WPI_"+mythis.laClass: "")});
        item.Ajouter(element);
        mythis.Warp.Ajouter(item);
    }

    get x():JQuery
    {
        return this.Warp.x;
    }
}