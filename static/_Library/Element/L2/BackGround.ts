interface optionsBackGround extends option{
    image:string
}

class BackGround implements ElementX{
    private div : Div;

    constructor(option:optionsBackGround)
    {
        let mythis : BackGround = this;

        mythis.div = new Div({class:"Background Background_"+option.image,id:option.id});

        if(option.class != null)
            mythis.div.addClass(option.class);
    }

    public Ajoute(Element:ElementX)
    {
        let mythis : BackGround = this;
        mythis.div.Ajouter(Element);
    }

    get x():JQuery
    {
        return this.div.x;
    }
}