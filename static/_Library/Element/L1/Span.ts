interface optionSpan extends option{
    Icone?:string;
    text?:string;
}

class Span implements ElementX{
    private Span : JQuery;

    constructor(option:optionSpan){
        let mythis:Span = this;

        let html :string = "<span "+(option.id != null? "id='"+option.id+"'":"")+"></span>"

        mythis.Span = $(html);

        if(option.text)
            mythis.Span.append(option.text);

        if(option.class != null)
            mythis.Span.addClass(option.class);

        if(option.Icone != null)
            mythis.Span.addClass("Icone_"+option.Icone);
    }

    get x():JQuery{
        return this.Span;
    }
}