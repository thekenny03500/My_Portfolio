interface optionBando extends option{
    Text:string
}

class Bando implements ElementX{

    private div:Div;

    constructor(option:optionBando)
    {
        let mythis : Bando = this;

        mythis.div = new Div({class:"Bando",id:option.id});

        if (option.class != null)
            mythis.div.addClass(option.class);

        mythis.div.Ajouter(new Label({class:"BandoLabel",type:EnumTypeLabel.Titre,text:option.Text}));
    }

    get x()
    {
        return this.div.x;
    }
}