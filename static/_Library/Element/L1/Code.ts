interface optionCode extends option{
    text:string;
}

class Code implements ElementX{

    private Code: JQuery;

    constructor(option: optionCode) {
        let mythis: Code = this;
        let html :string = "<Code "+(option.id != null? "id='"+option.id+"'":"")+"></Code>"

        mythis.Code = $(html);

        if(option.class != null)
            mythis.Code.addClass(option.class);

        if(option.text != null)
            mythis.Code.append(option.text);
    }

    public Ajouter(Element:ElementX)
    {
        let mythis: Code = this;
        mythis.Code.append(Element.x);
    }

    public Empty():void
    {
        let mythis: Code = this;
        mythis.Code.empty();
    }

    public addClass(uneclass:string)
    {
        let mythis: Code=this;
        mythis.Code.addClass(uneclass);
    }

    get x():JQuery
    {
        return this.Code;
    }
}