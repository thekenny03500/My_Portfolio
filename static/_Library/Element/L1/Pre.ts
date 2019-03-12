interface optionPre extends option{
}

class Pre implements ElementX{

    private Pre: JQuery;

    constructor(option: optionPre) {
        let mythis: Pre = this;
        let html :string = "<Pre "+(option.id != null? "id='"+option.id+"'":"")+"></Pre>";

        mythis.Pre = $(html);

        if(option.class != null)
            mythis.Pre.addClass(option.class);
    }

    public Ajouter(Element:ElementX)
    {
        let mythis: Pre = this;
        mythis.Pre.append(Element.x);
    }

    public Empty():void
    {
        let mythis: Pre = this;
        mythis.Pre.empty();
    }

    public addClass(uneclass:string)
    {
        let mythis: Pre=this;
        mythis.Pre.addClass(uneclass);
    }

    get x():JQuery
    {
        return this.Pre;
    }
}