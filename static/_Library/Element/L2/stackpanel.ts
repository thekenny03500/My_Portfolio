interface optionStackpanel extends option{
    init? : ElementX[];
}

class Stackpanel implements ElementX{

    private Stack : Div;
    private laClass:string;

    constructor(option:optionStackpanel)
    {
        let mythis : Stackpanel = this;
        mythis.Stack = new Div({class:"StackPanelMaster ", id:option.id});
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
        let mythis : Stackpanel = this;
        mythis.Stack.addClass(uneclass);
    }

    public Empty()
    {
        let mythis : Stackpanel =this;
        mythis.Empty();
    }

    public ajouter(element:ElementX)
    {
        let mythis:Stackpanel=this;
        let item:Div = new Div({class:"StackPanelItem "+(mythis.laClass != null? "SPI_"+mythis.laClass: "")});
        item.Ajouter(element);
        mythis.Stack.Ajouter(item);
    }

    get x():JQuery
    {
        return this.Stack.x;
    }
}