interface optionViewpdf extends option{
    filepath:string
}

class Viewpdf  implements ElementX{

    private view : Objectview;

    constructor(option:optionViewpdf)
    {
        let mythis : Viewpdf  = this;
        mythis.view = new Objectview({data:"static/"+option.filepath,type:"application/pdf",class:"Viewpdf",id:option.id});

        if(option.class != null)
            mythis.view.addClass(option.class);
    }

    public addClass(uneclass:string)
    {
        let mythis : Viewpdf  = this;
        mythis.view.addClass(uneclass);
    }

    get x():JQuery
    {
       return this.view.x;
    }
}