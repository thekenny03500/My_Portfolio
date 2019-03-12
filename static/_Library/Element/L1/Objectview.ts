interface optionObject extends option{
    data: string,
    type: string
}

class Objectview implements ElementX{

    private div: JQuery;

    constructor(option: optionObject) {
        let mythis: Objectview = this;
        let html :string = "<object data='"+option.data+"' type='"+option.type+"' "+(option.id != null? "id='"+option.id+"'":"")+"></object>"

        mythis.div = $(html);

        if(option.class != null)
            mythis.div.addClass(option.class);
    }

    public addClass(uneclass:string)
    {
        let mythis: Objectview = this;
        mythis.div.addClass(uneclass);
    }

    get x():JQuery
    {
        return this.div;
    }
}