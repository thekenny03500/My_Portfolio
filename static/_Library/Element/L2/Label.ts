interface optionLabel extends option{
    title?:string,
    text:string,
    type?:EnumTypeLabel,
    Decoration?: EnumDecoLabel
}

enum EnumDecoLabel{
    Aucune="",
    Souligner="Souligner",
}

enum EnumTypeLabel{
    Standard="Standard",
    BigText="GrosText",
    Titre="Titre"
}


class Label implements ElementX{

    private leLabel :Div;
    private letext:Span;

    constructor(option: optionLabel)
    {
        let mythis:Label = this;

        let classe :string = "LabelContener ";

        if(option.type != undefined)
            classe += "Label_"+option.type.toString()+" ";
        else
            classe += EnumTypeLabel.Standard.toString()+" ";

        if(option.Decoration != undefined)
            classe += option.Decoration.toString();
        else
            classe += EnumDecoLabel.Aucune.toString();

        mythis.leLabel = new Div({class:classe, id:option.id ,title:option.title});

        mythis.letext = new Span({text:option.text});

        mythis.leLabel.Ajouter(mythis.letext);

        if(option.class != null)
            mythis.leLabel.addClass(option.class)

    }

    get x():JQuery
    {
         let mythis:Label = this;
        return mythis.leLabel.x;
    }
}