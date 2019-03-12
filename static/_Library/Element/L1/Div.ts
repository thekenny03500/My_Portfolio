interface optionDiv extends option{
    title?: string
}

class Div implements ElementX{

    private div: JQuery;

    constructor(option: optionDiv) {
        let mythis: Div = this;
        let html :string = "<div "+(option.title != null? "Title=\""+option.title+"\"":"")+
                            (option.id != null? "id='"+option.id+"'":"")+"></div>";

        mythis.div = $(html);

        if(option.class != null)
            mythis.div.addClass(option.class);
    }

    public Ajouter(Element:ElementX)
    {
        let mythis: Div = this;
        mythis.div.append(Element.x);
    }

    public Empty():void
    {
        let mythis: Div = this;
        mythis.div.empty();
    }

    public addClass(uneclass:string)
    {
        let mythis: Div=this;
        mythis.div.addClass(uneclass);
    }

    get x():JQuery
    {
        return this.div;
    }
}
