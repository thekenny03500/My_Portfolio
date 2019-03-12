interface optionDivConteneur extends option{
    Titre?:string;
    ini?:ElementX
}

class DivConteneur implements ElementX{

    private divConteneur:Div;
    private divContenu:Div;

    constructor(option: optionDivConteneur)
    {
        let mythis:DivConteneur = this;

        mythis.divConteneur = new Div({class:"DivConteneur",id:option.id});

        if(option.class != null)
            mythis.divConteneur.addClass(option.class);

        mythis.divContenu = new Div({class:"DivContenu"});

        if(option.ini != null)
            mythis.divContenu.Ajouter(option.ini);

        if(option.Titre != null)
            mythis.divConteneur.Ajouter(new Label({text:option.Titre,type:EnumTypeLabel.Titre,class:"Titre_divConteneur"}));

        mythis.divConteneur.Ajouter(mythis.divContenu);
    }

    public ajouter(Element:ElementX):DivConteneur
    {
        let mythis:DivConteneur = this;

        mythis.divContenu.Ajouter(Element);

        return mythis;
    }

    get x():JQuery
    {
        return this.divConteneur.x;
    }
}